import {SiOpenaigym} from 'react-icons/si'
import {GiArtificialIntelligence} from 'react-icons/gi'
import {BsCodeSlash} from 'react-icons/bs'
import {BsClipboardData} from 'react-icons/bs'
import {DiDigitalOcean} from 'react-icons/di'
import {BsLaptop} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'




export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
   
    // {
    //     name: "Plans",
    //     path: '/plans'
    // },
    {
        name: "Team",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <BsCodeSlash/>,
        title: "Web Development",
        info: "We love creative and design with passion of building epic web experiences to blow people's minds..",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <BsClipboardData/>,
        title: "Data Engineering",
        info: "Things get done only if the data we gather can inform and inspire those in a position to make a difference.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <GiArtificialIntelligence/>,
        title: "Artificial Intelligence",
        info: "AI can enable humans to focus on parts of their role that add the most value.",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Support Applications",
        info: "The important thing about outsourcing or global sourcing is that it becomes a very powerful tool to leverage talent, improve productivity",
        path: "/programs/444"
    },
    {
        id: 5,
        icon: <DiDigitalOcean/>,
        title: "Digital Marketing",
        info: "Going viral is not an outcome it's a happening, sometimes it happens sometimes it doesn't, just remember, fans are vanity and sales are sanity.",
        path: "/programs/555"
    },
    {
        id: 6,
        icon: <BsLaptop/>,
        title: "Software Development",
        info: "The task of the software development team is to engineer the illusion of simplicity.",
        path: "/programs/666"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    }
]









export const faqs = [
    {
        id: 1,
        question: "Question 1?",
        answer: "Answer 1"
    },
    {
        id: 2,
        question: "Question 2?",
        answer: "Answer 2."
    },
    {
        id: 3,
        question: "Question 3?",
        answer: "Answer 3"
    },
    {
        id: 4,
        question: "Question 4?",
        answer: "Answer 4"
    },
    {
        id: 5,
        question: "Question 5",
        answer: "Answer 5"
    },
    {
        id: 6,
        question: "Question 6?",
        answer: "Answer 6"
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Steven Archer",
        quote: "This is my second time hiring Calctechnologies. I want to thank Pavan for doing a great job creating my website. I personally endorse them to anymore seeking assistance with creating a website. I will hire them again with my next project :) Again gentlemen, thanks for all your help making my website come to life!.",
        job: "Student",
        avatar: require("./images/p1.png")
    },
    {
        id: 2,
        name: "Raj Kumar",
        quote: "Putting together a website is a task, finding the right individual or company is even more complex. I did my search around looking for this particular company that has the ability to create, design and optimized my web site. Thanks God I met calctechnologies, not only they have great taste in design but they can guide you through the process and beyond.",
        job: "Software Egineer",
        avatar: require("./images/p2.jpg")
    },
    {
        id: 3,
        name: "Robert Din",
        quote: "Calctechnologies did a great job of not only creating our website how we wanted it to be, but also gave us great insight on how to reach potential viewers. Their proven experience and excellence is the reason why our company would recommend calctechnologies to anyone who is looking to create a customized website..",
        job: "University Lecturer",
        avatar: require("./images/p3.png")
    },
   
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]









const Trainer1 = require('./images/Dwarkaz.jpg')
const Trainer2 = require('./images/pavan5.jpg')
const Trainer3 = require('./images/bharat.jpeg')



export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Pavan Kumar',
        job: 'CEO',
        icon:'AiFillInstagram',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Pavan Kumar',
        job: 'Co-Founder',
        icon:'AiFillInstagram',

        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Pavan Kumar',
        job: 'Marketing Manger',
        icon:'AiFillInstagram',

        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },

]