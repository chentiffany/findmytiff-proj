// https://medium.com/programming-essentials/how-to-create-a-digital-clock-with-react-hooks-aa30f76cfe3f

import { useState, useEffect } from "react";

function HKT_Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  // const options = { timeZone: 'Asia/Hong_Kong' , hour12:false }
  // console.log(date.toLocaleTimeString("zh-HK", options));

  return <span>{date.toLocaleTimeString('fr-FR')}</span>;
}

export default HKT_Clock;
