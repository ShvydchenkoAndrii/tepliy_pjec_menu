import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function CognacAndBrandy() {
  const cognacAndBrandy = [
    {
      name: "Закарпатський 4*",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Азнаурі 3*",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Старий Кахеті 4*",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Чайка 7*",
      portion: "??",
      price: "??",
      description: "",
    },
    {
      name: "Метакса 5*",
      portion: "??",
      price: "??",
      description: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
        <h1 className="partName">КОНЬЯКИ ТА БРЕНДІ</h1>
        <Image src={pjecMenuIco} width={100} className="partHeadIco" alt="міні логотип теплого п'єца для меню "></Image>
      </div>
      <div>
        <div className="partHeadDescr">
          <h2>Назва</h2>
          <p>Об&apos;єм (мл)</p>
          <p>Ціна (грн)</p>
        </div>
        {cognacAndBrandy.map((item) => {
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
