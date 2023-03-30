import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Tea() {
  const tea = [
    {
      name: `Чай з "Теплого п'єц"`,
      portion: "250/500мл",
      price: "₴50/100",
      description: "суміш карпатських трав та ягід, квітковий мед",
    },
    {
      name: "Чай розсипний",
      portion: "250/500мл",
      price: "₴30/60",
      description: "чорний, зелений, фруктовий",
    },
    {
      name: "Чай вітамінний",
      portion: "250/500мл",
      price: "₴63/126",
      description: "імбир/ малина/ обліпиха",
    },
  ];

  const adds = [
    {
      name: "Молоко",
      portion: "",
      price: "₴10",
      description: "",
    },
    {
      name: "Мед",
      portion: "",
      price: "₴25",
      description: "",
    },
    {
      name: "Лимон",
      portion: "",
      price: "₴3",
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
        <h1 className="partName">ЧАЙ</h1>
        <Image
          src={pjecMenuIco}
          width={90}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>

      {tea.map((item) => {
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

      <h2 className="partSection">Додатки:</h2>
      {adds.map((item) => {
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
