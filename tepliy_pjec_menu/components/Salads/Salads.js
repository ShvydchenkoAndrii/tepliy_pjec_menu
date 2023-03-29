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
    <div>
      <div className="flex items-center justify-center">
        <Image src={pjecMenuIco} width={100}></Image>
        <h1 className="mb-3">САЛАТИ</h1>
        <Image src={pjecMenuIco} width={100}></Image>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <h2>Назва</h2>
          <p>Вага (г)</p>
          <p>Ціна (грн)</p>
        </div>
        {salads.map((item) => {
          return (
            <div className="grid grid-cols-3">
              <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
              <p>{item.portion}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
