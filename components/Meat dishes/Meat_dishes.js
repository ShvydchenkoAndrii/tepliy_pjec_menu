import { useContext } from "react";
import { AppContext } from "@/pages";
export default function MeatDishes() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);
  const meatDishes = [
    // {
    //   name: "Львівська мачанка",
    //   portion: "(300г)",
    //   price: "₴196",
    //   description: "бургер із запеченою бужениною та біґос",
    //   image: "lvivska-machanka.png",
    // },
    {
      name: "Ґуґлики з телятини",
      portion: "(350г)",
      price: "₴320",
      description: "телячі котлетки су-від тушковані у вершково-грибному соусі, подаються з картопляним пюре",
      image: "",
    },
    {
      name: "Печена ковбаска",
      portion: "(370г)",
      price: "₴215",
      description: "подається з яблуками та цибулькою",
      image: "kovbaska-pechena.jpg",
    },
    {
      name: "Торбинка пічника",
      portion: "(400г)",
      price: "₴208",
      description: "дерун із тушкованим телячим язиком та грибами",
      image: "torbinka.jpg",
    },
    {
      name: "Кишка на кельні",
      portion: "(300г)",
      price: "₴260",
      description: "кров'янка з біґосом",
      image: "kishka.jpg",
    },
    {
      name: "Рушта",
      portion: "(за 100г)",
      price: "₴106",
      description: "запечені ребра",
      image: "rebra.jpg",
    },
    {
      name: "Пательня свіжини",
      portion: "(за 100г)",
      price: "₴124",
      description: "свинячий шашлик",
      image: "patelnja-svigini.jpg",
    },
    
    {
      name: "Шніцель по-віденськи",
      portion: "(400г)",
      price: "₴286",
      description: "яловичий, подається з картоплею пюре",
      image: "shnitsel.jpg",
    },
    {
      name: '"А той індик..."',
      portion: "(350г)",
      price: "₴310",
      description:
        "індиче стегно су-від, подається з карамелізованою грушею та соусом",
      image: "a-toj-indyk.png",
    },
    {
      name: "Печінка з журавлиним соусом",
      portion: "(450г)",
      price: "₴229",
      description: "",
      image: "pechinka-z-guravlinoju.jpg",
    },
    // {
    //   name: "Телячі медальйони",
    //   portion: "(370г)",
    //   price: "₴399",
    //   description: "телятина су-від, подається з полентою та журавлиним соусом",
    //   image: "medaliony.jpg",
    // },
    {
      name: "Деруни по-гуцульськи",
      portion: "(400г)",
      price: "₴235",
      description:
        "деруни з м'ясом, запечені у вершковому соусі з сиром та грибами",
      image: "deruny-po-guculsky.jpg",
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
