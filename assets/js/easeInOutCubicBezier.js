/* This is an ease in out cubic bezier animation function */
function easeInOutCubicBezier(t) {
  "use strict";

  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}
