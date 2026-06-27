import "./style.css";

import {
  profile,
  skillGroups,
  goals,
  projects,
  currentFocus
} from "./data.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <header class="hero">
    <div class="hero-content">
      <p class="eyebrow">Web Scripting 2 Portfolio Starter</p>
      <h1>${profile.name}'s Developer Portfolio</h1>
      <p class="subtitle">${profile.title}</p>
      <p id="welcome-message" class="welcome-message">${profile.welcomeMessage}</p>

      <div class="hero-actions">
        <a href="#goals" class="btn primary-btn">View Goals</a>
        <a href="#projects" class="btn secondary-btn">View Projects</a>
      </div>
    </div>
  </header>

  <main class="page-content">
    <section class="card about-card">
      <h2>About Me</h2>
      <p>${profile.intro}</p>
      <p>
        I am interested in building organized, practical applications that solve real problems and can grow over time.
      </p>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">Foundation</p>
        <h2>Technical Skills</h2>
      </div>
      <div id="skills-container" class="grid"></div>
    </section>

    <section id="goals" class="section-block">
      <div class="section-heading">
        <p class="eyebrow">Web Scripting 2</p>
        <h2>Course Goals</h2>
      </div>
      <ul id="goals-list" class="goal-list"></ul>
    </section>

    <section id="projects" class="section-block">
      <div class="section-heading">
        <p class="eyebrow">Portfolio Growth</p>
        <h2>Featured Projects</h2>
      </div>
      <div id="projects-container" class="grid"></div>
    </section>

    <section class="card focus-card">
      <h2>Current Focus</h2>
      <p>
        This starter app is the beginning of a larger portfolio that can grow as new projects are completed.
      </p>
      <div id="focus-container" class="tag-list"></div>
      <button id="focus-button" class="btn primary-btn" type="button">
        Show Focus Message
      </button>
      <p id="focus-message" class="focus-message"></p>
    </section>
  </main>

  <footer class="site-footer">
    <p>
      ${profile.name} • ITT-072 Web Scripting 2 • <span id="year"></span>
    </p>
  </footer>
`;

const skillsContainer = document.querySelector("#skills-container");
const goalsList = document.querySelector("#goals-list");
const projectsContainer = document.querySelector("#projects-container");
const focusContainer = document.querySelector("#focus-container");
const yearSpan = document.querySelector("#year");
const focusButton = document.querySelector("#focus-button");
const focusMessage = document.querySelector("#focus-message");

skillGroups.forEach((group) => {
  const skillCard = document.createElement("article");
  skillCard.classList.add("card");

  skillCard.innerHTML = `
    <h3>${group.category}</h3>
    <ul class="skill-list">
      ${group.skills.map((skill) => `<li>${skill}</li>`).join("")}
    </ul>
  `;

  skillsContainer.appendChild(skillCard);
});

goals.forEach((goal) => {
  const goalItem = document.createElement("li");
  goalItem.textContent = goal;
  goalsList.appendChild(goalItem);
});

projects.forEach((project) => {
  const projectCard = document.createElement("article");
  projectCard.classList.add("card", "project-card");

  projectCard.innerHTML = `
    <p class="project-type">${project.type}</p>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;

  projectsContainer.appendChild(projectCard);
});

currentFocus.forEach((focusItem) => {
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = focusItem;
  focusContainer.appendChild(tag);
});

yearSpan.textContent = new Date().getFullYear();

focusButton.addEventListener("click", () => {
  focusMessage.textContent =
    "Current goal: keep building practical projects while improving modern JavaScript skills.";
});