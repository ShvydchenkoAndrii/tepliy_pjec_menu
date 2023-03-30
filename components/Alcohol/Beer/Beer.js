import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";

export default function Beer() {
  const beerFromKeg = [
    {
      name: "Львівське світле",
      portion: "0,3/0,5",
      price: "32/52",
      description: "",
    },
    {
      name: "Kronenbourg blanc",
      portion: "0,3/0,5",
      price: "32/52",
      description: "",
    },
  ];

  const bottleBeer = [
    {
      name: "Львівське світле",
      portion: "0,3/0,5",
      price: "150",
      description: "",
    },
    {
      name: "Kronenbourg blanc",
      portion: "0,3/0,5",
      price: "100",
      description: "",
    },
  ];
  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
        <h1 className="partName">ПИВО</h1>
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
      </div>
      <div className="partHeadDescr">
        <h2>Назва</h2>
        <p>Об&apos;єм (л)</p>
        <p>Ціна (грн)</p>
      </div>
      <h2 className="partSection">Пиво розливене:</h2>
      {beerFromKeg.map((item) => {
        return (
          <div key={item.name} className="partItem">
            <div>
              <h2 className="itemName">{item.name}</h2>
              <p className="itemDescrip">{item.description}</p>
            </div>
            <p>{item.portion}</p>
            <p>{item.price}</p>
          </div>
        );
      })}

      <h2 className="partSection">Пиво пляшкове:</h2>

      {bottleBeer.map((item) => {
        return (
          <div key={item.name} className="partItem">
            <div>
              <h2 className="itemName">{item.name}</h2>
              <p className="itemDescrip">{item.description}</p>
            </div>
            <p>{item.portion}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
      <div className="blackUnderlline"></div>
    </div>
  );
}
