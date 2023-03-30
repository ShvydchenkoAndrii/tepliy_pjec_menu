import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Assorted() {
  const assorted = [
    {
      name: "Сирна тареля",
      portion: "??",
      price: "??",
      description: "сирне асорті",
    },
    {
      name: "М'ясна тареля",
      portion: "??",
      price: "??",
      description: "асорті з м'сних делікатесів",
    },
    {
      name: "Таца з п'єца",
      portion: "??",
      price: "??",
      description: "запечені ребра, ковбаски, картопля, курче філе су-від, кров'янка, печериці",
    },
    {
      name: "Квашенина з діжки та маринади",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Сало з вугликами",
      portion: "??",
      price: "??",
      description: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
        <h1 className="partName">СТРАВИ ДО ЗАБАВИ</h1>
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
      </div>
      <div>
        <div className="partHeadDescr">
          <h2>Назва</h2>
          <p>Вага (г)</p>
          <p>Ціна (грн)</p>
        </div>
        {assorted.map((item) => {
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
