import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Breakfasts() {
  const breakfasts = [
    {
      name: "Вареники з сиром запечені у сметані",
      portion: "𓍝200",
      price: "₴150",
      description: "",
    },
    {
      name: "Тартіні з куркою су-від",
      portion: "𓍝200",
      price: "₴150",
      description: "скрембл, тост, мікс салату, крем сир, курка",
    },
    {
      name: "Тартіні з лососем",
      portion: "𓍝200",
      price: "₴150",
      description: "скрембл, тост, мікс салату, крем сир, слабосолений лосось",
    },
    {
      name: "Налисники з сиром",
      portion: "𓍝200",
      price: "₴150",
      description: "",
    },
    {
      name: "Сирнички зі сметаною та варенням",
      portion: "𓍝200",
      price: "₴150",
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
        {/* <div className="partHeadDescr">
          <div>
            <h2>Назва</h2>
          </div>
          <div className="flex justify-end items-end gap-4">
            <p>Вага (г)</p>
            <p>Ціна (грн)</p>
          </div>
        </div> */}
        {breakfasts.map((item) => {
          return (
            <div key={item.name} className="partItem">
              <div>
                <h2 className="itemName">{item.name}</h2>
                <p className="itemDescrip">{item.description}</p>
              </div>
              <div className="flex justify-end items-end gap-4">
                {" "}
                <p>{item.portion}</p>
                <p>{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
