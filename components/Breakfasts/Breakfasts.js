import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Breakfasts() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const breakfasts = [
    {
      name: "Вареники з сиром",
      portion: "",
      price: "₴124",
      description: "запечені у сметані",
      image: "vareniky-breakfast.jpg",
    },
    {
      name: "Тартіні з куркою су-від",
      portion: "",
      price: "₴190",
      description: "скрембл, тост, мікс салату, крем сир, курка",
      image: "tartini-chiken.jpg",
    },
    {
      name: "Тартіні з лососем",
      portion: "",
      price: "₴220",
      description: "скрембл, тост, мікс салату, крем сир, слабосолений лосось",
      image: "tartini-losos.jpg",
    },
    {
      name: "Налисники",
      portion: "",
      price: "₴74",
      description: "з сиром",
      image: "nalisniki.jpg",
    },
    {
      name: "Сирнички",
      portion: "",
      price: "₴128",
      description: "зі сметаною та варенням",
      image: "sirniki.jpg",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">СНІДАНКИ</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(breakfasts)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
