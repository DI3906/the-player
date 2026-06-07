import Image from "next/image";
import HeaderProfile from "./components/HeaderProfile/HeaderProfile";
import AboutMe from "./components/AboutMe/AboutMe";
import Sections from "./components/Sections/Sections";
import FooterP from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="justify-items-center">
      <Image
        alt="image-profile"
        src="/images/kalisa-veer-WtoytXt7aOI-unsplash.jpg"
        width="0"
        height="0"
        sizes="100vw"
        className="banner"
      />
      <div className="flex flex-col pl-25 pr-25 w-full">
        <HeaderProfile/>
        <main className="flex">
          <AboutMe/>
          <Sections/>
        </main>
      </div>
      <FooterP/>
    </div>
  );
}
