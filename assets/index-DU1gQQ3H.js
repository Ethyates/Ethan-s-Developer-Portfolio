(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`Ethan`,title:`Programming Student • IT Admin Intern`,intro:`Building practical software solutions while developing modern web development skills through Web Scripting 2.`,welcomeMessage:`This portfolio starter app was built with Vite, JavaScript modules, and dynamic content rendering.`},t=[{category:`Languages`,skills:[`HTML`,`CSS`,`JavaScript`,`Python`,`SQL`]},{category:`Tools & Workflow`,skills:[`Node.js`,`npm`,`Vite`,`Git`,`VS Code`]},{category:`Professional Skills`,skills:[`Problem Solving`,`IT Support`,`Troubleshooting`,`Documentation`]}],n=[`Become more comfortable with modern JavaScript tools`,`Practice using import and export with JavaScript modules`,`Build cleaner and more organized front-end projects`,`Improve responsive page layouts`,`Deploy projects successfully using GitHub Pages`],r=[{title:`Study Progress Dashboard`,type:`JavaScript Dashboard`,description:`A dashboard-style project for tracking tasks, notes, progress, and activity using JavaScript.`},{title:`Task Management App`,type:`Productivity Tool`,description:`A practical app focused on organizing tasks, categories, priorities, and completion status.`},{title:`RPG Character Generator`,type:`Python Project`,description:`A Python project that creates RPG characters using classes, user input, and point allocation.`},{title:`IT Equipment Checkout System`,type:`Team System Design`,description:`A team project concept for managing equipment requests, carts, checkout status, and returns.`}],i=[`Modern JavaScript`,`Vite project workflow`,`JavaScript modules`,`Responsive front-end layouts`],a=document.querySelector(`#app`);a.innerHTML=`
  <header class="hero">
    <div class="hero-content">
      <p class="eyebrow">Web Scripting 2 Portfolio Starter</p>
      <h1>${e.name}'s Developer Portfolio</h1>
      <p class="subtitle">${e.title}</p>
      <p id="welcome-message" class="welcome-message">${e.welcomeMessage}</p>

      <div class="hero-actions">
        <a href="#goals" class="btn primary-btn">View Goals</a>
        <a href="#projects" class="btn secondary-btn">View Projects</a>
      </div>
    </div>
  </header>

  <main class="page-content">
    <section class="card about-card">
      <h2>About Me</h2>
      <p>${e.intro}</p>
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
      ${e.name} • ITT-072 Web Scripting 2 • <span id="year"></span>
    </p>
  </footer>
`;var o=document.querySelector(`#skills-container`),s=document.querySelector(`#goals-list`),c=document.querySelector(`#projects-container`),l=document.querySelector(`#focus-container`),u=document.querySelector(`#year`),d=document.querySelector(`#focus-button`),f=document.querySelector(`#focus-message`);t.forEach(e=>{let t=document.createElement(`article`);t.classList.add(`card`),t.innerHTML=`
    <h3>${e.category}</h3>
    <ul class="skill-list">
      ${e.skills.map(e=>`<li>${e}</li>`).join(``)}
    </ul>
  `,o.appendChild(t)}),n.forEach(e=>{let t=document.createElement(`li`);t.textContent=e,s.appendChild(t)}),r.forEach(e=>{let t=document.createElement(`article`);t.classList.add(`card`,`project-card`),t.innerHTML=`
    <p class="project-type">${e.type}</p>
    <h3>${e.title}</h3>
    <p>${e.description}</p>
  `,c.appendChild(t)}),i.forEach(e=>{let t=document.createElement(`span`);t.classList.add(`tag`),t.textContent=e,l.appendChild(t)}),u.textContent=new Date().getFullYear(),d.addEventListener(`click`,()=>{f.textContent=`Current goal: keep building practical projects while improving modern JavaScript skills.`});