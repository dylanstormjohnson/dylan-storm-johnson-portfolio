"use client";

import Image from "next/image";
import Link from "next/link";

import React from 'react';

function Home() {
  const resumeImage = `/assets/images/Dylan Storm Johnson's Resume.png`;

  const downloadResumePNG = () => {
    const link = document.createElement('a');
    link.href = resumeImage;
    link.download = `Dylan Storm Johnson's Resume.png`;
    link.click();
  };

  const downloadResumeJPG = () => {
    const link = document.createElement('a');
    link.href = resumeImage.replace(".png", ".jpg");
    link.download = `Dylan Storm Johnson's Resume.jpg`;
    link.click();
  };

  const downloadResumePDF = () => {
  const link = document.createElement("a");
  link.href = resumeImage.replace(".png", ".pdf");
  link.download = `Dylan Storm Johnson's Resume.pdf`;
  link.click();
  };

  return (
    <main
      className={`resumeMain flex flex-col items-center justify-between py-6`}
    >
      <Image
        src="/assets/images/Dylan Storm Johnson's Resume.png"
        alt="Resume"
        width={375}
        height={225}
        className="resume-image"
      />
      <div className="flex justify-content items-center">
        <button className="btn btn-ghost" onClick={downloadResumePNG}>
          Download (PNG)
        </button>
        <button className="btn btn-ghost" onClick={downloadResumeJPG}>
          Download (JPG)
        </button>
        <button className="btn btn-ghost" onClick={downloadResumePDF}>
          Download (PDF)
        </button>
      </div>
    </main>
  );
}

export default Home;
