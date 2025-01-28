import './style.scss'
import Swiper, { Navigation, Pagination } from 'swiper'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slidesPerView: 1,
  spaceBetween: 10,
  autoHeight: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
})

const menuButton = document.querySelector('#menu-button')
const menuOpen = document.querySelector('#menu-open')
const menuClose = document.querySelector('#menu-close')
const menuItems = document.querySelector('#menu-items')
menuButton.addEventListener('click', (e) => {
  menuItems.classList.toggle('menu-show')
  menuOpen.classList.toggle('hide-button')
  menuClose.classList.toggle('hide-button')
})

const tags = {
  laravel: {
    image: 'laravel.webp',
    name: 'Laravel',
  },
  react: {
    image: 'react.webp',
    name: 'React.js',
  },
  vue: {
    image: 'vue.webp',
    name: 'Vue.js',
  },
  tailwind: {
    image: 'tailwind.webp',
    name: 'Tailwind CSS',
  },
  vuetify: {
    image: 'vuetify.svg',
    name: 'Vuetify',
  },
  jquery: {
    image: 'jquery.webp',
    name: 'jQuery',
  },
  mui: {
    image: 'mui.webp',
    name: 'Material UI',
  },
  filament: {
    image: 'filament.webp',
    name: 'Filament PHP',
  },
  nova: {
    image: 'nova.webp',
    name: 'Nova Laravel',
  },
  inertia: {
    image: 'inertia.webp',
    name: 'Inertia JS',
  },
  pusher: {
    image: 'pusher.webp',
    name: 'Pusher',
  },
  java: {
    image: 'java.webp',
    name: 'Java',
  },
  azure: {
    image: 'azure.webp',
    name: 'Azure',
  },
  codeigniter: {
    image: 'codeigniter.webp',
    name: 'Codeigniter',
  },
  bootstrap: {
    image: 'bootstrap.webp',
    name: 'Bootstrap',
  },
  raspberry: {
    image: 'raspberry.webp',
    name: 'Raspberry Pi',
  },
}
const projectType = {
  PROFESSIONAL: 'professional',
  PERSONAL: 'personal',
  ALL: 'all',
}
const companies = {
  MAGIS: 'https://magis.marketing/',
  APPETISER: 'https://appetiser.com.au/',
  AMAZE: 'https://www.amaze.au/',
}
const projects = [
  {
    name: 'Manage My Reno',
    url: 'https://www.managemyreno.au/',
    image: 'mmr.webp',
    description: `A SaaS that manages documents and processes for building or renovating a house.`,
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.APPETISER,
  },
  {
    name: 'Marketfyndr',
    url: 'https://www.marketfyndr.com/',
    image: 'marketfyndr.webp',
    description: `A platform that connects businesses with marketing professionals and services. It offers tools to find, compare, and select marketing partners for various needs like digital marketing and branding.`,
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.APPETISER,
  },
  {
    name: 'Rent-Venture',
    url: 'https://rent-venture.com/',
    image: 'rentventure.webp',
    description: `Rent-Venture is Australia's first peer-to-peer adventure equipment rental platform, connecting users to rent out or access a variety of adventure gear, promoting a sharing economy and fostering a community of outdoor enthusiasts.`,
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.APPETISER,
  },
  {
    name: 'FARMap',
    url: 'https://www.farmap.com.au/',
    image: 'farmap.webp',
    description: `Map farmer's farm and record all paddock and livestock treatments on their phone, tablet or computer, all linked together. Record livestock movements and treatments as well as all paddock treatments into FARMap.`,
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.APPETISER,
  },
  {
    name: 'FlexiJob',
    url: 'https://flexi-job.com.au/',
    image: 'flexijob.webp',
    description: `A dynamic platform designed to connect skilled workers with businesses in need. From construction to transportation and beyond, it offers flexible job opportunities and efficient hiring solutions.`,
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.APPETISER,
  },
  {
    name: 'UNEOS',
    url: 'https://uneos.au/',
    image: 'uneos.webp',
    description: `UNEOS delivers advanced strategic Australian-based cloud storage options designed to optimise your data management, providing you with a competitive edge that is scalable, secure, and cost-effective.`,
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.AMAZE,
  },
  {
    name: 'KeepSafe',
    url: 'https://www.keepsafeapp.com.au/',
    image: 'keepsafe.webp',
    description: `An app designed to help Australians stay connected and informed about local community safety by reporting incidents, natural events, and enabling real-time communication.`,
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.APPETISER,
  },
  {
    name: 'SSC System',
    url: 'https://github.com/alladinmelico/facemask',
    image: 'ssc.webp',
    description:
      'This is the Safe and Smart Campus. Thesis system for scheduling and monitoring of students that helps to control the spread of virus.',
    tags: [
      tags.laravel,
      tags.react,
      tags.mui,
      tags.pusher,
      tags.java,
      tags.raspberry,
    ],
    type: projectType.PERSONAL,
  },
  {
    name: 'Mustard School',
    url: 'https://mustardschools.app',
    image: 'mustard.webp',
    description:
      'Mustard is a Christian ministry that exists to empower young people to be fully alive forever and partners with independent schools to provide Mustard Live events and support the spiritual formation of students. ',
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.APPETISER,
  },
  {
    name: 'Asia Pacific Journal on Curriculum Studies',
    url: 'https://apjcs.org/',
    image: 'apjcs.webp',
    description:
      'A research journal run by a non-profit, that pushes for the development of curriculum studies and related fields.',
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.MAGIS,
  },
  {
    name: 'Kaisahan',
    url: 'https://apjcs.com.ph/',
    image: 'kaisahan-cover.webp',
    description: `Farmers are among the most economically disadvantaged sectors in the country. Kaisahan is an NGO that supports various farmer's groups and protects them from being oppressed by large corporate or political interests.`,
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.MAGIS,
  },
  {
    name: 'Hound Haven',
    url: 'https://houndhavenph.org/',
    image: 'houndhaven.webp',
    description: `Providing food, shelter, and medicine to many retired or rejected service dogs. They help these service dogs find a new forever home`,
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.MAGIS,
  },
  {
    name: 'Integrity Initiative',
    url: 'https://integrityinitiative.org/',
    image: 'integrity.webp',
    description:
      'A campaign advocating for integrity in business processes, this means avoiding bribery and various corrupt practices',
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.MAGIS,
  },
  {
    name: 'Giving Tuesday PH',
    url: 'https://givingtuesday.ph/',
    image: 'givingtuesday.webp',
    description:
      'A global movement advocating doing good in our own small ways. They have two campaigns currently: "Pass the Bread" and "Read Together"',
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.MAGIS,
  },
  {
    name: 'Girl Scouts of the Philippines',
    url: 'https://girlscouts.org.ph/',
    image: 'gsp.webp',
    description: `An institution that is instrumental in the formation of millions of our nation's female youth`,
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.MAGIS,
  },
  {
    name: 'Christian Life Philippines',
    url: 'https://clcphilippines.org/',
    image: 'clc.webp',
    description: `Providing retreats and various opportunities for prayer and formation`,
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.MAGIS,
  },
  {
    name: 'GIG and the Amazing Sampaguita Foundation Inc',
    url: 'https://gasfi.org/',
    image: 'gasfi.webp',
    description: `Provides scholarships to urban poor children, donates books to far flung communities, and encourages bed time reading for families.`,
    tags: [],
    type: projectType.PROFESSIONAL,
    company: companies.MAGIS,
  },
  {
    name: 'Facemask',
    url: 'https://github.com/alladinmelico/facemask',
    image: 'facemask.gif',
    description: `An entry for DigitalOcean's hackathon. A mini social media app for sharing pandemic experiences.`,
    tags: [tags.laravel, tags.vuetify, tags.pusher, tags.inertia],
    type: projectType.PERSONAL,
  },
  {
    name: 'E-Cookbook',
    url: 'https://github.com/alladinmelico/integration2',
    image: 'ecookbook.webp',
    description: `Browse meal's recipe, ingredients, and reviews. It uses Azure's NLP to analyze reviews for better analytics.`,
    tags: [tags.laravel, tags.jquery, tags.azure],
    type: projectType.PERSONAL,
  },
  {
    name: 'Online Student Resource System',
    url: 'https://github.com/alladinmelico/SVNHS_Student_Resource_Center',
    image: 'sir.jpg',
    description: `An online system where you can create classes, upload activities, and monitor student's performances.`,
    tags: [tags.codeigniter, tags.bootstrap, tags.azure],
    type: projectType.PERSONAL,
  },
  {
    name: 'Movie Android App',
    url: 'https://github.com/alladinmelico/MovieDemo',
    image: 'javamovie.jpeg',
    description: `A fullstack android app that uses Java for client and Laravel for backend. It's a movie app where you can browse, create, edit, and delete movies and its actors/producers`,
    tags: [tags.laravel, tags.java],
    type: projectType.PERSONAL,
  },
]

