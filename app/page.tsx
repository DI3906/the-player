import HeaderProfile from "./components/HeaderProfile/HeaderProfile";
import AboutMe from "./components/AboutMe/AboutMe";
import Sections from "./components/Sections/Sections";
import FooterP from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="justify-items-center">
      <div className="banner"></div>
      <div className="flex flex-col pl-25 pr-25">
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
