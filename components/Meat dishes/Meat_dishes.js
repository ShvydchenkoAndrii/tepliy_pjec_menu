import { useContext } from "react";
import { AppContext } from "@/pages";
export default function MeatDishes() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);
  const meatDishes = [
    {
      name: "Печена ковбаска",
      portion: "𓍝370",
      price: "₴185",
      description: "подається з яблуками та цибулькою",
      image: "kovbaska-pechena.jpg",
    },
    {
      name: "Торбинка пічника ",
      portion: "𓍝400",
      price: "₴170",
      description: "дерун із тушкованим язиком та грибами",
      image: "torbinka.jpg",
    },
    {
      name: "Кишка на кельні",
      portion: "𓍝300",
      price: "₴193",
      description: "кров'янка",
      image: "",
    },
    {
      name: "Печінка",
      portion: "за 𓍝100",
      price: "₴94",
      description: " з журавлиним соусом",
      image: "pechinka-z-guravlinoju.jpg",
    },
    {
      name: "Рушта",
      portion: "за 𓍝100",
      price: "₴94",
      description: "запечені ребра",
      image: "rebra.jpg",
    },
    {
      name: "Кармонадля",
      portion: "𓍝400",
      price: "₴430",
      description: "свинина на кістці в паніровці",
      image: "",
    },
    {
      name: "Шніцель по-віденськи",
      portion: "𓍝400",
      price: "₴246",
      description: "яловичий, подається з картоплею пюре",
      image: "shnitsel.jpg",
    },
    {
      name: '"А той індик..."',
      portion: "𓍝960",
      price: "₴980",
      description: "запечене стегно індички",
      image: "",
    },
    {
      name: "Стейк свинячий",
      portion: "𓍝450",
      price: "₴423",
      description: "",
      image: "",
    },
    {
      name: "Телячі медальйони",
      portion: "",
      price: "₴390",
      description: "",
      image: "medaliony.jpg",
    },
    {
      name: "Розбратель від Стрийка",
      portion: "𓍝600",
      price: "₴365",
      description: "",
      image: "vid-stryka.jpg",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">М&apos;ЯСНІ СТРАВИ</h1>
        {PartHead()}
      </div>
      {ShowMenuPart(meatDishes)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
