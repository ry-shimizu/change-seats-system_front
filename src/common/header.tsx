import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdEventSeat } from "react-icons/md";
import Sidebar from "./sidebar";

const Header = () => {
  const [open, setOpen] = useState(true);
  const openNavFunction = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="bg-blue-800 text-white p-4 flex h-16 fixed w-full">
        <button onClick={openNavFunction} className="mr-5">
          {open ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
        <div className="container mx-auto">
          <div className="text-2xl font-bold flex">
            <MdEventSeat size="2rem" />
            <div className="ml-1">Change Seats System Manager</div>
          </div>
        </div>
      </header>
      {open && <Sidebar />}
    </>
  );
};

export default Header;