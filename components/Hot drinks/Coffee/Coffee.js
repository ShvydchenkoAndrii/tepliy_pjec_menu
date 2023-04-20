import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Coffee() {
  const { ShowMenuPartHotDrinks, PartHead } = useContext(AppContext);

  const coffee = [
    {
      name: "Кава з п'єца",
      portion: "75мл",
      price: "₴42",
      description: "готується в турці на вогні",
    },
    {
      name: "Кава по-львівськи",
      portion: "75мл",
      price: "₴42",
      description: "готується на піску",
    },
    {
      name: "Еспресо",
      portion: "35мл",
      price: "₴42",
      description: "",
      image: "espreso.png",
    },
    {
      name: "Американо",
      portion: "130мл",
      price: "₴42",
      description: "",
      image: "americano.png",
    },
    {
      name: "Флет вайт",
      portion: "180мл",
      price: "₴94",
      description: "",
      image: "flat-white.png",
    },
    {
      name: "Капучино",
      portion: "150мл",
      price: "₴62",
      description: "",
      image: "capuccino.png",
    },
    {
      name: "Лате",
      portion: "200мл",
      price: "₴72",
      description: "",
    },
    {
      name: "Лате з медом",
      portion: "175/25мл",
      price: "₴81",
      description: "",
    },
    {
      name: "Какао",
      portion: "200мл",
      price: "₴40",
      description: "",
    },
    {
      name: "Кава з цитриною",
      portion: "130мл",
      price: "₴45",
      description: "",
    },
    {
      name: "Кава по-ірландськи",
      portion: "190мл",
      price: "₴98",
      description: "з вершками та віскі",
    },
    {
      name: "Вогняна вежа",
      portion: "140мл",
      price: "₴64",
      description: "кава з коньяком",
    },
    {
      name: "Коліжанка",
      portion: "190мл",
      price: "₴68",
      description: "кава, лікер, вершки",
    },
    {
      name: "Львівський батяр",
      portion: "190мл",
      price: "₴84",
      description: "кава, ром, лікер, вершки",
    },
    {
      name: "Львівський дощ",
      portion: "230мл",
      price: "₴77",
      description: "мед, кардамон, кориця, молоко",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">КАВА\КАВОВІ НАПОЇ</h1>
        {PartHead()}
      </div>
      {ShowMenuPartHotDrinks(coffee)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
