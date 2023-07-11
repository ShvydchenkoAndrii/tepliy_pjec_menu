import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Snacks() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const snacks = [
    {
      name: "Птисі на кльоші",
      portion: "10шт",
      price: "₴158",
      description:
        "еклери з вершково-сирною начинкою та печінковим паштетом, подаються з жарвлиновим соусом",
      image: "ptysi.png",
    },
    {
      name: "Язик із хроном",
      portion: "𓍝100",
      price: "₴109",
      description: "",
      image: "jazik-z-hronom.jpg",
    },
    {
      name: "Припрошанки",
      portion: "𓍝350",
      price: "₴207",
      description: "сало з часником, сирна намазка, печінковий паштет, авантюрка",
      image: "pryproshanki.jpg",
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
      image: "oseledec.jpg",
    },
    {
      name: "Сухий лист",
      portion: "𓍝100/50",
      price: "₴70",
      description: "запечені чіпси з лавашу зі спеціями, фірмовий соус",
      image: "",
    },
    {
      name: "Риба Орлі",
      portion: "",
      price: "₴158",
      description: "риба обсмажена в клярі, подається з соусом",
      image: "ryba-orli.jpg",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ПЕРЕКУСИ</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(snacks)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
