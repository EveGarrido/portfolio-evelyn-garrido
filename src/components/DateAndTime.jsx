import { useEffect, useState } from "react";

const DateAndTime = () => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
         setInterval(() => setDate(new Date()), 1000);
  }, []);

  return (
    <div className="container-date-and-time">
      <p className="date-and-time">
        <span><i className="fa-sharp fa-regular fa-calendar"></i></span>
        {" "}
        {date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
      <p className="date-and-time">
        <span><i className="fa-regular fa-clock"></i></span>
        {" "}
        {date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        })}
      </p>
    </div>
  );
};

export default DateAndTime;
