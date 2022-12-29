import { useState, useEffect } from "react";

function Clock() {
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

  const options = { timeZone: 'Asia/Hong_Kong' , hour12:false }
  return  <span>{date.toLocaleTimeString("zh-HK", options)}</span>;
}

export default Clock;
