import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function ColdDrinks() {
  const coldDrinks = [
    {
      name: "Узвар",
      portion: "1л",
      price: "₴38",
      description: "",
      image: "uzvar.png",
    },
    {
      name: "Pepsi",
      portion: "0,33л",
      price: "₴50",
      description: "скло",
      image: "pepsi.png",
    },
    {
      name: "Coca Cola",
      portion: "0,33л",
      price: "₴50",
      description: "скло",
      image: "coca-cola.png",
    },
    {
      name: "Соки та нектари",
      portion: "0,2л",
      price: "₴26",
      description: "в асортименті",
      image: "juice.png",
    },
    {
      name: "Поляна Квасова",
      portion: "0,5л",
      price: "₴54",
      description: "",
      image: "poljana.png",
    },
    {
      name: "Моршинська",
      portion: "0,33л 0,5л 0,75л",
      price: "₴49 ₴37  ₴41",
      description: "в асортименті",
      image: "morshinska.png",
    },
    {
      name: "Квас",
      portion: "0,5л",
      price: "",
      description: "сезонний",
      image: "kvas.png",
    },
    {
      name: "Фруктова вода",
      portion: "0,5л",
      price: "₴49",
      description: "дюшес, сітро",
      image: "fruit-water.png",
    },
    {
      name: "Молочний коктейль",
      portion: "0,2л",
      price: "",
      description: "сезонний",
      image: "milk-cocktail.png",
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
        <h1 className="partName">ХОЛОДНІ НАПОЇ</h1>
        <Image
          src={pjecMenuIco}
          width={30}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      {coldDrinks.map((item) => {
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
