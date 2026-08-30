/**
 * Hand-drawn-style zodiac wheel used as the site's recurring graphic motif.
 * Pure SVG strokes in currentColor — place inside a relatively-positioned
 * host with the global .motif class to position and fade it.
 */
export function ZodiacWheel({ size = 420 }: { size?: number }) {
  const ticks = [];
  for (let i = 0; i < 60; i++) {
    const a = (i * 6 * Math.PI) / 180;
    const r1 = i % 5 === 0 ? 186 : 192;
    ticks.push(
      <line
        key={i}
        x1={200 + r1 * Math.cos(a)}
        y1={200 + r1 * Math.sin(a)}
        x2={200 + 198 * Math.cos(a)}
        y2={200 + 198 * Math.sin(a)}
      />,
    );
  }
  const spokes = [];
  for (let i = 0; i < 12; i++) {
    const a = ((i * 30 - 90) * Math.PI) / 180;
    spokes.push(
      <line
        key={i}
        x1={200 + 120 * Math.cos(a)}
        y1={200 + 120 * Math.sin(a)}
        x2={200 + 198 * Math.cos(a)}
        y2={200 + 198 * Math.sin(a)}
      />,
    );
  }
  // a few planet points + aspect lines for life
  const pts: Array<[number, number]> = [
    [24, 0.82],
    [95, 0.55],
    [150, 0.72],
    [222, 0.5],
    [268, 0.85],
    [331, 0.65],
  ].map(([deg, r]) => {
    const a = ((deg - 90) * Math.PI) / 180;
    return [200 + 118 * r * Math.cos(a), 200 + 118 * r * Math.sin(a)];
  });
  const aspects: Array<[number, number]> = [
    [0, 3],
    [1, 4],
    [2, 5],
    [0, 2],
    [3, 5],
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="200" cy="200" r="198" />
      <circle cx="200" cy="200" r="168" strokeWidth="0.6" />
      <circle cx="200" cy="200" r="120" />
      <circle cx="200" cy="200" r="46" strokeWidth="0.6" />
      <circle cx="200" cy="200" r="14" />
      <g strokeWidth="0.8">{ticks}</g>
      <g strokeWidth="0.6" opacity="0.85">
        {spokes}
      </g>
      <g strokeWidth="0.7" opacity="0.8">
        {aspects.map(([a, b], i) => (
          <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} />
        ))}
      </g>
      <g fill="currentColor" stroke="none">
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.4" />
        ))}
      </g>
    </svg>
  );
}
