import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Tea() {
  const { ShowMenuPartHotDrinks, PartHead } = useContext(AppContext);

  const tea = [
    {
      name: `Чай з "Теплого п'єц"`,
      portion: "250/500мл",
      price: "₴50/100",
      description: "суміш карпатських трав та ягід, квітковий мед",
      image: "",
    },
    {
      name: "Чай розсипний",
      portion: "250/500мл",
      price: "₴30/60",
      description: "чорний, зелений, фруктовий",
      image: "",
    },
    {
      name: "Чай вітамінний",
      portion: "250/500мл",
      price: "₴63/126",
      description: "імбир/ малина/ обліпиха",
      image: "",
    },
  ];

  const adds = [
    {
      name: "Молоко",
      portion: "",
      price: "₴10",
      description: "",
      image: "",
    },
    {
      name: "Мед",
      portion: "",
      price: "₴25",
      description: "",
      image: "",
    },
    {
      name: "Лимон",
      portion: "",
      price: "₴3",
      description: "",
      image: "",
    },
  ];
  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ЧАЙ</h1>
        {PartHead()}
      </div>
      {ShowMenuPartHotDrinks(tea)}
      <h2 className="partSection">Додатки:</h2>
      {ShowMenuPartHotDrinks(adds)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
