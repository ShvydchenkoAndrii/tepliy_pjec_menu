import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Salads() {
  const salads = [
    {
      name: "Цісарський з куркою",
      portion: "350",
      price: "??",
      description: "айсберг, помідор, куряче філе, фірмовий соус",
    },
    {
      name: "Приїхали греки",
      portion: "200",
      price: "??",
      description: "оливки, помідор, огірок, солодкий перець, синя цибуля",
    },
    {
      name: "Фірмовий від пічника",
      portion: "300",
      price: "??",
      description: "салера, яблука, грецький горіх",
    },
    {
      name: "З лососем та яйцем пашот",
      portion: "300",
      price: "??",
      description: "",
    },
    {
      name: "Олів'є",
      portion: "200",
      price: "??",
      description: "з куркою / з лососем",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={100} className="partHeadIco"></Image>
        <h1 className="partName">САЛАТИ</h1>
        <Image src={pjecMenuIco} width={100} className="partHeadIco"></Image>
      </div>
      <div>
        <div className="partHeadDescr">
          <h2>Назва</h2>
          <p>Вага (г)</p>
          <p>Ціна (грн)</p>
        </div>
        {salads.map((item) => {
          return (
            <div className="partItem">
              <div>
                <h2 className="itemName">{item.name}</h2>
                <p className="itemDescrip">{item.description}</p>
              </div>
              <p>{item.portion}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
