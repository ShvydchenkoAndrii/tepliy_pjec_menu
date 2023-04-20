import { useContext } from "react";
import { AppContext } from "@/pages";

export default function Wine() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);
  const colonist = [
    {
      name: "Шардоне",
      portion: "125мл",
      price: "₴130",
      description: "Україна, біле сухе",
      image: "kolonist-chardonay.png",
    },
    {
      name: "Каберне",
      portion: "125мл",
      price: "₴95",
      description: "Україна, червоне сухе",
      image: "kolonist-cabernet.png",
    },
    {
      name: "Рислінг",
      portion: "125мл",
      price: "₴130",
      description: "Україна, н/сухе",
      image: "kolonist-risling.png",
    },
  ];

  const kartuli = [
    {
      name: "Цинандалі",
      portion: "125мл",
      price: "₴130",
      description: "Грузія, біле сухе",
      image: "kartuli-cinandali.png",
    },
    {
      name: "Сапераві",
      portion: "125мл",
      price: "₴95",
      description: "Грузія, червоне сухе",
      image: "kartuli-saperavi.png",
    },
    {
      name: "Алазанська долина",
      portion: "125мл",
      price: "??",
      description: "Грузія, біле н/солодке",
      image: "kartuli-alazan-white.png",
    },
    {
      name: "Алазанська долина",
      portion: "125мл",
      price: "??",
      description: "Грузія, червоне н/солодке",
      image: "kartuli-alazan-red.png",
    },
  ];
  const cotnar = [
    {
      name: "Шардоне",
      portion: "125мл",
      price: "??",
      description: "Україна, біле сухе",
      image: "cotnar-chardonnay.png",
    },
    {
      name: "Кабарне",
      portion: "125мл",
      price: "??",
      description: "Україна, червоне сухе",
      image: "cotnar-cabernet.png",
    },
    {
      name: "Мускат",
      portion: "125мл",
      price: "??",
      description: "Україна, біле н/солодке",
      image: "cotnar-muskat.png",
    },
    {
      name: "Мерло",
      portion: "125мл",
      price: "??",
      description: "Україна, біле н/солодке",
      image: "cotnar-merlot.png",
    },
  ];

  const homeWine = [
    {
      name: "Вино домашнє",
      portion: "125мл",
      price: "??",
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
      {ShowMenuPart(colonist)}
      <h2 className="partSection">Kartuli Vazi:</h2>
      {ShowMenuPart(kartuli)}
      <h2 className="partSection">Cotnar:</h2>
      {ShowMenuPart(cotnar)}
      {ShowMenuPart(homeWine)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
