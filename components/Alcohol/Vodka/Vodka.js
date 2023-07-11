import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Vodka() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const vodka = [
    {
      name: "Лемберг",
      portion: "50мл",
      price: "₴30",
      description: "",
      image: "lemberg.png",
    },
    {
      name: "Львівська шляхетна",
      portion: "50мл",
      price: "₴30",
      description: "",
      image: "lvivska-shljahetna.png",
    },
    // {
    //   name: "Львівська з перцем",
    //   portion: "50мл",
    //   price: "??",
    //   description: "",
    // image: "",
    // },
    {
      name: "Finlandia",
      portion: "50мл",
      price: "₴82",
      description: "оригінал, журавлина",
      image: "finlandia.png",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ГОРІЛКА</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(vodka)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
