import style from "./navbar.module.scss";
import Link from "next/link";
import { useState } from "react";
import Contact from "../Contact/Contact";
import Image from "next/image";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [contact, setContact] = useState(false);
  const handleClick = () => {
    setState(!state);
  };
  const handleContact = () => {
    setContact(!contact);
  };
  return (
    <>
      <nav className={style.main}>
        <Link href="/">
          <div className={style.logo}>
            <Image src="/logo.jpeg" layout="fill" alt="logo" />
          </div>
        </Link>
        <svg
          onClick={handleClick}
          fill="white"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="15"></rect>
          <rect y="30" width="100" height="15"></rect>
          <rect y="60" width="100" height="15"></rect>
        </svg>
        <div>
          <Link href="/team">TEAM</Link>
          <button onClick={handleContact}>CONTACT</button>
        </div>
      </nav>
      <div data-show={state} className={style.responsive}>
        <Link href="/team">TEAM</Link>
        <button onClick={handleContact}>CONTACT</button>
      </div>
      <Contact show={contact} setShow={setContact} />
    </>
  );
};

export default Navbar;
