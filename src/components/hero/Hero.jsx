import RotatingElement from "./RotatingElement.jsx";

export default function Hero() {
  return (
    <div className="container max-w-page mt-24 font-bricolage text-white">
      <div className="flex justify-between">
        <div className="basis-1/2">
          <p className="text-7xl font-semibold">Hi! I&apos;m <span className="text-light-green">Satya</span></p>
          <p className="text-4xl">Passionates about website development and love the beauty of nature</p>
        </div>
        <RotatingElement />
      </div>
    </div>
  );
}
