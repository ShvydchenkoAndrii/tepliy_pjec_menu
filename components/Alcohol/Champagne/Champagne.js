import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Champagne() {
  const champagne = [
    {
      name: "Prosecco",
      portion: "125",
      price: "100",
      description: "",
    },
    {
      name: "Chateau Chizay, Carpathian Sekt",
      portion: "750",
      price: "100",
      description: "Україна, біле брют",
    },
    {
      name: "Shabo Classic",
      portion: "750",
      price: "100",
      description: "Україна, біле напівсолодке",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={100} className="partHeadIco"></Image>
        <h1 className="partName">ІГРИСТІ ВИНА</h1>
        <Image src={pjecMenuIco} width={100} className="partHeadIco"></Image>
      </div>
      <div>
        <div className="partHeadDescr">
          <h2>Назва</h2>
          <p>Об'єм (мл)</p>
          <p>Ціна (грн)</p>
        </div>
        {champagne.map((item) => {
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
