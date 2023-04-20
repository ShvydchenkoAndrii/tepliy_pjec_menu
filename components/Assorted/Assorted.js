import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Assorted() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const assorted = [
    // {
    //   name: "Сирна тареля",
    //   portion: "??",
    //   price: "??",
    //   description: "сирне асорті",
    // },
    // {
    //   name: "М'ясна тареля",
    //   portion: "??",
    //   price: "??",
    //   description: "асорті з м'сних делікатесів",
    // },
    {
      name: "Таца з п'єца",
      portion: "𓍝1800",
      price: "₴1150",
      description:
        "запечені ребра, ковбаски, картопля, курче філе су-від, кров'янка, печериці",
    },
    {
      name: "Квашенина з діжки",
      portion: "",
      price: "₴100",
      description: "",
    },
    {
      name: "Маринади",
      portion: "",
      price: "₴113",
      description: "",
    },
    {
      name: "Сало з вугликами",
      portion: "",
      price: "₴270",
      description: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">СТРАВИ ДО ЗАБАВИ</h1>
        {PartHead()}
      </div>
      {ShowMenuPart(assorted)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
