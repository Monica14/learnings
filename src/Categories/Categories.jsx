import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Categories = () => {
  const [getName, setName] = useState([]);
  const getAllModules = () => {
    axios.get("http://localhost:8080/public/json/modulelist.json").then((response) => {
      console.log("Success module == ", response);
      const { data: modulelst } = response;
      setName(modulelst);
    });
  };

  useEffect(() => {
    getAllModules();
  });

  return (
    <div class="cnt-home">
      Welcome To
      <ul>
        {getName &&
          getName.map((item) => {
            return (
              <li>
                {item.name}-{item.price}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Categories;
