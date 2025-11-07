/* ===== ROOT & RESET ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #6366f1;
    --secondary: #8b5cf6;
    --accent: #06b6d4;
    --text: #1f2937;
    --bg: #f8fafc;
    --card: rgba(255, 255, 255, 0.25);
    --shadow: 0 8px 32px rgba(0,0,0,0.1);
}

body.dark {
    --text: #e2e8f0;
    --bg: #0f172a;
    --card: rgba(15, 23, 42, 0.4);
    --primary: #818cf8;
    --secondary: #c084fc;
}

body {
    font-family: 'Inter', sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.7;
    overflow-x: hidden;
    transition: 0.4s;
}

/* ===== TYPOGRAPHY ===== */
h1 { font-size: 3.5rem; font-weight: 800; }
h2 { font-size: 2.5rem; font-weight: 700; text-align: center; margin-bottom: 3rem; position: relative; }
h2::after {
    content: ''; width: 80px; height: 4px; background: linear-gradient(90deg, var(--primary), var(--secondary));
    position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%); border-radius: 2px;
}
h3 { font-size: 1.5rem; font-weight: 600; }
p { font-size: 1.1rem; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

/* ===== THEME TOGGLE ===== */
.theme-toggle {
    position: fixed;
    top: 1.5rem; right: 1.5rem;
    width: 50px; height: 50px;
    background: var(--card); backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    cursor: pointer; z-index: 1000; box-shadow: var(--shadow);
    transition: 0.3s;
}

.theme-toggle i { font-size: 1.3rem; color: var(--primary); }

/* ===== HERO SECTION ===== */
.hero {
    min-height: 100vh;
    display: flex; align-items: center;
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.hero-bg {
    position: absolute; inset: 0;
    background: url('data:image/svg+xml,...') center/cover;
    opacity: 0.1; z-index: 0;
}

.particles {
    position: absolute; inset: 0; z-index: 1;
    background: url('data:image/svg+xml,...');
    animation: float 20s infinite linear;
}

.hero-content {
    display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
    position: relative; z-index: 2;
}

.hero-text h1 {
    background: linear-gradient(90deg, #fff, #e0e7ff);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
}

.typing {
    font-size: 1.3rem; font-weight: 500; margin-bottom: 1.5rem;
    border-right: 3px solid #fff; white-space: nowrap; overflow: hidden;
    animation: typing 4s steps(40) infinite, blink 0.75s step-end infinite;
}

.social-links a {
    color: white; font-size: 1.6rem; margin: 0 0.8rem; transition: 0.3s;
}

.social-links a:hover { transform: translateY(-5px); }

.btn-primary, .btn-secondary {
    display: inline-block; padding: 0.9rem 2rem; margin: 0.5rem;
    border-radius: 50px; font-weight: 600; text-decoration: none;
    transition: 0.4s; box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.btn-primary {
    background: white; color: var(--primary);
}

.btn-primary:hover {
    background: #f1f5f9; transform: translateY(-3px); box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.btn-secondary {
    background: transparent; color: white; border: 2px solid white;
}

.btn-secondary:hover {
    background: white; color: var(--primary);
}

.hero-image img {
    width: 100%; max-width: 380px; border-radius: 20px;
    border: 8px solid rgba(255,255,255,0.3);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    transition: 0.5s;
}

.hero-image img:hover {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 30px 60px rgba(0,0,0,0.4);
}

/* ===== SKILLS ===== */
.skills {
    padding: 5rem 0; background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
}

body.dark .skills { background: #1e293b; }

.skill-item {
    margin-bottom: 1.5rem;
}

.skill-name {
    font-weight: 600; margin-bottom: 0.5rem; color: var(--primary);
}

.skill-bar {
    height: 12px; background: #e2e8f0; border-radius: 6px; overflow: hidden;
    box-shadow: inset 0 2px 5px rgba(0,0,0,0.1);
}

.fill {
    height: 100%; background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: 6px; transition: width 1.5s ease;
}

/* ===== TIMELINE ===== */
.timeline {
    position: relative; max-width: 900px; margin: 0 auto;
}

.timeline::before {
    content: ''; position: absolute; width: 3px; background: #cbd5e1;
    top: 0; bottom: 0; left: 40px;
}

body.dark .timeline::before { background: #334155; }

.job {
    display: flex; margin-bottom: 3rem; position: relative;
    animation: slideInLeft 0.6s ease forwards; opacity: 0;
}

.job-icon {
    width: 50px; height: 50px; background: var(--primary); color: white;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 1.3rem; margin-right: 2rem; flex-shrink: 0; z-index: 1;
}

.job-content {
    background: var(--card); backdrop-filter: blur(12px);
    padding: 1.5rem; border-radius: 16px; flex: 1;
    box-shadow: var(--shadow); border: 1px solid rgba(255,255,255,0.2);
    transition: 0.4s;
}

.job-content:hover {
    transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.job-content h4 { color: #64748b; font-weight: 500; }

/* ===== PROJECTS ===== */
.project-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;
}

.project-card {
    background: var(--card); backdrop-filter: blur(12px);
    padding: 2rem; border-radius: 20px; text-align: center;
    box-shadow: var(--shadow); border: 1px solid rgba(255,255,255,0.2);
    transition: 0.5s; opacity: 0; transform: translateY(30px);
}

.project-card:hover {
    transform: translateY(-15px) rotate(2deg);
    box-shadow: 0 25px 50px rgba(0,0,0,0.2);
}

.project-icon {
    width: 70px; height: 70px; background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    margin: 0 auto 1rem; font-size: 1.8rem; color: white;
}

.project-card a {
    color: var(--primary); text-decoration: none; font-weight: 600; margin-top: 1rem; display: inline-block;
}

/* ===== CONTACT ===== */
.contact {
    text-align: center; padding: 5rem 0;
}

.contact-info a {
    display: inline-flex; align-items: center; margin: 1rem; color: var(--text);
    text-decoration: none; font-weight: 500; transition: 0.3s;
}

.contact-info a:hover { color: var(--primary); transform: translateX(5px); }

/* ===== FOOTER ===== */
footer {
    text-align: center; padding: 2rem; background: #0f172a; color: #94a3b8;
    font-size: 0.9rem;
}

footer i { color: #f43f5e; }

/* ===== ANIMATIONS ===== */
@keyframes typing {
    0%, 100% { width: 0; }
    50% { width: 100%; }
}

@keyframes blink {
    50% { border-color: transparent; }
}

@keyframes float {
    0% { transform: translateY(0); }
    100% { transform: translateY(-100%); }
}

.reveal {
    opacity: 0; transform: translateY(50px); transition: 0.8s;
}

.reveal.active {
    opacity: 1; transform: translateY(0);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 992px) {
    .hero-content { grid-template-columns: 1fr; text-align: center; }
    .hero-image img { max-width: 300px; margin: 0 auto; }
    h1 { font-size: 2.8rem; }
}

@media (max-width: 576px) {
    h1 { font-size: 2.3rem; }
    .btn-primary, .btn-secondary { display: block; margin: 0.8rem auto; width: fit-content; }
}
