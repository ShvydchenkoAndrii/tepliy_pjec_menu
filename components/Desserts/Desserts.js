import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Desserts() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);
  const desserts = [
    {
      name: "Львівський сирник",
      portion: "за 𓍝100",
      price: "₴49",
      description: "",
      image: "sirnik.jpg",
    },
    {
      name: "Штрудель яблучний",
      portion: "за 𓍝100",
      price: "₴27",
      description: "",
      image: "",
    },
    {
      name: "Львівські андрути",
      portion: "𓍝100",
      price: "₴83",
      description: "",
      image: "andruti.jpg",
    },
    {
      name: "Спартак",
      portion: "за 𓍝100",
      price: "₴84",
      description: "",
      image: "",
    },
    {
      name: "Зимний п'єц",
      portion: "𓍝150",
      price: "₴87",
      description: "морозиво пломбір з варенням та школадною присипкою",
      image: "",
    },
    {
      name: "Горіх в шоколаді",
      portion: "за 𓍝100",
      price: "₴128",
      description:
        "три види горіхів, шоколад, пісочне тісто, подається теплим з кулькою морозива",
      image: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ДЕСЕРТИ</h1>
        {PartHead()}
      </div>
      {ShowMenuPart(desserts)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
