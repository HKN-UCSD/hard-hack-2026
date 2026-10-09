import siteConfig from "../config/siteConfig.js";

// answer is a string, or an array of strings and { text, href } links
const faq = [
    {
        question: "What are the rules?",
        answer: [
            "HARD Hack follows the ",
            { text: "Major League Hacking (MLH) Code of Conduct", href: "https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" },
            ". All participants are expected to behave professionally, respectfully, and inclusively throughout the event. Harassment, discrimination, or disruptive behavior will not be tolerated. By attending, you agree to follow these rules to help create a safe and welcoming environment for everyone.",
        ],
    },
    {
        question: "I am a non-UCSD Affiliate, how should I join?",
        answer: [
            "Non-UCSD affiliates are welcome to join HARD Hack! You can register through the sign-up form on our website. Please print and fill out ",
            { text: "this form", href: "/media/docs/Hard_Hack_Waiver.pdf" },
            " with your details with your team(And bring it to the day of competition). We look forward to having you at the event!",
        ],
    },
    {
        question: "What is the schedule for HardHack like?",
        answer: ["The latest schedule can be found ", { text: "here", href: siteConfig.scheduleUrl }],
    },
    {
        question: "What is a hackathon?",
        answer: "A hackathon is a gathering where people collaboratively build a project from the ground-up over a short period of time. While working on a particular project, the idea is for each group member to have the ability and freedom to work on whatever they want.",
    },
    {
        question: "Do I need any prior experience?",
        answer: "No, prior experience is not required to participate in the event. To cater to all experience levels, we have separate judging categories for Beginner, Intermediate and Advanced teams. Additionally, we have workshops planned throughout the event for participants to learn new technical and professional skills.",
    },
    {
        question: "Is it free?",
        answer: "Yes! There is no cost to participate in the event, all costs are covered by the ECE department and Associated Students UCSD. The only perceived cost to participants is the time and effort you put into your project and networking during the event.",
    },
    {
        question: "In-person, hybrid, or virtual?",
        answer: "Hard hack will be in-person.",
    },
    {
        question: "What do I bring?",
        answer: "Recommended items: sleeping bag, pillow, blanket, comfortable clothing, toiletries, water bottles, energy drinks and snacks. There will be water refill stations and we will be providing drinks and snacks.",
    },
    {
        question: "What parts will I have access to?",
        answer: "We have many Arduinos and basic components for use as well as quite a few sensors. During the event, we will have a dedicated parts room with a database of parts you can search through. Feel free to reach out if you need specialized hardware or bring your own parts!",
    },
    {
        question: "Do I need a team?",
        answer: "Teams are up to 4 people, so feel free to work by yourself, in a pair, or with a full team of 4! However, it is recommended to form a team of 4 just because it's you and 3 other people working on one project versus just yourself.",
    },
    {
        question: "What are the themes/tracks?",
        answer: "Make sure to follow our Instagram account before Week 3 of Winter quarter, we will be doing a theme and track reveal leading up to the event!!",
    },
    {
        question: "Where is it?",
        answer: siteConfig.venue,
    },
    {
        question: "When is it?",
        answer: siteConfig.timeText,
    },
    {
        question: "Will it be held overnight?",
        answer: "Yes, this year we have secured overnight security, so the event will be held overnight. Participants are welcome to stay throughout the night to work on their projects!",
    },
    {
        question: "How to be a mentor or judge?",
        answer: `Email ${siteConfig.contactEmail} if you are interested in volunteering as a mentor and/or presiding as a judge.`,
    },
];

export default faq;
