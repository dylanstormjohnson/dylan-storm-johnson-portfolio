import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul className="flex flex-col items-center justify-center">
        <Image
          src="/assets/images/Profile Picture.jpg"
          alt="Profile Picture"
          width={300}
          height={150}
          className="profile-picture"
        />
        <li className="about-me-text">
          &quot;Whatever you do, work at it with all your heart, as working for
          the Lord, not for human masters,...&quot;
        </li>
        <li className="about-me-text px-4 mr-8 ml-auto">
          -Colossians 3:23 NIV
        </li>
        <li className="about-me-text py-4 flex items-center">
          It is for this reason I will work to accomplish the tasks given to me
          in such a way as to honor the Lord
          <br />
          as a hard worker. Creativity, hard work, and working well in a team
          are just a few of my strong suits.
          <br />
          When I come up with an idea or am presented with a task, I put my mind
          to the test to figure it out or
          <br />
          learn how to make it happen. I have university-level training in
          Full-Stack Web Development and am
          <br />
          quick to learn new skills. I aim to be dependable, helpful, and
          approachable.
        </li>
        <li className="about-me-text BlessedDay py-4 flex items-center">
          Have a blessed day!
        </li>
      </ul>
    </div>
  );
}
