import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Whiskey() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const whiskey = [
    {
      name: "Johnnie Walker Red Label",
      portion: "50мл",
      price: "₴99",
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
      price: "₴124",
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
      <div className="partDesc">{ShowMenuPart(whiskey)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