const filterButtons = document.querySelectorAll('.project-filter-button')
filterButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    filterButtons.forEach((b) => b.classList.remove('selected'))
    button.classList.add('selected')
    filterProjects(e.target.getAttribute('data-id'))
  })
})

function filterProjects(type = projectType.ALL) {
  document.getElementById('projects-container').innerHTML = projects
    .filter((proj) => {
      if (type == projectType.ALL) {
        return true
      } else {
        return proj.type == type
      }
    })
    .map((project, index) => {
      const tags = project.tags
        .map(
          (tag) => `
        <div class="tech-pill">
          <div class="tech-pill-image">
            <img src="/${tag.image}" alt="${tag.name}" loading="lazy">
          </div>
          <p>${tag.name}</p>
        </div>
      `
        )
        .join('')

      return `
        <div class="projects__card" data-aos="zoom-in-up" data-aos-delay="50">
          <img src="./${project.image}" alt="${
        project.name
      }" srcset="" loading="lazy">
          <div class="projects__card__details">
            <a href="${project.url}" target="_blank" class="card-title">${
        project.name
      }</a>
            <p class="card-description">${project.description}</p>
            ${
              tags &&
              `
              <p class="card-techstack-text">Techstack</p>
              <div class="tech-pills">
                ${tags}
              </div>
            `
            }
            ${
              !!project.company
                ? `<a href="${
                    project.company
                  }" target="_blank" class="card-company">via ${
                    project.company == companies.MAGIS
                      ? 'MagisSolutions'
                      : project.company == companies.APPETISER
                      ? 'Appetiser Apps'
                      : 'Amaze Communication'
                  }</a>`
                : ''
            }
          </div>
        </div>
      `
    })
    .join('')
}

