import style from "./third.module.scss";
import Button from "../Button/Button";
const ThirdSection = () => {
  return (
    <div className={style.main}>
      <div>
        <h1>
          We’d love to hear
          <br />
          from you
        </h1>
        <Button>Get In Touch &#10174;</Button>
      </div>
    </div>
  );
};

export default ThirdSection;
