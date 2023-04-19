import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Vodka() {
  const vodka = [
    {
      name: "Лемберг",
      portion: "50мл",
      price: "₴30",
      description: "",
    },
    {
      name: "Львівська шляхетна",
      portion: "50мл",
      price: "₴30",
      description: "",
    },
    {
      name: "Львівська з перцем",
      portion: "50мл",
      price: "??",
      description: "",
    },
    {
      name: "Finlandia",
      portion: "50мл",
      price: "₴82",
      description: "оригінал, журавлина",
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
        <h1 className="partName">ГОРІЛКА</h1>
        <Image
          src={pjecMenuIco}
          width={90}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      {vodka.map((item) => {
        return (
          <div key={item.name} className="partItem">
            <img src={item.image} width={100}></img>
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
