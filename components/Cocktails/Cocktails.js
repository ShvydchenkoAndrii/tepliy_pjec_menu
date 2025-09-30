import { useContext } from "react";
import { AppContext } from "@/pages";
import ShowMenuPartHotDrinks from "../Show Menu Part Hot Drinks/ShowMenuPartHotDrinks";
export default function Cocktails() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const cocktails = [
    {
      name: "Aperol Sprits",
      portion: "200мл",
      price: "₴233",
      description: "aperol, prosecco, orange",
      image: "aperol.png",
    },
    {
      name: "Old Fashioned",
      portion: "110мл",
      price: "₴152",
      description: "бурбон, бітер Angostura, апельсинова цедра",
      image: "old-fashioned.png",
    },
    {
      name: "Negroni",
      portion: "120мл",
      price: "₴206",
      description: "джин, вермут, бітер, апельсинова цедра",
      image: "negroni.png",
    },
    {
      name: "Vesper Martini",
      portion: "100мл",
      price: "₴166",
      description: "сухий вермут, джин",
      image: "vesper-martini.png",
    },
    {
      name: "Moxito",
      portion: "350мл",
      price: "₴194",
      description: "",
      image: "moxito.png",
    },
    {
      name: "Moxito N/A",
      portion: "300мл",
      price: "₴116",
      description: "безалкогольне",
      image: "moxito.png",
    },
    {
      name: "Глінтвейн",
      portion: "",
      price: "",
      description: "сезонний",
      image: "glintwein.png",
    },
    {
      name: "Медівка",
      portion: "50мл",
      price: "₴37",
      description: "",
      image: "medivka.png",
    },
    {
      name: "Калганівка",
      portion: "50мл",
      price: "₴38",
      description: "",
      image: "medivka.png",
    },
    {
      name: "Шипшинівка",
      portion: "50мл",
      price: "₴39",
      description: "",
      image: "medivka.png",
    },
    {
      name: "Вишнівка",
      portion: "50мл",
      price: "₴37",
      description: "",
      image: "vishnivka.png",
    },
    {
      name: 'СЕТ НАЛИВОК "Апостол"',
      portion: "12шт",
      price: "₴178",
      description: "",
      image: "apostol.png",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">КОКТЕЙЛІ</h1>
        {PartHead()}
      </div>
      {ShowMenuPartHotDrinks(cocktails)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
