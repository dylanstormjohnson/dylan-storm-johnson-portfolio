"use client";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const metadata = {
  title: "Storm Portfolio",
  description: "Storm's Portfolio!",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState("Home");

  useEffect(() => {
    if (pathname === "/portfolio") {
      setPageTitle("Portfolio");
    } else if (pathname === "/aboutMe") {
      setPageTitle("About Me");
    } else if (pathname === "/contact") {
      setPageTitle("Contact");
    } else if (pathname === "/resume") {
      setPageTitle("Resume");
    } else {
      setPageTitle("Home");
    }
  }, [pathname]);

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className="flex flex-col min-h-screen">
        <header>
          <Link href="/portfolio">
            <div className="triangle projects font-beau-rivage">
              <span>Portfolio</span>
            </div>
          </Link>
          <Link href="/aboutMe">
            <div className="triangle aboutMe">
              <span>About Me</span>
            </div>
          </Link>
          <Link href="/contact">
            <div className="triangle contact">
              <span>Contact</span>
            </div>
          </Link>
          <Link href="/resume">
            <div className="triangle resume">
              <span>Resume</span>
            </div>
          </Link>
          <nav className="navigation h-10 flex justify-center">
            <Link href="/" className="pageTitle mx-2">
              <span>Dylan Storm Johnson&apos;s Portfolio</span>
            </Link>
            <p className="pageTitle mx-2">-</p>
            <Link href="/" className="pageTitle mx-2">
              {pageTitle}
            </Link>
          </nav>
        </header>
        <main className="diamond flex-1">{children}</main>
        <footer className="flex items-center justify-center">
          <Link
            legacyBehavior
            href="https://github.com/dylanstormjohnson"
          >
            <a className="mx-4" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/images/github-mark-white.png"
                alt="GitHub Invertocat Logo"
                width={30}
                height={20}
                className="contactLink"
              />
            </a>
          </Link>
          <Link
            legacyBehavior
            href="https://www.linkedin.com/in/dylan-johnson-a78643287/"
          >
            <a className="mx-4" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/images/linkedin-icon-white._v2.png"
                alt="LinkedIn Logo"
                width={30}
                height={20}
                className="contactLink"
              />
            </a>
          </Link>
        </footer>
      </body>
    </html>
  );
}
