//Get references to the DOM elements
const navLinks = document.getElementById('navLinks');
const burger = document.getElementById('burger');
const hideMenu = document.getElementById('closeIcon');
const closeMenu = document.getElementById('navItems');
const contactFormCont = document.getElementById('formcontact');
//show and hide the navigation menu
burger.onclick = function burger() {
  navLinks.style.right = '0';
};
hideMenu.onclick = function hideMenu() {
  navLinks.style.right = '-100%';
};

closeMenu.onclick = function hideMenu() {
  navLinks.style.right = '-100%';
};

//Arrays of objects for the projects
const projects = [
  {
    id: 'card1',
    title: 'e-Miti Inventory Management System',
    image: './images/22.png',
    image1: './images/./SnapshootPortfolio(1).png',
    description: 'A pharmacy inventory management system built using Python and Urwid. It allows users to manage inventory items, user registrations, and authentication.',
    technologyList: ['Python', 'MySQL'],
    liveLink: 'https://github.com/Bonaparte003/e-Miti_Inventory_Management_System_Negpod-12',
    seeSource: 'https://github.com/Bonaparte003/e-Miti_Inventory_Management_System_Negpod-12',
  },

  {
    id: 'card2',
    title: 'Grade Book App',
    image: './images/21.png',
    image1: './images/SnapshootPortfolio(2).png',
    description:
        'A grade book app that allows teachers to manage students, subjects, and grades. It also allows students to view their grades and average scores.',
    technologyList: ['Python'],
    liveLink: 'https://github.com/BirasaDivine/grade-book-app_BirasaDivine',
    seeSource: 'https://github.com/BirasaDivine/grade-book-app_BirasaDivine',
  },

  {
    id: 'card3',
    title: 'Registration Sytem',
    image: './images/23.png',
    image1: './images/SnapshootPortfolio(3).png',
    description:
        'A registration system that allows users to register for an event. It also allows users to view the list of registered users and their details.',
    technologyList: ['Bashscript'],
    liveLink: 'https://github.com/Bonaparte003/GSCS-Registration_System',
    seeSource: 'https://github.com/Bonaparte003/GSCS-Registration_System',
  },
  {
    id: 'card4',
    title: 'Personal Portfolio',
    image: './images/tonic.jpg',
    image1: './images/SnapshootPortfolio.png',
    description:
        'This my personal portfolio website. It showcases my projects, skills, and contact information.',
    technologyList: ['Html', 'css', 'Javascript'],
    liveLink: 'https://birasadivine.github.io/portifolio_project/',
    seeSource: 'https://github.com/BirasaDivine/portifolio_project',
    
  },
];
//Loop through the projects array and display the projects on the portfolio section
const section = document.getElementById('portfolio');
projects.forEach((project, index) => {
  const div = document.createElement('div');
  div.className = 'main-container';
  div.innerHTML = `

 
      <div class="part1">
      <img class="picture" src="${project.image1}" alt="image"/>
        <img class="pic" src="${project.image}" alt="image" />
      </div>
      <div class="part2">
        <div>
          <h2 class="heading">${project.title}</h2>
          <div class="structure">
            <span class="canopy">ALU</span>
            <img src="./images/./counter.png" alt="counter" />
            <span class="transpalent">Front End Dev</span>
            <img src="./images/./counter.png" alt="counter" />
            <span class="transpalent">2024</span>
          </div>
        </div>
        <div class="box-content">
          <p>
            A daily selection of privately personalized reads; no accounts or
            sign-ups required.
          </p>
        </div>
        <div>
          <ul class="flex-container">
           ${ project.technologyList[0] ? `<li>${project.technologyList[0]}</li>`:""}
           ${ project.technologyList[1] ? `<li>${project.technologyList[1]}</li>`:""}
           ${ project.technologyList[2] ? `<li>${project.technologyList[2]}</li>`:""}
          </ul>
        </div>
        <div><a><button type="button" class="about" id ="see-button-${index}" >see project</button></a></div>
      </div  
  
    `;
  section.appendChild(div);
});
//Get all the see project buttons
const seeButtons = [];
projects.forEach((project, index) => seeButtons.push(document.getElementById(`see-button-${index}`)));

const mainContainer1 = document.getElementById('main-container1');
seeButtons.forEach((seeButton) => {
  console.log(seeButton);
  let number = seeButton.id.match(/\d+/)[0];
  seeButton.addEventListener('click', () => {
    mainContainer1.innerHTML = `
    <div class="pop">
        <h2 class="heading">${projects[number].title}</h2>
        <div class="structure">
          <span class="canopy">ALU</span>
          <span class="transpalent">Front End Dev</span>
          <span class="transpalent">2024</span>
        </div>
        <div class="part1">
          <img
            class="picture"
            src="${projects[number].image}"
            alt="image"
          />
          <img class="pict"  src="${projects[number].image}" alt="image" />
        </div>
        <div class="part2">
          <div class="part222">
          
              <div>
                 <ul class="flex-container">
           ${ projects[number].technologyList[0] ? `<li>${projects[number].technologyList[0]}</li>`:""}
           ${ projects[number].technologyList[1] ? `<li>${projects[number].technologyList[1]}</li>`:""}
           ${ projects[number].technologyList[2] ? `<li>${projects[number].technologyList[2]}</li>`:""}
          </ul>
                </ul>
              <div class="check">
                <a href="${ projects[number].liveLink }" target="_blank" rel="noopener noreferrer" >
                <div  class="popup-link">
                  <span>See live</span>
                  
                  <img src="./images/Icon.png" alt="" />
                </div>
              </a>

                <a href="${projects[number].seeSource}" target="_blank" rel="noopener noreferrer"> 
                <div class="popup-link" >
                  <span>see-source</span>
                  
                  <img src="./images/Group.png" alt="" />
                </div>
              </a>
            </div>
              </div>
          </div>
        </div>
      </div>
    `;
    mainContainer1.classList.add('show');
  });
});
// FORM VALIDATION
contactFormCont.addEventListener('submit', (event) => {
  const emailInput = contactFormCont.email.value;
  if (emailInput.toLowerCase() !== emailInput) {
    event.preventDefault();
    const errorTag = contactFormCont.getElementsByTagName('small');
    errorTag[0].innerHTML = 'Please insert email in lowercase!';
  } else {
    contactFormCont.action = 'https://formspree.io/f/mqkngenv';
  }
});

// Local Storage
const inputFields = document.querySelectorAll('input');
inputFields.forEach((input) => {
  input.addEventListener('change', (event) => {
    let formData = JSON.parse(localStorage.getItem('formData'));
    if (!formData) {
      formData = { name: '', email: '', message: '' };
    }
    formData[event.target.name] = event.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});

const textArea = document.getElementById('user-message');
textArea.addEventListener('change', (event) => {
  let formData = JSON.parse(localStorage.getItem('formData'));
  if (!formData) {
    formData = { name: '', email: '', message: '' };
  }
  formData.message = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

function retrieveFormData() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    document.getElementById('txtEmail').value = formData.email;
    document.getElementById('user').value = formData.name;
    document.getElementById('user-message').value = formData.message;
  }
}

retrieveFormData();