import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-image">
      <div className="overlay">
        <div className="text-content">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-lg">
            “If a ship is strong, the ocean&apos;s tides do not bother it.”
            <br />― Matshona Dhliwayo
          </p>
        </div>
      </div>
    </div>
  );
}
