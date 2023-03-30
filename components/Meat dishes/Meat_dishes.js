import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function MeatDishes() {
  const meatDishes = [
    {
      name: "Печена ковбаска",
      portion: "370",
      price: "??",
      description: "подається з яблуками та цибулькою",
    },
    {
      name: "Торбинка пічника ",
      portion: "400",
      price: "??",
      description: "дерун із тушкованим язиком та грибами",
    },
    {
      name: "Кишка на кельні",
      portion: "300",
      price: "??",
      description: "кров'янка",
    },
    {
      name: "Рушта",
      portion: "",
      price: "??",
      description: "запечені ребра",
    },
    {
      name: "Кармонадля",
      portion: "",
      price: "??",
      description: "свинина на кістці в паніровці",
    },
    {
      name: "Шніцель по-віденськи",
      portion: "400",
      price: "??",
      description: "яловичий подається з картоплею пюре",
    },
    {
      name: '"А той індик..."',
      portion: "",
      price: "??",
      description: "запечене стегно індички",
    },
    {
      name: "Стейк свинячий",
      portion: "450",
      price: "??",
      description: "",
    },
    {
      name: "Телячі медальйони",
      portion: "",
      price: "??",
      description: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
        <h1 className="partName">М&apos;ЯСНІ СТРАВИ</h1>
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
      </div>
      <div>
        <div className="partHeadDescr">
          <h2>Назва</h2>
          <p>Вага (г)</p>
          <p>Ціна (грн)</p>
        </div>
        {meatDishes.map((item) => {
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
