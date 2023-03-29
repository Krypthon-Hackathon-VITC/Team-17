import React, { useEffect, useState } from "react";
// import { BiUpArrow } from 'react-icons/bi';
import { BsArrowUpSquareFill } from "react-icons/bs";
import "./Top.css";

const Top = () => {
  const [isVisible, setisVisible] = useState(false);

  const goTobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToscroll = () => {
    let height = 250;
    const winHeight =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winHeight > height) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToscroll);
  }, []);
  return (
    <>
      <div className={isVisible ? "gotoVisible" : "goto"} onClick={goTobtn}>
        <BsArrowUpSquareFill className="arrowUp" size={40} />
      </div>
    </>
  );
};

export default Top;
