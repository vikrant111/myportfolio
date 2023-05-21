import React from "react";
import mongodb from "../assets/mongodb.webp";
import greensock from "../assets/greensock.jpg";
import reactjs from "../assets/reactjs.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/nodejs.jpg";
import shopify from "../assets/shopify.jpg";
import expressjs from "../assets/expressjs.png";

const useTechStackDetails = () => {
  const myTechStack = [
    {
      name: "Node JS",
      image: nodejs,
      description:
        "Used for handling backend tasks of the project. Like, server requests/responses, connection with databases and providing informations to the frontend.",
    },
    {
      name: "Express JS",
      image: expressjs,
      description: "It is a node.js framework, used for making web APIs",
    },
    {
      name: "React JS",
      image: reactjs,
      description:
        "It is a javascript library, used for making front-end features and user centric interfaces.",
    },
    {
      name: "MongoDB",
      image: mongodb,
      description:
        "Used for handling all the tasks related to the data storage.",
    },
    {
      name: "Next JS",
      image: nextjs,
      description:
        "It is a React framework that enables several extra features, including server-side rendering and generating static websites. The pages made in next.js are very SEO friendly.",
    },
    {
      name: "Shopify",
      image: shopify,
      description:
        "Used for making an online store for our company's product. It provides easy to understand dashboard to control or webstore.",
    },
    {
      name: "GreenSock Animation",
      image: greensock,
      description: "Used for making the beautiful animations for our websites.",
    },
  ];

  return {
    myTechStack,
  };
};

export default useTechStackDetails;
