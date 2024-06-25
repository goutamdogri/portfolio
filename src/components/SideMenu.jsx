import { useEffect, useState } from "react";
import ContactMeBtn from "./ContactMeBtn";
import Menu from "./Menu";

function SideMenu() {
  const [menuHide, setMenuHide] = useState(0);

  useEffect(() => {
    document.querySelector(".menuIcon").addEventListener("click", (event) => {
      event.stopPropagation();
      setMenuHide(1);
    });

    document.querySelectorAll(".sideMenuHide").forEach((element) => {
      element.addEventListener("click", () => {
        setMenuHide(0);
      });
    });
  }, []);

  return (
    <div
      className={`absolute w-6/12 max-[500px]:w-8/12 h-[100vh] bg-[#dfdfff] right-0 ${
        menuHide == 0 ? "hidden" : ""
      }`}
    >
      <div className=" flex flex-col justify-center items-center pt-20 ">
        <div className="flex flex-col justify-center items-center">
          <Menu
            className="btn font-medium border-b-2 border-black text-center mb-8 text-xl ml-0"
            link="#home"
          >
            Home
          </Menu>
          <Menu
            className="btn hover:border-slate-400 mb-8 text-xl ml-0"
            link="#aboutMe"
          >
            About me
          </Menu>
          <Menu
            className="btn hover:border-slate-400 mb-8 text-xl ml-0"
            link="#projects"
          >
            Project
          </Menu>
          <Menu
            className="btn hover:border-slate-400 mb-16 text-xl ml-0"
            link="#contactMe"
          >
            Contact me
          </Menu>
        </div>
        <ContactMeBtn />
      </div>
    </div>
  );
}

export default SideMenu;
