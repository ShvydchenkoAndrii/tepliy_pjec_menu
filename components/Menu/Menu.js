import React, { useState } from "react";
import Alcohol from "../Alcohol/Alcohol";
import Assorted from "../Assorted/Assorted";
import Breakfasts from "../Breakfasts/Breakfasts";
import Cocktails from "../Cocktails/Cocktails";
import ColdDrinks from "../Cold drinks/Cold_drinks";
import Desserts from "../Desserts/Desserts";
import FirstCourses from "../First courses/First_courses";
import FishDishes from "../Fish dishes/Fish_dishes";
import HotDrinks from "../Hot drinks/HotDrinks";
import MainDishes from "../Main dishes/Main_dishes";
import MeatDishes from "../Meat dishes/Meat_dishes";
import Salads from "../Salads/Salads";
import Snacks from "../Snacks/Snacks";

export default function Menu() {
  const [menu, setMenu] = useState([
    { name: "Сніданки", clicked: true, id: "breakfasts" },
    { name: "Перекуси", clicked: false, id: "snacks" },
    { name: "Салати", clicked: false, id: "salads" },
    { name: "Перші страви", clicked: false, id: "first courses" },
    { name: "Основні страви", clicked: false, id: "main dishes" },
    { name: "Рибні страви", clicked: false, id: "fish dishes" },
    { name: "М'ясні страви", clicked: false, id: "meat dishes" },
    { name: "Страви до забави", clicked: false, id: "assorted" },
    { name: "Десерти", clicked: false, id: "desserts" },
    { name: "Гарячі напої", clicked: false, id: "hot drinks" },
    { name: "Холодні напої", clicked: false, id: "cold drinks" },
    { name: "Коктейлі", clicked: false, id: "cocktails" },
    { name: "Алкогольні напої", clicked: false, id: "alcohol" },
  ]);

  const activeMenuPage = (clickedItem) => {
    const updatedMenu = menu.map((item) =>
      item.id === clickedItem.id
        ? { ...item, clicked: true }
        : { ...item, clicked: false }
    );
    setMenu(updatedMenu);
  };

  return (
    <div>
      <div className="menuBar">
        {menu.map((item) => {
          return (
            <button
              onClick={() => activeMenuPage(item)}
              key={item.name}
              id={item.name}
              className={`  ${
                item.clicked
                  ? "menuBarButtClicked"
                  : "menuBarButt"
              } menuBarButt`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      {menu[0].clicked ? <Breakfasts /> : null}
      {menu[1].clicked ? <Snacks /> : null}
      {menu[2].clicked ? <Salads /> : null}
      {menu[3].clicked ? <FirstCourses /> : null}
      {menu[4].clicked ? <MainDishes /> : null}
      {menu[5].clicked ? <FishDishes /> : null}
      {menu[6].clicked ? <MeatDishes /> : null}
      {menu[7].clicked ? <Assorted /> : null}
      {menu[8].clicked ? <Desserts /> : null}
      {menu[9].clicked ? <HotDrinks /> : null}
      {menu[10].clicked ? <ColdDrinks /> : null}
      {menu[11].clicked ? <Cocktails /> : null}
      {menu[12].clicked ? <Alcohol /> : null}
    </div>
  );
}
