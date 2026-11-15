// ===== EDIT YOUR CONTENT HERE =====
// Page 2: about text + editing works [title, video file]
const ABOUT = [
  "I'm a creative and detail-oriented video editor with a passion for visual storytelling and digital content creation.",
  "With 2 years of practical experience, I have worked on different types of video projects, including wedding films, event videos, promotional content, and social media reels.",
  "I continuously explore new editing techniques, visual effects, transitions, and AI-powered tools to improve my creative workflow and deliver quality results.",
  "<b>My goal:</b> To create impactful visual content that captures attention, communicates emotions, and tells stories."
];

// ==========================================================================
// MY EDITS - GALLERY CONFIGURATION
// 4 Vertical (9:16 Portrait) videos first, then 4 Landscape (16:9) videos.
// Orientations are automatically verified & adjusted via video metadata!
// ==========================================================================
const GALLERY = [
  // ---------- 4 LANDSCAPE (HORIZONTAL 16:9) VIDEOS FIRST ----------
  {
    cat: "Reels",
    kind: "video",
    title: "Birthday Celebration",
    src: "assets/videos/reel1.mp4",
    hint: "portrait"
  },
  {
    cat: "Reels",
    kind: "video",
    title: "Instagram Reel • Creative Story",
    src: "assets/videos/reel2.mp4",
    hint: "portrait"
  },
  {
    cat: "Wedding Films",
    kind: "video",
    title: "Wedding Teaser Story",
    src: "assets/videos/wedding1.mp4",
    hint: "portrait"
  },
  {
    cat: "Wedding Films",
    kind: "video",
    title: "Wedding Teaser",
    src: "assets/videos/promo1.mp4",
    hint: "portrait"
  },

  // ----------  4 VERTICAL (PORTRAIT 9:16) VIDEOS SECOND ----------
  {
    cat: "Promos & Trailers",
    kind: "video",
    title: "Offer Reel",
    src: "assets/videos/v6.mp4",
    hint: "portrait"
  },
  {
    cat: "Reels",
    kind: "video",
    title: "Reel",
    src: "assets/videos/v3.mp4",
    hint: "portrait"
  },
  {
    cat: "Promos & Trailers",
    kind: "video",
    title: "Offers Reel",
    src: "assets/videos/v5.mp4",
    hint: "portrait"
  },
  {
    cat: "Reels",
    kind: "video",
    title: "Reel",
    src: "assets/videos/v7.mp4",
    hint: "portrait"
  }

];

// Page 3: skills [icon, text, subtopics]
const SKILLGROUPS = [
  [
    "🎬",
    "Video Editing",
    [
      ["💍", "Wedding Film Editing"],
      ["🎥", "Cinematic Video Editing"],
      ["🎞️", "Highlight Video Editing"],
      ["✂️", "Trailer Editing"],
      ["📱", "Instagram Reels & Shorts"],
      ["🎨", "Color Grading"],
      ["⚡", "Video Transitions"],
      ["🎧", "Audio Synchronization"],
      ["📖", "Storytelling & Sequence Editing"]
    ]
  ],
  [
    "✨",
    "Creative Skills",
    [
      ["💡", "Creative Storytelling"],
      ["👁️", "Visual Composition"],
      ["🌀", "Motion Graphics"],
      ["🔤", "Typography & Text Animation"],
      ["🧠", "Creative Thinking"],
      ["🎯", "Content Creation"],
      ["📢", "Social Media Video Design"]
    ]
  ],
  [
    "🤖",
    "AI & Technology",
    [
      ["🪄", "AI-Assisted Video Editing"],
      ["✍️", "AI Content Creation"],
      ["🌐", "AI-Powered Web Development"],
      ["💬", "Prompt Engineering"],
      ["⚙️", "AI Tools & Automation"],
      ["💻", "Basic Web Development"]
    ]
  ]
];

// Page 4: software (logo keys: pr, ae, cc, cv)
const SOFT = [
  ["Adobe Premiere Pro", "pr", "assets/logos/premiere.png"],
  ["Adobe After Effects", "ae", "assets/logos/aftereffects.png"],
  ["CapCut", "cc", "assets/logos/capcut.png"],
  ["Canva", "cv", "assets/logos/canva.png"]
];

