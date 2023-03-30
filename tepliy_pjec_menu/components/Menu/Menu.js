import { useState } from "react";
import Alcohol from "../Alcohol/Alcohol";
import Assorted from "../Assorted/Assorted";
import Breakfasts from "../Breakfasts/Breakfasts";
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
    { name: "Alcohol", clicked: false, id: "alcohol" },
    { name: "Assorted", clicked: false, id: "assorted" },
    { name: "Breakfasts", clicked: false, id: "breakfasts" },
    { name: "Cold drinks", clicked: false, id: "cold drinks" },
    { name: "Desserts", clicked: false, id: "desserts" },
    { name: "First courses", clicked: false, id: "first courses" },
    { name: "Fish dishes", clicked: false, id: "fish dishes" },
    { name: "Hot drinks", clicked: false, id: "hot drinks" },
    { name: "Main dishes", clicked: false, id: "main dishes" },
    { name: "Meat dishes", clicked: false, id: "meat dishes" },
    { name: "Salads", clicked: false, id: "salads" },
    { name: "Snacks", clicked: false, id: "snacks" },
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
    <div className="">
      {menu.map((item) => {
        return (
          <button
            onClick={() => activeMenuPage(item)}
            key={item.name}
            id={item.name}
            className="border m-1 p-1"
          >
            {item.name}
          </button>
        );
      })}

      {menu[0].clicked ? <Alcohol /> : null}
      {menu[1].clicked ? <Assorted /> : null}
      {menu[2].clicked ? <Breakfasts /> : null}
      {menu[3].clicked ? <ColdDrinks /> : null}
      {menu[4].clicked ? <Desserts /> : null}
      {menu[5].clicked ? <FirstCourses /> : null}
      {menu[6].clicked ? <FishDishes /> : null}
      {menu[7].clicked ? <HotDrinks /> : null}
      {menu[8].clicked ? <MainDishes /> : null}
      {menu[9].clicked ? <MeatDishes /> : null}
      {menu[10].clicked ? <Salads /> : null}
      {menu[11].clicked ? <Snacks /> : null}
    </div>
  );
}
