import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Wine() {
  const colonist = [
    {
      name: "Шардоне",
      portion: "125мл",
      price: "₴130",
      description: "Україна, біле сухе",
    },
    {
      name: "Кабарне",
      portion: "125мл",
      price: "₴95",
      description: "Україна, червоне сухе",
    },
    {
      name: "Рислінг",
      portion: "125мл",
      price: "₴130",
      description: "Україна, н/сухе",
    },
  ];

  const kartuli = [
    {
      name: "Цинандалі",
      portion: "125мл",
      price: "₴130",
      description: "Грузія, біле сухе",
    },
    {
      name: "Сапераві",
      portion: "125мл",
      price: "₴95",
      description: "Грузія, червоне сухе",
    },
    {
      name: "Алазанська долина",
      portion: "125мл",
      price: "??",
      description: "Грузія, біле н/солодке",
    },
    {
      name: "Алазанська долина",
      portion: "125мл",
      price: "??",
      description: "Грузія, червоне н/солодке",
    },
  ];
  const cotnar = [
    {
      name: "Шардоне",
      portion: "125мл",
      price: "??",
      description: "Україна, біле сухе",
    },
    {
      name: "Кабарне",
      portion: "125мл",
      price: "??",
      description: "Україна, червоне сухе",
    },
    {
      name: "Мускат",
      portion: "125мл",
      price: "??",
      description: "Україна, біле н/солодке",
    },
    {
      name: "Мерло",
      portion: "125мл",
      price: "??",
      description: "Україна, біле н/солодке",
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
      <h2 className="partSection">Колоніст:</h2>
      {colonist.map((item) => {
        return (
          <div key={item.name} className="partItem">
            <img src={item.image} width={90} height={90}></img>
            <h2 className="itemName">{item.name}</h2>
            <p className="itemDescrip">{item.description}</p>
            <p className="itemPortion">{item.portion}</p>
            <p className="itemPrice">{item.price}</p>
          </div>
        );
      })}
      <h2 className="partSection">Kartuli Vazi:</h2>
      {kartuli.map((item) => {
        return (
          <div key={item.name} className="partItem">
            <img src={item.image} width={90} height={90}></img>
            <h2 className="itemName">{item.name}</h2>
            <p className="itemDescrip">{item.description}</p>
            <p className="itemPortion">{item.portion}</p>
            <p className="itemPrice">{item.price}</p>
          </div>
        );
      })}
      <h2 className="partSection">Cotnar:</h2>
      {cotnar.map((item) => {
        return (
          <div key={item.name} className="partItem">
            <img src={item.image} width={90} height={90}></img>
            <h2 className="itemName">{item.name}</h2>
            <p className="itemDescrip">{item.description}</p>
            <p className="itemPortion">{item.portion}</p>
            <p className="itemPrice">{item.price}</p>
          </div>
        );
      })}
      <div className="blackUnderlline"></div>
    </div>
  );
}
