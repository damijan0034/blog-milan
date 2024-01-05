import React from "react";

import Button from "@/components/Button.jsx";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.categoryName);
  return (
    <div >
      <h1 >{params.categoryName}</h1>

      {data.map((item) => (
        <div  key={item.id}>
          <div >
            <h1 >{item.title}</h1>
            <p >{item.desc}</p>
            <Button title="See More"  />
          </div>
          <div className="my-5" >
            <Image
              
              width={500} height={150}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;