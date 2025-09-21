import HeaderProfile from "./components/HeaderProfile/HeaderProfile";
import MyProjects from "./components/MyProjects/MyProjects";

export default function Home() {
  return (
    <div className="font-sans justify-items-center min-h-screen">
      <main className="flex flex-col">
        <HeaderProfile/>
        <MyProjects/>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Created by Diego</p>
      </footer>
    </div>
  );
}
