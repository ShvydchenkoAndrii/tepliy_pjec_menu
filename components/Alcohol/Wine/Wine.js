import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Wine() {
  const whiteWine = [
    {
      name: "Колоніст Шардоне",
      portion: "125мл",
      price: "₴130",
      description: "Україна, сухе",
    },
    {
      name: "Kartuli Vazi Цинандалі",
      portion: "125мл",
      price: "₴95",
      description: "Грузія, сухе",
    },
    {
      name: "Колоніст Рислінг",
      portion: "125мл",
      price: "₴130",
      description: "Україна, н/сухе",
    },
    {
      name: "Chateau Chizay Moscato",
      portion: "125мл",
      price: "₴72",
      description: "Україна, н/солодке",
    },
  ];

  const redWine = [
    {
      name: "Колоніст Кабарне",
      portion: "125мл",
      price: "₴130",
      description: "Україна, сухе",
    },
    {
      name: "Kartuli Vazi Сапераві",
      portion: "125мл",
      price: "₴95",
      description: "Грузія, сухе",
    },
    {
      name: "Chizay Pino Noir",
      portion: "125мл",
      price: "??",
      description: "Україна, н/солодке",
    },
    {
      name: "Chizay Merlo",
      portion: "125мл",
      price: "₴72",
      description: "Україна, н/сухе",
    },
    {
      name: "Вино домашнє",
      portion: "125мл",
      price: "₴45",
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
        <h1 className="partName">ВИНО</h1>
        <Image
          src={pjecMenuIco}
          width={90}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      <h2 className="partSection">Біле вино:</h2>
      {whiteWine.map((item) => {
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
      <h2 className="partSection">Червоне вино:</h2>
      {redWine.map((item) => {
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
