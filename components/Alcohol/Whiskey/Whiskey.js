import { useContext } from "react";
import { AppContext } from "@/pages";
import ShowMenuPartHotDrinks from "@/components/Show Menu Part Hot Drinks/ShowMenuPartHotDrinks";
export default function Whiskey() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const whiskey = [
    {
      name: "Johnnie Walker Red Label",
      portion: "50мл",
      price: "₴105",
      description: "",
      image: "red-label.png",
    },
    {
      name: "Jack Daniel's Old No.7",
      portion: "50мл",
      price: "₴140",
      description: "",
      image: "jack-daniels.png",
    },
    {
      name: "Jameson Irish Whiskey",
      portion: "50мл",
      price: "₴140",
      description: "",
      image: "jameson.png",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ВІСКІ</h1>
        {PartHead()}
      </div>
      {ShowMenuPartHotDrinks(whiskey)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
