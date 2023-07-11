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
    // image: "",
    // },
    // {
    //   name: "М'ясна тареля",
    //   portion: "??",
    //   price: "??",
    //   description: "асорті з м'сних делікатесів",
    // image: "",
    // },
    {
      name: "Таца з п'єца",
      portion: "𓍝1800",
      price: "₴1150",
      description:
        "запечені ребра, ковбаски, картопля, курче філе су-від, кров'янка, печериці",
      image: "taca-z-pjeca.jpg",
    },
    {
      name: "Квашенина з діжки",
      portion: "",
      price: "₴100",
      description: "",
      image: "",
    },
    {
      name: "Маринади",
      portion: "",
      price: "₴113",
      description: "",
      image: "marinadi.jpg",
    },
    {
      name: "Сало з вугликами",
      portion: "",
      price: "₴270",
      description: "",
      image: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">СТРАВИ ДО ЗАБАВИ</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(assorted)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
