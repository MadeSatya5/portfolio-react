import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SosmedIcon() {
  return (
    <div className="flex gap-3 text:lg md:text-2xl mt-8">
      <a href="https://instagram.com/madesatya.5" target="blank">
        <FaInstagram className="cursor-pointer" />
      </a>
      <a
        href="https://www.linkedin.com/in/made-satya-dhananjaya/"
        target="blank"
      >
        <FaLinkedin className="cursor-pointer" />
      </a>
      <a href="https://github.com/MadeSatya5" target="blank">
        <FaGithub className="cursor-pointer" />
      </a>
    </div>
  );
}
