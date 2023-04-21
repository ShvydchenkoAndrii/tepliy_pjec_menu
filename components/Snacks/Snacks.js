import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Snacks() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const snacks = [
    {
      name: "Птисі на кльоші",
      portion: "10шт",
      price: "₴157",
      description:
        "еклери з вершково-сирною начинкою та печінковим паштетом, подаються з жарвлиновим соусом",
    },
    {
      name: "Язик із хроном",
      portion: "𓍝100",
      price: "₴110",
      description: "",
    },
    {
      name: "Припрошанки",
      portion: "𓍝350",
      price: "₴207",
      description: "сало з часником, сирна намазка, фаршмак, авантюрка",
      image: "pryproshanki.jpg",
    },
    {
      name: "Кахля батяра/ з чверткою",
      portion: "𓍝400",
      price: "₴340 / ₴440",
      description: "м'ясна нарізка, квашенина ",
    },
    {
      name: "Гефелті фіш",
      portion: "𓍝135",
      price: "₴125",
      description: "фарширована риба",
      image: "gafelti-fish.jpg",
    },
    {
      name: "Оселедець",
      portion: "𓍝170",
      price: "₴80",
      description: " з цибулькою",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ПЕРЕКУСИ</h1>
        {PartHead()}
      </div>
      {ShowMenuPart(snacks)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
