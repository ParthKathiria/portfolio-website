export const navItems = [
  { name: "About", link: "#about" },
  {name: "Experience", link: "#experience"},
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Committed to staying up-to-date with the latest technologies and trends",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Enthusiastic & A Fast Learner",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech freak with a passion for development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Football Analysis System using AI/ML",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Spell Quest",
    des: "A dynamic and engaging game designed to enhance children's typing speed and English spelling proficiency across various age groups.",
    img: "/spellquest.jpg",
    iconLists: ["/java.svg", "/libgdx.svg", "/junit.svg", "/json.svg"],
    link: "https://www.youtube.com/watch?v=f2ugGxJNq3E&ab_channel=youtubechanneI",
  },
  {
    id: 2,
    title: "Football Analysis System",
    des: "Detect and track ball, players, their speed and distance covered",
    img: "/football.jpg",
    iconLists: ["/python.svg", "/yolo.svg", "/opencv.svg", "/pandas.svg",],
    link: "https://github.com/ParthKathiria/football-analysis",
  },
  {
    id: 3,
    title: "AI app",
    des: "Coming soon hopefully...",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "",
    
  },
  {
    id: 4,
    title: "Discord Bot",
    des: "A bot with an in-built calculator, unit converter and some fun games!",
    img: "/discordbot.jpg",
    iconLists: ["/python.svg", "/discordpy.svg"],
    link: "https://github.com/ParthKathiria/discord-bot",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
    link: "",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Fellow - Headstarter AI",
    desc: "Built 5+ AI apps and APIs using NextJS, openAI,Pinecone, stripe API with 98% accuracy as seen by 1000+ users",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/headstarter1.svg",
    time: "Jul 2024 - Sep 2024",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ParthKathiria",
  },
  {
    id: 2,
    img: "/gmail.png",
    link: "mailto:parth.kathiria169@gmail.com",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/parth-kathiria-94a153234/",
  },
];
