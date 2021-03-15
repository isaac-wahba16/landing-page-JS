/** @format */

const sections = document.querySelectorAll('section');
const navigationUl = document.getElementById('navbar__list');

// build the nav
addNavElements = () => {
  const sectionsNavFragment = document.createDocumentFragment();
  sections.forEach((section) => {
    const navElement = document.createElement('li');
    const linkToSection = document.createElement('a');
    linkToSection.innerText = section.getAttribute('data-nav');
    const sectionId = section.getAttribute('id');
    // Scroll to anchor ID using scrollTO event
    linkToSection.setAttribute('href', `#${sectionId}`);
    navElement.appendChild(linkToSection);
    sectionsNavFragment.appendChild(navElement);
  });
  navigationUl.appendChild(sectionsNavFragment);
};

// Build menu
addNavElements();

/**
 * End Main Functions
 * Begin Events
 *
 */

// Set sections as active
const allLinks = document.querySelectorAll('a');
manageActiveSection = () => {
  let sectionsNumber = sections.length;

  while (
    --sectionsNumber &&
    window.scrollY < sections[sectionsNumber].offsetTop
  ) {}

  allLinks.forEach((link) => link.classList.remove('active'));
  // Add class 'active' to section when near top of viewport

  allLinks[sectionsNumber].classList.add('active');
};

manageActiveSection();
// Scroll to section on link click

window.addEventListener('scroll', manageActiveSection);
