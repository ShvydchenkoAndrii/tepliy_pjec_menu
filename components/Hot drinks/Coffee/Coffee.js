import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Coffee() {
  const { ShowMenuPartHotDrinks, PartHead } = useContext(AppContext);

  const coffee = [
    {
      name: "Кава з п'єца",
      // portion: "75мл",
      price: "₴42",
      description: "готується в турці на вогні",
      image: "",
    },
    {
      name: "Кава по-львівськи",
      // portion: "75мл",
      price: "₴42",
      description: "готується на піску",
      image: "",
    },
    {
      name: "Еспресо",
      // portion: "35мл",
      price: "₴42",
      description: "",
      image: "espreso.png",
    },
    {
      name: "Американо",
      // portion: "130мл",
      price: "₴42",
      description: "",
      image: "americano.png",
    },
    {
      name: "Флет вайт",
      // portion: "180мл",
      price: "₴94",
      description: "",
      image: "flat-white.png",
    },
    {
      name: "Капучино",
      // portion: "150мл",
      price: "₴62",
      description: "",
      image: "capuccino.png",
      image: "",
    },
    {
      name: "Лате",
      // portion: "200мл",
      price: "₴72",
      description: "",
      image: "",
    },
    {
      name: "Лате з медом",
      // portion: "175/25мл",
      price: "₴81",
      description: "",
      image: "",
    },
    {
      name: "Какао",
      // portion: "200мл",
      price: "₴40",
      description: "",
      image: "",
    },
    {
      name: "Кава з цитриною",
      // portion: "130мл",
      price: "₴45",
      description: "",
      image: "",
    },
    {
      name: "Кава по-ірландськи",
      // portion: "190мл",
      price: "₴98",
      description: "з вершками та віскі",
      image: "",
    },
    {
      name: "Вогняна вежа",
      // portion: "140мл",
      price: "₴64",
      description: "кава з коньяком",
      image: "",
    },
    {
      name: "Коліжанка",
      // portion: "190мл",
      price: "₴69",
      description: "кава, лікер, вершки",
      image: "",
    },
    {
      name: "Львівський батяр",
      // portion: "190мл",
      price: "₴87",
      description: "кава, ром, лікер, вершки",
      image: "",
    },
    {
      name: "Львівський дощ",
      // portion: "230мл",
      price: "₴77",
      description: "кава, мед, кардамон, кориця, молоко",
      image: "",
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