filterProjects(projectType.ALL)

const techs = [
  {
    name: 'Typescript',
    image: 'ts.webp',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Laravel',
    image: 'laravel.webp',
    url: 'https://laravel.com/',
  },
  {
    image: 'codeigniter.webp',
    name: 'Codeigniter',
    url: 'https://codeigniter.com/',
  },
  {
    name: 'Node.js',
    image: 'node.webp',
    url: 'https://nodejs.org/',
  },
  {
    name: 'React.js',
    image: 'react.webp',
    url: 'https://reactjs.org/',
  },
  {
    name: 'Vue.js',
    image: 'vue.webp',
    url: 'https://vuejs.org/',
  },
  {
    name: 'Next.js',
    image: 'next.webp',
    url: 'https://nextjs.org/',
  },
  {
    name: 'Nuxt.js',
    image: 'nuxt.webp',
    url: 'https://nuxjs.org/',
  },
  {
    image: 'jquery.svg',
    name: 'jQuery',
    url: 'https://jquery.com/',
  },
  {
    image: 'inertia.webp',
    name: 'Inertia JS',
    url: 'https://inertiajs.com/',
  },
  {
    name: 'Tailwind CS',
    image: 'tailwind.webp',
    url: 'https://tailwindcss.com/',
  },
  {
    image: 'bootstrap.webp',
    name: 'Bootstrap',
    url: 'https://getbootstrap.com/',
  },
  {
    image: 'vuetify.svg',
    name: 'Vuetify',
    url: 'https://vuetifyjs.com/en/',
  },
  {
    image: 'mui.webp',
    name: 'Material UI',
    url: 'https://mui.com/',
  },
  {
    image: 'nova.svg',
    name: 'Nova Laravel',
    url: 'https://nova.laravel.com/',
  },
  {
    image: 'mysql.webp',
    name: 'MySQL',
    url: 'https://mysql.com/',
  },
  {
    image: 'cypress.webp',
    name: 'Cypress',
    url: 'https://cypress.io/',
  },
  {
    image: 'git.webp',
    name: 'Git',
    url: 'https://git-scm.com/',
  },
]
document.getElementById('techstacks-container').innerHTML = techs
  .map(
    (tech, index) => `
  <div class="techstack" data-aos="zoom-in" data-aos-delay="${index * 50}">
    <div>
      <img src="/${tech.image}" alt="${tech.name}" class="logo" loading="lazy">
    </div>
    <a href="${tech.url}" target="_blank" class="title">
      ${tech.name}
    </a>
  </div>
`
  )
  .join('')

