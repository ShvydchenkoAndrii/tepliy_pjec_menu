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
      image: "banosh.jpg",
    },
    {
      name: "Яворівський пиріг",
      portion: "𓍝270",
      price: "₴99",
      description: "з грибною мачанкою",
      image: "javorivskiy.jpg",
    },
    {
      name: "Картопля фрі",
      portion: "𓍝250",
      price: "₴115",
      description: "",
      image: "fri.jpg",
    },
    {
      name: "Бульба з братрури",
      portion: "𓍝250",
      price: "₴94",
      description: "печена картопля зі шпондером",
      image: "bulba.jpg",
    },
    {
      name: "Терті пляцки",
      portion: "𓍝250",
      price: "₴115",
      description: "деруни зі сметаною",
      image: "terti-pljacki.jpg",
    },
    {
      name: "Вареники з картоплею та сиром",
      portion: "𓍝250",
      price: "₴69",
      description: "подаються зі сметаною",
      image: "vareniki.jpg",
    },
    {
      name: "Вареники з вишнями",
      portion: "𓍝250",
      price: "₴110",
      description: "",
      image: "vareniki-z-vishn.jpg",
    },
    {
      name: "Пироги з пательні",
      portion: "𓍝250",
      price: "₴70",
      description: "смажені вареники, подаються зі шкварками",
      image: "smageni-vareniki.jpg",
    },
    {
      name: "Палянички",
      portion: "𓍝220",
      price: "₴130",
      description: " з білими грибами",
      image: "paljanichki.jpg",
    },
    {
      name: "Біґос",
      portion: "𓍝200",
      price: "₴128",
      description: "тушкована квашена капуста з чорносливом та копченою грушею",
      image: "",
    },
    {
      name: "Хрусткі крокети із жидівським кав'яром",
      portion: "𓍝350",
      price: "₴115",
      description: "налисники з курячою печінкою та прянощами, обсмажені в паніровці",
      image: "",
    },

  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ОСНОВНІ СТРАВИ</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(mainDishes)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
