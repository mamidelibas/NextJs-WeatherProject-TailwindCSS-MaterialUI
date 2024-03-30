import React from "react";
import Image from "next/image";

export default function WeatherPage({ data }) {
  console.log(data);
  return (
    <div className=" relative flex flex-col justify-between max-w-[700px] h-[67vh] w-full m-auto pt-4 text-white z-10 ">
      <div className=" relative flex justify-around pt-12 items-center ">
        <div className=" flex flex-col items-center ">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="foto"
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-8xl"> {data.main.temp_max.toFixed(0)}&#176;</p>
      </div>

      <div className="bg-black/50 p-12 rounded-md hover:bg-black/60 ">
        <p className=" text-3xl text-center pb-6 ">
          Weather in {data.name}
          <span className="uppercase"> - {data.sys.country} </span>
        </p>
        <div className=" flex justify-between items-center ">
          <div className="">
            <p className="font-bold text-2xl">
              {data.main.feels_like.toFixed(0)}&#176;{" "}
            </p>
            <p className="text-xl">Feels Like</p>
          </div>

          <div className="">
            <p className="font-bold text-2xl"> {data.main.humidity}% </p>
            <p className="text-xl">Humidity</p>
          </div>

          <div className="">
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)}MPH
            </p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}
