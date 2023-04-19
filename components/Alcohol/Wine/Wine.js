import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Wine() {
  const colonist = [
    {
      name: "Шардоне",
      portion: "125мл",
      price: "₴130",
      description: "Україна, біле сухе",
      image: "kolonist-chardonay.png",
    },
    {
      name: "Каберне",
      portion: "125мл",
      price: "₴95",
      description: "Україна, червоне сухе",
      image: "kolonist-cabernet.png",
    },
    {
      name: "Рислінг",
      portion: "125мл",
      price: "₴130",
      description: "Україна, н/сухе",
      image: "kolonist-risling.png",
    },
  ];

  const kartuli = [
    {
      name: "Цинандалі",
      portion: "125мл",
      price: "₴130",
      description: "Грузія, біле сухе",
      image: "kartuli-cinandali.png",
    },
    {
      name: "Сапераві",
      portion: "125мл",
      price: "₴95",
      description: "Грузія, червоне сухе",
      image: "kartuli-saperavi.png",
    },
    {
      name: "Алазанська долина",
      portion: "125мл",
      price: "??",
      description: "Грузія, біле н/солодке",
      image: "kartuli-alazan-white.png",
    },
    {
      name: "Алазанська долина",
      portion: "125мл",
      price: "??",
      description: "Грузія, червоне н/солодке",
      image: "kartuli-alazan-red.png",
    },
  ];
  const cotnar = [
    {
      name: "Шардоне",
      portion: "125мл",
      price: "??",
      description: "Україна, біле сухе",
      image: "cotnar-chardonnay.png",
    },
    {
      name: "Кабарне",
      portion: "125мл",
      price: "??",
      description: "Україна, червоне сухе",
      image: "cotnar-cabernet.png",
    },
    {
      name: "Мускат",
      portion: "125мл",
      price: "??",
      description: "Україна, біле н/солодке",
      image: "cotnar-muskat.png",
    },
    {
      name: "Мерло",
      portion: "125мл",
      price: "??",
      description: "Україна, біле н/солодке",
      image: "cotnar-merlot.png",
    },
  ];
  return (
    <div className="menuPart">
      <div className="partHead">
        <Image
          src={pjecMenuIco}
          width={30}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
        <h1 className="partName">ВИНО</h1>
        <Image
          src={pjecMenuIco}
          width={30}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      <h2 className="partSection">Колоніст:</h2>
      {colonist.map((item) => {
        return (
          <div key={item.name} className="partItem">
            <div className="itemPicture">
              <img src={item.image}></img>
            </div>
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
            <div className="itemPicture">
              <img src={item.image}></img>
            </div>
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
            <div className="itemPicture">
              <img src={item.image}></img>
            </div>
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
