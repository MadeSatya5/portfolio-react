import RotatingElement from "./RotatingElement.jsx";
import { TypewriterEffectSmooth } from "../../components/ui/TypeWriter.jsx";
import SosmedIcon from "../../components/ui/SosmedIcon.jsx";
import { Fade, Zoom } from "react-reveal";

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

export default function Hero({heroRef}) {
  return (
    <div className="container max-w-page pt-24 font-bricolage text-white" ref={heroRef}>
      <div className="flex justify-between items-center">
        <div className="basis-2/3 ">
          <TypewriterEffectSmooth words={words} />
          <Fade left delay={150}>
            <p className="text-lg md:text-4xl">
              Passionates about website development and love the beauty of
              nature
            </p>
          </Fade>
          <Fade left delay={300}>
            <SosmedIcon />
          </Fade>
        </div>
        <Fade >
          <RotatingElement />
        </Fade>
      </div>
    </div>
  );
}
