import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Salads() {
  const salads = [
    {
      name: "Цісарський з куркою",
      portion: "𓍝350",
      price: "₴255",
      description: "айсберг, помідор, куряче філе, фірмовий соус",
    },
    {
      name: "Приїхали греки",
      portion: "𓍝200",
      price: "₴95",
      description: "оливки, помідор, огірок, солодкий перець, синя цибуля",
    },
    {
      name: "Фірмовий від пічника",
      portion: "𓍝300",
      price: "₴208",
      description: "салера, яблука, грецький горіх",
    },
    {
      name: "Базікало",
      portion: "𓍝300",
      price: "₴164",
      description:
        "салат з язиком на картопляній подушці з маринованою цибулею, квашеним огірком та бебі-морквою",
    },
    {
      name: "Олів'є",
      portion: "𓍝200",
      price: "₴96 / ₴134",
      description: "з куркою / з лососем",
    },
    {
      name: "З лососем та яйцем пашот",
      portion: "𓍝300",
      price: "₴319",
      description: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image
          src={pjecMenuIco}
          width={90}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
        <h1 className="partName">САЛАТИ</h1>
        <Image
          src={pjecMenuIco}
          width={90}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>

      {salads.map((item) => {
        return (
          <div key={item.name} className="partItem">
            <div>
              <h2 className="itemName">{item.name}</h2>
              <p className="itemDescrip">{item.description}</p>
            </div>
            <div className="itemPortionPrice">
              <p>{item.portion}</p>
              <p>{item.price}</p>
            </div>
          </div>
        );
      })}

      <div className="blackUnderlline"></div>
    </div>
  );
}
