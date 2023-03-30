import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function MeatDishes() {
  const meatDishes = [
    {
      name: "Печена ковбаска",
      portion: "𓍝370",
      price: "₴185",
      description: "подається з яблуками та цибулькою",
    },
    {
      name: "Торбинка пічника ",
      portion: "𓍝400",
      price: "₴170",
      description: "дерун із тушкованим язиком та грибами",
    },
    {
      name: "Кишка на кельні",
      portion: "𓍝300",
      price: "₴193",
      description: "кров'янка",
    },
    {
      name: "Рушта",
      portion: "за 𓍝100",
      price: "₴94",
      description: "запечені ребра",
    },
    {
      name: "Кармонадля",
      portion: "𓍝400",
      price: "₴430",
      description: "свинина на кістці в паніровці",
    },
    {
      name: "Шніцель по-віденськи",
      portion: "𓍝400",
      price: "₴246",
      description: "яловичий, подається з картоплею пюре",
    },
    {
      name: '"А той індик..."',
      portion: "𓍝960",
      price: "₴980",
      description: "запечене стегно індички",
    },
    {
      name: "Стейк свинячий",
      portion: "𓍝450",
      price: "₴423",
      description: "",
    },
    {
      name: "Телячі медальйони",
      portion: "",
      price: "₴390",
      description: "",
    },
    {
      name: "Розбратель від Стрийка",
      portion: "𓍝600",
      price: "₴365",
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
        <h1 className="partName">М&apos;ЯСНІ СТРАВИ</h1>
        <Image
          src={pjecMenuIco}
          width={90}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      {meatDishes.map((item) => {
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
