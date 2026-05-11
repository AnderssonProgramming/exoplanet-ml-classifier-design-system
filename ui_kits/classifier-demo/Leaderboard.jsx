const LEADERBOARD = [
  { m: "XGBoost (tuned)",      acc: .8604, f1: .8598, roc: .9361, mcc: .7210, win: true },
  { m: "Random Forest",         acc: .8495, f1: .8489, roc: .9271, mcc: .6991 },
  { m: "MLP (tuned)",           acc: .8202, f1: .8189, roc: .9006, mcc: .6404 },
  { m: "k-NN",                  acc: .7862, f1: .7916, roc: .8568, mcc: .5747 },
  { m: "Logistic Regression",   acc: .7784, f1: .7932, roc: .8341, mcc: .5660 },
];

function Leaderboard({ active, onSelect }) {
  return (
    <section className="panel lb-panel">
      <header className="panel-head">
        <div>
          <div className="panel-eyebrow">Final test-set leaderboard</div>
          <h2 className="panel-title">Five classifiers, one winner</h2>
        </div>
        <span className="muted small">Stratified 20% test · F1 scoring on 5-fold CV</span>
      </header>
      <table className="lb">
        <thead>
          <tr><th>Model</th><th>Accuracy</th><th>F1</th><th>ROC-AUC</th><th>MCC</th><th></th></tr>
        </thead>
        <tbody>
          {LEADERBOARD.map((r) => (
            <tr key={r.m} className={(r.win ? "win " : "") + (active === r.m ? "active" : "")} onClick={() => onSelect(r.m)}>
              <td>{r.m}{r.win && <span className="lb-star"> ★</span>}</td>
              <td className="num">{r.acc.toFixed(4)}</td>
              <td className="num">{r.f1.toFixed(4)}</td>
              <td className="num">{r.roc.toFixed(4)}</td>
              <td className="num">{r.mcc.toFixed(4)}</td>
              <td>{active === r.m ? <span className="lb-tag">selected</span> : <span className="muted small">click to use</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
window.Leaderboard = Leaderboard;