const socmends = [
  {
    name: 'melico.alladin@gmail.com',
    url: 'mailto:melico.alladin@gmail.com',
    icon: `
      <svg width="30" height="24" viewBox="0 0 30 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M27 0H3C1.35 0 0.015 1.35 0.015 3L0 21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM27 21H3V6L15 13.5L27 6V21ZM15 10.5L3 3H27L15 10.5Z" fill="currentColor"/>
      </svg> 
    `,
  },
  {
    name: 'alladin-m',
    url: 'https://linkedin.com/in/alladin-m/',
    icon: `
      <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33333 0C1.49167 0 0 1.49167 0 3.33333V26.6667C0 28.5083 1.49167 30 3.33333 30H26.6667C28.5083 30 30 28.5083 30 26.6667V3.33333C30 1.49167 28.5083 0 26.6667 0H3.33333ZM3.33333 3.33333H26.6667V26.6667H3.33333V3.33333ZM7.96549 5.52734C6.53716 5.52734 5.68034 6.38596 5.68034 7.5293C5.68034 8.67263 6.53727 9.52799 7.82227 9.52799C9.2506 9.52799 10.1074 8.67263 10.1074 7.5293C10.1074 6.38596 9.25049 5.52734 7.96549 5.52734ZM5.79427 11.6667V23.3333H10V11.6667H5.79427ZM13.4701 11.6667V23.3333H17.6758V16.9564C17.6758 15.058 19.0302 14.7852 19.4368 14.7852C19.8435 14.7852 20.931 15.193 20.931 16.9564V23.3333H25V16.9564C25 13.2947 23.3729 11.6667 21.3379 11.6667C19.3029 11.6667 18.2174 12.3443 17.6758 13.2943V11.6667H13.4701Z" fill="currentColor"/>
      </svg>   
    `,
  },
  {
    name: 'alladinmelico',
    url: 'https://github.com/alladinmelico',
    icon: `
      <svg width="30" height="29" viewBox="0 0 30 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3723 0.100566C6.68879 0.827038 1.3129 6.20293 0.586423 12.7412C-0.140048 19.57 3.7829 25.6724 9.73997 27.9971C10.1759 28.1424 10.6117 27.8518 10.6117 27.2706V24.9459C10.6117 24.9459 10.0306 25.0912 9.30409 25.0912C7.26996 25.0912 6.3982 23.3477 6.2529 22.3306C6.10761 21.7494 5.81702 21.3135 5.38114 20.8777C4.94525 20.7324 4.79996 20.7324 4.79996 20.5871C4.79996 20.2965 5.23584 20.2965 5.38114 20.2965C6.2529 20.2965 6.97937 21.3135 7.26996 21.7494C7.99644 22.9118 8.8682 23.2024 9.30409 23.2024C9.88526 23.2024 10.3211 23.0571 10.6117 22.9118C10.757 21.8947 11.1929 20.8777 12.0647 20.2965C8.72291 19.57 6.2529 17.6812 6.2529 14.4847C6.2529 12.8865 6.97937 11.2882 7.99644 10.1259C7.85114 9.83529 7.70585 9.10881 7.70585 8.09175C7.70585 7.51058 7.70585 6.63881 8.14173 5.76705C8.14173 5.76705 10.1759 5.76705 12.21 7.65587C12.9364 7.36528 13.9535 7.21999 14.9706 7.21999C15.9876 7.21999 17.0047 7.36528 17.8765 7.65587C19.7653 5.76705 21.9447 5.76705 21.9447 5.76705C22.2353 6.63881 22.2353 7.51058 22.2353 8.09175C22.2353 9.25411 22.09 9.83529 21.9447 10.1259C22.9618 11.2882 23.6882 12.7412 23.6882 14.4847C23.6882 17.6812 21.2182 19.57 17.8765 20.2965C18.7482 21.0229 19.3294 22.3306 19.3294 23.6382V27.4159C19.3294 27.8518 19.7653 28.2877 20.3465 28.1424C25.7223 25.963 29.5 20.7324 29.5 14.63C29.5 5.91234 22.09 -0.916494 13.3723 0.100566Z" fill="currentColor"/>
      </svg> 
    `,
  },
  {
    name: 'Alladin',
    url: 'viber://chat?number=9560333490',
    icon: `
      <svg width="30" height="34" viewBox="0 0 30 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0.170868C5.496 0.170868 0 5.33127 0 11.4403V16.6651C0 21.7225 1.53457 25.0158 4.68457 26.6946V30.1312C4.68457 31.2977 5.38153 32.3435 6.45703 32.7975C6.82303 32.9514 7.20832 33.028 7.59082 33.028C8.33182 33.028 9.06023 32.7445 9.61523 32.2083L14.0566 27.9374H18.6592C24.9127 27.9374 30 22.8801 30 16.6651V11.4403C30 5.22523 24.9112 0.170868 18.6592 0.170868H12ZM12 3.15815H18.6621C23.2611 3.15815 27.0029 6.87271 27.0029 11.4403V16.6651C27.0029 21.2341 23.2596 24.9501 18.6621 24.9501H13.4531C13.0646 24.9501 12.6907 25.0998 12.4102 25.3702L7.68457 29.9153V25.7436C7.68457 25.1327 7.30828 24.5834 6.73828 24.3579C4.18678 23.3452 3 20.901 3 16.6651V11.4403C3 7.02805 7.206 3.15815 12 3.15815ZM16.5 4.65179C16.086 4.65179 15.75 4.98636 15.75 5.3986C15.75 5.81085 16.086 6.14542 16.5 6.14542C20.9205 6.14542 24 10.0812 24 13.6136C24 14.0259 24.336 14.3604 24.75 14.3604C25.164 14.3604 25.5 14.0259 25.5 13.6136C25.5 9.37467 21.804 4.65179 16.5 4.65179ZM9.00293 6.16001C8.64555 6.10643 8.26753 6.19091 7.95703 6.4284L7.0752 7.1052C6.0342 7.90131 5.70204 9.30669 6.29004 10.4717C7.39704 12.6629 9.25191 16.0392 10.8164 17.4761C12.7394 19.2445 15.7608 21.3406 18.3018 22.3712C19.4133 22.8223 20.6858 22.5048 21.4658 21.5982C21.7433 21.2755 22.0025 20.9473 22.2275 20.6501C22.688 20.0407 22.5541 19.1771 21.9316 18.7305L19.125 16.7205C18.522 16.2888 17.6796 16.4078 17.2266 16.9918L16.7549 17.5111C16.4429 17.8546 15.9731 18.0354 15.5156 17.9428C14.8016 17.7995 13.6698 17.3352 12.3633 15.9416C11.2848 14.7945 10.6795 13.5737 10.459 12.7239C10.327 12.216 10.5095 11.6859 10.916 11.3498L11.3877 10.9589C11.9382 10.5048 12.0463 9.70932 11.6338 9.12979L9.92285 6.72304C9.69785 6.40564 9.3603 6.21359 9.00293 6.16001ZM16.5 7.63906C16.086 7.63906 15.75 7.97364 15.75 8.38588C15.75 8.79813 16.086 9.1327 16.5 9.1327C18.771 9.1327 21 11.3523 21 13.6136C21 14.0259 21.336 14.3604 21.75 14.3604C22.164 14.3604 22.5 14.0259 22.5 13.6136C22.5 10.5427 19.584 7.63906 16.5 7.63906ZM16.5 10.6263C16.086 10.6263 15.75 10.9609 15.75 11.3732C15.75 11.7854 16.086 12.12 16.5 12.12C17.4675 12.12 18 12.6502 18 13.6136C18 14.0259 18.336 14.3604 18.75 14.3604C19.164 14.3604 19.5 14.0259 19.5 13.6136C19.5 11.8272 18.294 10.6263 16.5 10.6263Z" fill="currentColor"/>
      </svg>
    `,
  },
]
document.getElementById('socmeds-container').innerHTML = socmends
  .map(
    (socmed) => `
  <a href="${socmed.url}" target="_blank" rel="noopener noreferrer" data-aos="fade-right">
    ${socmed.icon}
    <p>${socmed.name}</p>    
    <img src="/arrow.svg" alt="arrow" class="socmed-arrow">         
  </a>
`
  )
  .join('')