// Page 5: experience
const EXP = {
  role: "Video Editor | Freelance / Part-Time",
  years: 3,
  points: [
    "Edited wedding films, cinematic trailers, and highlight videos.",
    "Created engaging Instagram Reels and short-form content.",
    "Worked on birthday, baby shower, and special event videos.",
    "Developed creative transitions, visual effects, and sound design.",
    "Explored After Effects for motion graphics and 3D-style effects.",
    "Focused on delivering quality videos within deadlines."
  ]
};

// Page 6: creative approach
const APPROACH = [
  ["Understand", "Understanding the client's vision and requirements."],
  ["Create", "Turning raw footage into creative visual stories."],
  ["Refine", "Improving colors, audio, transitions, and visual details."],
  ["Deliver", "Delivering polished and engaging final videos."]
];

// Page 7: contact
const CONTACT = {
  intro: "Have a project in mind? Let's turn your ideas into something creative and memorable.",
  avail: "I'm available for freelance video editing, wedding films, promotional videos, and social media content creation.",
  tag: "Let's Create Something Amazing!",
  email: "sandyyluvx007@gmail.com",
  phone: "9042483864",
  insta: "sandyy._luvx"
};

// Page 1 (intro)
const C = {
  word: "PORTFOLIO",
  hi: "Hi I am",
  name: "Santhosh S",
  cardTitle: "Professional Summary",
  summary: "Turning Ideas into Visual Stories. I'm a passionate Video Editor and Creative Content Creator with 2 years of experience, specializing in cinematic wedding films, Instagram Reels, promotional videos, trailers and event highlights. I believe every video has a story, and my goal is to make every frame meaningful.",
  skills: [
    ["Wedding Films", "#c6ff2e"],
    ["Instagram Reels", "#33c9ff"],
    ["Promo Videos", "#3d6bff"],
    ["Trailers", "#d62bff"],
    ["Color Grading", "#c99084"],
    ["Motion Graphics", "#ff2b3a"]
  ]
};

// ==================================
const $ = s => document.querySelector(s);
const stage = $('#stage');
function fit() {
  const s = Math.min(innerWidth / 1280, innerHeight / 720);
  gsap.set(stage, { scale: s, x: (innerWidth - 1280 * s) / 2, y: (innerHeight - 720 * s) / 2 });
}
addEventListener('resize', fit);
fit();
document.body.classList.add('lock');

// build title letters
const title = $('#title');
[...C.word].forEach(ch => {
  const l = document.createElement('span');
  l.className = 'l';
  l.dataset.l = ch;
  l.innerHTML = `<i>${ch}</i>`;
  $('#tw').appendChild(l);
});
title.insertAdjacentHTML('beforeend', '<div id="shine"></div>');
const letters = gsap.utils.toArray('.l'), fills = gsap.utils.toArray('.l i');
$('#skills').innerHTML = C.skills.map(([t, c]) => `<li style="--c:${c}"><s>✦</s><span></span></li>`).join('');

// fit PORTFOLIO to ~960px wide and ~380px tall
async function fitTitle() {
  try { await document.fonts.load('400 200px Anton'); await document.fonts.ready; } catch (e) {}
  const tw = $('#tw'), FS = 200;
  const total = letters.reduce((s, l) => s + l.offsetWidth - 4, 0);
  const fs = FS * 960 / total;
  const cv = document.createElement('canvas').getContext('2d');
  cv.font = fs + 'px Anton, Impact, sans-serif';
  const m = cv.measureText('H'), capH = m.actualBoundingBoxAscent || fs * 0.72;
  const A = m.fontBoundingBoxAscent || fs * 0.95, D = m.fontBoundingBoxDescent || fs * 0.25;
  const capCenter = (fs - (A + D)) / 2 + A - capH / 2;
  letters.forEach(l => { l.style.fontSize = fs + 'px'; l.style.lineHeight = fs + 'px'; });
  tw.style.height = fs + 'px';
  tw.style.top = (280 - capCenter) + 'px';
  tw.style.transformOrigin = '50% ' + capCenter + 'px';
  gsap.set(tw, { scaleY: 380 / capH });
}

// typewriter helper
const type = (tl, el, text, at, dur) => {
  const o = { n: 0 };
  tl.to(o, {
    n: text.length,
    duration: dur ?? text.length * 0.045,
    ease: 'none',
    onUpdate: () => el.textContent = text.slice(0, Math.round(o.n))
  }, at);
};

