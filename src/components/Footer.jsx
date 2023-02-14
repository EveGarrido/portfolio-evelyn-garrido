import DateAndTime from "./DateAndTime";
import jazz from "../assets/jazz.mp3";
import flag from '../assets/Flag_of_Chile.svg.png'

const Footer = () => {

  const playList = [
    {
      name: 'name',
      writer: 'writer',
      img: 'image.jpg',
      src: jazz,
      id: 1,
    },
  ]

  return (
    <div className="footer">
      <div className="date-and-audio">
        <DateAndTime />
        <audio src={jazz} autoPlay controls className="audio"></audio>
      </div>
      <p className="create">Created by Evelyn GL <span><img src={flag} alt="flag" className="flag" /></span></p>
    </div>
  );
};
export default Footer;
