function show(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  function show(id, event) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
  if (event) event.target.classList.add('active');
}
}

/* 🧠 DATA ENGINE (React-style structure) */
const data = {
  p1: `
    <h2>🚀 Portfolio System</h2>
    <p>Fully structured frontend engineering system with modular architecture.</p>

    <h3>Features</h3>
    <ul>
      <li>Component-like structure</li>
      <li>Modal-based rendering</li>
      <li>Scalable UI system</li>
    </ul>
  `,

  a1: `
    <h2>📘 Programming Fundamentals</h2>
    <p>Core concepts of programming including logic building and problem solving.</p>

    <ul>
      <li>Variables</li>
      <li>Loops</li>
      <li>Functions</li>
    </ul>
  `,

  a2: `
    <h2>🗄️ Database Systems</h2>
    <p>DBMS is the backbone of all modern applications.</p>

    <ul>
      <li>Tables</li>
      <li>SQL</li>
      <li>Normalization</li>
    </ul>
  `
};
function openModal(id) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  const content = {
    // PROJECTS
    p1: `
      <h2>Portfolio System (Web Engineering)</h2>
      <p>
        This project demonstrates a modular frontend architecture using HTML, CSS, and JavaScript.
        It includes a multi-section layout with navigation-based state management instead of page reloads.
      </p>
      <ul>
        <li>Responsive UI design (mobile + desktop)</li>
        <li>Component-based section structure</li>
        <li>JavaScript-driven navigation system</li>
        <li>Clean UI/UX with modern styling principles</li>
      </ul>
    `,

    p2: `
      <h2>Student Management System</h2>
      <p>
        A structured system designed to manage student records efficiently using CRUD operations.
        Focuses on data organization and logical flow control.
      </p>
      <ul>
        <li>Create, Read, Update, Delete operations</li>
        <li>Logical data structuring</li>
        <li>Basic algorithm implementation</li>
        <li>UI-based record handling system</li>
      </ul>
    `,

    p3: `
      <h2>Basic Calculator App</h2>
      <p>
        A simple interactive calculator built using JavaScript.
        Focuses on DOM manipulation and event handling.
      </p>
      <ul>
        <li>Arithmetic operations (+, −, ×, ÷)</li>
        <li>Real-time input handling</li>
        <li>Clean UI layout</li>
        <li>JavaScript event-driven logic</li>
      </ul>
    `,

    // ARTICLES
    a1: `
      <h2>Programming Fundamentals</h2>
      <p>
        Programming fundamentals include core logic-building concepts that form the base of software engineering.
      </p>
      <ul>
        <li>Variables and data types</li>
        <li>Control structures (if/else, loops)</li>
        <li>Functions and modularity</li>
        <li>Problem-solving techniques</li>
      </ul>
    `,

    a2: `
      <h2>Database Systems (DBMS)</h2>
      <p>
        Database systems manage structured data efficiently using relational models.
      </p>
      <ul>
        <li>Tables, rows, and relationships</li>
        <li>Normalization (1NF, 2NF, 3NF)</li>
        <li>SQL query basics</li>
        <li>Data integrity principles</li>
      </ul>
    `,

    a3: `
      <h2>Web Development Basics</h2>
      <p>
        Web development involves building interactive applications using frontend technologies.
      </p>
      <ul>
        <li>HTML structure and semantics</li>
        <li>CSS styling and layouts</li>
        <li>JavaScript interactivity</li>
        <li>DOM manipulation</li>
      </ul>
    `
  };

  body.innerHTML = content[id];
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
/* MODAL */
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
