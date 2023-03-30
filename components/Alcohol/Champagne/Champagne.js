import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Champagne() {
  const champagne = [
    {
      name: "Prosecco",
      portion: "125мл",
      price: "₴110",
      description: "",
    },
    {
      name: "Chateau Chizay, Carpathian Sekt",
      portion: "750мл",
      price: "₴640",
      description: "Україна, біле брют",
    },
    {
      name: "Shabo Classic",
      portion: "750мл",
      price: "₴640",
      description: "Україна, біле н/солодке",
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
        <h1 className="partName">ІГРИСТІ ВИНА</h1>
        <Image
          src={pjecMenuIco}
          width={90}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      {champagne.map((item) => {
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
