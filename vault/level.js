/* Smart MUET · Vault level page (vault1.html, vault2.html, mock1.html). Needs vault-bridge.js. */
(() => {
  "use strict";
  const V = window.SMHVault,
    stage = document.body.dataset.level;
  if (!V || !V.STAGES[stage]) return;
  const el = (t, c, x) => {
    const n = document.createElement(t);
    if (c) n.className = c;
    if (x !== undefined) n.textContent = x;
    return n;
  };
  const s = V.status(stage),
    rec = V.recommended();
  document.getElementById("level-ring").append(V.ring(s.done, 190), el("b", "", s.done === 4 ? s.name + " complete ✓" : s.done + " of 4 papers done"));
  document.getElementById("level-tag").textContent =
    rec === stage ? "★ Recommended next for you." : rec ? "Recommended next: " + V.STAGES[rec].name + ". You can still practise here." : "All levels complete.";
  const nextComp = s.comps.find((c) => !c.done);
  const colours = { listening: "blue", speaking: "teal", reading: "orange", writing: "" };
  const cards = document.getElementById("level-cards");
  s.comps.forEach((c) => {
    const card = el("article", "card comp-card " + colours[c.id] + (c.done ? " done" : ""));
    if (rec === stage && nextComp && nextComp.id === c.id) card.append(el("span", "rec-tag", "RECOMMENDED NEXT"));
    card.append(
      el("span", "status", (c.done ? "DONE ✓ / " : "NOT YET / ") + c.name.toUpperCase() + " " + V.PAPER[c.id]),
      el("h3", "", c.name + " · " + V.TECH[c.id]),
    );
    if (c.score90 !== null) {
      const sc = el("p", "score", String(c.score90));
      sc.append(el("small", "", " / 90 practice score"));
      card.append(sc);
    } else card.append(el("p", "", c.done ? "Completed. Open it to see your feedback." : "Use " + V.TECH[c.id] + " as you work. Your result ends with a short reflection."));
    const a = el("a", "button primary", (c.done ? "Review or retry " : "Start ") + c.name + " ↗");
    a.href = c.href;
    card.append(a);
    cards.append(card);
  });
  /* Boss battle card (Arcade · Monster Punch) */
  {
    const BOSS = { v1: ["Jerebu", "the Haze Beast"], v2: ["Kalut", "the Deadline Golem"], mock1: ["Gerhana", "the Exam Dragon"] }[stage];
    let won = false;
    try {
      won = !!(JSON.parse(localStorage.getItem("smh.arcade.boss.v1") || "{}")[stage] || {}).won;
    } catch {}
    if (BOSS) {
      const card = el("article", "card boss-card" + (won ? " won" : ""));
      card.append(
        el("span", "status", won ? "BOSS DEFEATED ✓" : s.done === 4 ? "BOSS BATTLE · READY" : "BOSS BATTLE · BEST AFTER 4/4"),
        el("h3", "", "Beat " + BOSS[0] + ", " + BOSS[1]),
        el("p", "", "A quick-fire boss battle with questions from all four papers. Punch the monster holding the right answer. Tap to play, or use camera mode and make a fist."),
      );
      const a = el("a", "button primary", (won ? "Fight again" : "Fight the boss") + " ↗");
      a.href = "../08-arcade/monster-punch.html?level=" + stage;
      card.append(a);
      cards.after(card);
    }
  }
  const list = document.getElementById("level-reflections"),
    refl = (Array.isArray(V.load().reflections) ? V.load().reflections : []).filter((r) => r && r.stage === stage);
  if (!refl.length) list.textContent = "Finish a component to add your first reflection.";
  refl
    .slice()
    .reverse()
    .forEach((r) => {
      const row = el("div", "ref-row");
      row.append(el("b", "", r.topic + " · " + r.technique), el("small", "", " · " + new Date(r.date).toLocaleDateString() + " · confidence " + r.confidence + "/5"), el("p", "", r.text));
      list.append(row);
    });
  if (s.done === 4) setTimeout(() => V.celebrate(stage), 500);
})();
