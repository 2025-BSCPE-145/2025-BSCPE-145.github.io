function showSection(id) {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

/* MODAL DATA */
const projects = {
  core: `
    <h2>Core Programming</h2>
    <p><b>Objective:</b> Learn fundamental programming concepts.</p>
    <p><b>Skills:</b> C++, loops, functions, logic building</p>
    <p><b>Outcome:</b> Strong problem-solving foundation</p>
  `,
  data: `
    <h2>Data Management System</h2>
    <p><b>Objective:</b> Store and manage structured data</p>
    <p><b>Skills:</b> File handling, arrays, logic design</p>
    <p><b>Outcome:</b> Efficient data processing system</p>
  `,
  web: `
    <h2>Web Portfolio</h2>
    <p><b>Objective:</b> Build a professional portfolio</p>
    <p><b>Skills:</b> HTML, CSS, JavaScript, GitHub Pages</p>
    <p><b>Outcome:</b> Fully deployed responsive website</p>
  `
};

function openModal(key) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-text").innerHTML = projects[key];
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* CLOSE WHEN CLICK OUTSIDE */
window.onclick = function(e) {
  if (e.target.id === "modal") {
    closeModal();
  }
};
