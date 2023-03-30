import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function Desserts() {
  const desserts = [
    {
      name: "Львівський сирник",
      portion: "за 𓍝100",
      price: "₴49",
      description: "",
    },
    {
      name: "Штрудель яблучний",
      portion: "за 𓍝100",
      price: "₴27",
      description: "",
    },
    {
      name: "Львівські андрути",
      portion: "𓍝100",
      price: "₴83",
      description: "",
    },
    {
      name: "Спартак",
      portion: "за 𓍝100",
      price: "₴84",
      description: "",
    },
    {
      name: "Зимний п'єц",
      portion: "𓍝150",
      price: "₴87",
      description: "морозиво пломбір з варенням та школадною присипкою",
    },
    {
      name: "Горіх в шоколаді",
      portion: "за 𓍝100",
      price: "₴128",
      description:
        "три види горіхів, шоколад, пісочне тісто, подається теплим з кулькою морозива",
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
        <h1 className="partName">ДЕСЕРТИ</h1>
        <Image
          src={pjecMenuIco}
          width={100}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      {desserts.map((item) => {
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
