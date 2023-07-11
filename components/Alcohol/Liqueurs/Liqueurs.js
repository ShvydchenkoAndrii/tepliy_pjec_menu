import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Liqueurs() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const liqueurs = [
    {
      name: "Vana Tallin original",
      portion: "50мл",
      price: "₴81",
      description: "",
      image: "vana-tallin.png",
    },
    {
      name: "Старий Ринок",
      portion: "50мл",
      price: "₴27",
      description: "",
      image: "stariy-rynok.png",
    },
    {
      name: "Jägermeister",
      portion: "50мл",
      price: "₴86",
      description: "",
      image: "jägermeister.png",
    },
    {
      name: "Becherovka",
      portion: "50мл",
      price: "₴96",
      description: "",
      image: "becherovka.png",
    },
    {
      name: "Martini Bianco",
      portion: "50мл",
      price: "₴50",
      description: "",
      image: "martini-bianco.png",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ЛІКЕР, ВЕРМУТ, НАСТОЯНКИ</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(liqueurs)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
