/* =========================
   PAGE NAVIGATION SYSTEM
========================= */
function show(id, event) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
  if (event) event.target.classList.add('active');
}

/* =========================
   MODAL DATA SYSTEM
========================= */
const data = {

/* 💼 PROJECTS (EXPANDED) */
p1: `
  <h2>🚀 Portfolio System (Advanced Frontend Project)</h2>
  <p>
    A fully responsive multi-section portfolio system built using HTML, CSS, and JavaScript.
    It simulates a component-based architecture similar to modern frameworks.
  </p>
  <ul>
    <li>SPA-like navigation (no page reloads)</li>
    <li>Dynamic DOM manipulation</li>
    <li>Responsive mobile-first design</li>
    <li>Reusable UI sections</li>
    <li>Clean architecture for scalability</li>
  </ul>
`,

p2: `
  <h2>🗄️ Student Management System</h2>
  <p>
    A CRUD-based system designed to manage student records efficiently.
    It demonstrates backend logic simulation in frontend JavaScript.
  </p>
  <ul>
    <li>Create, Read, Update, Delete operations</li>
    <li>Structured data handling</li>
    <li>Form validation logic</li>
    <li>Local storage integration (conceptual)</li>
  </ul>
`,

p3: `
  <h2>🧮 Smart Calculator Application</h2>
  <p>
    A functional calculator built using JavaScript focusing on event-driven programming.
  </p>
  <ul>
    <li>Arithmetic operations (+ − × ÷)</li>
    <li>Real-time input processing</li>
    <li>Keyboard + button interaction support</li>
    <li>DOM event handling mastery</li>
  </ul>
`,

p4: `
  <h2>🌐 Mini Web UI Framework (Experimental)</h2>
  <p>
    A lightweight UI concept project that mimics basic framework behavior using vanilla JavaScript.
  </p>
  <ul>
    <li>Component-like structure simulation</li>
    <li>State-based rendering idea</li>
    <li>Dynamic HTML injection</li>
    <li>Reusable UI logic patterns</li>
  </ul>
`,

/* 📰 ARTICLES (EXPANDED + PROFESSIONAL) */
a1: `
  <h2>📘 Programming Fundamentals (Deep Guide)</h2>
  <p>
    Programming is the foundation of all software systems. It focuses on logic building,
    problem-solving, and structured thinking.
  </p>
  <ul>
    <li>Variables, data types, and memory concept</li>
    <li>Control structures (if, else, loops)</li>
    <li>Functions and modular programming</li>
    <li>Algorithmic thinking approach</li>
  </ul>
`,

a2: `
  <h2>🗄️ Database Systems (DBMS Guide)</h2>
  <p>
    DBMS is used to store, organize, and manage large-scale data efficiently.
  </p>
  <ul>
    <li>Relational database structure</li>
    <li>SQL queries (SELECT, INSERT, UPDATE, DELETE)</li>
    <li>Normalization (1NF, 2NF, 3NF)</li>
    <li>Data integrity & indexing concepts</li>
  </ul>
`,

a3: `
  <h2>🌐 Web Development Basics</h2>
  <p>
    Web development is the process of creating websites and web applications.
  </p>
  <ul>
    <li>HTML → Structure of web pages</li>
    <li>CSS → Styling and layout design</li>
    <li>JavaScript → Interactivity and logic</li>
    <li>DOM manipulation techniques</li>
  </ul>
`,

/* 🌍 NEW ARTICLE (GITHUB PAGES FULL GUIDE) */
a4: `
  <h2>🚀 How to Make a Website on GitHub Pages</h2>
  <p>
    GitHub Pages allows you to host websites for free using GitHub repositories.
  </p>

  <h3>🧩 Step 1: Create GitHub Account</h3>
  <ul>
    <li>Go to https://github.com</li>
    <li>Sign up and verify your email</li>
  </ul>

  <h3>📁 Step 2: Create Repository</h3>
  <ul>
    <li>Click “New Repository”</li>
    <li>Name: yourusername.github.io</li>
    <li>Set Public</li>
  </ul>

  <h3>💻 Step 3: Add Files</h3>
  <ul>
    <li>index.html (main website)</li>
    <li>style.css (design)</li>
  </ul>

  <h3>⬆️ Step 4: Upload Files</h3>
  <ul>
    <li>Click Add File → Upload Files</li>
    <li>Commit changes</li>
  </ul>

  <h3>🌍 Step 5: Enable Pages</h3>
  <ul>
    <li>Go to Settings → Pages</li>
    <li>Select branch: main</li>
    <li>Folder: /root</li>
  </ul>

  <h3>🎉 Step 6: Live Website</h3>
  <p>
    Your site will be live at:<br>
    <b>https://yourusername.github.io</b>
  </p>
`
};

/* =========================
   MODAL FUNCTIONS
========================= */
function openModal(key) {
  document.getElementById("modal-body").innerHTML = data[key];
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* click outside modal */
window.onclick = function(e){
  const modal = document.getElementById("modal");
  if(e.target === modal){
    modal.style.display = "none";
  }
};
