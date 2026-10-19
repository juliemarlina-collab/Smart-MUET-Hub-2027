/* Smart MUET · shared item bank. Lab content (Reading, Listening) and the
   "Review again" versions of every item a lab can save to smh.review.queue.v1.
   Edit questions here; the labs and review.html both read this file. */
window.SMHBank = (() => {
  "use strict";
  const foodBank = [
    "When the student council opened a small food bank in the library foyer last March, organisers expected about twenty visitors a week.",
    "Within a month, nearly eighty students were collecting basic items such as rice, oats and canned food.",
    "The council responded by moving the food bank to a larger room beside the cafeteria and recruiting volunteers from three different clubs.",
    "Not everyone welcomed the change at first.",
    "Some students worried that the new location was too public.",
    "To protect privacy, volunteers now prepare packs in advance so that visitors can collect them quickly.",
  ];
  const passages = {
    repair: {
      title: "Learning to Repair",
      text: [
        "Every second Saturday, a polytechnic workshop in Negeri Sembilan becomes a repair café. Residents bring broken fans, rice cookers and torn bags, and students from the electrical and fashion programmes help to fix them free of charge.",
        "The idea began as a final-year project, but it has continued long after the original team graduated. Lecturers say the sessions give students something a classroom cannot: customers who explain a problem in their own words. “You have to ask good questions before you touch a screwdriver,” says one volunteer.",
        "Not every item can be saved. When a repair is unsafe, volunteers explain why and suggest where the owner can recycle it. Even so, the organisers estimate that two out of three items leave the workshop working again.",
      ],
      questions: [
        {
          q: "What is the main purpose of the repair café?",
          options: [
            "To sell repaired items to residents",
            "To fix residents’ items for free while giving students practice",
            "To train residents to become electricians",
            "To collect broken items for recycling",
          ],
          answer: 1,
          hint: "Study: “main purpose” needs the overall idea of paragraph 1, not one detail.",
          why: "Paragraph 1 says students “help to fix them free of charge”, and paragraph 2 explains what students gain. Nothing is sold (A), residents are not trained (C), and recycling is only for unsafe items (D).",
          label: "Repair café: main purpose",
        },
        {
          q: "“It has continued long after the original team graduated” suggests that the project…",
          options: [
            "ended when the students left",
            "has become an established activity",
            "was never assessed",
            "needs new lecturers",
          ],
          answer: 1,
          hint: "Analyse: what does “continued long after” tell you about the project now?",
          why: "If it continues after its founders left, it has become a regular, established activity. A contradicts “continued”; C and D are not mentioned.",
          label: "Repair café: inference",
        },
        {
          q: "According to lecturers, what do students gain from the sessions?",
          options: [
            "Experience communicating with real customers",
            "More time with their lecturers",
            "Higher marks for their projects",
            "New tools for the workshop",
          ],
          answer: 0,
          hint: "Circle “lecturers say” and read the rest of that sentence.",
          why: "Lecturers mention “customers who explain a problem in their own words”, and the volunteer adds that you must ask good questions. The other options are not stated.",
          label: "Repair café: detail",
        },
        {
          q: "What happens when an item cannot be repaired safely?",
          options: [
            "Volunteers repair it anyway",
            "The owner pays a small fee",
            "Volunteers explain why and suggest recycling options",
            "It is thrown away at the workshop",
          ],
          answer: 2,
          hint: "Scan for “unsafe”, then read the whole sentence.",
          why: "“Volunteers explain why and suggest where the owner can recycle it.” The owner keeps control of the item; nothing says it is repaired anyway or thrown away there.",
          label: "Repair café: unsafe items",
        },
        {
          q: "“Two out of three items leave the workshop working again.” Which statement is supported?",
          options: [
            "Every item is repaired.",
            "Most items are repaired successfully.",
            "Only a third of visitors return.",
            "Unsafe items are the most common.",
          ],
          answer: 1,
          hint: "Nail: two out of three is more than half. Which option matches without going further?",
          why: "Two out of three means most items. A contradicts “Not every item can be saved”; C and D go beyond the evidence.",
          label: "Repair café: numbers",
        },
      ],
    },
    micro: {
      title: "Micro-volunteering",
      text: [
        "Volunteering once meant giving up whole weekends. Today, many students prefer micro-volunteering: short tasks that take between ten minutes and an hour, often completed online. A student might proofread a charity’s poster, translate a short notice or record an audiobook chapter for visually impaired readers.",
        "Supporters argue that this flexibility allows busy students to contribute without falling behind in their studies. Critics, however, warn that very short tasks rarely build lasting relationships with a community.",
        "A charity coordinator in Seremban partly agrees with the critics. “Micro-tasks bring us new helpers,” she says, “but our most committed volunteers usually started small and then chose to stay longer.” For her, the value of micro-volunteering lies less in the task itself than in what it can lead to.",
      ],
      questions: [
        {
          q: "What is micro-volunteering?",
          options: [
            "Volunteering only at weekends",
            "Short tasks, often done online",
            "Paid work for charities",
            "Long-term community projects",
          ],
          answer: 1,
          hint: "Look for the definition after the colon in paragraph 1.",
          why: "“Short tasks that take between ten minutes and an hour, often completed online.” A describes the old style of volunteering, which the text contrasts with.",
          label: "Micro-volunteering: definition",
        },
        {
          q: "Why do supporters like micro-volunteering?",
          options: [
            "It fits students’ busy schedules.",
            "It builds strong community ties.",
            "It pays students well.",
            "It replaces students’ studies.",
          ],
          answer: 0,
          hint: "Circle “supporters argue” and paraphrase the reason.",
          why: "“This flexibility allows busy students to contribute without falling behind” = it fits busy schedules. B is the critics’ concern in reverse.",
          label: "Micro-volunteering: supporters",
        },
        {
          q: "What is the critics’ main concern?",
          options: [
            "The tasks are too difficult.",
            "The tasks are rarely completed online.",
            "Short tasks seldom create lasting community connections.",
            "Students lose interest in their courses.",
          ],
          answer: 2,
          hint: "“However” introduces the critics. Read the clause after it.",
          why: "“Very short tasks rarely build lasting relationships with a community.” “Rarely” is paraphrased as “seldom”.",
          label: "Micro-volunteering: critics",
        },
        {
          q: "The coordinator’s attitude to the critics’ view is best described as…",
          options: [
            "completely opposed",
            "partly in agreement",
            "uninterested",
            "strongly in favour without reservation",
          ],
          answer: 1,
          hint: "Look for a word that limits how much she agrees.",
          why: "She “partly agrees”: micro-tasks bring new helpers, but committed volunteers usually stay longer. A and D are too absolute.",
          label: "Micro-volunteering: attitude",
        },
        {
          q: "According to the coordinator, the main value of micro-volunteering is…",
          options: [
            "the quality of each task",
            "the number of tasks completed",
            "its potential to lead to a longer commitment",
            "its online format",
          ],
          answer: 2,
          hint: "The final sentence compares “the task itself” with something else.",
          why: "“The value … lies less in the task itself than in what it can lead to” — starting small can lead to staying longer. A is the opposite of what she says.",
          label: "Micro-volunteering: main value",
        },
      ],
    },
  };  const model = [
    ["Hana", "Are we still meeting on Tuesday morning for the study group?"],
    ["Ravi", "That was the plan, but the lab is booked then. Wednesday afternoon is free."],
    ["Hana", "Wednesday’s no good for me. I’ve got a presentation. What about Thursday?"],
    ["Ravi", "Thursday afternoon works. Let’s make it then."],
  ];
  const extracts = {
    d3: [
      ["Man", "Did you finish reading the article for tomorrow’s tutorial?"],
      ["Woman", "I got [[halfway]] before my laptop battery died. [[I’ll read the rest]] on the train."],
    ],
    p3: [
      ["Narrator", "Speaker one."],
      ["Farid", "I took the café job mainly for the pay, to be honest. [[But what surprised me]] is how much [[easier it’s become to talk to strangers]]. At first I could hardly look customers in the eye. Now I actually enjoy chatting with them."],
      ["Narrator", "Speaker two."],
      ["Mei", "My shifts at the bookshop are only on weekends, so I have to [[plan my assignments carefully]] during the week. I used to leave everything until the last minute. Now [[I keep a schedule]], and honestly, my grades have improved because of it."],
      ["Narrator", "Speaker three."],
      ["Kumar", "People assume I’d meet lots of people at the phone repair kiosk, [[but it’s usually just me and the devices]]. What I’ve gained is [[hands-on skill]]. I can replace a screen in fifteen minutes now, which is really relevant to my electronics diploma."],
    ],
    q4: [
      ["Woman", "Shall we take the lift to the fifth floor?"],
      ["Man", "The queue’s huge. [[The stairs would be quicker]], wouldn’t they?"],
    ],
    q5: [
      ["Man", "Your presentation was great. Were you nervous?"],
      ["Woman", "[[My hands were shaking the whole time]], [[but I’m glad nobody noticed]]."],
    ],
  };
  const matchOptions = [
    "better time management",
    "new friendships",
    "confidence with customers",
    "extra money for family",
    "useful technical skills",
  ];
  const matchItems = [
    { speaker: "Speaker 1 · Farid", answer: 2, why: "Farid took the job for pay, but the benefit he stresses is talking to strangers more easily: confidence with customers (C). He never mentions family (D)." },
    { speaker: "Speaker 2 · Mei", answer: 0, why: "Mei plans her assignments and keeps a schedule: better time management (A). Improved grades are a result of that benefit." },
    { speaker: "Speaker 3 · Kumar", answer: 4, why: "Kumar says he does not meet many people (rejecting B) and has gained hands-on skill: useful technical skills (E)." },
  ];
  const mcq = {
    q4: {
      q: "4. What does the man suggest?",
      options: ["Waiting for the lift", "Using the stairs", "Going to another floor"],
      answer: 1,
      hint: "A question tag (“wouldn’t they?”) often makes a suggestion.",
      why: "“The stairs would be quicker, wouldn’t they?” is a polite suggestion. The long queue is his reason for not waiting (A).",
    },
    q5: {
      q: "5. How did the woman feel about her presentation?",
      options: ["Calm throughout", "Nervous but relieved", "Disappointed with her performance"],
      answer: 1,
      hint: "Listen for two feelings joined by “but”.",
      why: "Shaking hands = nervous; “glad nobody noticed” = relieved. Nothing suggests she was disappointed.",
    },
  };
  /* ---------- Review again: every item a lab can save, as one MCQ ---------- */
  const fb = foodBank.join(" ");
  const textCtx = (title, paras) => ({ type: "text", title, paras });
  const audioCtx = (title, lines) => ({ type: "audio", title, lines });
  const items = {
    "reading:drill-evidence": {
      context: textCtx("A food bank that grew", [fb]),
      q: "Which sentence shows that the food bank was more popular than expected?",
      options: [foodBank[0], foodBank[1], foodBank[2]],
      answer: 1,
      why: "Organisers expected about twenty a week, but nearly eighty came within a month. The contrast between the two numbers is the evidence.",
    },
    "reading:drill-paraphrase": {
      context: textCtx("A food bank that grew", [fb]),
      q: "“The council responded by moving the food bank to a larger room.” Which option means the same?",
      options: ["The council made the food bank smaller.", "The council relocated the service to a bigger space.", "The council asked the cafeteria to provide food."],
      answer: 1,
      why: "moving = relocated; a larger room = a bigger space. Same meaning, different words.",
    },
    "reading:drill-reference": {
      context: textCtx("A food bank that grew", [fb]),
      q: "“Not everyone welcomed the change at first.” What does “the change” refer to?",
      options: ["Opening the food bank in March", "Moving the food bank to a room beside the cafeteria", "Preparing packs in advance"],
      answer: 1,
      why: "A reference word usually points back to the sentence just before it, which describes the move. “The new location” in the next sentence confirms it.",
    },
    "listening:drill-predict": {
      context: null,
      q: "Before you listen: what type of answer does “Why is Aina late for class?” need?",
      options: ["a time", "a place", "a reason", "a feeling or opinion"],
      answer: 2,
      why: "“Why” asks for a reason. Predicting the type tells your ears what to catch.",
    },
    "listening:drill-signpost": {
      context: null,
      q: "“I was going to take the bus, but in the end my brother drove me.” How did the speaker get to campus?",
      options: ["By bus", "In her brother’s car", "On foot"],
      answer: 1,
      why: "“But in the end” cancels the bus plan and introduces what really happened. The bus is the distractor.",
    },
    "listening:drill-eliminate": {
      context: audioCtx("Short dialogue", extracts.d3),
      q: "What does the woman mean?",
      options: ["She has finished the article.", "She will complete the reading later.", "She has lost her laptop."],
      answer: 1,
      why: "She got “halfway” and will “read the rest on the train”. A flat battery is not a lost laptop.",
    },
    "writing:drill-structure": {
      context: null,
      q: "Which sentence is the best POINT (topic sentence) for a paragraph about smartphones in class?",
      options: [
        "For example, in a reading lesson, a lecturer can ask groups to look up unfamiliar terms.",
        "Allowing smartphones in class can support learning when their use is guided.",
        "Thus, with clear rules, smartphones become learning tools rather than distractions.",
      ],
      answer: 1,
      why: "The Point states one focused claim. “For example…” is the Example; “Thus…” is the Link.",
    },
    "writing:drill-explain": {
      context: null,
      q: "Point: “Learning a second language can improve students’ job prospects.” Which sentence explains it best?",
      options: [
        "Languages are very important nowadays.",
        "Many employers serve customers across the region, so staff who communicate in more than one language can take on wider responsibilities.",
        "I personally enjoy learning new languages.",
      ],
      answer: 1,
      why: "An explanation shows why or how. Only this option gives a cause that supports job prospects.",
    },
    "writing:drill-tone": {
      context: null,
      q: "You are replying to your club adviser, Puan Salmah. Which opening is most appropriate?",
      options: ["Hey Puan Salmah! What’s up?", "Dear Puan Salmah, thank you for your email about the leadership workshop.", "Yo, got your message about the thing."],
      answer: 1,
      why: "An adviser needs a formal greeting with her title and a clear reference to her email.",
    },
    "speaking:drill-structure": {
      context: null,
      q: "In a PREP response about building friendships, which sentence should come first?",
      options: [
        "For example, photography club members can plan an exhibition together.",
        "I suggest joining a campus club to build stronger friendships.",
        "Therefore, joining a club is a practical way to turn shared interests into lasting friendships.",
      ],
      answer: 1,
      why: "PREP starts with the Point: a direct recommendation. The example comes third and “Therefore…” closes.",
    },
    "speaking:drill-example": {
      context: null,
      q: "Which example best supports “clubs help students cooperate”?",
      options: [
        "My campus has many different clubs.",
        "In a photography club, students plan an exhibition together and divide tasks to meet a shared deadline.",
        "Friendship is very important to everyone.",
      ],
      answer: 1,
      why: "Planning an exhibition and dividing tasks show cooperation in action. The others only state facts or opinions.",
    },
    "speaking:drill-connection": {
      context: null,
      q: "“Students can learn to cooperate. _____, club members can organise a campus exhibition together.”",
      options: ["However", "For example", "Therefore"],
      answer: 1,
      why: "The second sentence illustrates the first, so “For example”. However = contrast; therefore = result.",
    },
  };
  Object.entries(passages).forEach(([pid, p]) =>
    p.questions.forEach((q, i) => {
      items["reading:" + pid + "-q" + (i + 1)] = {
        context: textCtx(p.title, p.text),
        q: q.q,
        options: q.options,
        answer: q.answer,
        why: q.why,
      };
    }),
  );
  matchItems.forEach((m, i) => {
    items["listening:p3-" + (i + 1)] = {
      context: audioCtx("Three students talk about part-time jobs", extracts.p3),
      q: "What is the main benefit " + m.speaker + " mentions?",
      options: matchOptions,
      answer: m.answer,
      why: m.why,
    };
  });
  Object.entries(mcq).forEach(([id, m]) => {
    items["listening:" + id] = {
      context: audioCtx("Short dialogue", extracts[id]),
      q: m.q.replace(/^\d+\.\s*/, ""),
      options: m.options,
      answer: m.answer,
      why: m.why,
    };
  });
  /* ---------- Arcade content (08-arcade). Missed items become Review again questions. ---------- */
  const PEEL_PARTS = ["Point", "Explain", "Example", "Link"],
    PREP_PARTS = ["Point", "Reason", "Example", "Point again"];
  const arcade = {
    sort: [
      {
        id: "peel-internship",
        tech: "PEEL",
        skill: "writing",
        topic: "Should internships be compulsory?",
        parts: PEEL_PARTS,
        lines: [
          "Internships help polytechnic students become job-ready before they graduate.",
          "This is because they practise workplace skills that a classroom cannot fully teach.",
          "For example, an electrical student on placement learns to read wiring plans under a supervisor’s guidance.",
          "Therefore, internships should remain a compulsory part of every diploma.",
        ],
      },
      {
        id: "peel-social",
        tech: "PEEL",
        skill: "writing",
        topic: "Is social media useful for learning?",
        parts: PEEL_PARTS,
        lines: [
          "Social media can be a useful learning tool for young people.",
          "It gives them quick access to experts, tutorials and study groups at no cost.",
          "For instance, many students follow English teachers online to pick up new vocabulary every day.",
          "In short, when used wisely, social media supports learning rather than replacing it.",
        ],
      },
      {
        id: "prep-health",
        tech: "PREP",
        skill: "speaking",
        topic: "What is the best way to stay healthy?",
        parts: PREP_PARTS,
        lines: [
          "I believe regular exercise is the best way to stay healthy.",
          "This is because it strengthens the heart and also reduces stress.",
          "For example, my friends and I jog around the campus lake three evenings a week, and we feel more energetic.",
          "That is why I think exercise should be part of every student’s routine.",
        ],
      },
      {
        id: "peel-transport",
        tech: "PEEL",
        skill: "writing",
        topic: "How can cities reduce traffic jams?",
        parts: PEEL_PARTS,
        lines: [
          "Improving public transport is the best way to reduce traffic jams in cities.",
          "When buses and trains are frequent and affordable, fewer people need to drive to work.",
          "In the Klang Valley, the MRT lines have already given thousands of commuters an alternative to driving.",
          "Thus, investing in public transport benefits both commuters and the environment.",
        ],
      },
      {
        id: "prep-club",
        tech: "PREP",
        skill: "speaking",
        topic: "What is the most useful activity outside class?",
        parts: PREP_PARTS,
        lines: [
          "In my view, joining a club is the most useful activity outside class.",
          "The main reason is that it builds teamwork and communication skills.",
          "For instance, in the debate club I learnt to speak confidently in front of a crowd.",
          "So, I would encourage every new student to join at least one club.",
        ],
      },
    ],
    slice: [
      { id: "s1", skill: "listening", clue: "Let’s meet at the library at three. Actually, it’s being cleaned today, so the canteen is better.", q: "Where will they meet?", options: ["The library", "The canteen", "The lecture hall"], answer: 1, traps: { 0: "Changed-plan trap: the library is mentioned first, then rejected after “Actually”.", 2: "Not-mentioned trap: nobody says the lecture hall." }, why: "“Actually” signals a change of plan. The final decision is the canteen." },
      { id: "s2", skill: "listening", clue: "I was going to take the bus, but my brother offered me a lift, so I’ll go with him.", q: "How will the speaker travel?", options: ["By bus", "By train", "In his brother’s car"], answer: 2, traps: { 0: "Changed-plan trap: the bus was the old plan; “but” introduces the new one.", 1: "Not-mentioned trap: the train is never mentioned." }, why: "“but my brother offered me a lift, so I’ll go with him”: the final plan is his brother’s car." },
      { id: "s3", skill: "listening", clue: "The talk was meant to start at nine, but the speaker’s flight was delayed, so we’ve moved it to eleven.", q: "When will the talk start?", options: ["9 a.m.", "10 a.m.", "11 a.m."], answer: 2, traps: { 0: "Changed-plan trap: nine was the original time.", 1: "Guessing trap: ten is never said; it only sits between the two times." }, why: "The talk was moved to eleven. Listen to the end of the sentence for the final decision." },
      { id: "s4", skill: "listening", clue: "Honestly, I expected the workshop to be boring, but it turned out to be really useful.", q: "How does she feel about the workshop?", options: ["Bored", "Pleasantly surprised", "Angry"], answer: 1, traps: { 0: "Expectation trap: “boring” was what she expected, not what happened.", 2: "Not-mentioned trap: nothing suggests anger." }, why: "Expected boring, but “really useful”: she was pleasantly surprised." },
      { id: "s5", skill: "listening", clue: "Most people think the stadium is the main attraction here. However, what really brings tourists in is the night market.", q: "What attracts tourists most?", options: ["The stadium", "The night market", "The beach"], answer: 1, traps: { 0: "Contrast trap: “However” rejects the popular belief about the stadium.", 2: "Not-mentioned trap: the beach is never mentioned." }, why: "“However” introduces the speaker’s real point: the night market." },
      { id: "s6", skill: "reading", clue: "Only students with a valid matric card may borrow laptops, and each loan lasts three days.", q: "Who can borrow a laptop?", options: ["Any visitor to the library", "Students with a valid matric card", "Lecturers only"], answer: 1, traps: { 0: "Contradiction trap: “Only students” rules out other visitors.", 2: "Own-knowledge trap: lecturers are not mentioned in the text." }, why: "The text says “Only students with a valid matric card”." },
      { id: "s7", skill: "reading", clue: "The café’s profits rose slightly after it began offering vegetarian meals, though the owner says other factors were also involved.", q: "What can we infer?", options: ["Vegetarian meals were the only reason profits rose", "Vegetarian meals may have helped profits rise", "The café’s profits fell"], answer: 1, traps: { 0: "Too-far trap: “only” goes beyond the text; other factors were involved.", 2: "Contradiction trap: profits rose, not fell." }, why: "“Rose slightly … other factors were also involved” supports a careful inference: the meals may have helped." },
      { id: "s8", skill: "reading", clue: "Volunteers clean the beach every month, but most of the rubbish now comes from rivers, not visitors.", q: "Where does most of the rubbish come from?", options: ["Visitors", "Rivers", "Fishing boats"], answer: 1, traps: { 0: "Word-match trap: “visitors” appears in the text, but after “not”.", 2: "Own-knowledge trap: boats are a reasonable guess, but the text does not say so." }, why: "“most of the rubbish now comes from rivers, not visitors”." },
      { id: "s9", skill: "reading", clue: "Amira emailed the manager about the faulty printer. He replied that it would be replaced on Monday.", q: "Who does “He” refer to?", options: ["Amira", "The manager", "A technician"], answer: 1, traps: { 0: "Reference trap: Amira sent the email; “He” is the person who replied.", 2: "Not-mentioned trap: no technician appears in the text." }, why: "Amira emailed the manager, so the person who replied is the manager." },
      { id: "s10", skill: "reading", clue: "Enrolment in the evening class has doubled since the fees were reduced.", q: "Which sentence means the same?", options: ["More people joined after the class became cheaper", "The fees doubled after more people joined", "The evening class was cancelled"], answer: 0, traps: { 1: "Word-match trap: it reuses “doubled” and “fees” but reverses the meaning.", 2: "Not-stated trap: nothing says the class was cancelled." }, why: "Enrolment doubled = more people joined; fees reduced = cheaper. Same meaning, different words." },
    ],
  };
  arcade.sort.forEach((r) =>
    r.lines.forEach((line, i) => {
      items[r.skill + ":arcade-" + r.id + "-" + (i + 1)] = {
        context: textCtx(r.tech + " paragraph · " + r.topic, r.lines),
        q: "Which part of " + r.tech + " is this sentence? “" + line + "”",
        options: r.parts,
        answer: i,
        why: "In " + r.tech + ", this sentence is the " + r.parts[i] + ". " + ["It states the main idea.", r.tech === "PEEL" ? "It explains why the point is true." : "It gives the reason.", "It gives a specific case.", r.tech === "PEEL" ? "It links back to the question." : "It repeats the point to close."][i],
      };
    }),
  );
  arcade.slice.forEach((s) => {
    items[s.skill + ":arcade-slice-" + s.id] = {
      context: textCtx(s.skill === "listening" ? "You hear (transcript)" : "You read", [s.clue]),
      q: s.q,
      options: s.options,
      answer: s.answer,
      why: s.why,
    };
  });
  /* Monster Punch: quick-fire questions from all four papers (boss battle after each Vault level) */
  arcade.boss = [
    { id: "l1", skill: "listening", clue: "The shuttle bus leaves every twenty minutes, but after six it only comes once an hour.", q: "How often does the bus run after 6 p.m.?", options: ["Every twenty minutes", "Once an hour", "It stops running"], answer: 1, why: "“but after six it only comes once an hour”: the detail after “but” answers the question." },
    { id: "l2", skill: "listening", clue: "I’d love to join the trip, but I’ve got a lab report due on Friday.", q: "What does the speaker mean?", options: ["She will join the trip", "She cannot join because of her work", "She has finished her report"], answer: 1, why: "“I’d love to … but” is a polite refusal. The lab report is her reason." },
    { id: "l3", skill: "listening", clue: "Sorry, did you say room 3B? Oh, 3D. Got it, thanks.", q: "Which room is correct?", options: ["3B", "3D", "3E"], answer: 1, why: "The speaker checks 3B, is corrected, then confirms 3D." },
    { id: "l4", skill: "listening", clue: "We looked at three venues. The hall was too small and the café too noisy, so in the end we chose the garden.", q: "Which words tell you the final decision is coming?", options: ["We looked at", "too noisy", "so in the end"], answer: 2, why: "“so in the end” signals the conclusion. In CLUE, Understand the final decision, not the first idea." },
    { id: "l5", skill: "listening", clue: "The workshop is free for students, although materials cost ten ringgit.", q: "What do students need to pay for?", options: ["The workshop", "The materials", "Nothing at all"], answer: 1, why: "“although materials cost ten ringgit”: the workshop is free, the materials are not." },
    { id: "l6", skill: "listening", clue: "Most of us voted for the beach, but since it might rain, we’re going to the museum instead.", q: "Where will the group go?", options: ["The beach", "The museum", "Nowhere"], answer: 1, why: "“instead” marks the changed plan: the museum." },
    { id: "k1", skill: "speaking", q: "In the group discussion, which line invites a quiet member to speak?", options: ["What do you think about this, Hafiz?", "You’re wrong about that.", "Let me finish first."], answer: 0, why: "Inviting others by name shows interaction, which examiners reward in Part 2." },
    { id: "k2", skill: "speaking", q: "Which is the most polite way to disagree?", options: ["That’s a fair point, but I see it differently.", "No, that’s silly.", "Whatever you say."], answer: 0, why: "Acknowledge the idea first, then give your view. It keeps the discussion respectful." },
    { id: "k3", skill: "speaking", q: "In PREP, what comes right after your Point?", options: ["A reason", "Your conclusion", "A new topic"], answer: 0, why: "PREP = Point, Reason, Example, Point again." },
    { id: "k4", skill: "speaking", q: "Which is the strongest way to start your Part 1 answer?", options: ["I believe the most useful choice is a campus club.", "Um, I don’t really know much about this.", "Can I have more time, please?"], answer: 0, why: "State your point clearly in the first sentence, then develop it." },
    { id: "k5", skill: "speaking", q: "Near the end of the discussion, which line sums up the group’s view?", options: ["So, it seems we all agree that…", "Anyway, next question.", "I think I’m right, so that’s it."], answer: 0, why: "Summarising what the group agrees on is a strong way to conclude together." },
    { id: "k6", skill: "speaking", q: "Which sentence supports a point with an example?", options: ["For instance, my cousin saves RM50 a month by cycling.", "This is very important.", "In conclusion, cycling is good."], answer: 0, why: "A specific, real case (who, what, how much) makes your reason convincing." },
    { id: "r1", skill: "reading", clue: "The library’s new opening hours apply from 1 March, except on public holidays.", q: "When do the new hours NOT apply?", options: ["On public holidays", "From 1 March", "At weekends"], answer: 0, why: "“except on public holidays” limits the rule." },
    { id: "r2", skill: "reading", clue: "Despite heavy rain, the charity run attracted over 500 runners.", q: "What does “despite” show here?", options: ["A contrast", "A cause", "An example"], answer: 0, why: "Heavy rain would keep people away, yet many came: “despite” shows contrast." },
    { id: "r3", skill: "reading", clue: "Researchers found that students who slept more scored higher, but they warn this does not prove that sleep causes better results.", q: "What do the researchers say?", options: ["More sleep definitely improves scores", "There is a link, but the cause is not proven", "Sleep has no effect on scores"], answer: 1, why: "Option A goes too far; C contradicts the finding. The warning shows a link, not proof." },
    { id: "r4", skill: "reading", clue: "Hamid lent Ravi his notes because Ravi had missed the lecture.", q: "Who missed the lecture?", options: ["Hamid", "Ravi", "Both of them"], answer: 1, why: "The text states it directly: “because Ravi had missed the lecture”." },
    { id: "r5", skill: "reading", clue: "She was reluctant to speak at first, but soon joined in.", q: "What does “reluctant” mean?", options: ["Unwilling", "Excited", "Unable"], answer: 0, why: "“at first … but soon joined in” shows she did not want to speak at the start." },
    { id: "r6", skill: "reading", clue: "Sales of e-scooters tripled last year.", q: "Which sentence means the same?", options: ["Three times as many e-scooters were sold", "E-scooter sales fell by a third", "Three companies sold e-scooters"], answer: 0, why: "tripled = became three times as many." },
    { id: "w1", skill: "writing", q: "Which is the best opening for an email to your lecturer?", options: ["Dear Dr Lim,", "Hey Dr Lim!", "Yo Sir,"], answer: 0, why: "A formal email to a lecturer needs a formal greeting: “Dear + title + name”." },
    { id: "w2", skill: "writing", q: "Which is a clear topic sentence about the benefits of part-time work?", options: ["Part-time work teaches students to manage their time.", "Many people have jobs.", "My cousin works at a shop."], answer: 0, why: "A topic sentence gives one focused main idea (the P in PEEL)." },
    { id: "w3", skill: "writing", q: "Which linker adds a second reason?", options: ["Furthermore,", "However,", "For example,"], answer: 0, why: "“Furthermore” adds; “However” contrasts; “For example” introduces an example." },
    { id: "w4", skill: "writing", q: "What is the minimum length for Writing Task 2?", options: ["250 words", "100 words", "150 words"], answer: 0, why: "Task 2 (the extended essay) needs at least 250 words." },
    { id: "w5", skill: "writing", q: "Which sentence is a Link in a PEEL paragraph?", options: ["Therefore, part-time work prepares students for their future careers.", "For example, Aina works at a café on weekends.", "This is because they learn responsibility."], answer: 0, why: "The Link ties the paragraph back to the question, often with “Therefore” or “Thus”." },
    { id: "w6", skill: "writing", q: "Which is the most formal alternative to “a lot of”?", options: ["a large number of", "tons of", "loads of"], answer: 0, why: "Academic essays avoid informal phrases like “tons of” and “loads of”." },
  ];
  arcade.boss.forEach((b) => {
    items[b.skill + ":arcade-boss-" + b.id] = {
      context: b.clue ? textCtx(b.skill === "listening" ? "You hear (transcript)" : "You read", [b.clue]) : undefined,
      q: b.q,
      options: b.options,
      answer: b.answer,
      why: b.why,
    };
  });
  const skillOf = (id) => id.split(":")[0];
  return {
    reading: { foodBank, passages },
    listening: { model, extracts, matchOptions, matchItems, mcq },
    arcade,
    item: (id) => (items[id] ? { id, skill: skillOf(id), ...items[id] } : null),
    ids: () => Object.keys(items),
  };
})();