document.getElementById('socmed-icons-container').innerHTML = socmends
  .map(
    (socmed) =>
      `<a href="${socmed.url}" target="_blank" rel="noopener noreferrer">${socmed.icon}</a>`
  )
  .join(' ')

const posts = [
  {
    name: 'facemask',
    description:
      'A mini social media app for sharing Pandemic experiences. Post you thoughts, follow users, chat with them, and a lot more!',
    url: 'https://dev.to/alladinmelico/facemask-a-mini-social-media-app-for-sharing-pandemic-experiences-3-n-i0f',
    image: 'facemask-cover.webp',
    tag: 'Programming',
  },
  {
    name: 'Vector Art Portrait',
    description:
      'A video timelaps of how I create a vector art portrait using Adobe Illustrator',
    url: 'https://youtu.be/2b_Kaxb9stg',
    image: 'vector-portrait.webp',
    tag: 'Design',
  },
  {
    name: 'Logo making of "Inn"',
    description:
      'A video timelaps of how I create a random logo called "Inn" using Adobe Illustrator.',
    url: 'https://youtu.be/vGS-n1AIguI',
    image: 'inn.webp',
    tag: 'Design',
  },
  {
    name: 'WPAP Vector art',
    description:
      'WPAP is a geometric pop-art inspired from cubism. This is a video timelaps of how to create it using Adobe Illustrator',
    url: 'https://youtu.be/1_vl_MCzKvw',
    image: 'wpap.webp',
    tag: 'Design',
  },
]

