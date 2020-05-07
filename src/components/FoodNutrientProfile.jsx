import React from "react";

const FoodNutrientProfile = ({ name, weight, height, bmr, avatar, status }) => {
  return (
    <div className="media text-left mt-5">
      <img src={avatar} alt="avatar" style={{ width: "200px" }} />
      <div className="media-body mt-4">
        <h5 className="ml-3">{name}</h5>
        <h6 className="ml-3">Berat badan: {weight} kg</h6>
        <h6 className="ml-3">Tinggi badan: {height} cm</h6>
        <h6 className="ml-3">Status kesehatan: {status}</h6>
        <h6 className="ml-3">Kebutuhan kalori per hari: {bmr}</h6>
      </div>
    </div>
  );
};

export default FoodNutrientProfile;
