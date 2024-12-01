import NavBar from "@/components/navigation/NavBar";
import ServerImages from "@/components/navigation/server-images";

import Home from "@/components/sections/home/index";
import Tools from "@/components/sections/tools/index";

export default function Index() {
  return (
    <div className="relative w-full max-w-[1024px] mx-auto">
      <NavBar>
        <ServerImages />
      </NavBar>
      <div id="home" className="bg-black/95 md:px-14 md:py-12">
        <Home />
      </div>
      <div id="tools" className="pt-2 md:pt-4">
        <Tools />
      </div>
      <div className="h-72"></div>
      <div className="h-72"></div>
      <div className="h-72"></div>
      <div className="h-72"></div>
      <div className="h-72"></div>
    </div>
  );
}
