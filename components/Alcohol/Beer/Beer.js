import { useContext } from "react";
import { AppContext } from "@/pages";
import ShowMenuPartHotDrinks from "@/components/Show Menu Part Hot Drinks/ShowMenuPartHotDrinks";

export default function Beer() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const beerFromKeg = [
    {
      name: "Львівське бочкове",
      portion: "300/ 500мл",
      price: "₴39/ ₴64",
      description: "",
      image: "lvivske-svitle.png",
    },
     {
      name: "Білий Лев",
      portion: "300/ 500мл",
      price: "₴48/ ₴78",
      description: "",
      image: "",
    },
    {
      name: "Пиво пляшкове",
      portion: "",
      price: "₴90",
      description: "в асортименті",
      image: "",
    },
    {
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
