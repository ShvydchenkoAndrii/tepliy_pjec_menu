import { useContext } from "react";
import { AppContext } from "@/pages";
export default function FishDishes() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const fishDishes = [
    {
      name: "Пструг печений",
      portion: "(за 100г)",
      price: "₴190",
      description: "форель",
      image: "pstruk.jpg",
    },
    // {
    //   name: "Баламут з п'єца",
    //   portion: "(300г)",
    //   price: "₴390",
    //   description: "скумбрія з соусом Схуг",
    //   image: "balamut.jpg",
    // },
    {
      name: "Запечене дорадо",
      portion: "(за 100г)",
      price: "₴198",
      description: "Запікається в пʼєці з ароматними травами",
      image: "dorado.jpg",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">РИБНІ СТРАВИ</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(fishDishes)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
