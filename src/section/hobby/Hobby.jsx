import { FocusCards } from "../../components/ui/FocusCard";

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
    <div className="container max-w-page mt-40 font-bricolage text-white">
      <p className="text-lg md:text-7xl text-white font-bricolage text-center font-bold mb-16">Me & My Hobbies!</p>
      <FocusCards cards={cards} />
    </div>
  );
}
