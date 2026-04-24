// ==============================
// SemiCode Loader — loader.js
// ==============================
(function () {
  "use strict";

  // ── Constants ────────────────────────────────────────
  const STEPS = 8;
  const MSGS = [
    "Initializing...",
    "Loading modules...",
    "Compiling assets...",
    "Fetching data...",
    "Rendering components...",
    "Optimizing...",
    "Almost ready...",
    "Done ✓",
  ];

  // ── Cached DOM refs — queried once ───────────────────
  const overlay   = document.getElementById("sc-overlay");
  const card      = document.getElementById("sc-card");
  const fill      = document.getElementById("sc-fill");
  const pctEl     = document.getElementById("sc-pct");
  const msgEl     = document.getElementById("sc-msg");
  const stepsEl   = document.getElementById("sc-steps");
  const loaderImg = document.getElementById("loaderImg");

  // ── State ────────────────────────────────────────────
  let displayed = 0;   // Animated percentage shown to user
  let real      = 0;   // Actual progress from browser resources
  let msgIdx    = -1;  // Tracks current message index
  let raf       = null;
  let isDone    = false;
  let dots      = [];

  // ── Handle logo image error ──────────────────────────
  function initLogoFallback() {
    if (!loaderImg) return;
    loaderImg.addEventListener("error", function () {
      loaderImg.style.display = "none";
      const fallback = loaderImg.parentElement.querySelector(".sc-logo-fallback");
      if (fallback) fallback.style.display = "flex";
    }, { once: true });
  }

  // ── Build step dots once ─────────────────────────────
  function buildSteps() {
    // Build all dots as one string — one DOM operation
    stepsEl.innerHTML = Array.from({ length: STEPS }, () =>
      '<div class="sc-step"></div>'
    ).join("");
    dots = [...stepsEl.querySelectorAll(".sc-step")];
  }

  // ── Update step dots based on percentage ─────────────
  function updateDots(pct) {
    const filled = Math.floor((pct / 100) * STEPS);
    const isComplete = pct >= 100;
    dots.forEach((dot, i) => {
      dot.classList.toggle("on",   i < filled && !isComplete);
      dot.classList.toggle("done", i < filled && isComplete);
    });
  }

  // ── Update status message ────────────────────────────
  function updateMsg(pct) {
    const idx = Math.min(
      Math.floor((pct / 100) * MSGS.length),
      MSGS.length - 1
    );
    if (idx === msgIdx) return;
    msgIdx = idx;
    msgEl.style.opacity = "0";
    setTimeout(() => {
      msgEl.textContent = MSGS[idx];
      msgEl.style.opacity = "1";
    }, 180);
  }

  // ── Calculate real progress from browser resources ───
  function calcRealProgress() {
    const entries = performance.getEntriesByType("resource");
    if (entries.length === 0) return 10;

    const loaded = entries.filter(e => e.responseEnd > 0).length;
    let pct = Math.round((loaded / entries.length) * 85) + 15;

    const state = document.readyState;
    if (state === "interactive" || state === "complete") pct = Math.max(pct, 60);
    if (state === "complete") pct = Math.max(pct, 95);

    return Math.min(pct, 99); // Never reach 100 until load event fires
  }

  // ── Animation tick — runs every frame ────────────────
  function tick() {
    if (!isDone) real = calcRealProgress();

    // Smoothly catch up to real progress
    if (displayed < real) {
      const diff = real - displayed;
      displayed += Math.max(diff * 0.06, 0.4);
      displayed = Math.min(displayed, real);
    }

    const p = Math.min(Math.round(displayed), 100);

    // Batch DOM writes together
    fill.style.width = p + "%";
    pctEl.textContent = p + "%";
    updateDots(p);
    updateMsg(p);

    if (p < 100) {
      raf = requestAnimationFrame(tick);
    } else {
      onComplete();
    }
  }

  // ── Called when progress hits 100 ────────────────────
  function onComplete() {
    card.classList.add("sc-complete");
    setTimeout(hide, 700);
  }

  // ── Hide and clean up overlay ─────────────────────────
  function hide() {
    overlay.classList.add("sc-hidden");
    setTimeout(() => {
      overlay.style.display = "none";
      document.body.classList.remove("sc-loading");
    }, 500);
  }

  // ── Force loader to complete ──────────────────────────
  function forceComplete() {
    isDone = true;
    real   = 100;
  }

  // ── Start loader ──────────────────────────────────────
  function start() {
    document.body.classList.add("sc-loading");
    buildSteps();
    initLogoFallback();
    raf = requestAnimationFrame(tick);
  }

  // ── Init ──────────────────────────────────────────────
  start();

  // Force complete when all resources finish loading
  window.addEventListener("load", forceComplete, { once: true });

  // Fallback: force complete after 8 seconds
  setTimeout(forceComplete, 8000);

  // Expose forceComplete globally if needed
  window.scLoader = { forceComplete };

})();