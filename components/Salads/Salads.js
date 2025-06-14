import { useContext } from "react";
import { AppContext } from "@/pages";
export default function Salads() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const salads = [
    {
      name: "Цісарський з куркою",
      portion: "(300г)",
      price: "₴359",
      description: "айсберг, помідор, куряче філе, фірмовий соус",
      image: "cisarskiy-z-kurkoju.jpg",
    },
    {
      name: "Цісарський з лососем",
      portion: "(250г)",
      price: "₴443",
      description: "айсберг, помідор, лосось, фірмовий соус",
      image: "",
    },
    {
      name: "Приїхали греки",
      portion: "(250г)",
      price: "₴200",
      description: "оливки, помідор, огірок, синя цибуля",
      image: "prijihali-greki.jpg",
    },
    {
      name: "Фірмовий від пічника",
      portion: "(300г)",
      price: "₴251",
      description: "салера, яблука, грецький горіх, мікс салату",
      image: "firmoviy-vid-pichnika.jpg",
    },
    {
      name: "Базікало",
      portion: "(300г)",
      price: "₴231",
      description:
        "салат з язиком на картопляній подушці з маринованою цибулею, квашеним огірком та бебі-морквою",
      image: "bazikalo.jpg",
    },
    {
      name: "Олів'є",
      portion: "(200г)",
      price: "₴119/₴245",
      description: "з куркою / з лососем",
      image: "olivje-losos.jpg",
    },
    {
      name: "Салат з грядки",
      portion: "",
      price: "₴129",
      description: "із сезонних овочів",
      image: "salat_z_gryadki.jpg",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">САЛАТИ</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(salads)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
