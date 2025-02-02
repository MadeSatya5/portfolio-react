import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import FooterItem from "./FooterItem";

const skills = ["React Js", "Next Js", "Tailwind CSS", "Typescript"];
const navigations = ["About Me", "Experience", "Project", "Contact"];

export default function Footer() {
  return (
    <div className=" border-white border-t-2  mt-40 font-bricolage ">
      <div className="container max-w-page text-white py-20 flex flex-wrap gap-28 bg-black">
        <div>
          <p className="text-3xl font-bold">Made Satya</p>
          <p className="text-lg mt-5 font-normal">
            Through personal and collaborative projects, <br /> I practice my
            coding skills.
          </p>
          <div className="flex gap-3 text-2xl mt-4">
            <FaInstagram className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaGithub className="cursor-pointer" />
          </div>
        </div>
        <div>
          <ul className="text-3xl font-bold">
            <p className="mb-4">Skill</p>
            {skills.map((skill) => (
              <FooterItem item={skill} key={skill} />
            ))}
          </ul>
        </div>
        <div>
          <p className="text-3xl font-bold mb-4">Contact Me</p>
          <div className="flex flex-col gap-2">
            <a
              href="https://wa.me/6281381258567"
              target="_blank"
              className="flex flex-row items-center cursor-pointer hover:underline hover:text-light-green"
            >
              <BsFillTelephoneFill />
              <p className="ml-3 text-lg">+6281381258567</p>
            </a>

            <a
              href="mailto:madesatya505@gmail.com"
              target="_blank"
              className="flex flex-row items-center cursor-pointer hover:underline hover:text-light-green"
            >
              <BsEnvelopeFill />
              <p className="ml-3 text-lg">madesatya505@gmail.com</p>
            </a>
          </div>
        </div>
        <div>
          <ul className="text-3xl font-bold">
            <p className="mb-4">Navigation</p>
            {navigations.map((navigation) => (
              <FooterItem item={navigation} key={navigation} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
