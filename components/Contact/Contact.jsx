import style from './contact.module.scss';
import { IoIosCloseCircle } from 'react-icons/io';
import Image from 'next/image';

const Contact = ({ show, setShow }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div data-show={show} className={style.main}>
      <IoIosCloseCircle onClick={handleClose} />
      <div>
        <div className={style.form}>
          <h1>LETS TALK</h1>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Email Or Number' />
            <input type='text' placeholder='Message' />
            <button type='submit'>Send Message</button>
          </form>
        </div>
        <div className={style.image}>
          <div>
            <Image
              src='/images/pic2.jpg'
              alt='contact'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <h2>Rose</h2>
          <p>0344-646546877</p>
          <p>fakeaccount@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
