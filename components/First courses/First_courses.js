import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function FirstCourses() {
  const firstCourses = [
    {
      name: "Борщ з п'єца",
      portion: "300",
      price: "??",
      description:
        "подається зі сметаною, грінками чорного хліба та зеленим маслом",
    },
    {
      name: "Солянка",
      portion: "300",
      price: "??",
      description: "",
    },
    {
      name: "Росіл з перепілки",
      portion: "300",
      price: "??",
      description: "",
    },
    {
      name: "Чанахи від шефа",
      portion: "300",
      price: "??",
      description: "на телячих хвостах",
    },
    {
      name: "Флячки по-львівськи",
      portion: "300",
      price: "??",
      description: "",
    },
    {
      name: "Булочка кайзерка",
      portion: "",
      price: "??",
      description: "",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        <Image src={pjecMenuIco} width={100} className="partHeadIco"></Image>
        <h1 className="partName">ПЕРШІ СТРАВИ</h1>
        <Image src={pjecMenuIco} width={100} className="partHeadIco"></Image>
      </div>
      <div>
        <div className="partHeadDescr">
          <h2>Назва</h2>
          <p>Вага (г)</p>
          <p>Ціна (грн)</p>
        </div>
        {firstCourses.map((item) => {
          return (
            <div className="partItem">
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
