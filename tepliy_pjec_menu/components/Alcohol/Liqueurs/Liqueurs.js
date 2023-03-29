import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Liqueurs() {
  const liqueurs = [
    {
      name: "Vana Tallin original",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Старий Ринок",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Jägermeister",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Becherovka",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Martini Bianco",
      portion: "??",
      price: "??",
      description: "",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src={pjecMenuIco} width={100}></Image>
        <h1 className="mb-3">ЛІКЕР, ВЕРМУТ, НАСТОЯНКИ</h1>
        <Image src={pjecMenuIco} width={100}></Image>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <h2>Назва</h2>
          <p>Об'єм (мл)</p>
          <p>Ціна (грн)</p>
        </div>
        {liqueurs.map((item) => {
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
