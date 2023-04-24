import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Salads() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const salads = [
    {
      name: "Цісарський з куркою",
      portion: "𓍝350",
      price: "₴255",
      description: "айсберг, помідор, куряче філе, фірмовий соус",
      image: "",
    },
    {
      name: "Приїхали греки",
      portion: "𓍝200",
      price: "₴95",
      description: "оливки, помідор, огірок, солодкий перець, синя цибуля",
      image: "",
    },
    {
      name: "Фірмовий від пічника",
      portion: "𓍝300",
      price: "₴208",
      description: "салера, яблука, грецький горіх",
      image: "firmoviy-vid-pichnika.jpg",
    },
    {
      name: "Базікало",
      portion: "𓍝300",
      price: "₴164",
      description:
        "салат з язиком на картопляній подушці з маринованою цибулею, квашеним огірком та бебі-морквою",
      image: "bazikalo.jpg",
    },
    {
      name: "Олів'є",
      portion: "𓍝200",
      price: "₴96 / ₴134",
      description: "з куркою / з лососем",
      image: "olivje-losos.jpg",
    },
    {
      name: "З лососем та яйцем пашот",
      portion: "𓍝300",
      price: "₴319",
      description: "",
      image: "salat-losos.jpg",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">САЛАТИ</h1>
        {PartHead()}
      </div>
      {ShowMenuPart(salads)}
      <div className="blackUnderlline"></div>
    </div>
  );
}
