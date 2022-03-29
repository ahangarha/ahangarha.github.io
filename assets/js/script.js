const mobileMenu = document.querySelector('.mobile-menu');

function toggleMenu() {
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
  document.body.classList.toggle('blury');
}

document.querySelector('.menu-toggle').addEventListener('click', () => {
  toggleMenu();
});

document
  .getElementById('close-mobile-menu-btn')
  .addEventListener('click', (event) => {
    event.preventDefault();
    toggleMenu();
  });

document.querySelectorAll('.mobile-menu-content li a').forEach((link) => {
  link.addEventListener('click', () => {
    toggleMenu();
  });
});

const works = [
  {
    name: 'todo.js',
    description: 'A simple todo list app made with vanilla JavaScript.',
    imageURL: './assets/img/todo-js.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveURL: 'https://ahangarha.github.io/MV-ToDo-List/',
    sourceURL: 'https://github.com/ahangarha/MV-ToDo-List/',
    madeFor: 'Freelance',
    topic: 'Frontend',
    date: '2022',
  },
  {
    name: 'Calculator',
    description:
      'A calculator made with Reactjs. I have used React Router and deployed it on Netlify and Heroku.',
    imageURL: './assets/img/calc.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Reactjs'],
    liveURL: 'https://ahangarha-math.netlify.app/',
    sourceURL: 'https://github.com/ahangarha/MV-MathMagicians',
    madeFor: 'Freelance',
    topic: 'Frontend',
    date: '2022',
  },
];

const worksSection = document.getElementById('works');

// Remove warning for Javascript being disabled on the browser
worksSection.innerHTML = '';

works.forEach((work) => {
  let techs = '';
  work.technologies.forEach((tech) => {
    techs += `<li>${tech}</li>`;
  });

  worksSection.innerHTML += `<div class="works-card">
        <img src="${work.imageURL}" alt="${work.name} snapshot" />
        <div class="info">
          <div class="title">
            <h2>${work.name}</h2>
            <div class="meta">
              <span>${work.madeFor}</span>
              <i class="fa fa-circle"></i>
              <span>${work.topic}</span>
              <i class="fa fa-circle"></i>
              <span>${work.date}</span>
            </div>
          </div>

          <p class="description">
            ${work.description}
          </p>

          <ul class="techs">
            ${techs}
          </ul>

          <div class="action">
            <a href="#" class="btn" id="${work.name}"> See Project </a>
          </div>
        </div>
      </div>
    `;
});

works.forEach((work) => {
  let techs = '';
  work.technologies.forEach((tech) => {
    techs += `<li>${tech}</li>`;
  });

  document.getElementById(work.name).addEventListener('click', (event) => {
    event.preventDefault();
    document.body.classList.toggle('blury');

    document.getElementById('popup-wrapper').innerHTML = `
      <div id="work-popup-wrapper" class="">
        <div class="blended-bg"></div>
        <div id="work-popup">
          <div class="work-popup-content">
            <a href="#" id="close-popup-btn" onclick=""><img src="./assets/img/icon-close-dark.svg" alt=""></a>
            <div>
              <h2>${work.name}</h2>
              <div class="meta">
                <span>${work.madeFor}</span>
                <i class="fa fa-circle"></i>
                <span>${work.topic}</span>
                <i class="fa fa-circle"></i>
                <span>${work.date}</span>
              </div>
            </div>

            <img class="work-image" src="${work.imageURL}" alt="Project 1 snapshot" />
            
            <div class="info">
              <p class="description">
                ${work.description}
              </p>
              
              <div class="techs-n-action">
                <ul class="techs">
                  ${techs}
                </ul>
                <div class="action">
                  <a href="${work.liveURL}" target="_blank" class="btn">See Live <i class="fa fa-link"></i></a>
                  <a href="${work.sourceURL}" target="_blank" class="btn">See Source <i class="fa fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    document
      .getElementById('close-popup-btn')
      .addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('popup-wrapper').innerHTML = '';
        document.body.classList.toggle('blury');
      });
  });
});

// Contact Form Validation
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const oldErrorMessages = contactForm.querySelectorAll('.error-message');
  oldErrorMessages.forEach((errMsg) => errMsg.remove());

  if (
    contactForm.elements.email.value
    === contactForm.elements.email.value.toLowerCase()
  ) {
    contactForm.submit();
  } else {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Please insert email address in lowercase!';
    contactForm.insertBefore(errorMessage, contactForm.querySelector('button'));
  }
});

// Handle form data in the browser's localstorage
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}

if (storageAvailable('localStorage')) {
  const contactFormData = {
    name: '',
    email: '',
    message: '',
  };
  const localData = window.localStorage.getItem('contactFormData');

  if (localData) {
    Object.assign(contactFormData, JSON.parse(localData));
  }

  const fields = document.querySelectorAll('#contact input, #contact textarea');

  fields.forEach((field) => {
    field.value = contactFormData[field.name];
    field.addEventListener('input', () => {
      contactFormData[field.name] = field.value;
      window.localStorage.setItem(
        'contactFormData',
        JSON.stringify(contactFormData),
      );
    });
  });
}