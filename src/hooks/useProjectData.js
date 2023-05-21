import React from "react";
// import peakalpha from "../assets/peaklogo.png"
import peakalpha from "../assets/peaklogo.png"
import big4healthlogo from "../assets/big4healthlogo.png"
import dwullogo from "../assets/dwullogo.png"
import portfoliologo from "../assets/portfoliologo.jpg"
import musehealthlogo from "../assets/musehealthlogo.png"
import museioslogo from "../assets/museioslogo.png"
import dwul from "./dwulimages";
import big4healthImages from "./big4healthimages";
import iosdashboardImages from "./iosdashboardimages";

const useProjectData = () => {
  const projectData = [
    {
      id: 0,
      name: "PEAKALPHA CUSTOMER ONBOARDING",
      from: "Mar 2023",
      to: "Current",
      logo: peakalpha,
      images: "",
      company: "BOTMANTRA",
      location: "Bengaluru, Karnataka",
      tech: "React.js, Redux, Material UI",
      info: "The goal of this project is to collect user information in simplistic yet more interactive and user friendly manner. The project have different sections like personal information, contact information, kyc details, nse details, income details, expenses details, education details and so on... These informations are collected and helps peakalpha in providing advices to its clients regarding money management.",
      description: (
        <>
          <p>
            The Peakalpha Customer Onboarding for Financial Planning is a
            project aimed at collecting user information in a simplistic yet
            interactive and user-friendly manner. The system collects various
            types of information, including personal information, contact
            information, KYC details, NSE details, income details, expenses
            details, education details, and more.
          </p>
          <p>
            As a frontend developer on this project, my task was to design and
            implement the interactive web pages using React.js. The website is
            designed to provide a smooth and seamless experience to users while
            collecting their information. The system provides a clear and
            concise form for users to fill out, with different sections for
            different types of information. The system guides the user through
            each section, ensuring all necessary information is provided.
          </p>
          <p>
            The collected information is used by PeakAlpha to provide advice to
            its clients regarding money management. The system analyzes the data
            and generates reports and insights for the user and the company's
            financial advisors. The system also provides personalized
            recommendations based on the user's financial situation, helping
            them to make better financial decisions.
          </p>
        </>
      ),
    },
    // {
    //   id: 1,
    //   name: "MY PORTFOLIO",
    //   from: "Feb 2023",
    //   to: "Current",
    //   logo: portfoliologo,
    //   images: "",
    //   company: "CONZUMEX INDUSTRIES",
    //   location: "Bengaluru, Karnataka",
    //   tech: "React.js, Redux, Material UI, Arwes",
    //   info: "This project is built to showcase my development skills. By presenting this project, I hope to demonstrate my passion and commitment to the field of software development, and my readiness to take on new challenges and contribute to the success of any team or organization.",
    //   description: (
    //     <>
    //       <p>
    //         My Portfolio is a web application that showcases my development
    //         skills. It is built using React.js and Arwes, a futuristic user
    //         interface (UI) framework.
    //       </p>
    //       <p>
    //         The purpose of this project is to create a personal website that
    //         displays my portfolio, skills, and achievements. The website is
    //         designed to be responsive, user-friendly, and visually appealing
    //         which provides a unique and futuristic design language.
    //       </p>
    //     </>
    //   ),
    // },
    {
      id: 2,
      name: "MUSE-IOS-DASHBOARD",
      from: "May 2022",
      to: "Mar 2023",
      logo: museioslogo,
      images: iosdashboardImages,
      company: "CONZUMEX INDUSTRIES",
      location: "Bengaluru, Karnataka",
      tech: "Javascript, React.js, Redux, Next.js, Material UI",
      info: "This project is build to keep a tabular record of everything (company's functioning), tracking inventory, vendors, components and SKUs records are the main features of this website.",
      description: (
        <>
          <p>
            The MUSE-IOS-DASHBOARD is a web application that is designed to keep
            track of everything related to the functioning of a company. The
            main features of the website include tracking inventory, vendors,
            components, and SKUs records.
          </p>
          <p>
            As a frontend developer on this project, my task was to create the
            entire website using Next.js, a popular React framework that allows
            for server-side rendering and better SEO optimization. The website
            is designed to provide a user-friendly interface that allows for
            easy navigation and efficient data management. The dashboard
            provides an overview of the company's inventory, vendors,
            components, and SKUs records.
          </p>
          <p>
            The inventory section allows users to view and manage all the
            products and items in stock, including their quantity, pricing, and
            availability status. The vendor section keeps track of all the
            vendors and suppliers, including their contact information, payment
            terms, and delivery schedules. The components section tracks the
            various components and parts used in the production process,
            including their stock levels and pricing. The SKUs section allows
            users to manage the various product variations and options,
            including their pricing and availability status.
          </p>
          <p>
            The website is built using Next.js, which provides several benefits
            such as server-side rendering, faster loading times, and better SEO
            optimization.
          </p>
        </>
      ),
    },
    {
      id: 3,
      name: "MUSEHEALTH-DASHBOARD",
      from: "May 2022",
      to: "Mar 2023",
      logo: musehealthlogo,
      images: "",
      company: "CONZUMEX INDUSTRIES",
      location: "Bengaluru, Karnataka",
      tech: "Javascript, React.js, Redux, Next.js, React-charts2.js, Material UI, Sass",
      info: "This project is an online initiative for keeping record of users health. Basically, the users vitals are recorded through sensor and all the data are displayed on the dashboard.",
      description: (
        <>
          <p>
            The MUSEHEALTH-DASHBOARD is an online initiative designed to keep
            track of users' health. The system records the user's vital signs
            through sensors and displays the data on the dashboard. Currently,
            this project is being used in BMH hospital to track the vitals of
            patients and schedule their appointments with the doctors
            accordingly.
          </p>

          <p>
            As a developer on this project, my role was to design and implement
            complex features using the specified technologies. The website is
            designed to provide a user-friendly interface that allows for easy
            navigation and efficient data management. The dashboard displays all
            the vital signs, including heart rate, blood pressure, oxygen
            saturation, temperature, and respiratory rate. The system allows
            users to set custom thresholds for each vital sign, which alerts the
            healthcare team in case of any abnormal values.
          </p>

          <p>
            The system also provides historical data, which allows for trend
            analysis and monitoring of the user's health over time. The website
            is built using modern web development technologies such as React,
            Node.js, and MongoDB. React is used to design the user interface,
            providing a responsive and visually appealing design. Node.js is
            used to build the backend, which handles data storage, retrieval,
            and processing. MongoDB is used as the database, which stores all
            the user's data in a secure and scalable manner.
          </p>

          <p>
            Through working on this project, I have gained experience in
            developing complex features using modern web development
            technologies. I have also learned how to handle large amounts of
            data efficiently.
          </p>
        </>
      ),
    },
    {
      id: 4,
      name: "DWUL.io",
      from: "Jan 2022",
      to: "Apr 2022",
      logo: dwullogo,
      images: dwul,
      company: "NETSET SOFTWARE SOLUTIONS",
      location: "Mohali, Punjab",
      tech: "React.js, Redux, Material UI",
      info: "This project is a one stop solution to register users to different training and educational courses, it searches for the different programs that you want to register in, and their course fee, and helps you in registering yourself for the same. You can also contact with the associated organizers and get reminders and notifications regarding your registeration and performance status.",
      description: (
        <>
          <p>
            The DWUL(Do What You Love) is an all-in-one solution for users to
            register for various educational and training courses. The system
            simplifies the process of finding and registering for different
            courses, as well as managing course schedules and progress.
          </p>

          <p>
            The website is designed to provide a user-friendly interface that
            allows for easy navigation and efficient data management. The system
            allows users to search for different courses based on their
            preferences, such as course type, duration, and location. The system
            provides information about the course content, instructor
            information, and course fees, helping users make informed decisions.
            Once a user registers for a course, the system provides access to
            the course materials and resources, such as videos, PDFs, and
            quizzes.
          </p>

          <p>
            As a developer on this project, my task was to design and implement
            the frontend using React.js. The system allows users to communicate
            with course instructors and fellow students through a messaging
            system. The system also provides notifications and reminders to
            users regarding course deadlines, assignments, and performance
            status and tracks the user's progress and performance in each
            course, providing analytics and reports to help users monitor their
            performance. Through working on this project, I have gained
            experience in creating user-friendly interfaces using React.js and
            integrating frontend with backend systems. I have also learned how
            to handle user data securely, process online payments efficiently,
            and integrate with third-party APIs.
          </p>
        </>
      ),
    },
    {
      id: 5,
      name: "BIG4HEALTH",
      from: "Oct 2021",
      to: "Dec 2021",
      logo: big4healthlogo,
      images: big4healthImages,
      company: "NETSET SOFTWARE SOLUTIONS",
      location: "Mohali, Punjab",
      tech: "React.js, Redux, Material UI",
      info: "This project is an online initiative for maintaining the users health and providing the online suggestions/advices and supplements.",
      description: (
        <>
          <p>
            BIG4HEALTH is an online initiative designed to help users maintain
            their health and receive online suggestions and advice regarding
            their health. The system provides users with personalized supplement
            recommendations based on their health conditions and goals. As a
            frontend developer on this project, my task was to create
            interactive web pages and add features using React.js. The website
            is designed to provide a user-friendly interface that allows for
            easy navigation and efficient data management.
          </p>

          <p>
            The system allows users to create a personalized health profile that
            includes their age, gender, weight, height, and health conditions.
            Based on this information, the system provides personalized
            supplement recommendations that are tailored to their needs. The
            system also provides online suggestions and advice regarding their
            health, including nutrition, exercise, and lifestyle changes. The
            website is built using React.js for the frontend and Node.js for the
            backend. React.js is used to design the user interface, providing a
            responsive and visually appealing design. Node.js is used to build
            the backend, which handles data storage, retrieval, and processing.
            The system also integrates with third-party APIs to provide users
            with the latest health information and supplement recommendations.
          </p>

          <p>
            Through working on this project, I have gained experience in
            creating interactive web pages using React.js. I have also learned
            how to integrate third-party APIs into web applications and how to
            handle user data in a secure and efficient manner.
          </p>
        </>
      ),
    },
  ];

  return {
    projectData
  };
};
export default useProjectData;
