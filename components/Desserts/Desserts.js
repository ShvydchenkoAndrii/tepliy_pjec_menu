import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Desserts() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);
  const desserts = [
    {
      name: "Львівський сирник",
      portion: "(за 100г)",
      price: "₴60",
      description: "",
      image: "sirnik.jpg",
    },
    {
      name: "Штрудель яблучний",
      portion: "(за 100г)",
      price: "₴55",
      description: "",
      image: "shtrudel.jpg",
    },
    {
      name: "Чорнослив у вершках",
      portion: "(150г)",
      price: "₴153",
      description: "",
      image: "chornoslyv.jpg",
    },
    /* {
      name: "Львівські андрути",
      portion: "(100г)",
      price: "₴140",
      description: "",
      image: "andruti.jpg",
    }, */
    {
      name: "Спартак",
      portion: "(за 100г)",
      price: "₴113",
      description: "",
      image: "spartak.png",
    },
    // {
    //   name: "Наполеон",
    //   portion: "(за 100г)",
    //   price: "₴150",
    //   description: "",
    //   image: "napoleon.jpg",
    // },
    {
      name: "Зимний п'єц",
      portion: "(150г)",
      price: "₴134",
      description: "морозиво пломбір з варенням та школадною присипкою",
      image: "zimniy-pjec.jpg",
    },
    {
      name: "Горіх в шоколаді",
      portion: "(за 100г)",
      price: "₴147",
      description:
        "три види горіхів, шоколад, пісочне тісто, подається теплим з кулькою морозива",
      image: "gorih-v-shokolady.jpg",
    },
    {
      name: "Горішки",
      portion: "(2шт)",
      price: "₴50",
      description:
        "зі згущеним молоком",
      image: "gorishki.jpg",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ДЕСЕРТИ</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(desserts)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
