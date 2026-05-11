// Tiny deterministic stand-in for the real XGBoost predict_proba.
// Returns a probability roughly aligned with what the trained model would do
// on the canonical KOI features — enough for the demo to feel real without
// shipping the joblib.
window.mockPredict = function (f) {
  // soft-clip helper
  const c = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
  // signal: high model SNR, modest planet radius, depth in a believable band
  const snr = c((f.koi_model_snr - 7) / 60, -1, 1.4);
  const prad = -Math.abs(Math.log10(Math.max(0.5, f.koi_prad)) - 0.4) * 0.8;
  const depth = c((Math.log10(Math.max(10, f.koi_depth)) - 2.0) * 0.4, -0.6, 0.6);
  const dur = c((f.koi_duration - 2) / 8, -0.4, 0.6);
  const teq = c((1500 - f.koi_teq) / 2000, -0.4, 0.4);
  const z = 0.4 + 1.2 * snr + prad + depth + 0.4 * dur + 0.3 * teq;
  const p = 1 / (1 + Math.exp(-z));
  // top-contributing feature breakdown (matches feature_importance plot order)
  const contributions = [
    { name: "koi_model_snr", weight: 1.2 * snr,    value: f.koi_model_snr },
    { name: "koi_prad",      weight: prad,          value: f.koi_prad      },
    { name: "koi_depth",     weight: depth,         value: f.koi_depth     },
    { name: "koi_duration",  weight: 0.4 * dur,     value: f.koi_duration  },
    { name: "koi_teq",       weight: 0.3 * teq,     value: f.koi_teq       },
    { name: "koi_period",    weight: 0.05,          value: f.koi_period    },
  ];
  return { probability: p, contributions };
};
