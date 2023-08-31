"use client";

import Image from "next/image";
import Link from "next/link";
// import { projects } from "./projectData";
// import { Card } from "../../components/projectCards"
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Cabin Conundrum",
    description: "A point-and-click adventure!",
    feature1: "A fully implemented login/signup system.",
    feature2: "Multiple rooms are displayed with unique items in each one.",
    feature3: "Fully-functional gameplay with user-friendly controls.",
    feature4:
      "Backgrounds made with AI art, clickable items drawn personally in Photoshop.",
    feature5: "Highscore system implemented.",
    imageUrls: [
      "/assets/images/Cabin Conundrum 01.png",
      "/assets/images/Cabin Conundrum 02.png",
      "/assets/images/Cabin Conundrum 03.png",
      "/assets/images/Cabin Conundrum 04.png",
      "/assets/images/Cabin Conundrum 05.png",
    ],
    siteUrl: "https://enigmatic-reaches-68692.herokuapp.com/game",
  },
  {
    id: 2,
    title: "Flotsam",
    description: "A text-based survival game!",
    feature1: "A fully implemented login/signup system.",
    feature2: "Several elements to personalize user profile.",
    feature3: "Stories page dynamically filled with all available stories.",
    feature4: "User-friendly gameplay with compelling, story written by me.",
    feature5: "Codebase makes implementation of multiple stories simple.",
    imageUrls: [
      "/assets/images/Flotsam 01.png",
      "/assets/images/Flotsam 02.png",
      "/assets/images/Flotsam 03.png",
      "/assets/images/Flotsam 04.png",
      "/assets/images/Flotsam 05.png",
    ],
    siteUrl: "https://flotsam-47ad0b952592.herokuapp.com/",
  },
  {
    id: 3,
    title: "Marvel-Dex",
    description: "An index of Marvel Heros!",
    feature1: "User friendly layout and functionality.",
    feature2:
      "Users are able to view descriptions of several different marvel heroes.",
    feature3: "API calls are made to fill out information involving heroes",
    feature4: "Users can form their own teams.",
    feature5:
      "This was a creative project using Marvel's free API, I am in no way affiliated with Marvel.",
    imageUrls: [
      "/assets/images/Marvel-Dex 01.png",
      "/assets/images/Marvel-Dex 02.png",
      "/assets/images/Marvel-Dex 03.png",
      "/assets/images/Marvel-Dex 04.png",
      "/assets/images/Marvel-Dex 05.png",
    ],
    siteUrl: "https://dylanstormjohnson.github.io/marvel-dex/",
  },
  // {
  //   id: 4,
  //   title: "Walkabout Tours",
  //   description: "The official website for Walkabout Tours",
  //   feature1: "Showcase of photography made by walkabout tours.",
  //   feature2: "Videos implemented showing drone footage and 360-tours.",
  //   feature3: "Contact functionality implemented.",
  //   feature4: "Several pages with simple navigation and easy of use.",
  //   feature5: "Attractive layout.",
  //   imageUrls: [
  //     "/assets/images/Walkabout Tours 01.png",
  //     "/assets/images/Walkabout Tours 02.png",
  //     "/assets/images/Walkabout Tours 03.png",
  //     "/assets/images/Walkabout Tours 04.png",
  //     "/assets/images/Walkabout Tours 05.png",
  //   ],
  //   siteUrl: "https://flotsam-47ad0b952592.herokuapp.com/",
  // },
];

const Slideshow = ({ imageUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [imageUrls]);

  return (
    <div className="slideshow-container">
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index}`}
          className={`image-item ${index === currentIndex ? "visible" : ""}`}
          style={{ width: "340px", height: "250px" }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="pb-8">
      <p className="contact-info-title py-4 font-bold text-center">Projects:</p>
      {projects.map((project) => (
        <Link legacyBehavior key={project.id} href={project.siteUrl}>
          <a target="_blank" rel="noopener noreferrer">
            <div
              className="card border rounded-lg p-4 mb-4"
              // style={{ width: "1000px" }}
            >
              <div className="slideshow-container">
                <Slideshow imageUrls={project.imageUrls} />
                <div className="text-container flex flex-col pl-4">
                  <h2 className="projects-title-text text-xl font-semibold mb-1">
                    {project.title}
                  </h2>
                  <p className="mb-4 projects-description-text">
                    {project.description}
                  </p>
                  <p className="mb-1">• {project.feature1}</p>
                  <p className="mb-1">• {project.feature2}</p>
                  <p className="mb-1">• {project.feature3}</p>
                  <p className="mb-1">• {project.feature4}</p>
                  <p className="mb-1">• {project.feature5}</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
