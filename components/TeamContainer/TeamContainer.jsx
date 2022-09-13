import Card from "./Card";
import style from "./teamcontainer.module.scss";
import { TeamMember } from "./TeamMember";

const TeamContainer = () => {
  return (
    <div className={style.main}>
      {TeamMember.map((elem, ind) => {
        return <Card key={ind} name={elem} id={ind + 1} />;
      })}
    </div>
  );
};

export default TeamContainer;
