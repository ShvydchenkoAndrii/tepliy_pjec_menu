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
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
        <h1 className="partName">ЛІКЕР,ВЕРМУТ,НАСТОЯНКИ</h1>
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
      </div>
      <div>
        <div className="partHeadDescr">
          <h2>Назва</h2>
          <p>Об'єм (мл)</p>
          <p>Ціна (грн)</p>
        </div>
        {liqueurs.map((item) => {
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
