# Classifier Demo — UI kit

A high-fidelity recreation of the ECI Centauri **Exoplanet Hunter** companion web tool: a one-page interactive demo that lets a researcher paste in 13 KOI features, hit **Predict**, and see the model's verdict — `CANDIDATE` or `FALSE POSITIVE` — alongside its probability, the threshold dial, the top contributing features, and the model leaderboard.

The kit is **cosmetic**: it doesn't ship the real `best_xgboost.joblib`. It uses a small JS stand-in that mimics the model's output so the layout and interactions are real.

## Files
- `index.html` — assembled demo (loads all components below)
- `Header.jsx` — top nav with logo, repo link, and finalist badge
- `KOIForm.jsx` — 13-input feature form with helper text
- `PredictionPanel.jsx` — verdict card with probability gauge + threshold slider
- `FeatureBars.jsx` — horizontal bars for top contributing features
- `Leaderboard.jsx` — final test-set table with the winning row tinted
- `Footer.jsx` — small attribution band
- `mockModel.js` — deterministic stand-in for `predict_proba`

## Design references used
- Color + type tokens from `colors_and_type.css`
- Result figures from `assets/figures/` (referenced via images in some panels)
- Final XGBoost numbers from the project README (F1 = 0.860, etc.)
