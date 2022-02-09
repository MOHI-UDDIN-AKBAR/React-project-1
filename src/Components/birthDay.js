import React, { useState } from "react";
import { data as allData } from "../data";

const BirthDay = () => {
  const [personInfo, setPersonInfo] = useState(allData);
  const removeThisItem = (personId) => {
    console.log(personId);
    const newPersonInfo = personInfo.filter((person) => {
      return person.id !== personId;
    });
    setPersonInfo(newPersonInfo);
  };
  function removeAll() {
    setPersonInfo([]);
  }
  return (
    <>
      <div className="birthday">
        <h1 className="heading">5 Birthdays Today</h1>
        <div className="containInfo">
          {personInfo.map((data) => {
            // console.log(data);
            const { id, img, name, age } = data;
            return (
              <div className="person" key={id}>
                <img src={img} alt={`img of ${name}`} />
                <div className="personInfo">
                  <h2 className="name">{name}</h2>
                  <span className="age">{age} Years</span>
                </div>
                <button
                  className="cancel"
                  type="button"
                  onClick={() => removeThisItem(id)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            );
          })}
        </div>
        <button className="clearAll" type="button" onClick={() => removeAll()}>
          Clear All
        </button>
      </div>
    </>
  );
};

export default BirthDay;
