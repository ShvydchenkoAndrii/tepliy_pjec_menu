import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Desserts() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);
  const desserts = [
    {
      name: "Львівський сирник",
      portion: "(за 100г)",
      price: "₴55",
      description: "",
      image: "sirnik.jpg",
    },
    {
      name: "Штрудель яблучний",
      portion: "(за 100г)",
      price: "₴37",
      description: "",
      image: "shtrudel.jpg",
    },
    {
      name: "Львівські андрути",
      portion: "(100г)",
      price: "₴95",
      description: "",
      image: "andruti.jpg",
    },
    {
      name: "Спартак",
      portion: "(за 100г)",
      price: "₴105",
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
      price: "₴98",
      description: "морозиво пломбір з варенням та школадною присипкою",
      image: "zimniy-pjec.jpg",
    },
    {
      name: "Горіх в шоколаді",
      portion: "(за 100г)",
      price: "₴127",
      description:
        "три види горіхів, шоколад, пісочне тісто, подається теплим з кулькою морозива",
      image: "gorih-v-shokolady.jpg",
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
