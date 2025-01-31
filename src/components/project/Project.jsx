import { CardHover } from "../ui/Card-Hover-Effect";

const projects = [
  {
    title: "Hepatic Eye",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: "/image/forda1.jpg",
  },
  {
    title: "HealthCare",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    image: "/image/forda2.jpg",
  },
  {
    title: "Galactic Guardian 2D",
    description:
      "My first Game Dev Project using C# and Unity. Completed in one week through collaboration with one of my friends.",
    link: "https://google.com",
    image: "/image/forda3.jpg",
  },
  {
    title: "Nonton Cuy",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Time Travel App",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export default function Project() {
  return (
    <div className="container max-w-page mt-52">
      <h2 className="text-lg md:text-7xl mb-4 text-white font-bricolage text-center font-bold">
        Project
      </h2>
      <CardHover items={projects} />
    </div>
  );
}
