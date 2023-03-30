import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Breakfasts() {
  const breakfasts = [
    {
      name: "Вареники з сиром запечені у сметані",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Тартіні з куркою су-від",
      portion: "??",
      price: "??",
      description: "скрембл, тост, мікс салату, крем сир, курка",
    },
    {
      name: "Тартіні з лососем",
      portion: "??",
      price: "??",
      description: "скрембл, тост, мікс салату, крем сир, слабосолений лосось",
    },
    {
      name: "Налисники з сиром",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Сирнички зі сметаною та варенням",
      portion: "??",
      price: "??",
      description: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image
          src={pjecMenuIco}
          width={100}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
        <h1 className="partName">СНІДАНКИ</h1>
        <Image
          src={pjecMenuIco}
          width={100}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      <div>
        <div className="partHeadDescr">
          <h2>Назва</h2>
          <p>Вага (г)</p>
          <p>Ціна (грн)</p>
        </div>
        {breakfasts.map((item) => {
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
