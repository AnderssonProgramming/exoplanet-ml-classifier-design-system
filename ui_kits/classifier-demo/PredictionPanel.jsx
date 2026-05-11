function PredictionPanel({ result, threshold, onThreshold }) {
  if (!result) {
    return (
      <section className="panel pred-panel empty">
        <div className="pred-empty">
          <div className="pulse"></div>
          <div className="pred-empty-h">Awaiting input</div>
          <div className="pred-empty-d">Press <b>Predict KOI</b> to score this candidate against the tuned XGBoost pipeline.</div>
        </div>
      </section>
    );
  }
  const p = result.probability;
  const isCandidate = p >= threshold;
  const conf = Math.round(Math.abs(p - 0.5) * 200);
  const r = 70;
  const C = 2 * Math.PI * r;
  const dash = C * p;
  return (
    <section className="panel pred-panel">
      <header className="panel-head">
        <div>
          <div className="panel-eyebrow">Verdict</div>
          <h2 className="panel-title">Classification</h2>
        </div>
        <span className={"verdict-pill " + (isCandidate ? "pos" : "neg")}>
          {isCandidate ? "● CANDIDATE" : "● FALSE POSITIVE"}
        </span>
      </header>
      <div className="pred-body">
        <div className="gauge">
          <svg width="180" height="180" viewBox="0 0 180 180">
            <circle cx="90" cy="90" r={r} fill="none" stroke="var(--bg-3)" strokeWidth="14"/>
            <circle cx="90" cy="90" r={r} fill="none"
              stroke={isCandidate ? "var(--signal-positive)" : "var(--signal-negative)"}
              strokeWidth="14" strokeLinecap="round"
              strokeDasharray={`${dash} ${C}`}
              transform="rotate(-90 90 90)"/>
            <text x="90" y="86" textAnchor="middle" className="gauge-num">{p.toFixed(3)}</text>
            <text x="90" y="108" textAnchor="middle" className="gauge-lbl">P(candidate)</text>
          </svg>
        </div>
        <div className="pred-meta">
          <div className="pm-row"><span className="pm-l">Threshold</span><span className="pm-r mono">{threshold.toFixed(2)}</span></div>
          <input type="range" min="0" max="1" step="0.01" value={threshold} onChange={(e) => onThreshold(parseFloat(e.target.value))} className="thr"/>
          <div className="thr-marks">
            <span>0.00</span>
            <span className="mark youden">Youden 0.43</span>
            <span className="mark default">default 0.50</span>
            <span>1.00</span>
          </div>
          <div className="pm-row"><span className="pm-l">Confidence</span><span className="pm-r mono">{conf}%</span></div>
          <div className="pm-row"><span className="pm-l">Decision</span><span className={"pm-r mono " + (isCandidate ? "pos" : "neg")}>{isCandidate ? "promote → follow-up queue" : "reject → archive"}</span></div>
        </div>
      </div>
    </section>
  );
}
window.PredictionPanel = PredictionPanel;
