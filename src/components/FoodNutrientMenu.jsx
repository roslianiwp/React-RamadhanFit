import React from "react";

const list = ["Sarapan", "Makan Siang", "Makan Malam"];
const FoodNutrientMenu = ({ index, title, durasi, source }) => {
  return (
    <div>
      <h5>Menu {list[index]}</h5>
      <img
        src={require("../images/" + list[index] + ".jpg")}
        alt="makanan"
        style={{ width: "250px" }}
      ></img>
      <h6>{title}</h6>
      <span>Durasi: {durasi} menit</span>
      <br />
      <span>
        <a href={source}>Baca resep selengkapnya</a>
      </span>
      <hr />
    </div>
  );
};

export default FoodNutrientMenu;
