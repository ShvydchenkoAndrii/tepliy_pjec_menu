import { useContext } from "react";
import { AppContext } from "@/pages";
export default function FishDishes() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const fishDishes = [
    {
      name: "Пструг печений",
      portion: "𓍝370",
      price: "₴424",
      description: "форель",
      image: "pstruk.jpg",
    },
    {
      name: "Баламут з п'єца",
      portion: "𓍝240",
      price: "₴268",
      description: "скумбрія",
      image: "balamut.jpg",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">РИБНІ СТРАВИ</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(fishDishes)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
