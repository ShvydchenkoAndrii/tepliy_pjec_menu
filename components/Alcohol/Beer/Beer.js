import { useContext } from "react";
import { AppContext } from "@/pages";
import ShowMenuPartHotDrinks from "@/components/Show Menu Part Hot Drinks/ShowMenuPartHotDrinks";

export default function Beer() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const beerFromKeg = [
    {
      name: "Львівське світле",
      portion: "300/ 500мл",
      price: "₴35/ ₴55",
      description: "",
      image: "lvivske-svitle.png",
    },
    {
      name: "Kronenbourg blanc",
      portion: "300/ 500мл",
      price: "₴48/ ₴78",
      description: "",
      image: "kronenbourg-blanc.png",
    },
    {
      name: "Пиво пляшкове",
      portion: "",
      price: "₴75",
      description: "в асортименті",
      image: "",
    },{
      name: "Сидр",
      portion: "",
      price: "",
      description: "",
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
