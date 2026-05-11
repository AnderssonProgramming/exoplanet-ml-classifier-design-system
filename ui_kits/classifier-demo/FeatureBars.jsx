function FeatureBars({ contributions }) {
  if (!contributions) return null;
  const max = Math.max(...contributions.map(c => Math.abs(c.weight))) || 1;
  return (
    <section className="panel bars-panel">
      <header className="panel-head">
        <div>
          <div className="panel-eyebrow">Why</div>
          <h2 className="panel-title">Top contributing features</h2>
        </div>
        <span className="muted small">SHAP-style direction · positive ⇒ pushes toward CANDIDATE</span>
      </header>
      <div className="bars">
        {contributions.map((c) => {
          const w = Math.abs(c.weight) / max;
          const pos = c.weight >= 0;
          return (
            <div className="bar-row" key={c.name}>
              <span className="bar-name mono">{c.name}</span>
              <div className="bar-track">
                <div className="bar-zero"></div>
                <div className={"bar-fill " + (pos ? "pos" : "neg")} style={{
                  width: (w * 50) + "%",
                  left: pos ? "50%" : (50 - w * 50) + "%"
                }}></div>
              </div>
              <span className="bar-val mono">{c.value.toFixed(2)}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
window.FeatureBars = FeatureBars;
