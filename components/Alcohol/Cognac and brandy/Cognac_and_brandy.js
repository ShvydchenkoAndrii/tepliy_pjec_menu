import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function CognacAndBrandy() {
  const cognacAndBrandy = [
    {
      name: "Закарпатський 4*",
      portion: "50мл",
      price: "₴78",
      description: "",
    },
    {
      name: "Азнаурі 3*",
      portion: "50мл",
      price: "₴43",
      description: "",
    },
    {
      name: "Старий Кахеті 4*",
      portion: "50мл",
      price: "₴77",
      description: "",
    },
    {
      name: "Чайка 7*",
      portion: "50мл",
      price: "₴66",
      description: "",
    },
    {
      name: "Метакса 5*",
      portion: "50мл",
      price: "₴105",
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
        <h1 className="partName">КОНЬЯКИ ТА БРЕНДІ</h1>
        <Image
          src={pjecMenuIco}
          width={100}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      {cognacAndBrandy.map((item) => {
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
