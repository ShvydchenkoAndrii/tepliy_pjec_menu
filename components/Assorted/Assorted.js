import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Assorted() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const assorted = [
    {
      name: "Таца з п'єца",
      portion: "(1900г)",
      price: "₴1190",
      description:
        "запечена курка, кров'янка, свинячий шашлик, біґос, овочі гриль, печена картопля, соус",
      image: "taca-z-pjeca.png",
    },
    {
      name: "Розбратель від Стрийка",
      portion: "(600г)",
      price: "₴370",
      description: "три вида м'яса, палянички (страва для двох)",
      image: "vid-stryka.jpg",
    },
    {
      name: "Квашенина з діжки",
      portion: "(300г)",
      price: "₴100",
      description: "капуста, помідори, огірки",
      image: "",
    },
    {
      name: "Маринади",
      portion: "(300г)",
      price: "₴113",
      description: "виноград, цвітна капуста, болгарський перець, брюсельська капуста, крижавки",
      image: "marinadi.jpg",
    },
    {
      name: "Сало з вугликами",
      portion: "(200г)",
      price: "₴270",
      description: "",
      image: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">СТРАВИ ДО ЗАБАВИ</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(assorted)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
