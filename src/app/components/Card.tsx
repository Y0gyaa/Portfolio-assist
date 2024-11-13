"use client"
import React from 'react';

export interface CardProps {
  title: string;
  image: string;
  link: string;
  description: string;
}

export default function Card (props:CardProps) {
    function handleClick(){
        console.log(props.link)
    }
  return (
    <div onClick={handleClick} className="cursor-pointer w-[299px] h-[221px] bg-white border border-black shadow-lg">      
      <h3 className="text-lg font-bold text-black text-center">{props.title}</h3>
      <hr className="w-full border-black" />
      <img src={props.image} alt="Screenshot thumbnail image here" className="w-[297px] h-[110px] object-cover" height="110" width="297"></img>
      <p className="text-gray-600 text-sm text-wrap p-2">
        {props.description}
      </p>
    </div>

  );
};


