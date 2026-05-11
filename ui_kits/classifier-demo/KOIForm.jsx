// 13 KOI features, with sensible defaults from a known CANDIDATE row.
const FIELDS = [
  { k: "koi_period",    lbl: "Orbital period",         u: "days",  d: 9.488036 },
  { k: "koi_time0bk",   lbl: "Transit epoch",           u: "BJD",   d: 170.5388 },
  { k: "koi_impact",    lbl: "Impact parameter",        u: "—",     d: 0.146   },
  { k: "koi_duration",  lbl: "Transit duration",        u: "hours", d: 2.957   },
  { k: "koi_depth",     lbl: "Transit depth",           u: "ppm",   d: 615.8   },
  { k: "koi_prad",      lbl: "Planetary radius",        u: "R⊕",    d: 2.26    },
  { k: "koi_teq",       lbl: "Equilibrium temp",        u: "K",     d: 793     },
  { k: "koi_insol",     lbl: "Insolation flux",         u: "F⊕",    d: 35.94   },
  { k: "koi_steff",     lbl: "Stellar effective temp",  u: "K",     d: 5455    },
  { k: "koi_slogg",     lbl: "Stellar surface gravity", u: "log g", d: 4.467   },
  { k: "koi_srad",      lbl: "Stellar radius",          u: "R☉",    d: 0.927   },
  { k: "koi_kepmag",    lbl: "Kepler magnitude",        u: "mag",   d: 15.347  },
  { k: "koi_model_snr", lbl: "Transit model SNR",       u: "—",     d: 35.8    },
];
window.KOI_FIELDS = FIELDS;

function KOIForm({ values, onChange, onPredict, onReset, model }) {
  return (
    <section className="panel form-panel">
      <header className="panel-head">
        <div>
          <div className="panel-eyebrow">Inputs</div>
          <h2 className="panel-title">13 KOI features</h2>
        </div>
        <div className="form-actions">
          <button className="btn btn-secondary" onClick={onReset}>Reset</button>
          <button className="btn btn-primary" onClick={onPredict}>Predict KOI →</button>
        </div>
      </header>
      <div className="form-grid">
        {FIELDS.map((f) => (
          <label className="field" key={f.k}>
            <span className="field-row">
              <span className="field-name">{f.lbl}</span>
              <span className="field-unit">{f.u}</span>
            </span>
            <input
              className="input mono"
              type="number"
              step="any"
              value={values[f.k]}
              onChange={(e) => onChange(f.k, parseFloat(e.target.value))}
            />
            <span className="field-key">{f.k}</span>
          </label>
        ))}
      </div>
      <footer className="form-foot">
        <span>
          <b>Model:</b> {model} · pre-fit on a stratified 72/8/20 split with <code>RANDOM_SEED = 42</code>.
        </span>
        <span className="muted">Imputer + scaler fit on train fold only — leakage-safe.</span>
      </footer>
    </section>
  );
}
window.KOIForm = KOIForm;
