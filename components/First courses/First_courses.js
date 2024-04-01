import { useContext } from "react";
import { AppContext } from "@/pages";
export default function FirstCourses() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const firstCourses = [
    {
      name: "Борщ з п'єца",
      portion: "(300г)",
      price: "₴156",
      description:
        "подається зі сметаною, грінками чорного хліба та зеленим маслом",
      image: "borshch.jpg",
    },
    {
      name: "Солянка",
      portion: "(300г)",
      price: "₴122",
      description: "",
      image: "soljanka.jpg",
    },
    {
      name: "Бограч",
      portion: "(300г)",
      price: "₴162",
      description: "",
      image: "bograch.jpg",
    },
    {
      name: "Чанахи",
      portion: "(300г)",
      price: "₴190",
      description: "запечені в глечеку з хлібною скоринкою",
      image: "zupa-ogon.jpg",
    },
    {
      name: "Флячки по-львівськи",
      portion: "(300г)",
      price: "₴174",
      description: "подаються з грінками з чорного хліба",
      image: "fljachki.jpg",
    },
    {
      name: "Булочка кайзерка",
      portion: "1шт",
      price: "₴15",
      description: "",
      image: "kaizerka.jpg",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">ПЕРШІ СТРАВИ</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(firstCourses)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
