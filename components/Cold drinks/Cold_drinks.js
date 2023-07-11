import { useContext } from "react";
import { AppContext } from "@/pages";

export default function ColdDrinks() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const coldDrinks = [
    {
      name: "Узвар",
      portion: "1л",
      price: "₴38",
      description: "",
      image: "uzvar.png",
    },
    {
      name: "Pepsi",
      portion: "0,33л",
      price: "₴50",
      description: "скло",
      image: "pepsi.png",
    },
    {
      name: "Coca Cola",
      portion: "0,33л",
      price: "₴50",
      description: "скло",
      image: "coca-cola.png",
    },
    {
      name: "Соки та нектари",
      portion: "0,2л",
      price: "₴26",
      description: "в асортименті",
      image: "juice.png",
    },
    {
      name: "Поляна Квасова",
      portion: "0,5л",
      price: "₴54",
      description: "",
      image: "poljana.png",
    },
    {
      name: "Моршинська",
      portion: "0,33л 0,5л 0,75л",
      price: "₴49 ₴37  ₴41",
      description: "в асортименті",
      image: "morshinska.png",
    },
    {
      name: "Квас",
      portion: "0,5л",
      price: "",
      description: "сезонний",
      image: "kvas.png",
    },
    {
      name: "Фруктова вода",
      portion: "0,5л",
      price: "₴49",
      description: "дюшес, сітро",
      image: "fruit-water.png",
    },
    {
      name: "Молочний коктейль",
      portion: "0,2л",
      price: "",
      description: "сезонний",
      image: "milk-cocktail.png",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ХОЛОДНІ НАПОЇ</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(coldDrinks)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
