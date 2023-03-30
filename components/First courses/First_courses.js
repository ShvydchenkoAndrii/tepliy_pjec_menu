import Image from "next/image";
import pjecMenuIco from "@/public/tp_menu_ico.png";
export default function FirstCourses() {
  const firstCourses = [
    {
      name: "Борщ з п'єца",
      portion: "𓍝300",
      price: "₴137",
      description:
        "подається зі сметаною, грінками чорного хліба та зеленим маслом",
    },
    {
      name: "Солянка",
      portion: "𓍝300",
      price: "₴104",
      description: "",
    },
    {
      name: "Росіл з перепілки",
      portion: "𓍝300",
      price: "₴160",
      description: "",
    },
    {
      name: "Чанахи від шефа",
      portion: "𓍝300",
      price: "₴100",
      description: "на телячих хвостах",
    },
    {
      name: "Флячки по-львівськи",
      portion: "𓍝300",
      price: "₴152",
      description: "",
    },
    {
      name: "Булочка кайзерка",
      portion: "1шт",
      price: "₴15",
      description: "",
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
        <h1 className="partName">ПЕРШІ СТРАВИ</h1>
        <Image
          src={pjecMenuIco}
          width={90}
          className="partHeadIco"
          alt="міні логотип теплого п'єца для меню "
        ></Image>
      </div>
      {firstCourses.map((item) => {
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
