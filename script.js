<!DOCTYPE html>
<html>
<head>
  <title>Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>

<body onload="show('home')">

<nav>
  <button onclick="show('home')">Home</button>
  <button onclick="show('projects')">Projects</button>
  <button onclick="show('articles')">Articles</button>
</nav>

<section id="home" class="active">
  <h1>Welcome</h1>
</section>

<section id="projects">
  <h1>Projects</h1>
</section>

<section id="articles">
  <h1>Articles</h1>
</section>

<div id="modal">
  <div>
    <button onclick="closeModal()">Close</button>
    <div id="modal-body"></div>
  </div>
</div>

<script src="script.js"></script>

</body>
</html>
