import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function RumAndGin() {
  const rumAndGin = [
    {
      name: "Capitan Morgan",
      portion: "50мл",
      price: "₴78",
      description: "Spiced gold original",
      image: "capitan-morgan.png",
    },
    {
      name: "Bacardi",
      portion: "50мл",
      price: "₴70",
      description: "Spiced",
      image: "bacardi.png",
    },
    {
      name: "Gordon's London",
      portion: "50мл",
      price: "₴92",
      description: "dry gin",
      image: "gordon.png",
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
        <h1 className="partName">РОМ, ДЖИН</h1>
        <Image
          src={pjecMenuIco}
          width={30}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      {rumAndGin.map((item) => {
        return (
          <div key={item.name} className="partItem">
            <img src={item.image} width={30}></img>
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
