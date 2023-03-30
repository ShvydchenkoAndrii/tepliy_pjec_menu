import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function MainDishes() {
  const mainDishes = [
    {
      name: "Банош",
      portion: "𓍝200",
      price: "₴122",
      description: "подається з овечою бринзою та шкварками",
    },
    {
      name: "Яворівський пиріг",
      portion: "𓍝270",
      price: "₴93",
      description: "з грибною мачанкою",
    },
    {
      name: "Картопля фрі",
      portion: "𓍝250",
      price: "₴115",
      description: "",
    },
    {
      name: "Бульба з братрури",
      portion: "𓍝250",
      price: "₴81",
      description: "печена картопля зі шпондером",
    },
    {
      name: "Терті пляцки",
      portion: "𓍝250",
      price: "₴96",
      description: "деруни зі сметаною",
    },
    {
      name: "Вареники з картоплею та сиром",
      portion: "𓍝250",
      price: "₴65",
      description: "",
    },
    {
      name: "Вареники з вишнями",
      portion: "𓍝250",
      price: "₴105",
      description: "",
    },
    {
      name: "Пироги з пательні",
      portion: "𓍝250",
      price: "₴67",
      description: "смажені вареники, подаються зі шкварками",
    },
    {
      name: "Палянички",
      portion: "𓍝220",
      price: "₴114",
      description: " з білими грибами",
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
        <h1 className="partName">ОСНОВНІ СТРАВИ</h1>
        <Image
          src={pjecMenuIco}
          width={90}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      {mainDishes.map((item) => {
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
