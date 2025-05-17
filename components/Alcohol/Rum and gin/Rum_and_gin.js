import { useContext } from "react";
import { AppContext } from "@/pages";
import ShowMenuPartHotDrinks from "@/components/Show Menu Part Hot Drinks/ShowMenuPartHotDrinks";

export default function RumAndGin() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const rumAndGin = [
    {
      name: "Capitan Morgan",
      portion: "50мл",
      price: "₴78",
      description: "Spiced gold original",
      image: "capitan-morgan.png",
    },
    {
      name: "Bacardi",
      portion: "50мл",
      price: "₴90",
      description: "Spiced",
      image: "bacardi.png",
    },
    {
      name: "Gordon's London",
      portion: "50мл",
      price: "₴100",
      description: "dry gin",
      image: "gordon.png",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">РОМ, ДЖИН</h1>
        {PartHead()}
      </div>
      {ShowMenuPartHotDrinks(rumAndGin)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
