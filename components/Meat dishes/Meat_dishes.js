import { useContext } from "react";
import { AppContext } from "@/pages";
export default function MeatDishes() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);
  const meatDishes = [
    {
      name: "Львівська мачанка",
      portion: "",
      price: "₴196",
      description: "бургер із запеченою бужениною та біґос",
      image: "",
    },
    {
      name: "Печена ковбаска",
      portion: "𓍝370",
      price: "₴190",
      description: "подається з яблуками та цибулькою",
      image: "kovbaska-pechena.jpg",
    },
    {
      name: "Торбинка пічника",
      portion: "𓍝400",
      price: "₴184",
      description: "дерун із тушкованим телячим язиком та грибами",
      image: "torbinka.jpg",
    },
    {
      name: "Кишка на кельні",
      portion: "𓍝300",
      price: "₴230",
      description: "кров'янка з біґосом",
      image: "kishka.jpg",
    },
    {
      name: "Печінка з журавлиним соусом",
      portion: "𓍝450",
      price: "₴198",
      description: "",
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
      name: "Пательня свіжини",
      portion: "за 𓍝100",
      price: "₴110",
      description: "свинячий шашлик",
      image: "",
    },
    {
      name: "Шніцель по-віденськи",
      portion: "𓍝400",
      price: "₴253",
      description: "яловичий, подається з картоплею пюре",
      image: "shnitsel.jpg",
    },
    {
      name: '"А той індик..."',
      portion: "𓍝350",
      price: "₴275",
      description:
        "індиче стегно су-від, подається з карамелізованою грушею та соусом",
      image: "",
    },
    {
      name: "Телячі медальйони",
      portion: "𓍝370",
      price: "₴399",
      description: "телятина су-від, подається з полентою та журавлиним соусом",
      image: "medaliony.jpg",
    },
    {
      name: "Деруни по-гуцульськи",
      portion: "𓍝400",
      price: "₴208",
      description: "деруни з м'ясом, запечені у вершковому соусі з сиром та грибами",
      image: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">М&apos;ЯСНІ СТРАВИ</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(meatDishes)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
