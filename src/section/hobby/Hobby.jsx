import { FocusCards } from "../../components/ui/FocusCard";
import { Fade } from "react-reveal";

const cards = [
  {
    title: "Exploring Nature",
    src: "/image/meinbatu.jpg",
  },
  {
    title: "Playing Music",
    src: "/image/maingitar.jpg",
  },
  {
    title: "Photography",
    src: "/image/nature2.jpg",
  },
];

export default function Hobby() {
  return (
    <div className="container max-w-page mt-52 font-bricolage text-white">
      <Fade right>
        <p className="text-4xl md:text-7xl text-white font-bricolage text-center font-bold mb-16">
          Me & My Hobbies!
        </p>
      </Fade>
      <FocusCards cards={cards} />
    </div>
  );
}
