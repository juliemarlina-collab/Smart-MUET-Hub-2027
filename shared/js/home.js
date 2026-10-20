/* Smart MUET Hub · home page.
   Two views: first-timer (route + road) and returning learner (continue, streak, per-paper status).
   Reads only records already saved on this device; nothing is uploaded. */
(() => {
  'use strict';
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const get = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch { return d; } };
  const put = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
  const flag = k => { try { return localStorage.getItem(k) === 'true'; } catch { return false; } };
  const safe = p => typeof p === 'string' && /^(01-welcome|02-account|03-guides|04-book|05-practice|06-progress|07-vault|08-arcade)\/[a-z0-9-]+\.html(?:#[a-z0-9=.-]+)?$/i.test(p);
  const skills = ['listening', 'speaking', 'reading', 'writing'];
  const title = s => s[0].toUpperCase() + s.slice(1);
  const tech = { listening: 'CLUE', speaking: 'PREP', reading: 'SCAN', writing: 'PEEL' };
  const labBadge = { listening: 'sharp-ears', speaking: 'confident-speaker', reading: 'speed-reader', writing: 'word-smith' };
  const rowColour = { listening: 'r-cobalt', speaking: 'r-mint', reading: 'r-yellow', writing: 'r-pink' };

  /* ---------- what has this learner done? ---------- */
  function record() {
    const s = window.SMHApp ? window.SMHApp.summary() : { total: 0, level: 'Starter', streak: 0, badges: [] };
    const badges = new Set(s.badges || []);
    const diag = get('smh.diagnostic.v1', null);
    const pdfRead = new Set(get('smh.pdfbook.v1.read', []));
    const guideDone = skills.some(k => (get('smh.rebuild.guide.' + k + '.done', []) || []).length);
    const per = Object.fromEntries(skills.map(k => [k, {
      lab: badges.has(labBadge[k]), labStarted: !!localStorage.getItem('smh.lab.' + k + '.v1'),
      v1: flag('muet_v1_' + k), v2: flag('muet_v2_' + k), m1: flag('muet_mock1_' + k)
    }]));
    const count = key => skills.filter(k => per[k][key]).length;
    const queue = get('smh.review.queue.v1', []);
    const due = Array.isArray(queue) ? queue.filter(x => x && typeof x.id === 'string' && !(Date.parse(x.due) > Date.now())).length : 0;
    const steps = {
      know: flag('smh.home.know') || [4, 5, 6, 7].some(p => pdfRead.has(p)),
      check: !!(diag && diag.plan),
      learn: guideDone || pdfRead.size >= 15,
      labs: count('lab'), vault: count('v1') + count('v2'), mock: count('m1'),
      arcade: !!localStorage.getItem('smh.arcade.v1')
    };
    const active = !!localStorage.getItem('smh.flow.last') || s.total > 0 || steps.check;
    return { s, diag, per, due, steps, active, count };
  }

  /* ---------- persona switch ---------- */
  function setPersona(p, save) {
    $$('[data-view]').forEach(e => { e.hidden = e.dataset.view !== p; });
    $$('.h-switch [data-persona]').forEach(b => b.setAttribute('aria-pressed', b.dataset.persona === p ? 'true' : 'false'));
    if (save) put('smh.persona', p);
  }
  $$('[data-persona]').forEach(b => b.addEventListener('click', () => setPersona(b.dataset.persona, true)));
  $$('[data-know]').forEach(a => a.addEventListener('click', () => { try { localStorage.setItem('smh.home.know', 'true'); } catch {} }));

  function render() {
    const r = record();
    const { steps } = r;

    /* route rows + road status */
    const order = ['know', 'check', 'learn', 'labs', 'vault', 'mock'];
    const isDone = k => k === 'labs' ? steps.labs === 4 : k === 'vault' ? steps.vault === 8 : k === 'mock' ? steps.mock === 4 : !!steps[k];
    const now = order.find(k => !isDone(k));
    const label = k => {
      if (isDone(k)) return ['✓ done', 'done'];
      if (k === now) return [k === 'know' ? 'start here' : 'next', 'now'];
      if (k === 'labs' && steps.labs) return [steps.labs + ' / 4', ''];
      if (k === 'vault' && (steps.vault || steps.mock)) return [(steps.vault + steps.mock) + ' / 12', ''];
      return ['', ''];
    };
    $$('.h-menu .h-row').forEach(a => {
      const k = a.dataset.step, st = a.querySelector('.st');
      if (k === 'arcade') { st.textContent = steps.arcade ? 'played' : ''; return; }
      const key = k === 'vault' ? (steps.vault === 8 ? 'mock' : 'vault') : k;
      const [t, c] = label(key); st.textContent = t; st.className = 'st ' + c;
    });
    $$('.h-stops li').forEach(li => {
      const k = li.dataset.step; if (k === 'arcade') return;
      li.classList.toggle('is-done', isDone(k)); li.classList.toggle('is-now', k === now);
      if (isDone(k)) li.querySelector('.when').textContent = '✓ done';
      else if (k === now) li.querySelector('.when').textContent = k === 'know' ? 'start here' : 'you are here';
    });

    /* returning view */
    const { s } = r;
    $('#t-streak').textContent = s.streak || 0;
    $('#t-xp').textContent = s.total || 0;
    $('#t-level').textContent = 'XP · ' + (s.level || 'Starter');
    $('#t-review').textContent = r.due;
    $('#streak-pill').textContent = s.streak ? s.streak + '-day streak' : 'Welcome back';
    if (r.due) { $('#back-review').textContent = 'Do ' + r.due + ' review' + (r.due > 1 ? 's' : '') + ' first'; }

    const last = get('smh.flow.last', {});
    const card = $('#cont-card');
    if (safe(last.path)) {
      card.href = last.path; $('#cont-k').textContent = 'Continue where you stopped';
      $('#cont-title').textContent = String(last.label || 'Your last page').replace(/^(Learn|Vault|Practice|Home|Book) \/ /, '');
      $('#cont-sub').textContent = 'Last opened ' + (last.date ? new Date(last.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : 'recently') + '.';
      const b = $('#back-continue'); b.href = last.path; b.textContent = 'Continue →';
    } else if (r.diag && r.diag.plan) {
      const k = skills.includes(r.diag.start) ? r.diag.start : 'reading';
      card.href = '05-practice/diagnostic.html#plan'; $('#cont-k').textContent = 'Your 3-week plan';
      $('#cont-title').textContent = 'Start with ' + title(k); $('#cont-sub').textContent = 'Open your plan to see this week’s steps.';
      const b = $('#back-continue'); b.href = card.href; b.textContent = 'Open my plan →';
    }

    const box = $('#skill-rows'); box.replaceChildren();
    const weakest = skills.slice().sort((a, b) => {
      const n = k => ['lab', 'v1', 'v2', 'm1'].filter(x => r.per[k][x]).length;
      return n(a) - n(b);
    })[0];
    skills.forEach((k, i) => {
      const p = r.per[k], n = ['lab', 'v1', 'v2', 'm1'].filter(x => p[x]).length;
      const parts = [p.lab ? 'Lab ✓' : p.labStarted ? 'Lab started' : 'Lab not started', p.v1 ? 'Vault 1 ✓' : '', p.v2 ? 'Vault 2 ✓' : '', p.m1 ? 'Mock ✓' : ''].filter(Boolean);
      const href = !p.lab ? '05-practice/' + k + '-lab.html' : !p.v1 ? '07-vault/vault1-' + k + '.html' : !p.v2 ? '07-vault/vault2-' + k + '.html' : !p.m1 ? '07-vault/mock1-' + k + '.html' : '03-guides/' + k + '.html';
      const a = document.createElement('a'); a.className = 'h-row ' + rowColour[k]; a.href = href;
      const num = document.createElement('span'); num.className = 'n'; num.textContent = '0' + (i + 1);
      const mid = document.createElement('span'); const b = document.createElement('b'); b.textContent = title(k) + ' · ' + tech[k];
      const sm = document.createElement('small'); sm.textContent = parts.join(' · '); mid.append(b, sm);
      const st = document.createElement('span'); st.className = 'st' + (n === 4 ? ' done' : k === weakest ? ' now' : '');
      st.textContent = n === 4 ? '✓ 4/4' : k === weakest ? 'focus · ' + n + '/4' : n + '/4';
      a.append(num, mid, st); box.append(a);
    });
    return r;
  }

  const r = render();
  const saved = get('smh.persona', null);
  setPersona(saved === 'back' || saved === 'first' ? saved : (r.active ? 'back' : 'first'), false);
  if (location.hash === '#start' && !saved) setPersona('first', false);
  window.addEventListener('storage', render);
  setTimeout(render, 600); // SMHApp finishes its first check shortly after load
})();
