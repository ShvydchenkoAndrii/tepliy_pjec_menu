import { useContext } from "react";
import { AppContext } from "@/pages";
import ShowMenuPartHotDrinks from "@/components/Show Menu Part Hot Drinks/ShowMenuPartHotDrinks";

export default function Beer() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const beerFromKeg = [
    {
      name: "Львівське світле",
      portion: "300/ 500мл",
      price: "₴32/ ₴52",
      description: "",
      image: "lvivske-svitle.png",
    },
    {
      name: "Kronenbourg blanc",
      portion: "300/ 500мл",
      price: "₴45/ ₴75",
      description: "",
      image: "kronenbourg-blanc.png",
    },
    {
      name: "Пиво пляшкове",
      portion: "",
      price: "",
      description: "в асортименті",
      image: "",
    },
  ];

  const bottleBeer = [
    // {
    //   name: "Львівське світле",
    //   portion: "??",
    //   price: "??",
    //   description: "",
    // },
    // {
    //   name: "Kronenbourg blanc",
    //   portion: "??",
    //   price: "??",
    //   description: "",
    // },
  ];
  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ПИВО</h1>
        {PartHead()}
      </div>
      <h2 className="partSection">Пиво розливене:</h2>
      {ShowMenuPartHotDrinks(beerFromKeg)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
