import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Tea() {
  const tea = [
    {
      name: `Чай з "Теплого п'єц"`,
      portion: "250/500",
      price: "100",
      description: "суміш карпатських трав та ягід, квітковий мед",
    },
    {
      name: "Чай розсипний",
      portion: "250/500",
      price: "100",
      description: "чорний, зелений, фруктовий",
    },
    {
      name: "Чай вітамінний",
      portion: "250/500",
      price: "100",
      description: "імбир/ малина/ обліпиха",
    },
  ];

  const adds = [
    {
      name: "Молоко",
      portion: "",
      price: "150",
      description: "",
    },
    {
      name: "Мед",
      portion: "",
      price: "100",
      description: "",
    },
    {
      name: "Лимон",
      portion: "0,3/0,5",
      price: "100",
      description: "",
    },
  ];
  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
        <h1 className="partName">ЧАЙ</h1>
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
      </div>
      <div className="partHeadDescr">
        <h2>Назва</h2>
        <p>Об&apos;єм (мл)</p>
        <p>Ціна (грн)</p>
      </div>
    
      {tea.map((item) => {
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

      <h2 className="partSection">Додатки:</h2>

      {adds.map((item) => {
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
      <div className="blackUnderlline"></div>
    </div>
  );
}
