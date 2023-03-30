import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Assorted() {
  const assorted = [
    // {
    //   name: "Сирна тареля",
    //   portion: "??",
    //   price: "??",
    //   description: "сирне асорті",
    // },
    // {
    //   name: "М'ясна тареля",
    //   portion: "??",
    //   price: "??",
    //   description: "асорті з м'сних делікатесів",
    // },
    {
      name: "Таца з п'єца",
      portion: "𓍝1800",
      price: "₴1150",
      description: "запечені ребра, ковбаски, картопля, курче філе су-від, кров'янка, печериці",
    },
    {
      name: "Квашенина з діжки",
      portion: "",
      price: "₴100",
      description: "",
    },
    {
      name: "Маринади",
      portion: "",
      price: "₴113",
      description: "",
    },
    {
      name: "Сало з вугликами",
      portion: "",
      price: "₴270",
      description: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
        <h1 className="partName">СТРАВИ ДО ЗАБАВИ</h1>
        <Image src={pjecMenuIco} width={100} className="partHeadIco"></Image>
      </div>
        {assorted.map((item) => {
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
