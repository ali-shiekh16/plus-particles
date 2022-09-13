import Button from "../Button/Button";
import style from "./second.module.scss";
import Image from "next/image";

const SecondSection = () => {
  return (
    <>
      <div className={style.main}>
        <div data-heading>
          <h2>lhr Plus Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.Excepteur sint occaecat cuin.
          </p>
          <Button>Meet The Team &#10174;</Button>
        </div>
        <div className={style.image}>
          <Image
            src="/images/second.jpg"
            objectFit="cover"
            layout="fill"
            alt="second"
          />
        </div>
      </div>
    </>
  );
};

export default SecondSection;
