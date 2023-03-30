import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Wine() {
  const whiteWine = [
    {
      name: "Колоніст Шардоне",
      portion: "??",
      price: "??",
      description: "Україна, сухе",
    },
    {
      name: "Kartuli Vazi Цинандалі",
      portion: "??",
      price: "??",
      description: "Грузія, сухе",
    },
    {
      name: "Колоніст Рислінг",
      portion: "??",
      price: "??",
      description: "Україна, н/сухе",
    },
    {
      name: "Chateau Chizay Moscato",
      portion: "??",
      price: "??",
      description: "Україна, н/солодке",
    },
  ];

  const redWine = [
    {
      name: "Колоніст Кабарне",
      portion: "??",
      price: "??",
      description: "Україна, сухе",
    },
    {
      name: "Kartuli Vazi Сапераві",
      portion: "??",
      price: "??",
      description: "Грузія, сухе",
    },
    {
      name: "Chizay Pino Noir",
      portion: "??",
      price: "??",
      description: "Україна, н/солодке",
    },
    {
      name: "Chizay Merlo",
      portion: "??",
      price: "??",
      description: "Україна, н/сухе",
    },
    {
      name: "Вино домашнє",
      portion: "??",
      price: "??",
      description: "",
    },
  ];
  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={100} className="partHeadIco"></Image>
        <h1 className="partName">ВИНО</h1>
        <Image src={pjecMenuIco} width={100} className="partHeadIco"></Image>
      </div>
      <div className="partHeadDescr">
        <h2>Назва</h2>
        <p>Об'єм (мл)</p>
        <p>Ціна (грн)</p>
      </div>
      <h2 className="partSection">Біле вино:</h2>
      {whiteWine.map((item) => {
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
      <h2 className="partSection">Червоне вино:</h2>
      {redWine.map((item) => {
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
      <div className="blackUnderlline"></div>
    </div>
  );
}
