import { Fade } from "react-reveal";
import { CardHover } from "../../components/ui/Card-Hover-Effect";

const projects = [
  {
    title: "Hepatic Eye",
    description:
      "A mobile application for detecting jaundice caused by hepatitis using eye, with trained models and yolo v8",
    link: "https://github.com/MadeSatya5/HepaticEye",
    image: "/image/hepatic.png",
  },
  {
    title: "HealthCare",
    description:
      "A website for organizing and managing health consultations between patients and doctors. Features login as patient and doctor, and CRUD of appointments.",
    link: "",
    image: "/image/healthcare.png",
  },
  {
    title: "Kode Kreasi",
    description:
      "A web-based educational platform that provides lecture materials related to computer science",
    link: "https://kode-kreasi.vercel.app/",
    image: "/image/kodekreasi.png",
  },
];

export default function Project({ projectRef }) {
  return (
    <div className="container max-w-page pt-52" ref={projectRef}>
      <Fade bottom delay={200}>
        <h2 className="text-4xl md:text-7xl mb-4 text-white font-bricolage text-center font-bold">
          Project
        </h2>
      </Fade>
      <CardHover items={projects} />
    </div>
  );
}
