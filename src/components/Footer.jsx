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
      <div className="create">
        <p >Created by Evelyn GL</p>
        <img src={flag} alt="flag" className="flag" />
      </div>
    </div>
  );
};
export default Footer;
