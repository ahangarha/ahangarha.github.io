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

// Copy social links
const originalSocialLink = document.querySelector('.social-links');
const socialLinkCopyPlaceholders = document.querySelectorAll('.social-links-copy');
socialLinkCopyPlaceholders.forEach((placeholder) => {
  placeholder.innerHTML = originalSocialLink.innerHTML;
});

// Dynamically add works
const works = [
  {
    name: 'Al Mentoria',
    description:
      'Al-Mentoria, is a mentorship platform for new programmers to reserve a meeting with more experienced developers based on a chosen topic. It is built with Ruby on Rails (back-end) and Reactjs (front-end).',
    imageURL: './assets/img/screenshot-almentoria.jpg',
    technologies: ['Ruby on Rails', 'React', 'Tailwindcss', 'Rspec', 'Jest', 'RESTful API', 'JWT'],
    liveURL: 'https://al-mentoria.herokuapp.com/',
    sourceURL: 'https://github.com/UpliftLab/al-mentoria-frontend',
    madeFor: 'Microverse',
    topic: 'Full-Stack',
    date: '2022',
  },
  {
    name: 'Railicious',
    description:
      'A web application made with Rails to add recipes.',
    imageURL: './assets/img/screenshot-railicious.jpg',
    technologies: ['Ruby on Rails', 'Tailwindcss'],
    liveURL: 'https://railicious.herokuapp.com/',
    sourceURL: 'https://github.com/ahangarha/Railicious',
    madeFor: 'Microverse',
    topic: 'Full-Stack',
    date: '2022',
  },
  {
    name: 'Toofun',
    description:
      "Toofun is a simple privacy focused web application made with TALL stack for brainstorming. It doesn't need registration and doesn't collect any tracable data from users. Simply create a new topic by adding description and active period. Share the link with the team and wait till they share their toughts. After commenting period, all comments get listed in random order. Topics and their comments get deleted from database after the given active period.",
    imageURL: './assets/img/screenshot-toofun.jpg',
    technologies: ['Laravel', 'Tailwindcss', 'Livewire', 'AlpineJS'],
    liveURL: '',
    sourceURL: 'https://framagit.org/ahangarha/toofun',
    madeFor: 'Freelance',
    topic: 'Full-Stack',
    date: '2021',
  },
  {
    name: 'PeshCash',
    description:
      'Collection of best discounts and shopping opportunities in Kabul, Afghanistan.',
    imageURL: './assets/img/screenshot-peshcash.jpg',
    technologies: ['Laravel', 'Tailwindcss', 'AlpineJS'],
    liveURL: '',
    sourceURL: '',
    madeFor: 'Freelance',
    topic: 'Full-Stack',
    date: '2021',
  },
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

    const liveURLElement = `<a href="${work.liveURL}" target="_blank" class="btn">See Live <i class="fa fa-link"></i></a>`;
    const sourceURLElement = `<a href="${work.sourceURL}" target="_blank" class="btn">See Source <i class="fa fa-github"></i></a>`;

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
                  ${work.liveURL.length ? liveURLElement : ''}
                  ${work.sourceURL.length ? sourceURLElement : ''}
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

// Handle skill-set appearance
const skillSets = document.querySelectorAll('.skill-sets > li');
skillSets.forEach((skillSet) => {
  const titleElement = skillSet.querySelector('.title');
  titleElement.addEventListener('click', () => {
    skillSets.forEach((skillSet) => {
      skillSet.classList.remove('active');
    });
    skillSet.classList.add('active');
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
