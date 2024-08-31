import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/service")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return [parts, setParts];
};
export default useParts;
