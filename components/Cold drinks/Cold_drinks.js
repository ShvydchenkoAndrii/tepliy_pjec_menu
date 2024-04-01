import { useContext } from "react";
import { AppContext } from "@/pages";
import ShowMenuPartHotDrinks from "../Show Menu Part Hot Drinks/ShowMenuPartHotDrinks";

export default function ColdDrinks() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const coldDrinks = [
    {
      name: "Узвар",
      portion: "1л",
      price: "₴100",
      description: "",
      image: "uzvar.png",
    },
    {
      name: "Pepsi",
      portion: "0,33л",
      price: "₴65",
      description: "скло",
      image: "pepsi.png",
    },
    {
      name: "Coca Cola",
      portion: "0,33л",
      price: "₴90",
      description: "скло",
      image: "coca-cola.png",
    },
    {
      name: "Соки та нектари",
      portion: "0,2л",
      price: "₴45",
      description: "в асортименті",
      image: "juice.png",
    },
    {
      name: "Поляна Квасова",
      portion: "0,5л",
      price: "₴75",
      description: "",
      image: "poljana.png",
    },
    {
      name: "Моршинська",
      portion: " 0,75л",
      price: "₴41",
      description: "в асортименті",
      image: "morshinska.png",
    },
    {
      name: "Квас",
      portion: "0,3л/0,5л",
      price: "",
      description: "сезонний",
      image: "kvas.png",
    },
    {
      name: "Фруктова вода",
      portion: "0,5л",
      price: "₴53",
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
    {
      name: "Лимонад",
      portion: "1л",
      price: "",
      description: "",
      image: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ХОЛОДНІ НАПОЇ</h1>
        {PartHead()}
      </div>
      {ShowMenuPartHotDrinks(coldDrinks)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
