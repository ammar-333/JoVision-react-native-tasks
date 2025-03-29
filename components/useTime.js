import React, {useState, useEffect, useRef} from 'react';

const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = time.toLocaleDateString();
  const hour = time.toLocaleTimeString();

  return [date, hour];
};
export default useTime;
