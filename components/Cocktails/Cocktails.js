import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Cocktails() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const cocktails = [
    {
      name: "Aperol Sprits",
      portion: "200мл",
      price: "₴132",
      description: "aperol, prosecco, orange",
      image: "aperol.png",
    },
    {
      name: "Old Fashioned",
      portion: "",
      price: "₴140",
      description: "бурбон, бітер Angostura, апельсинова цедра",
      image: "old-fashioned.png",
    },
    {
      name: "Negroni",
      portion: "120мл",
      price: "₴160",
      description: "джин, вермут, бітер, апельсинова цедра",
      image: "negroni.png",
    },
    {
      name: "Vesper Martini",
      portion: "100мл",
      price: "₴112",
      description: "сухий вермут, джин",
      image: "vesper-martini.png",
    },
    {
      name: "Moxito",
      portion: "",
      price: "₴160",
      description: "",
      image: "moxito.png",
    },
    {
      name: "Moxito N/A",
      portion: "",
      price: "₴82",
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
      price: "₴25",
      description: "",
      image: "medivka.png",
    },
    {
      name: "Калганівка",
      portion: "50мл",
      price: "₴30",
      description: "",
      image: "medivka.png",
    },
    {
      name: "Шипшинівка",
      portion: "50мл",
      price: "₴30",
      description: "",
      image: "medivka.png",
    },
    {
      name: "Вишнівка",
      portion: "50мл",
      price: "₴30",
      description: "",
      image: "vishnivka.png",
    },
    {
      name: 'СЕТ НАЛИВОК "Апостол"',
      portion: "12шт",
      price: "₴140",
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
      <div className="partDesc">{ShowMenuPart(cocktails)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
