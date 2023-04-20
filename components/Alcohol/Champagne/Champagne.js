import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Champagne() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const champagne = [
    {
      name: "Prosecco",
      portion: "125мл",
      price: "₴110",
      description: "",
      image: "prosecco.png",
    },
    {
      name: "Shabo Classic",
      portion: "750мл",
      price: "₴640",
      description: "Україна, біле брют",
      image: "shabo-classic-sweet.png",
    },
    {
      name: "Shabo Classic",
      portion: "750мл",
      price: "₴640",
      description: "Україна, біле н/солодке",
      image: "shabo-classic-brut.png",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ІГРИСТІ ВИНА</h1>
        {PartHead()}
      </div>
      {ShowMenuPart(champagne)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
