import { useState, useRef, useEffect, useCallback } from 'react'

/* ═══ Color Mathematics ═══════════════════════════════════════════════════ */

const srgbToLinear = c =>
  c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4

const linearToSrgb = c => {
  c = Math.max(0, Math.min(1, c))
  return c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055
}

function rgbToOklab([r, g, b]) {
  const lr = srgbToLinear(r), lg = srgbToLinear(g), lb = srgbToLinear(b)
  let l = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb
  let m = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb
  let s = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb
  l = Math.cbrt(l); m = Math.cbrt(m); s = Math.cbrt(s)
  return [
    0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s,
  ]
}

function oklabToRgb([L, a, b]) {
  let l = L + 0.3963377774 * a + 0.2158037573 * b
  let m = L - 0.1055613458 * a - 0.0638541728 * b
  let s = L - 0.0894841775 * a - 1.2914855480 * b
  l = l ** 3; m = m ** 3; s = s ** 3
  return [
    linearToSrgb(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
    linearToSrgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
    linearToSrgb(-0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s),
  ]
}

const toHex = ([r, g, b]) => {
  const h = v => Math.max(0, Math.min(255, Math.round(v * 255))).toString(16).padStart(2, '0')
  return `#${h(r)}${h(g)}${h(b)}`
}

const hexToRgb = hex => [
  parseInt(hex.slice(1, 3), 16) / 255,
  parseInt(hex.slice(3, 5), 16) / 255,
  parseInt(hex.slice(5, 7), 16) / 255,
]

/* ═══ Palettes ════════════════════════════════════════════════════════════ */

const PALETTES = [
  {
    name: 'Primary',
    pigments: [
      { name: 'Cadmium Yellow', color: [0.98, 0.82, 0.08] },
      { name: 'Cadmium Red', color: [0.84, 0.10, 0.08] },
      { name: 'Ultramarine', color: [0.12, 0.10, 0.58] },
    ],
  },
  {
    name: 'Zorn',
    pigments: [
      { name: 'Yellow Ochre', color: [0.80, 0.65, 0.20] },
      { name: 'Vermilion', color: [0.89, 0.26, 0.08] },
      { name: 'Ivory Black', color: [0.13, 0.13, 0.11] },
    ],
  },
  {
    name: 'Earth',
    pigments: [
      { name: 'Raw Sienna', color: [0.76, 0.56, 0.22] },
      { name: 'Burnt Umber', color: [0.40, 0.21, 0.09] },
      { name: 'Terre Verte', color: [0.32, 0.42, 0.30] },
    ],
  },
]

const WHITE = [0.97, 0.96, 0.94]

/* ═══ Triangle Geometry ═══════════════════════════════════════════════════ */

const RES = 600
const PAD = 50

const TRI = (() => {
  const side = RES - PAD * 2
  const h = side * Math.sqrt(3) / 2
  const top = (RES - h) / 2
  return {
    A: [RES / 2, top],
    B: [PAD, top + h],
    C: [RES - PAD, top + h],
  }
})()

function baryCoords(px, py) {
  const { A, B, C } = TRI
  const d = (B[1] - C[1]) * (A[0] - C[0]) + (C[0] - B[0]) * (A[1] - C[1])
  const u = ((B[1] - C[1]) * (px - C[0]) + (C[0] - B[0]) * (py - C[1])) / d
  const v = ((C[1] - A[1]) * (px - C[0]) + (A[0] - C[0]) * (py - C[1])) / d
  return [u, v, 1 - u - v]
}

function normWeights(u, v, w) {
  const a = Math.max(0, u), b = Math.max(0, v), c = Math.max(0, w)
  const s = a + b + c
  return s > 0 ? [a / s, b / s, c / s] : [1/3, 1/3, 1/3]
}

const isInside = (u, v, w) => u >= -0.002 && v >= -0.002 && w >= -0.002

function mixAt(weights, pigmentLabs, whiteLab, tint) {
  let L = pigmentLabs[0][0] * weights[0] + pigmentLabs[1][0] * weights[1] + pigmentLabs[2][0] * weights[2]
  let a = pigmentLabs[0][1] * weights[0] + pigmentLabs[1][1] * weights[1] + pigmentLabs[2][1] * weights[2]
  let b = pigmentLabs[0][2] * weights[0] + pigmentLabs[1][2] * weights[1] + pigmentLabs[2][2] * weights[2]
  if (tint > 0) {
    const t1 = 1 - tint
    L = L * t1 + whiteLab[0] * tint
    a = a * t1 + whiteLab[1] * tint
    b = b * t1 + whiteLab[2] * tint
  }
  return oklabToRgb([L, a, b])
}

/* ═══ App ═════════════════════════════════════════════════════════════════ */

export default function App() {
  const [palIdx, setPalIdx] = useState(0)
  const [tint, setTint] = useState(0)
  const [hover, setHover] = useState(null)
  const [pinned, setPinned] = useState(null)
  const [targetHex, setTargetHex] = useState('')
  const [nearest, setNearest] = useState(null)
  const canvasRef = useRef(null)

  const pal = PALETTES[palIdx]

  /* ── Render the gamut triangle ───────────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const img = ctx.createImageData(RES, RES)
    const px = img.data
    const labs = pal.pigments.map(p => rgbToOklab(p.color))
    const wLab = rgbToOklab(WHITE)

    for (let y = 0; y < RES; y++) {
      for (let x = 0; x < RES; x++) {
        const [u, v, w] = baryCoords(x, y)
        if (!isInside(u, v, w)) continue
        const weights = normWeights(u, v, w)
        const rgb = mixAt(weights, labs, wLab, tint)
        const i = (y * RES + x) * 4
        px[i]     = Math.round(rgb[0] * 255)
        px[i + 1] = Math.round(rgb[1] * 255)
        px[i + 2] = Math.round(rgb[2] * 255)
        px[i + 3] = 255
      }
    }

    ctx.clearRect(0, 0, RES, RES)
    ctx.putImageData(img, 0, 0)

    ctx.strokeStyle = 'rgba(0,0,0,0.08)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(TRI.A[0], TRI.A[1])
    ctx.lineTo(TRI.B[0], TRI.B[1])
    ctx.lineTo(TRI.C[0], TRI.C[1])
    ctx.closePath()
    ctx.stroke()
  }, [palIdx, tint])

  /* ── Resolve pointer to gamut point ──────────────────────────────────── */
  const resolve = useCallback((clientX, clientY) => {
    const canvas = canvasRef.current
    if (!canvas) return null
    const rect = canvas.getBoundingClientRect()
    const scale = RES / rect.width
    const cx = (clientX - rect.left) * scale
    const cy = (clientY - rect.top) * scale
    const [u, v, w] = baryCoords(cx, cy)
    if (!isInside(u, v, w)) return null
    const weights = normWeights(u, v, w)
    const labs = pal.pigments.map(p => rgbToOklab(p.color))
    const color = mixAt(weights, labs, rgbToOklab(WHITE), tint)
    return { weights, color, pct: [cx / RES * 100, cy / RES * 100] }
  }, [palIdx, tint])

  /* ── Find nearest match to target ────────────────────────────────────── */
  useEffect(() => {
    if (!targetHex || targetHex.length < 7) { setNearest(null); return }
    const target = hexToRgb(targetHex)
    const targetLab = rgbToOklab(target)
    const labs = pal.pigments.map(p => rgbToOklab(p.color))
    const wLab = rgbToOklab(WHITE)
    const N = 100
    let best = { dist: Infinity }

    for (let i = 0; i <= N; i++) {
      for (let j = 0; j <= N - i; j++) {
        const k = N - i - j
        const weights = [i / N, j / N, k / N]
        const rgb = mixAt(weights, labs, wLab, tint)
        const lab = rgbToOklab(rgb)
        const d = Math.sqrt(
          (lab[0] - targetLab[0]) ** 2 +
          (lab[1] - targetLab[1]) ** 2 +
          (lab[2] - targetLab[2]) ** 2
        )
        if (d < best.dist) {
          const px = (TRI.A[0] * weights[0] + TRI.B[0] * weights[1] + TRI.C[0] * weights[2]) / RES * 100
          const py = (TRI.A[1] * weights[0] + TRI.B[1] * weights[1] + TRI.C[1] * weights[2]) / RES * 100
          best = { dist: d, weights, color: rgb, pct: [px, py] }
        }
      }
    }
    setNearest(best.dist < Infinity ? best : null)
  }, [targetHex, palIdx, tint])

  const active = pinned || hover

  /* ── Vertex label positions (%) ──────────────────────────────────────── */
  const vPos = {
    A: [TRI.A[0] / RES * 100, TRI.A[1] / RES * 100],
    B: [TRI.B[0] / RES * 100, TRI.B[1] / RES * 100],
    C: [TRI.C[0] / RES * 100, TRI.C[1] / RES * 100],
  }

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1a1a] antialiased">
      {/* Header */}
      <header className="flex items-baseline justify-between px-6 pt-5 pb-1">
        <h1 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#bbb]">
          mix space
        </h1>
        <span className="font-mono text-[11px] text-[#ddd]">017</span>
      </header>

      <main className="max-w-[1040px] mx-auto px-6 pb-16 pt-4">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* ── Triangle ── */}
          <div className="flex-1 w-full max-w-[540px]">
            <div className="relative w-full" style={{ aspectRatio: '1' }}>
              <canvas
                ref={canvasRef}
                width={RES}
                height={RES}
                className="absolute inset-0 w-full h-full cursor-crosshair"
                style={{ imageRendering: 'auto' }}
                onMouseMove={e => setHover(resolve(e.clientX, e.clientY))}
                onMouseLeave={() => setHover(null)}
                onClick={e => { const p = resolve(e.clientX, e.clientY); if (p) setPinned(p) }}
                onTouchMove={e => { e.preventDefault(); const t = e.touches[0]; setHover(resolve(t.clientX, t.clientY)) }}
                onTouchEnd={() => setHover(null)}
              />

              {/* Vertex labels */}
              <VertexLabel
                pos={vPos.A} pigment={pal.pigments[0]}
                style={{ transform: 'translate(-50%, calc(-100% - 10px))' }}
              />
              <VertexLabel
                pos={vPos.B} pigment={pal.pigments[1]}
                style={{ transform: 'translate(-10px, 12px)' }}
              />
              <VertexLabel
                pos={vPos.C} pigment={pal.pigments[2]} reverse
                style={{ transform: 'translate(calc(-100% + 10px), 12px)' }}
              />

              {/* Hover dot */}
              {hover && (
                <Indicator
                  pct={hover.pct} color={hover.color}
                  className="border-white/90 shadow-md"
                  size={18}
                />
              )}

              {/* Pinned dot */}
              {pinned && (
                <Indicator
                  pct={pinned.pct} color={pinned.color}
                  className="border-[#1a1a1a] shadow-lg"
                  size={22}
                />
              )}

              {/* Nearest-to-target marker */}
              {nearest && (
                <div
                  className="absolute pointer-events-none rounded-full"
                  style={{
                    left: `${nearest.pct[0]}%`, top: `${nearest.pct[1]}%`,
                    width: 20, height: 20,
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: toHex(nearest.color),
                    border: '2px dashed #c44',
                    boxShadow: '0 0 0 3px rgba(204,68,68,0.12)',
                  }}
                />
              )}
            </div>

            {/* Controls */}
            <div className="mt-5 space-y-3">
              <div className="flex gap-2">
                {PALETTES.map((p, i) => (
                  <button
                    key={p.name}
                    onClick={() => { setPalIdx(i); setPinned(null) }}
                    className={`font-mono text-[11px] px-3 py-1.5 rounded-sm border transition-colors ${
                      i === palIdx
                        ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                        : 'text-[#999] border-[#ddd] hover:border-[#aaa]'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-[#bbb] uppercase tracking-wider w-10">
                  White
                </span>
                <input
                  type="range" min={0} max={80}
                  value={Math.round(tint * 100)}
                  onChange={e => setTint(+e.target.value / 100)}
                  className="flex-1 accent-[#1a1a1a]"
                />
                <span className="font-mono text-[11px] text-[#aaa] w-9 text-right">
                  {Math.round(tint * 100)}%
                </span>
              </div>
            </div>
          </div>

          {/* ── Readout ── */}
          <aside className="w-full lg:w-[250px] lg:sticky lg:top-8 lg:pt-2">
            {active ? (
              <div className="space-y-5">
                {/* Result swatch */}
                <div
                  className="w-full h-20 rounded-sm"
                  style={{
                    backgroundColor: toHex(active.color),
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)',
                  }}
                />
                <span className="font-mono text-[11px] text-[#ccc] block -mt-3">
                  {toHex(active.color)}
                </span>

                {/* Recipe */}
                <div>
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#bbb] mb-2.5">
                    Recipe
                  </div>
                  <div className="space-y-2">
                    {pal.pigments.map((p, i) => {
                      const pct = Math.round(active.weights[i] * 100)
                      return (
                        <div key={p.name} className="flex items-center gap-2">
                          <div
                            className="w-2.5 h-2.5 rounded-full shrink-0"
                            style={{ backgroundColor: toHex(p.color) }}
                          />
                          <span className="text-[12px] flex-1 text-[#666]">{p.name}</span>
                          <div className="w-14 h-1 bg-[#eee] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-75"
                              style={{ width: `${pct}%`, backgroundColor: toHex(p.color) }}
                            />
                          </div>
                          <span className="font-mono text-[11px] text-[#aaa] w-7 text-right">
                            {pct}%
                          </span>
                        </div>
                      )
                    })}
                    {tint > 0 && (
                      <div className="flex items-center gap-2 pt-1.5 border-t border-[#f0f0f0]">
                        <div className="w-2.5 h-2.5 rounded-full shrink-0 border border-[#ddd] bg-[#f8f7f5]" />
                        <span className="text-[12px] flex-1 text-[#666]">Titanium White</span>
                        <span className="font-mono text-[11px] text-[#aaa]">
                          +{Math.round(tint * 100)}%
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-[13px] text-[#ccc] leading-relaxed pt-1">
                Hover the triangle to explore what your palette can reach.
                Click to pin a point and read the mixing recipe.
              </p>
            )}

            {/* ── Target matcher ── */}
            <div className="mt-8 pt-6 border-t border-[#eee]">
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#bbb] mb-3">
                Match a color
              </div>
              <div className="flex items-center gap-2">
                <label className="relative w-8 h-8 rounded-sm border border-[#ddd] overflow-hidden cursor-pointer shrink-0">
                  <input
                    type="color"
                    value={targetHex || '#888888'}
                    onChange={e => setTargetHex(e.target.value)}
                    className="absolute inset-0 w-[200%] h-[200%] cursor-pointer opacity-0 -left-1/2 -top-1/2"
                  />
                  <div className="w-full h-full" style={{ backgroundColor: targetHex || '#eee' }} />
                </label>
                <input
                  type="text"
                  value={targetHex}
                  onChange={e => {
                    const v = e.target.value
                    if (v === '' || /^#[0-9a-fA-F]{0,6}$/.test(v)) setTargetHex(v)
                  }}
                  placeholder="#a0522d"
                  className="font-mono text-[12px] px-2 py-1.5 border border-[#ddd] rounded-sm w-[88px] bg-transparent outline-none focus:border-[#aaa] transition-colors"
                />
                {targetHex && (
                  <button
                    onClick={() => setTargetHex('')}
                    className="font-mono text-[10px] text-[#ccc] hover:text-[#999] transition-colors"
                  >
                    clear
                  </button>
                )}
              </div>

              {nearest && (
                <div className="mt-4 space-y-3">
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <div
                        className="w-full h-12 rounded-sm"
                        style={{ backgroundColor: targetHex, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)' }}
                      />
                      <span className="font-mono text-[9px] text-[#ccc] mt-1 block text-center">target</span>
                    </div>
                    <div className="flex-1">
                      <div
                        className="w-full h-12 rounded-sm"
                        style={{ backgroundColor: toHex(nearest.color), boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)' }}
                      />
                      <span className="font-mono text-[9px] text-[#ccc] mt-1 block text-center">nearest</span>
                    </div>
                  </div>
                  <p className="font-mono text-[11px] text-[#aaa]">
                    {nearest.dist < 0.015
                      ? 'Exact match'
                      : nearest.dist < 0.04
                      ? 'Very close'
                      : nearest.dist < 0.08
                      ? 'Close — workable for most painting'
                      : nearest.dist < 0.15
                      ? 'Approximate — noticeable shift'
                      : 'Beyond this palette\'s territory'}
                  </p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

/* ═══ Small Components ════════════════════════════════════════════════════ */

function VertexLabel({ pos, pigment, reverse, style }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: `${pos[0]}%`, top: `${pos[1]}%`, ...style }}
    >
      <div className={`flex items-center gap-1.5 ${reverse ? 'flex-row-reverse' : ''}`}>
        <div
          className="w-3.5 h-3.5 rounded-full shrink-0"
          style={{
            backgroundColor: toHex(pigment.color),
            boxShadow: '0 0 0 1.5px rgba(255,255,255,0.6), 0 1px 3px rgba(0,0,0,0.1)',
          }}
        />
        <span className="font-mono text-[9px] text-[#999] whitespace-nowrap">
          {pigment.name}
        </span>
      </div>
    </div>
  )
}

function Indicator({ pct, color, className, size }) {
  return (
    <div
      className={`absolute rounded-full border-2 pointer-events-none ${className}`}
      style={{
        left: `${pct[0]}%`,
        top: `${pct[1]}%`,
        width: size,
        height: size,
        transform: 'translate(-50%, -50%)',
        backgroundColor: toHex(color),
      }}
    />
  )
}
