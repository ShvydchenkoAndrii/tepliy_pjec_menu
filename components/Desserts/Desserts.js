import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Desserts() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);
  const desserts = [
    {
      name: "Львівський сирник",
      portion: "(за 100г)",
      price: "₴49",
      description: "",
      image: "sirnik.jpg",
    },
    {
      name: "Штрудель яблучний",
      portion: "(за 100г)",
      price: "₴27",
      description: "",
      image: "shtrudel.jpg",
    },
    {
      name: "Львівські андрути",
      portion: "(100г)",
      price: "₴83",
      description: "",
      image: "andruti.jpg",
    },
    {
      name: "Спартак",
      portion: "(за 100г)",
      price: "₴84",
      description: "",
      image: "spartak.png",
    },
    {
      name: "Зимний п'єц",
      portion: "(150г)",
      price: "₴87",
      description: "морозиво пломбір з варенням та школадною присипкою",
      image: "zimniy-pjec.jpg",
    },
    {
      name: "Горіх в шоколаді",
      portion: "(за 100г)",
      price: "₴128",
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
