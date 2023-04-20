import { useContext } from "react";
import { AppContext } from "@/pages";
export default function MainDishes() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const mainDishes = [
    {
      name: "Банош",
      portion: "𓍝200",
      price: "₴122",
      description: "подається з овечою бринзою та шкварками",
    },
    {
      name: "Яворівський пиріг",
      portion: "𓍝270",
      price: "₴93",
      description: "з грибною мачанкою",
    },
    {
      name: "Картопля фрі",
      portion: "𓍝250",
      price: "₴115",
      description: "",
    },
    {
      name: "Бульба з братрури",
      portion: "𓍝250",
      price: "₴81",
      description: "печена картопля зі шпондером",
    },
    {
      name: "Терті пляцки",
      portion: "𓍝250",
      price: "₴96",
      description: "деруни зі сметаною",
    },
    {
      name: "Вареники з картоплею та сиром",
      portion: "𓍝250",
      price: "₴65",
      description: "",
    },
    {
      name: "Вареники з вишнями",
      portion: "𓍝250",
      price: "₴105",
      description: "",
    },
    {
      name: "Пироги з пательні",
      portion: "𓍝250",
      price: "₴67",
      description: "смажені вареники, подаються зі шкварками",
    },
    {
      name: "Палянички",
      portion: "𓍝220",
      price: "₴114",
      description: " з білими грибами",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ОСНОВНІ СТРАВИ</h1>
        {PartHead()}
      </div>
      {ShowMenuPart(mainDishes)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
