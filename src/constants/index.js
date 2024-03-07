import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  outlook,
  trips,
  latinos,
  paper,
  shopify,
  carrent,
  youtube,
  jobit,
  tripguide,
  threejs,
  jquery,
  nextjs,
  php,
  laravel,
  codeigniter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Designer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "jquery",
    icon: jquery,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Codeigniter",
    icon: codeigniter,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Codeigniter Developer",
    company_name: "Outlook Travel",
    icon: outlook,
    iconBg: "#E6DEDD",
    date: "June 2023 - Dec 2023",
    points: [
      "Led the development of Outlook Travel's website with CodeIgniter backend, improving operations and user experience.",
"Implemented web development best practices for robust security.",
"Achieved a 50% sales increase by optimizing the website for conversions and employing strategic SEO tactics.",
"Enhanced client processing efficiency by 80% through website dashboard automation, reducing reliance on third-party software.",
    ],
  },
  {
    title: "Codeigniter Full-Stack Developer",
    company_name: "Trips & Holiday",
    icon: trips,
    iconBg: "#383E56",
    date: "September 2022 - April 2023 ",
    points: [
      "Led the development of Trips and Holiday's website, boosting user engagement and traffic by 30%.",
"Implemented a secure employee user system, enhancing dashboard access control.",
"Integrated a powerful blog CMS, driving organic traffic and boosting SEO by 25%.",
"Developed an efficient inquiry card and receipt system, improving transaction management by 40% and enhancing client satisfaction.",




    ],
  },
  {
    title: "Full-Stack PHP Developer",
    company_name: "Paperwork Expert",
    icon: paper,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Feb 2023",
    points: [
     
"Spearheaded the full-cycle development of a US-based company's website, ensuring a cohesive online presence.",
"Created an email-based project to automate data compilation, improving efficiency and client communication.",
"Developed a user-friendly dashboard, reducing administrative overhead by 60% and boosting user satisfaction.",
"Enhanced client satisfaction, resulting in a 40% increase in repeat business and referrals.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "Latinosvotemosconciertos",
    icon: latinos,
    iconBg: "#383E56",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Developing and maintaining web applications in wordpress and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Adding payment gateways and other necessary things to run a buisness ",
    ],
  },
  
  {
    title: "Shopify Developer",
    company_name: "SemBliss & Ipresto ",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Current",
    points: [
      
"Established two Shopify stores, iPresto (technology) and Sembliss (beauty), tailoring the Ella theme to meet their specific requirements.",
"Enhanced the Sembliss store with visually appealing elements suited for a beauty store, while optimizing the iPresto store for a seamless tech shopping experience.",
"Implemented strategic design modifications and navigational improvements to increase sales and enhance customer trust.",
"Employed conversion rate optimization techniques and trust-building features such as customer reviews and secure payment options, resulting in boosted sales and heightened customer confidence in both stores.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a replicate that software on the websites dashboard but you've done it.",
    name: "Ahmed Naseem ",
    designation: "CEO",
    company: "Outlook",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "You've taken our buisness to new heights. Our sales have increased so much, all thanks to Zeeshan.",
    name: "Abdullah Waqar",
    designation: "Owner",
    company: "Trips & Holiday",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "After Zeeshan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "M. Faisal",
    designation: "Owner",
    company: "Sembliss",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Youtube Clone",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "API_Intigration",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/ZeeshanZiauddin",
  },
  {
    name: "Management Dashboard",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ZeeshanZiauddin",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },  
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ZeeshanZiauddin",
  },
];

export { services, technologies, experiences, testimonials, projects };
