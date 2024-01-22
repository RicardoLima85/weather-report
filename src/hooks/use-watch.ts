import { useEffect, useState } from "react";

type Props = {
  date: Date;
};

export const useWatch = (timer?: boolean): Props => {
  const [update, setUpdate] = useState<boolean>(true);

  useEffect(() => {
    if (!timer) return;
    const intervalId = setInterval(() => setUpdate((curr) => !curr), 60000);
    return () => clearInterval(intervalId);
  }, [update]);

  return {
    date: new Date(),
  };
};
