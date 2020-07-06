const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//// Images ////
const codeImg = document.querySelector('#cta-img');
codeImg.setAttribute('src', siteContent["cta"]["img-src"]);
const midPageAcc = document.querySelector('#middle-img');
midPageAcc.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//// Nav ////
const nav = document.querySelector("nav");
const navLinks = nav.querySelectorAll('a');
const newAnchor = document.createElement('a');
nav.appendChild(newAnchor);

for(let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
  navLinks[i].style.color = "green";
}

//// CTA ////
const headerText = document.querySelector("h1");
headerText.textContent = siteContent["cta"]["h1"];

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

//// Main Content ////
const headers = document.querySelectorAll('h4');
const mainText = document.querySelectorAll(".text-content p");

for(let i = 0; i < mainText.length; i++) {
  headers[i].textContent = siteContent["main-content"][Object.keys(siteContent["main-content"]).filter(key => key.includes("-h4"))[i]];
  mainText[i].textContent = siteContent["main-content"][Object.keys(siteContent["main-content"]).filter(key => key.includes("-content"))[i]];
}

//// Contact ////
const contactHeader = document.querySelector('.contact h4');
const contactText = document.querySelectorAll(".contact p");

contactHeader.textContent = siteContent["contact"]["contact-h4"];

for(let i = 0; i < contactText.length; i++) {
  contactText[i].textContent = siteContent["contact"][Object.keys(siteContent['contact']).filter(key => !key.includes('h4'))[i]];
};

//// Copyright ////
const copyright = document.querySelector('footer p');
copyright.textContent = siteContent["footer"]["copyright"];

//// Stretch (I think...) ////
logo.addEventListener('mouseover', () => logo.setAttribute('src', './img/logo-hover.png'));
logo.addEventListener('mouseout', () => logo.setAttribute('src', './img/logo.png'));
