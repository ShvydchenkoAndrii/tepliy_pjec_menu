import { useContext } from "react";
import { AppContext } from "@/pages";
import ShowMenuPartHotDrinks from "@/components/Show Menu Part Hot Drinks/ShowMenuPartHotDrinks";

export default function Wine() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);
  const colonist = [
    {
      name: "Шардоне",
      portion: "125мл",
      price: "₴145",
      description: "Україна, біле сухе",
      image: "kolonist-chardonay.png",
    },
    {
      name: "Каберне",
      portion: "125мл",
      price: "₴145",
      description: "Україна, червоне сухе",
      image: "kolonist-cabernet.png",
    },
    {
      name: "Рислінг",
      portion: "125мл",
      price: "₴145",
      description: "Україна, н/сухе",
      image: "kolonist-risling.png",
    },
  ];

  const kartuli = [
    {
      name: "Цинандалі",
      portion: "125мл",
      price: "₴125",
      description: "Грузія, біле сухе",
      image: "kartuli-cinandali.png",
    },
    {
      name: "Сапераві",
      portion: "125мл",
      price: "₴125",
      description: "Грузія, червоне сухе",
      image: "kartuli-saperavi.png",
    },
    {
      name: "Алазанська долина",
      portion: "125мл",
      price: "₴125",
      description: "Грузія, біле н/солодке",
      image: "kartuli-alazan-white.png",
    },
    {
      name: "Алазанська долина",
      portion: "125мл",
      price: "₴125",
      description: "Грузія, червоне н/солодке",
      image: "kartuli-alazan-red.png",
    },
  ];
  const leleka = [
    {
      name: "Шардоне",
      portion: "125мл",
      price: "₴100",
      description: "Україна, біле сухе",
      image: "",
    },
    {
      name: "Мерло",
      portion: "125мл",
      price: "₴100",
      description: "Україна, червоне сухе",
      image: "",
    },
    {
      name: "Чорний лелека",
      portion: "125мл",
      price: "₴100",
      description: "Україна, червоне н/солодке",
      image: "",
    },
    {
      name: "Білий лелека",
      portion: "125мл",
      price: "₴100",
      description: "Україна, біле н/солодке",
      image: "",
    },
  ];

  const homeWine = [
    {
      name: "Вино домашнє",
      portion: "125мл",
      price: "₴45",
      description: "",
      image: "",
    },
  ];
  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ВИНО</h1>
        {PartHead()}
      </div>
      <h2 className="partSection">Колоніст:</h2>
      {ShowMenuPartHotDrinks(colonist)}
      <h2 className="partSection">Kartuli Vazi:</h2>
      {ShowMenuPartHotDrinks(kartuli)}
      <h2 className="partSection">Leleka:</h2>
      {ShowMenuPartHotDrinks(leleka)}
      {ShowMenuPartHotDrinks(homeWine)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
