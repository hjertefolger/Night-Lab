#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import shutil
import sys
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

ROOT = Path.home() / "Documents/Dev/52-night-lab-365"
PUBLIC_BUILDS = ROOT / "public/builds"
METADATA_PATH = ROOT / "src/lib/builds.ts"


def zip_dir(source: Path, destination_zip: Path) -> None:
    with ZipFile(destination_zip, "w", ZIP_DEFLATED) as zf:
        for path in source.rglob("*"):
            if path.is_file():
                zf.write(path, path.relative_to(source))


def infer_title(folder_name: str) -> str:
    raw = folder_name.split("-", 1)[1] if "-" in folder_name else folder_name
    return " ".join(part.capitalize() for part in raw.split("-"))


def ts_array_to_json(payload: str) -> str:
    payload = re.sub(r"(\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:", r'\1"\2":', payload)
    payload = payload.replace("'", '"')
    return payload


def load_or_init_metadata() -> list[dict]:
    if not METADATA_PATH.exists():
        return []
    text = METADATA_PATH.read_text()
    marker = "export const liveBuilds: BuildMeta[] = "
    start = text.index(marker) + len(marker)
    end = text.index(";\n\nexport const totalBuildSlots")
    payload = text[start:end]
    return json.loads(ts_array_to_json(payload))


def save_metadata(items: list[dict]) -> None:
    content = f'''export type BuildStatus = "live" | "iterated" | "candidate" | "future";

export interface BuildMeta {{
  id: string;
  number: number;
  title: string;
  date: string;
  tagline: string;
  summary: string;
  principles: string[];
  status: BuildStatus;
  fieldNotes: {{
    whyThisExists: string;
    whatChanged?: string[];
    artDirection?: string;
    nextMove?: string;
    promotionRead?: string;
  }};
}}

export const liveBuilds: BuildMeta[] = {json.dumps(items, indent=2)};

export const totalBuildSlots = 365;

export function getBuildById(id: string) {{
  return liveBuilds.find((build) => build.id === id);
}}

export function getAllBuildSlots() {{
  const liveMap = new Map(liveBuilds.map((build) => [build.number, build]));
  return Array.from({{ length: totalBuildSlots }}, (_, index) => {{
    const number = index + 1;
    const build = liveMap.get(number);
    return {{
      number,
      id: String(number).padStart(3, "0"),
      live: Boolean(build),
      status: build?.status ?? "future",
      title: build?.title ?? "Future build",
    }};
  }});
}}
'''
    METADATA_PATH.write_text(content)


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: publish-build.py <nightly-build-folder>")
        return 1

    source = Path(sys.argv[1]).expanduser().resolve()
    if not source.exists() or not source.is_dir():
        print(f"Build folder not found: {source}")
        return 1

    build_id = source.name.split("-", 1)[0]
    target_dir = PUBLIC_BUILDS / build_id
    if target_dir.exists():
        shutil.rmtree(target_dir)
    shutil.copytree(source, target_dir)

    zip_path = PUBLIC_BUILDS / f"{build_id}.zip"
    if zip_path.exists():
        zip_path.unlink()
    zip_dir(source, zip_path)

    ready_path = source / "PUBLISH_READY.json"
    ready = json.loads(ready_path.read_text()) if ready_path.exists() else {}

    items = load_or_init_metadata()
    number = int(build_id)
    new_item = {
        "id": build_id,
        "number": number,
        "title": ready.get("title") or infer_title(source.name),
        "date": ready.get("date") or "",
        "tagline": ready.get("tagline") or "",
        "summary": ready.get("summary") or "",
        "principles": ready.get("principles") or [],
        "status": ready.get("status") or "live",
        "fieldNotes": {
            "whyThisExists": ready.get("whyThisExists") or "",
            "whatChanged": ready.get("whatChanged") or [],
            "artDirection": ready.get("artDirection") or "",
            "nextMove": ready.get("nextMove") or "",
            "promotionRead": ready.get("promotionRead") or "",
        },
    }

    items = [item for item in items if item["id"] != build_id]
    items.append(new_item)
    items.sort(key=lambda item: item["number"])
    save_metadata(items)

    published = {
        "published": True,
        "buildId": build_id,
        "publicDir": str(target_dir),
        "zip": str(zip_path),
    }
    (source / "PUBLISHED.json").write_text(json.dumps(published, indent=2))
    print(f"Published {build_id} -> {target_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
