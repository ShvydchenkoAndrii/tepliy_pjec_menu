import { useContext } from "react";
import { AppContext } from "@/pages";
import ShowMenuPartHotDrinks from "@/components/Show Menu Part Hot Drinks/ShowMenuPartHotDrinks";

export default function CognacAndBrandy() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const cognacAndBrandy = [
    {
      name: "Закарпатський 4*",
      portion: "50мл",
      price: "₴105",
      description: "",
      image: "zakarpatsk.png",
    },
    {
      name: "Азнаурі 3*",
      portion: "50мл",
      price: "₴60",
      description: "",
      image: "aznauri.png",
    },
    {
      name: "Старий Кахеті 4*",
      portion: "50мл",
      price: "₴98",
      description: "",
      image: "old-kaheti.png",
    },
    {
      name: "Чайка 7*",
      portion: "50мл",
      price: "₴70",
      description: "",
      image: "chaika.png",
    },
    {
      name: "Метакса 5*",
      portion: "50мл",
      price: "₴112",
      description: "",
      image: "metaxa.png",
    },
  ];

  return (
     <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">БРЕНДІ, КОНЬЯKИ</h1>
        {PartHead()}
      </div>
      {ShowMenuPartHotDrinks(cognacAndBrandy)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
