import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function FishDishes() {
  const fishDishes = [
    {
      name: "Пструг печений",
      portion: "𓍝370",
      price: "₴424",
      description: "форель",
    },
    {
      name: "Баламут з п'єца",
      portion: "𓍝240",
      price: "₴268",
      description: "скумбрія",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={90} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
        <h1 className="partName">РИБНІ СТРАВИ</h1>
        <Image src={pjecMenuIco} width={90} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
      </div>
        {fishDishes.map((item) => {
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
