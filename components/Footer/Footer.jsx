import style from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.main}>
      <div>
        <h3>
          LOGO COMMUNICTIONS
          <br />
          +41 44 500 66 10
          <br />
          info@logo-communications
        </h3>
      </div>
      <h3>Contact</h3>
      <Link href="/team">
        <h3>Team</h3>
      </Link>
      <div className={style.logo}>
        <Image src="/logo.jpeg" layout="fill" alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
