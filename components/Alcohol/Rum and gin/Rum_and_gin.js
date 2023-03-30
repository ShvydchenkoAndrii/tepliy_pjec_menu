import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function RumAndGin() {
  const rumAndGin = [
    {
      name: "Capitan Morgan Spiced gold original?",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Bacardi Spiced",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Gordon's London dry gin",
      portion: "??",
      price: "??",
      description: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
        <h1 className="partName">РОМ, ДЖИН</h1>
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
      </div>
      <div>
        <div className="partHeadDescr">
          <h2>Назва</h2>
          <p>Об'єм (мл)</p>
          <p>Ціна (грн)</p>
        </div>
        {rumAndGin.map((item) => {
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
