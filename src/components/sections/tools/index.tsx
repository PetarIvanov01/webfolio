import Carousel from "../../carousel/carousel";

export default function Tools() {
  return (
    <div className="text-center mt-2">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-[#76a0ed] via-[#87b7f8] to-[#76a0ed] bg-clip-text text-transparent">
        My Stack
      </h2>
      <p className="text-lg text-[#595959] mt-2">
        Technologies I use on a daily basis to build.
      </p>

      <div className="mt-12 md:mt-8">
        <Carousel />
      </div>
    </div>
  );
}