const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
// 1) letters reveal: white outline leads, neon fill follows
letters.forEach((l, i) => {
  tl.to(l, { clipPath: 'inset(0 0% 0 0)', duration: 0.22, ease: 'none' }, 0.1 + i * 0.19);
  tl.to(fills[i], { clipPath: 'inset(0 0% 0 0)', duration: 0.3, ease: 'none' }, 0.1 + i * 0.19 + 0.12);
});
// 2) shine sweep
tl.fromTo('#shine', { x: 0 }, { x: 1300, duration: 1.1, ease: 'power1.inOut' }, 1.8);
tl.to('.tag', { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 }, 2.0);
// 3) person rises + red flash
tl.fromTo('#me', { y: 40, opacity: 0, filter: 'blur(12px)' }, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' }, 2.6);
tl.to('#flash', { opacity: 1, duration: 0.12 }, 2.7).to('#flash', { opacity: 0, duration: 0.6, ease: 'power2.in' }, 2.9);
tl.fromTo('#title', { scale: 1.06 }, { scale: 1, duration: 1.4 }, 2.6);
// 4) typing: hi, name, card, summary
type(tl, $('#hi'), C.hi, 3.6, 0.5);
type(tl, $('#name'), C.name, 4.0, 0.9);
tl.fromTo('#card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, 4.1);
type(tl, $('#cardTitle'), C.cardTitle, 4.5, 0.7);
tl.fromTo('#paper', { opacity: 1, scaleX: 0 }, { scaleX: 1, duration: 0.5 }, 4.8);
type(tl, $('#paper'), C.summary, 5.2, 2.2);
// 5) camera zoom in
tl.to('#cam', { scale: 1.45, x: -120, y: -70, duration: 1.4, ease: 'power2.inOut' }, 5.0);
tl.fromTo('#badge', { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(2)' }, 5.6);
// 6) skills typed one by one
gsap.utils.toArray('#skills li').forEach((li, i) => {
  const t = 5.9 + i * 0.45;
  tl.to(li.querySelector('s'), { opacity: 1, scale: 1, rotate: 0, duration: 0.35, ease: 'back.out(3)' }, t);
  type(tl, li.querySelector('span'), C.skills[i][0], t + 0.1, 0.5);
});
// 7) camera zoom out
tl.to('#cam', { scale: 1, x: 0, y: 0, duration: 1.2, ease: 'power2.inOut' }, 8.5);
// 8) intro done -> HOLD on page 1 (no auto move). Show arrow + dots.
tl.add(() => { ready = true; }, 10.2);
tl.to('#arrow,#dots', { opacity: 1, duration: 0.8 }, 10.2);

// ===== PAGES 3+ & NAVIGATION =====
const LOGO = {
  pr: '<svg viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#00005b"/><text x="32" y="43" font-family="Arial,sans-serif" font-weight="700" font-size="30" fill="#9999ff" text-anchor="middle">Pr</text></svg>',
  ae: '<svg viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#00005b"/><text x="32" y="43" font-family="Arial,sans-serif" font-weight="700" font-size="30" fill="#d291ff" text-anchor="middle">Ae</text></svg>',
  cc: '<svg viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#000"/><text x="32" y="37" font-family="Arial,sans-serif" font-weight="700" font-size="13" fill="#fff" text-anchor="middle">CapCut</text></svg>',
  cv: '<svg viewBox="0 0 64 64"><defs><linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00c4cc"/><stop offset="1" stop-color="#7d2ae8"/></linearGradient></defs><circle cx="32" cy="32" r="32" fill="url(#cg)"/><text x="32" y="43" font-family="Georgia,serif" font-style="italic" font-weight="700" font-size="30" fill="#fff" text-anchor="middle">C</text></svg>'
};
const logo = s => `<img src="${s[2]}" alt="${s[0]}" onerror="this.outerHTML=LOGO['${s[1]}']">`, em = CONTACT.email;
const renderSub = i => `<span class="it chip">${Array.isArray(i) ? `<i class="ci">${i[0]}</i><span>${i[1]}</span>` : `<i class="ci">✦</i><span>${i}</span>`}</span>`;

const PAGES = [
  {
    dk: 1,
    w: "SKILLS",
    c: [
      `<h2>My <em>Skills</em></h2><div class="skills-wrap">${SKILLGROUPS.map(g => `<div class="skill-group"><h3 class="sg it"><span class="sgi">${g[0]}</span> ${g[1]}</h3><div class="chips sm">${(g[2] || []).map(renderSub).join('')}</div></div>`).join('')}</div>`,
      `<h2>Software &amp; <em>Tools</em></h2><div class="logos">${SOFT.map(s => `<div class="box it logo">${logo(s)}<h3>${s[0]}</h3></div>`).join('')}</div>`
    ]
  },
  {
    dk: 1,
    t: 1,
    w: "CONTACT",
    c: [
      `<h2>My <em>Experience</em></h2><h3 class="role it">${EXP.role}</h3><div class="stats"><div class="it"><span data-n="${EXP.years}">0</span>+<small>Years of Experience</small></div></div><ul class="pl">${EXP.points.map(p => `<li class="it">${p}</li>`).join('')}</ul>`,
      `<h2>Creative <em>Approach</em></h2>${APPROACH.map((p, i) => `<div class="box it ap"><b>0${i + 1}</b><div><h3>${p[0]}</h3><p>${p[1]}</p></div></div>`).join('')}`,
      `<h2>Let’s Work <em>Together</em></h2><p class="info it">${CONTACT.intro}</p><p class="info it">${CONTACT.avail}</p><a class="big it" href="mailto:${em}">${em}</a><div class="info it">📞 ${CONTACT.phone}<br>Instagram @${CONTACT.insta}</div><div class="it"><a class="cta" id="hireMeBtn" href="#hire">Hire Me</a><a class="cta o" href="tel:+91${CONTACT.phone}">Call</a><a class="cta o" target="_blank" rel="noopener" href="https://wa.me/91${CONTACT.phone}">WhatsApp</a><a class="cta o" target="_blank" rel="noopener" href="https://instagram.com/${CONTACT.insta}">Instagram</a></div><div class="tg it">${CONTACT.tag}</div>`
    ]
  }
];

const els = [null, $('#page2')];
PAGES.forEach(p => {
  const s = document.createElement('section');
  s.className = 'pg' + (p.dk ? ' dk' : '') + (p.t ? ' tight' : '');
  s.dataset.w = p.w || '';
  s.innerHTML = p.c.map(x => `<div class="col">${x}</div>`).join('');
  document.body.appendChild(s);
  els.push(s);
});

$('#jl').innerHTML = ABOUT.map(p => `<p class="ab it">${p}</p>`).join('');

let galOpen = false;

// ==========================================================================
// DYNAMIC VIDEO ORIENTATION DETECTION & CARD CREATION
// Intelligently detects video dimensions via loadedmetadata:
// - width > height: Landscape (16:9)
// - height > width: Portrait (9:16)
// - width == height: Square (1:1)
// Thumbnail seeker: seeks to 0.3s so local videos never display black screens!
// ==========================================================================
function card(g, full) {
  const f = document.createElement('figure');
  const initialClass = g.hint === 'portrait' ? 'orientation-portrait v' : (g.hint === 'landscape' ? 'orientation-landscape h' : '');
  f.className = 'card ' + initialClass;
  f.dataset.title = g.title;

  const playSvg = '<div class="play-btn" aria-hidden="true"><svg viewBox="0 0 24 24"><polygon points="7,4 20,12 7,20"/></svg></div>';
  const orientPill = '<div class="orient-tag">' + (g.hint === 'portrait' ? '9:16 Vertical' : '16:9 Landscape') + '</div>';
  const cap = `<figcaption>${g.title}</figcaption>`;

  if (g.kind === 'video') {
    f.innerHTML = `<video src="${g.src}" muted loop playsinline preload="metadata"></video>${playSvg}${orientPill}${cap}`;
    const v = f.querySelector('video');
    const tag = f.querySelector('.orient-tag');

    // Automatically detect video dimensions from metadata
    function handleMetadata() {
      const w = v.videoWidth;
      const h = v.videoHeight;
      if (!w || !h) return;

      f.classList.remove('orientation-portrait', 'orientation-landscape', 'orientation-square', 'v', 'h', 'sq');
      const ratio = w / h;

      if (ratio < 0.88) {
        // Height > Width -> Portrait (9:16)
        f.classList.add('orientation-portrait', 'v');
        f.dataset.orientation = 'portrait';
        if (tag) tag.textContent = '9:16 Vertical';
      } else if (ratio > 1.15) {
        // Width > Height -> Landscape (16:9)
        f.classList.add('orientation-landscape', 'h');
        f.dataset.orientation = 'landscape';
        if (tag) tag.textContent = '16:9 Landscape';
      } else {
        // Width == Height -> Square (1:1)
        f.classList.add('orientation-square', 'sq');
        f.dataset.orientation = 'square';
        if (tag) tag.textContent = '1:1 Square';
      }

      // Thumbnail generation fix: seek to 0.3s so browser displays a real frame instead of a black screen
      if (!v.poster && (v.currentTime === 0 || isNaN(v.currentTime))) {
        try {
          v.currentTime = Math.min(0.35, (v.duration || 1) * 0.1);
        } catch (e) {}
      }
    }

    v.addEventListener('loadedmetadata', handleMetadata);
    if (v.readyState >= 1) handleMetadata();

    v.addEventListener('error', () => {
      const d = document.createElement('div');
      d.className = 'ph';
      d.innerHTML = `Add <b>${g.src}</b>`;
      v.replaceWith(d);
    });

    // Hover preview (muted looping)
    f.onmouseenter = () => {
      if (!f.classList.contains('on')) v.play().catch(() => {});
    };
    f.onmouseleave = () => {
      if (!f.classList.contains('on')) {
        v.pause();
        try { v.currentTime = 0.35; } catch (e) {}
      }
    };

    // Full playback on click
    if (full) {
      f.onclick = e => {
        if (e.target.closest('button')) return;
        f.classList.add('on');
        v.controls = true;
        v.muted = false;
        v.play().catch(() => {});
      };
    }
  } else if (g.kind === 'youtube') {
    f.classList.add('orientation-landscape', 'h');
    f.dataset.orientation = 'landscape';
    const thumb = g.id
      ? `<img src="https://img.youtube.com/vi/${g.id}/hqdefault.jpg" alt="${g.title}" onerror="this.style.display='none'">`
      : `<div class="ph"><b>${g.title}</b><br><small>Add your YouTube Video ID in script.js</small></div>`;
    f.innerHTML = thumb + playSvg + orientPill + cap;

    if (full && g.id) {
      f.onclick = () => {
        f.classList.add('on');
        f.innerHTML = `<iframe src="https://www.youtube.com/embed/${g.id}?autoplay=1&rel=0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
      };
    }
  } else {
    // External Link (e.g. Instagram Reels)
    f.classList.add('orientation-portrait', 'v');
    f.dataset.orientation = 'portrait';
    f.innerHTML = `<div class="ph">Open on Instagram ↗</div>${orientPill}${cap}`;
    if (full) f.onclick = () => window.open(g.url, '_blank', 'noopener');
  }

  if (!full) f.onclick = openGal;
  tilt(f);
  return f;
}

function tilt(b) {
  b.addEventListener('mousemove', e => {
    const r = b.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(b, { rotateY: x * 8, rotateX: -y * 8, transformPerspective: 800, duration: 0.3 });
  });
  b.addEventListener('mouseleave', () => gsap.to(b, { rotateX: 0, rotateY: 0, duration: 0.5 }));
}

// ==========================================================================
// GALLERY RENDERING
// Displays all portfolio works cleanly
// ==========================================================================
function renderGal() {
  const gg = $('#gg');
  gg.innerHTML = '';
  GALLERY.forEach(g => gg.appendChild(card(g, true)));
}

// Populate preview cards on Page 2 (first 4 items)
GALLERY.slice(0, 4).forEach(g => $('#wg').appendChild(card(g, false)));

function openGal() {
  galOpen = true;
  renderGal();
  $('#gal').style.display = 'block';
  $('#gal').scrollTop = 0;
  gsap.fromTo('#gal', { opacity: 0 }, { opacity: 1, duration: 0.4 });
  gsap.from('#gg .card', { y: 40, opacity: 0, scale: 0.95, stagger: 0.06, duration: 0.5, delay: 0.1 });
  gsap.from('#gal h2', { y: -20, opacity: 0, duration: 0.45 });
}

function closeGal() {
  gsap.to('#gal', {
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      $('#gal').style.display = 'none';
      $('#gg').innerHTML = '';
      galOpen = false;
    }
  });
}

$('#allWorks').onclick = openGal;
$('#gx').onclick = closeGal;

// ==========================================================================
// HIRE ME BOOKING FORM MODAL & WHATSAPP INTEGRATION
// ==========================================================================
let hireOpen = false;
const hireModal = $('#hireModal');
const hmBackdrop = $('#hmBackdrop');
const hmClose = $('#hmClose');
const hireForm = $('#hireForm');

function openHireModal() {
  if (!hireModal) return;
  hireOpen = true;
  hireModal.classList.add('active');
  hireModal.setAttribute('aria-hidden', 'false');
  if (window.gsap) {
    gsap.fromTo('.hm-backdrop', { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo('.hm-dialog', { scale: 0.9, opacity: 0, y: 30 }, { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' });
  }
  const firstInput = $('#hmName');
  if (firstInput) setTimeout(() => firstInput.focus(), 150);
}

function closeHireModal() {
  if (!hireModal || !hireOpen) return;
  if (window.gsap) {
    gsap.to('.hm-dialog', { scale: 0.92, opacity: 0, y: 20, duration: 0.22, ease: 'power2.in' });
    gsap.to('.hm-backdrop', { opacity: 0, duration: 0.25, onComplete: () => {
      hireModal.classList.remove('active');
      hireModal.setAttribute('aria-hidden', 'true');
      hireOpen = false;
    }});
  } else {
    hireModal.classList.remove('active');
    hireModal.setAttribute('aria-hidden', 'true');
    hireOpen = false;
  }
}

if (hmClose) hmClose.onclick = closeHireModal;
if (hmBackdrop) hmBackdrop.onclick = closeHireModal;

document.addEventListener('click', e => {
  const btn = e.target.closest('#hireMeBtn, [data-hire-me]');
  if (btn) {
    e.preventDefault();
    openHireModal();
  }
});

if (hireForm) {
  // Clear error highlight as soon as user types or changes input
  hireForm.querySelectorAll('input, select, textarea').forEach(input => {
    const clearErr = () => {
      const grp = input.closest('.hm-grp');
      if (grp) grp.classList.remove('has-error');
    };
    input.addEventListener('input', clearErr);
    input.addEventListener('change', clearErr);
  });

  hireForm.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    let firstInvalid = null;

    const nameInput = $('#hmName');
    const phoneInput = $('#hmPhone');
    const workInput = $('#hmWork');
    const detailsInput = $('#hmDetails');
    const dateInput = $('#hmDate');
    const locationInput = $('#hmLocation');
    const extraInput = $('#hmExtra');

    const markError = (input) => {
      valid = false;
      const grp = input.closest('.hm-grp');
      if (grp) grp.classList.add('has-error');
      if (!firstInvalid) firstInvalid = input;
    };

    // 1. Full Name – Text input (Required)
    const nameVal = nameInput ? nameInput.value.trim() : '';
    if (!nameVal || nameVal.length < 2) markError(nameInput);

    // 2. Mobile Number – Phone number input (Required, valid 10 digits)
    const phoneVal = phoneInput ? phoneInput.value.trim() : '';
    const digitsOnly = phoneVal.replace(/\D/g, '');
    if (!phoneVal || digitsOnly.length < 10) markError(phoneInput);

    // 3. Type of Work – Dropdown selection (Required)
    const workVal = workInput ? workInput.value : '';
    if (!workVal) markError(workInput);

    // 4. Shoot / Project Details – Large textarea (Required)
    const detailsVal = detailsInput ? detailsInput.value.trim() : '';
    if (!detailsVal || detailsVal.length < 5) markError(detailsInput);

    if (!valid) {
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // 5. Preferred Date – Date picker (Optional)
    const dateVal = dateInput && dateInput.value ? dateInput.value : 'Not specified';

    // 6. Location – Text input (Optional)
    const locationVal = locationInput && locationInput.value.trim() ? locationInput.value.trim() : 'Not specified';

    // 7. Additional Requirements – Optional textarea
    const extraVal = extraInput && extraInput.value.trim() ? extraInput.value.trim() : 'None';

    // Build the formatted WhatsApp Message exactly as specified
    const msg = [
      'New Project Enquiry',
      '',
      `Name: ${nameVal}`,
      `Mobile: ${phoneVal}`,
      `Type of Work: ${workVal}`,
      `Project Details: ${detailsVal}`,
      `Preferred Date: ${dateVal}`,
      `Location: ${locationVal}`,
      `Additional Requirements: ${extraVal}`
    ].join('\n');

    const targetPhone = '91' + (CONTACT.phone || '9042483864');
    const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // Reset form and close modal
    hireForm.reset();
    setTimeout(() => {
      closeHireModal();
    }, 350);
  });
}

addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (hireOpen) { closeHireModal(); return; }
    if (galOpen) { closeGal(); return; }
  }
});

document.querySelectorAll('.box').forEach(tilt);

const N = els.length, W = ['#wipe', '#wipe2'];
$('#dots').innerHTML = '<i></i>'.repeat(N);
const dots = document.querySelectorAll('#dots i');
let ready = false, busy = false, page = 1;
const bg = i => getComputedStyle(els[i - 1]).backgroundColor;

function setPage(n) {
  page = n;
  const e = els[n - 1];
  document.body.classList.toggle('lt', !!e && !e.classList.contains('dk'));
  document.body.classList.toggle('last', n === N);
  dots.forEach((d, i) => d.classList.toggle('on', i === n - 1));
}
setPage(1);

function enter(el) {
  gsap.from(el.querySelectorAll('h2,li,.card,.it'), {
    y: 20,
    opacity: 0,
    stagger: 0.02,
    duration: 0.4,
    delay: 0.1,
    clearProps: 'transform,opacity'
  });
  gsap.from(el.querySelectorAll('.tl'), { '--ln': 0, duration: 1.2, ease: 'power2.out' });
  gsap.fromTo(el.querySelectorAll('.bar i'), { scaleX: 0 }, { scaleX: 1, duration: 1.1, delay: 0.4, ease: 'power3.out' });
  el.querySelectorAll('[data-n]').forEach(s => {
    const o = { v: 0 };
    gsap.to(o, {
      v: +s.dataset.n,
      duration: 1.6,
      delay: 0.4,
      ease: 'power2.out',
      onUpdate: () => s.textContent = Math.round(o.v)
    });
  });
}

function go(to) {
  if (!ready || busy || galOpen || hireOpen || to === page || to < 1 || to > N) return;
  busy = true;
  const fwd = to > page, cur = els[page - 1], tgt = els[to - 1], ease = 'power3.inOut', d = 1.1;
  const done = () => {
    gsap.set(W, { display: 'none' });
    setTimeout(() => busy = false, 500);
  };
  if (fwd) {
    gsap.set('#wipe2', { background: bg(to) });
    gsap.set(W, { display: 'block', top: '100vh' });
    gsap.timeline({
      onComplete: () => {
        if (cur) cur.style.display = 'none';
        tgt.style.display = 'flex';
        tgt.scrollTop = 0;
        setPage(to);
        done();
        enter(tgt);
      }
    })
      .to('#wipe', { top: '-50vh', duration: d, ease }, 0)
      .to('#wipe2', { top: '-50vh', duration: d, ease }, 0.22);
  } else {
    if (cur) gsap.set('#wipe2', { background: bg(page) });
    gsap.set(W, { display: 'block', top: '-50vh' });
    if (cur) cur.style.display = 'none';
    if (tgt) tgt.style.display = 'flex';
    setPage(to);
    gsap.timeline({ onComplete: done })
      .to('#wipe2', { top: '100vh', duration: d, ease }, 0)
      .to('#wipe', { top: '100vh', duration: d, ease }, 0.22);
  }
}

$('#arrow').onclick = () => go(page < N ? page + 1 : page - 1);
dots.forEach((d, i) => d.onclick = () => go(i + 1));
addEventListener('wheel', e => {
  if (galOpen || hireOpen || Math.abs(e.deltaY) < 20) return;
  const el = els[page - 1];
  if (el) {
    if (e.deltaY > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 2) return;
    if (e.deltaY < 0 && el.scrollTop > 0) return;
  }
  go(page + (e.deltaY > 0 ? 1 : -1));
}, { passive: true });

addEventListener('keydown', e => {
  if (galOpen || hireOpen) return;
  if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)) go(page + 1);
  if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) go(page - 1);
});

let ty = 0;
addEventListener('touchstart', e => {
  if (hireOpen) return;
  ty = e.touches[0].clientY;
}, { passive: true });
addEventListener('touchend', e => {
  if (hireOpen) return;
  const dy = ty - e.changedTouches[0].clientY;
  if (Math.abs(dy) > 50) go(page + (dy > 0 ? 1 : -1));
}, { passive: true });

fitTitle().catch(() => {}).then(() => tl.play());
