import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Champagne() {
  const champagne = [
    {
      name: "Prosecco",
      portion: "125мл",
      price: "₴110",
      description: "",
      image: "prosecco.png",
    },
    {
      name: "Shabo Classic",
      portion: "750мл",
      price: "₴640",
      description: "Україна, біле брют",
      image: "shabo-classic-sweet.png",
    },
    {
      name: "Shabo Classic",
      portion: "750мл",
      price: "₴640",
      description: "Україна, біле н/солодке",
      image: "shabo-classic-brut.png",
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
            <img src={item.image} width={90} height={90}></img>
            <h2 className="itemName">{item.name}</h2>
            <p className="itemDescrip">{item.description}</p>
            <p className="itemPortion">{item.portion}</p>
            <p className="itemPrice">{item.price}</p>
          </div>
        );
      })}
      <div className="blackUnderlline"></div>
    </div>
  );
}