document.getElementById('posts-container').innerHTML = posts
  .map(
    (post) => `
  <div class="swiper-slide">
    <div class="post">
      <div class="post__image">
        <img src="/${post.image}" alt="${post.name}" loading="lazy">
      </div>
      <div class="post__content">
        <div class="post__content__tag">
          <div>${post.tag}</div>
        </div>
        <a href="${post.url}" target="_blank" class="post__content__title">
          ${post.name} 
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z" fill="currentColor"/>
          </svg>                  
        </a>
        <p class="post__content__description">${post.description}</p>
      </div>
    </div>
  </div>
`
  )
  .join('')

const awards = [
  {
    name: 'Valedictorian',
    details: 'TUP-T • 2023',
    image: 'academic.svg',
  },
  {
    name: 'English Certificate 86/100 (C2 Proficient)',
    details: 'EFSET • 2023',
    image: 'certificate.svg',
  },
  {
    name: 'Magna Cum Laude',
    details: 'TUP-T • 2023',
    image: 'academic.svg',
  },
  {
    name: 'Grayhawk Awardee for Academic Excellence',
    details: 'TUP-T • 2023',
    image: 'academic.svg',
  },
  {
    name: 'Outstanding Graduate',
    details: 'TUP-T • 2023',
    image: 'academic.svg',
  },
  {
    name: 'Hackathon Champion',
    details: 'Appetiser Apps • 2021',
    image: 'contest.svg',
  },
  {
    name: 'Champion of National Digital Poster Making Competition',
    details: 'PNRI • 2017',
    image: 'contest.svg',
  },
  {
    name: 'HackCycling Champion',
    details: 'American Spaces PH • 2017',
    image: 'contest.svg',
  },
]

document.getElementById('awards-container').innerHTML = awards
  .map(
    (award) => `
  <div class="award-item">
    <div class="contents">
      <p class="title">${award.name}</p>
      <p class="details">${award.details}</p>
    </div>
    <img src="/${award.image}" alt="${award.name}" data-aos="zoom-in" data-aos-delay="300">
  </div>
`
  )
  .join('')

const blob = document.getElementById('blob')

window.onpointermove = (event) => {
  const { clientX, clientY } = event

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: 'forwards' }
  )
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then((res) => console.log('service worker registered'))
      .catch((err) => console.log('service worker not registered', err))
  })
}

let mybutton = document.getElementById('backToTopBtn')

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}

mybutton.onclick = function () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
