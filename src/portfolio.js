/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rojo Pedro",
  title: "Hi all, I'm Pedro",
  subTitle: emoji(
    "I'm a passionate Game Developer 🚀 with experience building Desktop, Mobile, and VR apps using Unity, Unreal, and other exciting tools and frameworks. I also teach and coordinate courses in game development, helping students bring their own ideas to life."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1yHiBi8hzX0YdW80YAz_TCLNH15SI6mi0/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/RojoPedro",
  linkedin: "https://www.linkedin.com/in/pedro-rojo-621962186/",
  gmail: "bkpedroxrojo@gmail.com",
  instagram: "https://www.instagram.com/ciaomichiamopedro/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "YOUNG GAME DEV WHO WANTS TO EXPLORE EVERY SINGLE TECH AVAILABLE",
  skills: [
    emoji(
      "⚡ Develop highly interactive Games / VR Experiences for your target platforms"
    ),
    emoji("⚡ Constantly studying the latest Tools to stay efficient and maximize results"),
    emoji(
      "⚡ Great predisposition for teamwork and cross-discipline collaboration"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Unreal",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Steam",
      fontAwesomeClassname: "fab fa-steam"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "mobile",
      fontAwesomeClassname: "fas fa-mobile"
    },
    {
      skillName: "Arduino",
      fontAwesomeClassname: "fas fa-microchip"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "BigWave",
      logo: require("./assets/images/BigwaveLogo.jpg"),
      subHeader: "Master in Coding",
      duration: "September 2022- March 2023",
      desc: "Focused on game development, AR/VR, AI, and web technologies.",
      descBullets: [
        "8 hours/day, 5 days a week, for 6 months",
        "Initial period focused on theory, followed by a balanced mix of theory and practice"
      ]
    },
    {
      schoolName: "BigRock R&D",
      logo: require("./assets/images/RedLogo.jpg"),
      subHeader: "Program focused on researching and developing emerging technologies",
      duration: "March 2023 - September 2023",
      desc: "Deep-dived on advanced projects with MetaHumans, AR/VR experiences, AI powered Installations.",
      descBullets: [
        "8 hours/day, 5 days a week, for 6 months",
        "In-depth exploration in personal areas of interest",
        "Occasional collaborations with real clients and local companies."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Unity",
      progressPercentage: "92%"
    },
    {
      Stack: "Unreal Engine", //Insert stack or technology you have experience in
      progressPercentage: "89%" //Insert relative proficiency in percentage
    },  
    {
      Stack: "Programming",
      progressPercentage: "94%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Teacher and Developer",
      company: "Bigrock",
      companylogo: require("./assets/images/BigrockLogo.png"),
      date: "September 2023 – Today",
      desc: "Teaching and coordinating the Master in Coding and the Master in Videogame",
      descBullets: [
        "Head of Master in Videogame",
        "Prepared and delivered lessons for both Master programs",
        "Defined course curriculum and learning objectives",
        "Delivered final thesis for each master as project manager"
      ]
    },
    {
      role: "Teacher",
      company: "H-Farm",
      companylogo: require("./assets/images/HfarmLogo.jpeg"),
      date: "Summer 2023 - Summer 2024",
      desc: "Led several Summer Camps, week-long learning programs for young students starting from zero, introducing them to coding and digital creativity in an engaging and accessible way."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME BIG THINGS I HELPED CREATE AND DELIVER",
  projects: [
    {
      image: require("./assets/images/ScilaDragoDiamante.png"),
      projectName: "Scila e Il Drago Diamante",
      projectDesc: "PC Game available on Steam for Free",
      footerLink: [
        {
          name: "Steam Page",
          url: "https://store.steampowered.com/app/3809460/Scila_e_il_Drago_Diamante/"
        }
      ]
    },
    {
      image: require("./assets/images/BiennaleArchitetturaVenezia.png"),
      projectName: "Venetiel MML",
      projectDesc: "Exhibited at Biennale Architettura 2023, Venice",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.linkedin.com/posts/pedro-rojo-621962186_although-its-a-year-late-i-am-thrilled-activity-7221158516147818499-wWaK?utm_source=share&utm_medium=member_desktop&rcm=ACoAACvsgvkBhjek4t72bEkxynCftphdE8AAptQ"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/CoterieLogo.png"),
      projectName: "COTERIE x Arcadia Earth",
      projectDesc: "Live AI installations at Javits Center, NewYork",
      footerLink: [
        {
          name: "COTERIE post",
          url: "https://www.instagram.com/reel/C3p_oIfrG60/?igsh=ODJibXE2d2sycjNm"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications "),
  subtitle:
    "I'm not a fan of 'Certificates', but just in case...",

  achievementsCards: [
    {
      title: "Unreal Authorized Instructor",
      subtitle:
        "Belonging to an exclusive group of Unreal Authorized Instructors recognized by Epic",
      image: require("./assets/images/UAIbadge.png"),
      imageAlt: "Unreal UAI Badge",
      footerLink: [
        {
          name: "Certification",
          url: "https://credential.unrealengine.com/8d91c172-faef-46ec-9913-12e2bf8096f4#acc.cTH1VFjb"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Yapping",
  subtitle:
    "With Love for Developing cool stuff, I'm always excited to talk about tech and carreer journeys.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [  
    {
      url: "https://www.youtube.com/watch?v=ABHh8etyUPw&t=327s",
      title: "Leaving Epic to Go Indie – Vittorio Durin's Journey",
      description:
        "How do you find your path, become a senior, or even make a game as a solo dev? We discuss it all with Vittorio Durin."
    },
    {
      url: "https://www.youtube.com/watch?v=2TJ3fB7dIMI&t=923s",
      title: "Can a 10.000$ Mac Studio Handle This?",
      description:  
        "Together with Jaki Dale, we pushed Apple’s M3 Ultra to its limits. The results might surprise you!."
    },
    {
      url: "https://www.youtube.com/watch?v=mwnwVoB6SB0&t=155s",
      title: "A Casual Chat with my ex-student Lorenzo Vichi",
      description:  
        "In this 20-minute chat we share thoughts on video games, AI, math, and much more. Just standard yapping, but on camera."
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Yapping 🎙️"),
  subtitle: "ALWAYS EXCITED TO TALK ABOUT TECH AND CARRRER JOURNEYS",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+39-3429580745",
  email_address: "bkpedroxrojo@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
