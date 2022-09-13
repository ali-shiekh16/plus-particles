import style from "./hero.module.scss";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <>
      <div className={style.main}>
        <h1>
          lhr Plus <br /> und <br /> No Limits
        </h1>
      </div>
      <div className={style.marquee}>
        <Marquee gradient={false}>
          <p data-p1>
            Lorem ipsum &diams; dolor sit &diams; amet consectetur &diams;
            adipisicing elit. Maxime,corporis &diams; minus?ratione &diams;
            voluptatum iure &diams; accusamus quia.
          </p>
        </Marquee>
        <Marquee delay={1} gradient={false} direction="right">
          <p data-p2>
            Magnam,&diams; ratione&diams; voluptatum iure &diams; accusamus quia
            &diams; eveniet nesciunt aperiam &diams; ex maiores &diams;
            inventore.
          </p>
        </Marquee>
        <Marquee delay={0.5} gradient={false}>
          <p data-p3>
            hic dolorem &diams; sapiente adipisci &diams; delectus enim eius
            &diams; explicabo sequi.Lione &diams; voluptatum iure &diams;
            accusamus quiaeveniet&diams; nesciunt aperiam.
          </p>
        </Marquee>
        <Marquee delay={1.5} gradient={false} direction="right">
          <p data-p4>
            Lione voluptatum &diams; iure accusamus &diams; quiaeveniet &diams;
            nesciunt aperiam &diams; ex maiores inventore,&diams; hic dolorem
            &diams;sapienteadipisci &diams; delectus enim.
          </p>
        </Marquee>
      </div>
    </>
  );
};

export default Hero;
