import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function CognacAndBrandy() {
  const cognacAndBrandy = [
    {
      name: "Закарпатський 4*",
      portion: "50мл",
      price: "₴78",
      description: "",
      image: "zakarpatsk.png",
    },
    {
      name: "Азнаурі 3*",
      portion: "50мл",
      price: "₴43",
      description: "",
      image: "aznauri.png",
    },
    {
      name: "Старий Кахеті 4*",
      portion: "50мл",
      price: "₴77",
      description: "",
      image: "old-kaheti.png",
    },
    {
      name: "Чайка 7*",
      portion: "50мл",
      price: "₴66",
      description: "",
      image: "chaika.png",
    },
    {
      name: "Метакса 5*",
      portion: "50мл",
      price: "₴105",
      description: "",
      image: "metaxa.png",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image
          src={pjecMenuIco}
          width={30}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
        <h1 className="partName">БРЕНДІ, КОНЬЯKИ</h1>
        <Image
          src={pjecMenuIco}
          width={30}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      {cognacAndBrandy.map((item) => {
        return (
          <div key={item.name} className="partItem">
            <img src={item.image} width={150}></img>

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
