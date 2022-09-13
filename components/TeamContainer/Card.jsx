import style from "./teamcontainer.module.scss";
import Image from "next/image";

const Card = ({ name, id }) => {
  return (
    <div className={style.card}>
      <div>
        <Image
          src={`/images/pic${id}.jpg`}
          alt="pic1"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2>{name}</h2>
      <p>Job Position</p>
      <p>Company</p>
    </div>
  );
};

export default Card;
