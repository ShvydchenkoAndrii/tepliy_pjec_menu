import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Snacks() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const snacks = [
    {
      name: "Птисі на кльоші",
      portion: "10шт",
      price: "₴198",
      description:
        "еклери з вершково-сирною начинкою та печінковим паштетом, подаються з жарвлиновим соусом",
      image: "ptysi.png",
    },
    {
      name: "Язик із хроном",
      portion: "(100г)",
      price: "₴123",
      description: "",
      image: "jazik-z-hronom.jpg",
    },
    {
      name: "Припрошанки",
      portion: "(350г)",
      price: "₴234",
      description:
        "сало з часником, сирна намазка, печінковий паштет, авантюрка",
      image: "pryproshanki.jpg",
    },
    {
      name: "Гефелті фіш",
      portion: "(135г)",
      price: "₴142",
      description: "фарширована риба",
      image: "gafelti-fish.jpg",
    },
    {
      name: "Оселедець",
      portion: "(170г)",
      price: "₴90",
      description: " з цибулькою",
      image: "oseledec.jpg",
    },
    {
      name: "Сухий лист",
      portion: "(100г/50г)",
      price: "₴87",
      description: "запечені чіпси з лавашу зі спеціями, фірмовий соус",
      image: "suhiy-list.jpg",
    },
    {
      name: "Риба Орлі",
      portion: "(200г)",
      price: "₴178",
      description: "риба обсмажена в клярі, подається з соусом",
      image: "ryba-orli.jpg",
    },
    {
      name: "Канапки на кахлі з бужениною",
      portion: "(3шт)",
      price: "₴110",
      description: "із печеною бужениною та цибулькою конфітюр",
      image: "",
    },
    {
      name: "Канапки на кахлі з лососем",
      portion: "(3шт)",
      price: "₴176",
      description: "з слабосоленим лососем та крем сиром",
      image: "",
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
