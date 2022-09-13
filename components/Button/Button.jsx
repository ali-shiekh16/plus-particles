import style from "./button.module.scss";

const Button = ({ children }) => {
  return <button className={style.button}>{children}</button>;
};

export default Button;
