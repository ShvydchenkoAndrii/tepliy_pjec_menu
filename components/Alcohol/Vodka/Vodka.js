import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Vodka() {
  const vodka = [
    {
      name: "Лемберг",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Львівська шляхетна",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Львівська з перцем",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Finlandia",
      portion: "??",
      price: "??",
      description: "оригінал, журавлина",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
        <h1 className="partName">ГОРІЛКА</h1>
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
      </div>
      <div>
        <div className="partHeadDescr">
          <h2>Назва</h2>
          <p>Об'єм (мл)</p>
          <p>Ціна (грн)</p>
        </div>
        {vodka.map((item) => {
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
      </div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
