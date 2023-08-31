import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      console.log("Email copied to clipboard:", email);
    });
  };

  return (
    <div>
      <ul className="contact-info-container flex flex-col items-center justify-center">
        <li className="contact-info-title font-bold">Contact Info:</li>
        <li className="contact-info-element py-4 flex items-center">
          <a className="mailSymbol" href="mailto:dylanstormjohnson@comcast.net">
            📧
          </a>
          <a href="mailto:dylanstormjohnson@comcast.net">
            <span>📧</span> Email: dylanstormjohnson@comcast.net
          </a>
        </li>
        <li className="contact-info-element py-4 flex items-center">
          <Link legacyBehavior href="https://github.com/dylanstormjohnson">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/images/github-mark-white.png"
                alt="GitHub Invertocat Logo"
                width={60}
                height={40}
                className="mr-6"
              />
            </a>
          </Link>
          <Link legacyBehavior href="https://github.com/dylanstormjohnson">
            <a className="gitHub-Url" target="_blank" rel="noopener noreferrer">
              <span>GitHub:</span> https://github.com/dylanstormjohnson
            </a>
          </Link>
        </li>
        <li className="contact-info-element py-4 flex items-center">
          <Link
            legacyBehavior
            href="https://www.linkedin.com/in/dylan-johnson-a78643287/"
          >
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/images/linkedin-icon-white._v2.png"
                alt="GitHub Invertocat Logo"
                width={60}
                height={40}
                className="mr-6"
              />
            </a>
          </Link>
          <Link
            legacyBehavior
            href="https://www.linkedin.com/in/dylan-johnson-a78643287/"
          >
            <a
              className="linkedIn-Url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn:</span>{" "}
              https://www.linkedin.com/in/dylan-johnson-a78643287/
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
