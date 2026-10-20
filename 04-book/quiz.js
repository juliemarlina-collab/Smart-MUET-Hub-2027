/* Smart MUET Guide eBook · interactive page games.
   On the eBook's question pages (1.4, 3.4, 4.4, 5.4, 6.4 and the 7 Quiz Show) a "Play" button opens the same
   questions as a tap-to-answer game: instant feedback, auto-scored stars, best score saved, confetti for a high score.
   Questions and answers come from the eBook and its answer key on p. 49.
   Storage: smh.ebook.quiz.v1 = { "3.4": { best, total, last, attempts, date }, … } (read by the Hub's XP, Me and Home). */
(() => {
  'use strict';
  const KEY = 'smh.ebook.quiz.v1';
  const load = () => { try { const v = JSON.parse(localStorage.getItem(KEY) || '{}'); return v && typeof v === 'object' ? v : {}; } catch { return {}; } };
  const save = v => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch {} };
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const el = (t, c, x) => { const n = document.createElement(t); if (c) n.className = c; if (x !== undefined) n.textContent = x; return n; };

  const GAMES = {
    '1.4': { pages: [8], title: 'Fact or Cap?', colour: '#5625dc', note: '“Cap” means it’s not true! Tap FACT or CAP for each card.', parts: [
      { type: 'tf', label: 'Fact or Cap', items: [
        ['MUET is set and run by Majlis Peperiksaan Malaysia.', 0, 'MPM sets and runs MUET.'],
        ['The total MUET score is 300 marks.', 1, 'The total is 360: four papers × 90.'],
        ['Each of the four papers is worth 90 marks.', 0, 'Listening, Speaking, Reading and Writing are 90 each.'],
        ['A total of 260 gives Band 4.0.', 1, '260 is Band 4.5 (258–293).'],
        ['Speaking is taken on a different day from the written papers.', 0, 'Speaking has its own day.'],
        ['A MUET result is valid for 3 years.', 1, 'A result is valid for 5 years.'],
        ['You need SPM to register for MUET.', 1, 'MPM sets no entry conditions.'],
        ['Band 5.0 is CEFR level C1.', 0, 'Band 5.0 = C1.']] }] },
    '3.4': { pages: [21], title: 'Catch the clue', colour: '#1d4fbf', note: 'Four quick questions, then sort the signposts.', parts: [
      { type: 'mcq', label: 'Quick check', items: [
        ['Before you hear “Where will the talk take place?”, predict the answer type.', ['a time', 'a place', 'a reason'], 1, '“Where” asks for a place.'],
        ['“I wanted the blue one, but in the end I bought the black one.” Which did the speaker buy?', ['the blue one', 'the black one', 'both'], 1, '“but in the end” gives the final choice.'],
        ['Which word often signals a change of mind?', ['also', 'actually', 'for instance'], 1, '“Actually” often corrects what came before.'],
        ['“I’d love to come, but I’ve got a test tomorrow.” The speaker is…', ['accepting', 'refusing politely', 'asking a question'], 1, '“I’d love to… but” is a polite refusal.']] },
      { type: 'sort', label: 'Signpost sort', cats: ['Contrast', 'Adding', 'Example', 'Reason', 'Conclusion'],
        items: [['however', 0], ['moreover', 1], ['for instance', 2], ['because', 3], ['overall', 4], ['instead', 0], ['also', 1], ['such as', 2], ['due to', 3], ['in the end', 4]] }] },
    '4.4': { pages: [28], title: 'Build it, then say it', colour: '#11a865', note: 'Four quick questions, then Roll & Talk.', parts: [
      { type: 'mcq', label: 'Quick check', items: [
        ['PREP starts with…', ['an example', 'your point', 'a question'], 1, 'P = Point: say your answer first.'],
        ['Best Reason for “Join a club”:', ['Clubs are fun.', 'You work with people who share your interests.', 'My friend joined one.'], 1, 'A reason explains why the point is true.'],
        ['Which phrase invites a partner to speak?', ['What do you think, Aina?', 'In conclusion…', 'For example…'], 0, 'Asking by name invites a partner in.'],
        ['Preparation time for Part 1:', ['1 minute', '2 minutes', '3 minutes'], 1, 'You have 2 minutes to prepare.']] },
      { type: 'speak', label: 'Roll & Talk', topics: ['Your favourite place on campus', 'A skill every student needs', 'The best way to relax after class', 'Should phones be allowed in class?', 'A useful app for students', 'Your dream job and why'] }] },
    '5.4': { pages: [35], title: 'Find the evidence', colour: '#d99a00', note: 'Read the notice, answer four questions, then play Word Detective.',
      text: 'LIBRARY NOTICE · From 1 March, the library will open at 8 a.m. instead of 9 a.m. on weekdays. Weekend hours stay the same. Students who want to book discussion rooms must now do so online at least one day in advance.', parts: [
      { type: 'mcq', label: 'Quick check', items: [
        ['What changes on weekdays?', ['the closing time', 'the opening time', 'the weekend hours'], 1, 'It opens at 8 a.m. instead of 9 a.m.'],
        ['“do so” refers to…', ['booking discussion rooms', 'opening earlier', 'studying online'], 0, '“do so” points back to booking discussion rooms.'],
        ['Which statement is true?', ['Same-day room bookings are fine.', 'Weekend hours will change.', 'Bookings must be made online.'], 2, '“must now do so online”.'],
        ['In SCAN, “Circle” means…', ['circle every word', 'mark the key meaning', 'circle the answer letter'], 1, 'Circle the key meaning of the question.']] },
      { type: 'match', label: 'Word Detective', left: ['in advance', 'qualifier', 'paraphrase', 'relocate', 'evidence', 'inference'],
        right: ['move to a new place', 'a conclusion the text supports', 'before a set time', 'the words that prove an answer', 'same idea, different words', 'a small word that limits meaning (only, most)'],
        key: [2, 5, 4, 0, 3, 1] }] },
    '6.4': { pages: [42], title: 'Pitch it right', colour: '#c62f8b', note: 'Four quick questions, then sort formal and informal phrases.', parts: [
      { type: 'mcq', label: 'Quick check', items: [
        ['In PEEL, the second E stands for…', ['Evidence', 'Example', 'Essay'], 1, 'Point, Explain, Example, Link.'],
        ['Which sentence EXPLAINS “Internships help”?', ['Internships are good.', 'Students apply theory to real work.', 'I like internships.'], 1, 'It shows how internships help.'],
        ['Best opening for an email to a lecturer:', ['Hey sir!', 'Dear Encik Rahman,', 'Yo, got your message.'], 1, 'Formal: Dear + title + name.'],
        ['Minimum length for Task 2:', ['100 words', '200 words', '250 words'], 2, 'Task 2 needs at least 250 words.']] },
      { type: 'tf', label: 'Formal or informal?', opts: ['Formal', 'Informal'], items: [
        ['Dear Encik Rahman,', 0], ['Hey there!', 1], ['I look forward to hearing from you.', 0], ['Can’t wait to see you!', 1],
        ['I would appreciate your assistance.', 0], ['Thanks a lot!', 1], ['Yours sincerely,', 0], ['Gonna tell you everything later.', 1, 'Too casual even for a friend in Task 1.']] }] },
    '7': { pages: [46, 47], title: 'Quiz Show', colour: '#e3a800', note: 'Eight questions from all four papers. 8 stars: Champion!', parts: [
      { type: 'mcq', label: 'Quiz Show', items: [
        ['LISTENING · How many times is each Listening recording played?', ['Once', 'Twice', 'Three times'], 1],
        ['LISTENING · Which word often comes just before the real answer, after a distractor?', ['Furthermore', 'For example', 'Actually'], 2],
        ['SPEAKING · How long do you prepare for Part 1, the individual presentation?', ['1 minute', '2 minutes', '3 minutes'], 1],
        ['SPEAKING · “What do you think about this, Aina?” In Part 2, this phrase is used to…', ['invite others to speak', 'disagree politely', 'end the discussion'], 0],
        ['READING · How many questions are there in the MUET Reading paper?', ['30', '40', '50'], 1],
        ['READING · In a gapped text, what should you check on both sides of each gap?', ['Pictures and titles', 'Pronouns and linkers', 'Page numbers'], 1],
        ['WRITING · What is the minimum length for Writing Task 2?', ['100 words', '200 words', '250 words'], 2],
        ['WRITING · Which sign-off suits a formal email to a director?', ['See ya!', 'Yours sincerely,', 'Take care,'], 1]] }] }
  };
  const totalOf = g => g.parts.reduce((n, p) => n + (p.type === 'speak' ? 4 : p.type === 'match' ? p.left.length : p.items.length), 0);
  const pageGame = {}; Object.entries(GAMES).forEach(([id, g]) => g.pages.forEach(p => (pageGame[p] = id)));
  window.SMHEbookGames = { GAMES, totalOf, KEY };

  /* ---------- floating Play button, shown on question pages ---------- */
  const fab = el('button', 'qz-fab'); fab.type = 'button'; fab.hidden = true;
  document.body.append(fab);
  let current = null;
  function visiblePages() {
    const c = document.getElementById('count'); if (!c) return [];
    const m = c.textContent.match(/^(\d+)(?:–(\d+))?/); if (!m) return [];
    return m[2] ? [+m[1], +m[2]] : [+m[1]];
  }
  function updateFab() {
    const id = visiblePages().map(p => pageGame[p]).find(Boolean);
    current = id || null;
    if (!id) { fab.hidden = true; return; }
    const g = GAMES[id], rec = load()[id];
    fab.hidden = false;
    fab.style.setProperty('--qc', g.colour);
    fab.innerHTML = '';
    fab.append(el('span', 'qz-fab-play', '▶'), el('b', '', 'Play ' + id + ' · ' + g.title), el('small', '', rec ? '★ best ' + rec.best + ' / ' + rec.total : 'Tap to answer and score'));
    fab.setAttribute('aria-label', 'Play the interactive version of ' + id + ' ' + g.title + (rec ? ', best score ' + rec.best + ' out of ' + rec.total : ''));
  }
  const cnt = document.getElementById('count');
  if (cnt) new MutationObserver(updateFab).observe(cnt, { childList: true, characterData: true, subtree: true });
  setTimeout(updateFab, 300);
  fab.addEventListener('click', () => current && open(current));

  /* ---------- the game dialog ---------- */
  function open(id) {
    const g = GAMES[id], total = totalOf(g);
    let stars = 0, answered = 0;
    const d = el('dialog', 'qz'); d.style.setProperty('--qc', g.colour);
    d.setAttribute('aria-label', id + ' ' + g.title);
    const head = el('div', 'qz-head');
    const score = el('div', 'qz-score'); score.setAttribute('role', 'status');
    const close = el('button', 'qz-x', '✕'); close.type = 'button'; close.setAttribute('aria-label', 'Close the game');
    head.append(el('span', 'qz-code', id), el('h2', '', g.title), score, close);
    const body = el('div', 'qz-body');
    body.append(el('p', 'qz-note', g.note));
    if (g.text) body.append(el('div', 'qz-text', g.text));
    const paint = () => { score.textContent = '★ ' + stars + ' / ' + total + '  ·  ' + answered + ' answered'; finish.disabled = answered < total; };
    const mark = (ok) => { answered++; if (ok) stars++; paint(); };

    g.parts.forEach(part => {
      const sec = el('section', 'qz-part'); sec.append(el('h3', '', part.label));
      if (part.type === 'mcq' || part.type === 'tf') {
        part.items.forEach((it, i) => {
          const [q, a, b, c] = it;
          const opts = part.type === 'mcq' ? a : (part.opts || ['FACT', 'CAP']);
          const right = part.type === 'mcq' ? b : a, why = part.type === 'mcq' ? c : b;
          const card = el('div', 'qz-q'); card.append(el('p', '', (i + 1) + '. ' + q));
          const row = el('div', 'qz-opts' + (part.type === 'tf' ? ' two' : ''));
          opts.forEach((o, k) => {
            const btn = el('button', 'qz-opt', (part.type === 'mcq' ? 'ABC'[k] + '  ' : '') + o); btn.type = 'button';
            btn.onclick = () => {
              if (card.dataset.done) return; card.dataset.done = '1';
              const ok = k === right;
              btn.classList.add(ok ? 'ok' : 'no');
              row.children[right].classList.add('ok');
              [...row.children].forEach(x => (x.disabled = true));
              const fb = el('p', 'qz-fb ' + (ok ? 'ok' : 'no'), (ok ? '✓ Correct. ' : '✗ Not quite. ') + (why || 'Answer: ' + opts[right] + '.'));
              card.append(fb); mark(ok); pop(btn, ok);
            };
            row.append(btn);
          });
          card.append(row); sec.append(card);
        });
      } else if (part.type === 'sort') {
        sec.append(el('p', 'qz-help', 'Tap a word, then tap its job.'));
        const words = el('div', 'qz-chips'), cats = el('div', 'qz-cats');
        let picked = null;
        shuffle(part.items).forEach(([w, cat]) => {
          const chip = el('button', 'qz-chip', w); chip.type = 'button'; chip.dataset.cat = cat;
          chip.onclick = () => { if (chip.disabled) return; words.querySelectorAll('.qz-chip').forEach(x => x.classList.remove('pick')); picked = chip; chip.classList.add('pick'); };
          words.append(chip);
        });
        part.cats.forEach((name, ci) => {
          const box = el('button', 'qz-cat'); box.type = 'button';
          box.append(el('b', '', name), el('span', 'qz-drop'));
          box.onclick = () => {
            if (!picked) return;
            const ok = +picked.dataset.cat === ci, chip = picked; picked = null;
            chip.classList.remove('pick'); chip.disabled = true; chip.classList.add(ok ? 'ok' : 'no');
            const placed = el('span', 'qz-placed ' + (ok ? 'ok' : 'no'), chip.textContent + (ok ? '' : ' → ' + part.cats[+chip.dataset.cat]));
            (ok ? box : cats.children[+chip.dataset.cat]).querySelector('.qz-drop').append(placed);
            mark(ok); pop(box, ok);
          };
          cats.append(box);
        });
        sec.append(words, cats);
      } else if (part.type === 'match') {
        sec.append(el('p', 'qz-help', 'Tap a word on the left, then its meaning on the right.'));
        const grid = el('div', 'qz-match'), L = el('div'), R = el('div');
        let picked = null;
        part.left.forEach((w, i) => {
          const b = el('button', 'qz-chip', (i + 1) + '  ' + w); b.type = 'button'; b.dataset.i = i;
          b.onclick = () => { if (b.disabled) return; L.querySelectorAll('.qz-chip').forEach(x => x.classList.remove('pick')); picked = b; b.classList.add('pick'); };
          L.append(b);
        });
        shuffle(part.right.map((t, j) => [t, j])).forEach(([t, j]) => {
          const b = el('button', 'qz-mean', t); b.type = 'button'; b.dataset.j = j;
          b.onclick = () => {
            if (!picked || b.disabled) return;
            const i = +picked.dataset.i, ok = part.key[i] === j, chip = picked; picked = null;
            chip.classList.remove('pick'); chip.disabled = true; chip.classList.add(ok ? 'ok' : 'no');
            if (ok) { b.disabled = true; b.classList.add('ok'); b.prepend(el('b', '', (i + 1) + ' ✓ ')); }
            else chip.append(el('small', '', ' → ' + part.right[part.key[i]]));
            mark(ok); pop(ok ? b : chip, ok);
          };
          R.append(b);
        });
        grid.append(L, R); sec.append(grid);
      } else if (part.type === 'speak') {
        const t = part.topics[Math.floor(Math.random() * part.topics.length)];
        const topic = el('p', 'qz-topic', t);
        const roll = el('button', 'qz-small', '🎲 Roll again'); roll.type = 'button';
        roll.onclick = () => { if (sec.dataset.done) return; topic.textContent = part.topics[Math.floor(Math.random() * part.topics.length)]; };
        const clock = el('div', 'qz-clock', '0:30'), go = el('button', 'qz-small', '▶ Start: 30 s plan, 1 min talk'); go.type = 'button';
        let timer = 0;
        go.onclick = () => {
          clearInterval(timer); let left = 30, phase = 'Plan';
          const tick = () => { clock.textContent = phase + ' ' + Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0'); if (left-- <= 0) { if (phase === 'Plan') { phase = 'Talk'; left = 60; } else { clearInterval(timer); clock.textContent = 'Time! Tick the PREP parts you used.'; } } };
          tick(); timer = setInterval(tick, 1000);
        };
        const ticks = el('div', 'qz-ticks');
        ['Point', 'Reason', 'Example', 'Point again'].forEach(p => {
          const lab = el('label', 'qz-tick'), box = el('input'); box.type = 'checkbox'; lab.append(box, document.createTextNode(' ' + p)); ticks.append(lab);
        });
        const done = el('button', 'qz-small', 'Score my talk ✓'); done.type = 'button';
        done.onclick = () => {
          if (sec.dataset.done) return; sec.dataset.done = '1'; clearInterval(timer);
          const n = ticks.querySelectorAll('input:checked').length;
          ticks.querySelectorAll('input').forEach(x => (x.disabled = true)); done.disabled = true;
          stars += n; answered += 4; paint(); pop(done, n >= 3);
          sec.append(el('p', 'qz-fb ' + (n >= 3 ? 'ok' : 'no'), '★ ' + n + ' / 4 for your talk. ' + (n === 4 ? 'Full PREP!' : 'Next time add the part you missed.')));
        };
        sec.append(el('p', 'qz-help', 'Pick a topic, plan for 30 seconds, then speak for 1 minute using PREP. Tick each part you used (or ask a partner to tick).'), topic, roll, clock, go, ticks, done);
      }
      body.append(sec);
    });

    const finish = el('button', 'qz-finish', 'See my stars ★'); finish.type = 'button';
    const result = el('div', 'qz-result'); result.hidden = true;
    finish.onclick = () => {
      const rec = load(), prev = rec[id], pct = stars / total;
      rec[id] = { best: Math.max(stars, prev ? prev.best : 0), total, last: stars, attempts: (prev ? prev.attempts : 0) + 1, date: new Date().toISOString() };
      save(rec);
      result.hidden = false; result.replaceChildren();
      const title = pct === 1 ? 'Perfect! ★ Champion' : pct >= .75 ? 'Great work!' : pct >= .5 ? 'Good effort!' : 'Keep practising!';
      result.append(el('h3', '', title), el('p', 'qz-big', '★ ' + stars + ' / ' + total),
        el('p', '', (prev && stars > prev.best ? 'New best score! ' : prev ? 'Your best: ' + rec[id].best + ' / ' + total + '. ' : '') + 'Saved on this device and added to your Hub record.'));
      const again = el('button', 'qz-small', 'Play again ↻'); again.type = 'button'; again.onclick = () => { d.close(); d.remove(); open(id); };
      const back = el('button', 'qz-small', 'Back to the page'); back.type = 'button'; back.onclick = () => d.close();
      result.append(again, back);
      result.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'center' });
      if (pct >= .75) confetti(d);
      updateFab();
    };
    body.append(finish, result);
    d.append(head, body);
    document.body.append(d);
    close.onclick = () => d.close();
    d.addEventListener('close', () => setTimeout(() => d.remove(), 50));
    paint(); d.showModal(); close.focus();
  }

  function shuffle(a) { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }
  function pop(node, ok) { if (reduced()) return; node.animate(ok ? [{ transform: 'scale(1)' }, { transform: 'scale(1.06)' }, { transform: 'scale(1)' }] : [{ transform: 'translateX(0)' }, { transform: 'translateX(-5px)' }, { transform: 'translateX(5px)' }, { transform: 'translateX(0)' }], { duration: 320 }); }
  function confetti(host) {
    if (reduced()) return;
    const c = el('canvas', 'qz-confetti'); host.append(c);
    const ctx = c.getContext('2d'), W = (c.width = host.clientWidth), H = (c.height = host.clientHeight);
    const cols = ['#1d4fbf', '#11a865', '#fbc74b', '#c62f8b', '#5625dc', '#ff7a2f'];
    const bits = Array.from({ length: 140 }, () => ({ x: W / 2 + (Math.random() - .5) * 80, y: H * .35, vx: (Math.random() - .5) * 11, vy: -Math.random() * 11 - 4, r: Math.random() * 6 + 4, c: cols[Math.floor(Math.random() * cols.length)], a: Math.random() * 6, s: (Math.random() - .5) * .3 }));
    let f = 0;
    (function draw() {
      ctx.clearRect(0, 0, W, H);
      bits.forEach(b => { b.x += b.vx; b.y += b.vy; b.vy += .32; b.vx *= .99; b.a += b.s; ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.a); ctx.fillStyle = b.c; ctx.fillRect(-b.r / 2, -b.r / 4, b.r, b.r / 2); ctx.restore(); });
      if (++f < 150) requestAnimationFrame(draw); else c.remove();
    })();
  }
})();
