import { BsEnvelopeFill } from "react-icons/bs";
import FooterItem from "./FooterItem";
import SosmedIcon from "../../components/ui/SosmedIcon";
import { Zoom } from "react-reveal";

const skills = ["React Js", "Next Js", "Tailwind CSS", "Typescript"];

export default function Footer() {
  return (
    <div className=" border-white border-t-2 mt-40 font-bricolage px-10">
      <div className="container max-w-page text-white py-20 flex flex-wrap gap-12 md:gap-20 bg-black">
        <Zoom duration={400}>
          <div>
            <p className="text-2xl md:text-3xl font-bold">Made Satya</p>
            <p className="text-sm md:text-lg mt-5 font-normal">
              Through personal and collaborative projects, <br /> I practice my
              coding skills.
            </p>

            <SosmedIcon />
          </div>
        </Zoom>
        <Zoom duration={800}>
          <div>
            <ul className="text-2xl md:text-3xl font-bold">
              <p className="mb-4">Skill</p>
              {skills.map((skill) => (
                <FooterItem item={skill} key={skill} />
              ))}
            </ul>
          </div>
        </Zoom>
        <Zoom duration={1000}>
          <div>
            <p className="text-2xl md:text-3xl font-bold mb-4">Contact Me</p>
            <div className="flex flex-col gap-2">
              {/* <a
                href="https://wa.me/6281381258567"
                target="_blank"
                className="flex flex-row items-center cursor-pointer hover:underline hover:text-light-green"
              >
                <BsFillTelephoneFill />
                <p className="ml-3 text-sm md:text-lg">+6281381258567</p>
              </a> */}

              <a
                href="mailto:madesatya505@gmail.com"
                target="_blank"
                className="flex flex-row items-center cursor-pointer hover:underline hover:text-light-green"
              >
                <BsEnvelopeFill />
                <p className="ml-3 text-sm md:text-lg">
                  madesatya505@gmail.com
                </p>
              </a>
            </div>
          </div>
        </Zoom>
        <Zoom duration={1200}>
          <div className="flex items-start">
            <p className="text-sm font-bold mt-3 text-white font-bricolage">
              Copyright © 2025 |{" "}
              <a href="https://instagram.com/madesatya.5">@madesatya.5</a>
            </p>
          </div>
        </Zoom>
      </div>
    </div>
  );
}
