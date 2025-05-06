"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";


export default function Slider() {

    const countRef = useRef(1);

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     nextImage();
    //   }, 5000);
  
    //   return () => clearInterval(interval); // limpar o intervalo ao desmontar
    // }, []);
  
    const nextImage = () => {
      countRef.current++;
      if (countRef.current > 4) {
        countRef.current = 1;
      }
  
      const radio = document.getElementById(`radio0${countRef.current}`) ;
      if (radio) {
        radio.checked = true;
      }
    };

  return (
    <div>
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radiobtn" id="radio01" />
          <input type="radio" name="radiobtn" id="radio02" />
          <input type="radio" name="radiobtn" id="radio03" />
          <input type="radio" name="radiobtn" id="radio04" />

          <div className="slide first">
            <Image
              src={"/img/tumb-1.png"}
              alt="Comissão"
              width={500}
              height={500}
            />
          </div>

          <div className="slide">
            <Image
              src={"/img/uniforme-ofc.png"}
              alt="Comissão"
              width={500}
              height={500}
            />
          </div>

          <div className="slide">
            <Image
              src={"/img/uniforme-gol.png"}
              alt="Comissão"
              width={500}
              height={500}
            />
          </div>

          <div className="slide">
            <Image
              src={"/img/uniforme-clean.png"}
              alt="Comissão"
              width={500}
              height={500}
            />
          </div>

          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>

        <div className="manual-navigation">
          <label htmlFor="radio01" className="manual-btn"></label>
          <label htmlFor="radio02" className="manual-btn"></label>
          <label htmlFor="radio03" className="manual-btn"></label>
          <label htmlFor="radio04" className="manual-btn"></label>
        </div>
      </div>
    </div>
  );
}
