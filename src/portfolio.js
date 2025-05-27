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
  username: "Yixin Luo",
  title: "Hi all, I'm Yixin",
  subTitle: emoji(
    "A passionate Data Scientist 📊 with hands-on experience building data-driven solutions across sectors like health, housing, finance, and sustainability. Skilled in Python / R / SQL / Cloud Computing / Tableau / Power BI / GIS, I love turning messy data into clear stories and actionable insights using machine learning, NLP, and data visualization. Always exploring new tools, frameworks, and datasets to unlock the next big idea 🔍✨"  ),
  resumeLink:
    "https://drive.google.com/file/d/1MRuHmmR226ojmvtjaFzfY80XoPmBN9Fi/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yixinluo304",
  linkedin: "https://www.linkedin.com/in/yixin-luo-852647236/",
  gmail: "yixinluo304@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "INSIGHT-DRIVEN DATA SCIENTIST WHO TURNS RAW DATA INTO ACTIONABLE STRATEGY",
  skills: [
    emoji(
      "⚡ Build and evaluate machine learning and deep learning models to power predictions, classification, and decision-making."
    ),
    emoji("⚡ Develop robust ETL pipelines and manage complex databases across SQL, NoSQL, and cloud environments."),
    emoji(
      "⚡ Conduct NLP and text analytics on unstructured data to extract insights from reviews, surveys, and reports."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fas fa-snowflake"
    },
    {
      skillName: "Hadoop",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "Database Management",
      fontAwesomeClassname: "fas fa-file"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-brain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgetown University",
      logo: require("./assets/images/georgetown.png"),
      subHeader: "Master of Science in Data Science for Public Policy",
      duration: "August 2023 - May 2025"
    },
    {
      schoolName: "Sichuan International Studies University",
      logo: require("./assets/images/isu.png"),
      subHeader: "Bachelor of Economics in International Economics and Trade",
      duration: "September 2013 - April 2023"
    },
    {
      schoolName: "Sichuan International Studies University",
      logo: require("./assets/images/isu.png"),
      subHeader: "Bachelor of Art in Diplomacy",
      duration: "September 2013 - April 2023"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python/R", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Visualization",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Engineer",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst Intern",
      company: "Stewards of Affordable Housing for the Future ",
      companylogo: require("./assets/images/housing.png"),
      date: "Dec 2024 – May 2025",
      descBullets: [
        "Queried and analyzed affordable housing data using SQL on a day-to-day basis, delivering insight-driven recommendations that informed outreach strategies and resource allocation for underserved communities.",
        "Built and deployed predictive models to forecast gentrification and migration trends; used Excel, Python and R to clean and analyze 50K+ housing and demographic records.",
        "Created informative dashboards using Power BI, Tableau, and R Shiny to visualize the geospatial housing property portfolio, track key performance indicators, and support internal reporting and external policy advocacy"
      ]
    },
    {
      role: "Data Analyst",
      company: "U.S. Office of Personnel Management",
      companylogo: require("./assets/images/ops.png"),
      date: "Sept 2023 – Dec 2024",
      descBullets: [
        "Defined problem framework and developed testable hypotheses for a multi-agency randomized controlled trial (RCT) involving 8 federal bodies; performed EDA and built statistical models to evaluate behavioral outcomes and uncover data-driven trends that directly influenced executive strategies.",
        "Automated data processing pipelines in R and Python, enabling seamless integration of multiple federal data sources; reduced cleaning and aggregation time by 40%, ensuring operational feasibility for scaling the pilot."
      ]
    },
    {
      role: "Data Science Scholar",
      company: "Massive Data Institute",
      companylogo: require("./assets/images/mdi.png"),
      date: "May 2024 – Aug 2024",
      descBullets: [
        "Analyzed 12 waves of health and financial data using Spark and time series modeling to detect access and stability trends, contributing to a 15% improvement in resource allocation for underserved populations",
        "Applied machine learning to assess how chronic conditions and socioeconomic status influence employment trajectories, providing evidence for long-term labor-market support strategies."
      ]
    },
    {
      role: "Data Science Consultant",
      company: "Data Whale LLC",
      companylogo: require("./assets/images/datawhale.png"),
      date: "Oct 2021-Mar 2023",
      descBullets: [
        "Supported a high-impact consulting engagement with the World Bank, contributing to the assessment of financial protection data systems across 48 countries; conducted landscape analyses to inform the framework design.",
        "Designed time series statistical models to detect anomalies in data coverage, outlier trends, and quality inconsistencies across 500+ datasets, resulting in a 35% increase in automated data quality flagging accuracy.",
        "Queried, cleaned, and harmonized 8M+ records using SQL and R, automating ETL pipelines to integrate data from DHS, UNICEF, and national surveys, reducing data processing time by 30%."
      ]
    }
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
  projects: [
    {
      image: require("./assets/images/project1.jpg"),
      projectName: "China's Development Finance Projects in the Global South",
      projectDesc: "This project analyzes China’s development finance investments through multiple analytical lenses, including sectoral distributions, geographical patterns, and temporal trends. While the core dataset tracks financial investments and funding flows, our analysis extends beyond purely monetary aspects to understand the broader patterns and characteristics of these development projects.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://yt583-tian.shinyapps.io/china-development/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/project2.jpg"),
      projectName: "Understanding Guest Experiences: Sentiment and N-gram Analysis of TripAdvisor Hotel Reviews",
      projectDesc: "This project leverages aspect-based sentiment analysis and n-gram analysis to extract actionable insights from customer feedback, focusing on key aspects such as location, service, room, and staff. Using Hugging Face’s DistilBERT model and multithreading for scalability, I classified sentiment by aspect to pinpoint strengths and weaknesses in guest experiences. In parallel, I performed frequency-based linguistic analysis to identify recurring unigrams, bigrams, and trigrams, which were then visualized to highlight common themes and priorities. This dual approach helps businesses better understand guest concerns, enhance service quality, and uncover patterns that drive customer satisfaction.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://yixinluo304.github.io/DSIII_Concept_Showcase/"
        }
      ]
    },
    {
      image: require("./assets/images/project3.jpg"),
      projectName: "Adversarial Simulation for Enhancing Credit Card Fraud Detection Models",
      projectDesc: "This project evaluates the robustness of machine learning models used for credit card fraud detection through adversarial simulation on tabular transaction data. Using Python, Snowflake SQL, and Amazon EC2/S3, we built and tested models including logistic regression, random forest, and MLP on a highly imbalanced dataset. We introduced realistic feature perturbations—such as changes in transaction amount, time, and distance from home—to simulate evasion tactics. Our results showed that while random forest performed best under normal conditions, MLP demonstrated the greatest resilience under adversarial manipulation, highlighting its potential for secure real-world deployment. All workflows were fully version-controlled and cloud-integrated to support scalable, reproducible fraud analytics.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://yixinluo304.github.io/fraud-detection-project/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

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
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "yixinluo304@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
