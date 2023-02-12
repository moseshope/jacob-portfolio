import img1 from './assets/images/s1.jpg';
import img2 from './assets/images/s2.jpg';
import img3 from './assets/images/s3.jpg';
import img4 from './assets/images/s4.jpg';
import img5 from './assets/images/s5.jpg';
import img6 from './assets/images/s6.jpg';
import banner from './assets/images/web_dev.jpg';
import avata from './assets/images/jacob.png';

const logotext = "Jacob Kwan";
const meta = {
    title: "Jacob.K",
    description: "Jacob Kwan is a passionate Full Stack Developer who has 10+ years of experience",
};

const introdata = {
    title: "Jacob is",
    animated: {
        first: "MERN stack master",
        second: "LAMP stack profession",
        third: "Python Django expert",
    },
    description: "I'm a passionate Full Stack developer with 8 over years of experience." +  
                 "JavaScript and Python is major language so Already mastered MERN, MEAN, LAMP, Python Django, Ecommerce and necessary relevant modules."+
                 "Always have an idea of a rational and effective composition plan, and in proposing and implementing it. And stay with the company and maintain an enterprising and" + 
                "forward attitude that can be guaranteed with excellent technology." +
                "Keeps Challenging new technologies with a sense of crisis.",        
                 
    your_img_url: banner,
    your_avata_url: avata,
};

const dataabout = {
    title: "What is my goal",
    aboutme: "Always meeting the needs of the other party and taking responsibility for the project from launch to success. Code quality is the heart of a developer. At the end of each work day, I like receiving feedback from client at regular intervals.",
};
const worktimeline = [{
        jobtitle: "Weekdays",
        where: "Remote",
        date: "09:00' ~ 17:00'",
    },
    {
        jobtitle: "Interview",
        where: "Video call",
        date: "Every 18:00 PST' except weekend",
    },
    {
        jobtitle: "Break days",
        where: "Holiday & Weekend",
        date: "No working",
    },
];

const skills = [
    {
        name: "Python",
        value: 100,
    },
    {
        name: "JavaScript",
        value: 100,
    },
    {
        name: "PHP",
        value: 100,
    },
    {
        name: "Rust",
        value: 75,
    },
    {
        name: "Liquid/Shopify",
        value: 100,
    },
    {
        name: "Python Django",
        value: 100,
    },
    {
        name: "React",
        value: 100,
    },
    {
        name: "Vue.js",
        value: 100,
    },
    {
        name: "Python Selenium",
        value: 100,
    },
    {
        name: "Nest.js",
        value: 100,
    },
    {
        name: "Next.js",
        value: 100,
    },
    {
        name: "MongoDB",
        value: 100,
    },
    {
        name: "MySQL",
        value: 100,
    },
    {
        name: "PostgreSQL",
        value: 100,
    },
    {
        name: "Solidity/SmartContract",
        value: 100,
    },
    {
        name: "HTML/CSS",
        value: 100,
    },
    {
        name: "Git",
        value: 100,
    },    
    {
        name: "HTML/CSS",
        value: 100,
    },
    {
        name: "Trello/Jira",
        value: 100,
    },    
];

const services = [
    {
        title: "Web Site Development",
        description: "Various kinds of websites such as Blog, Service provider, Advertising and other Functional Web applications",
    },
    {
        title: "Ecommerce Technical Support",
        description: "Shopify store, Woocommerce, Prestashop and other customer intention oriented app building",
    },
    {
        title: "AR/VR development",
        description: "Build augmented reality using Aframe, D3.js, Three.js",
    },
];

const dataportfolio = [{
        img: img1,
        desctiption: "Spots TV site (Vue.js / Nuxt.js / Node.js / Amazon webservice / Ngnix)",
        link: "https://www.sporttv.pt/",
    },
    {
        img: img2,
        desctiption: "Japanese Cosmetic Business potal (React / Core.js / Amazon webservice)",
        link: "https://corp.shiseido.com/report/en/2021/",
    },
    {
        img: img3,
        desctiption: "Adachi - Online Restaurant (Wordpress / JQuery / MySQL / Flywheel / Google Analytics)",
        link: "https://adachirestaurant.com/gallery/",
    },
    {
        img: img4,
        desctiption: "Swedish Scooter & Byke market (Shopify)",
        link: "https://eltrastore.se/",
    },
    {
        img: img5,
        desctiption: "Hotel CRM (Wordpress / Vue.js / MySQL / MailChimp)",
        link: "https://www.theviewfromtheshard.com/",
    },
    {
        img: img6,
        desctiption: "Czech Flight booking service (Angular 8 / Node.js / Express.js / Hammer.js)",
        link: "https://www.letuska.cz/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "moseshope.dev@gmail.com",
    YOUR_FONE: "+1 267 915 2526",
    description: "Contact to me at anytime you want",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/moseshope",
    // facebook: "https://facebook.com",
    linkedin: "https://linkedin.com/in/jacob-guan",
    // twitter: "https://twitter.com",
    // youtube: "https://youtube.com",
    // twitch: "https://twitch.com",
    discord: "Moseshope#7718",
    fcManager: "https://drive.google.com/file/d/10-FfJT6lIy8M1Kyy9IEk2AiLAmKWye1t/view?usp=sharing",
    
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};