import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Breakfasts() {
  const breakfasts = [
    {
      name: "Вареники з сиром",
      portion: "",
      price: "₴124",
      description: "запечені у сметані",
    },
    {
      name: "Тартіні з куркою су-від",
      portion: "",
      price: "₴190",
      description: "скрембл, тост, мікс салату, крем сир, курка",
    },
    {
      name: "Тартіні з лососем",
      portion: "",
      price: "₴220",
      description: "скрембл, тост, мікс салату, крем сир, слабосолений лосось",
    },
    {
      name: "Налисники",
      portion: "",
      price: "₴74",
      description: "з сиром",
    },
    {
      name: "Сирнички",
      portion: "",
      price: "₴128",
      description: "зі сметаною та варенням",
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
      {breakfasts.map((item) => {
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