import RotatingElement from "./RotatingElement.jsx";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { TypewriterEffectSmooth } from "../ui/TypeWriter.jsx";

const words = [
  {
    text: "Hi!",
  },
  {
    text: "I'm",
  },

  {
    text: "Satya.",
    className: "text-light-green",
  },
];

export default function Hero() {
  return (
    <div className="container max-w-page mt-24 font-bricolage text-white">
      <div className="flex justify-between items-center">
        <div className="basis-1/2 ">
          <div>
            <TypewriterEffectSmooth words={words} />
            {/* Hi! I&apos;m <span className="text-light-green">Satya</span> */}
          </div>
          <p className="text-4xl">
            Passionates about website development and love the beauty of nature
          </p>
          <div className="flex gap-3 text-2xl mt-8">
            <FaInstagram className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaGithub className="cursor-pointer" />
          </div>
        </div>
        <RotatingElement />
      </div>
    </div>
  );
}
