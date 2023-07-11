import { useContext } from "react";
import { AppContext } from "@/pages";
export default function FirstCourses() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);

  const firstCourses = [
    {
      name: "Борщ з п'єца",
      portion: "𓍝300",
      price: "₴138",
      description:
        "подається зі сметаною, грінками чорного хліба та зеленим маслом",
      image: "borshch.jpg",
    },
    {
      name: "Солянка",
      portion: "𓍝300",
      price: "₴104",
      description: "",
      image: "soljanka.jpg",
    },
    {
      name: "Бограч",
      portion: "𓍝300",
      price: "₴140",
      description: "",
      image: "",
    },
    {
      name: "Чанахи",
      portion: "𓍝300",
      price: "₴170",
      description: "запечені в глечеку з хлібною скоринкою",
      image: "zupa-ogon.jpg",
    },
    {
      name: "Флячки по-львівськи",
      portion: "𓍝300",
      price: "₴154",
      description: "",
      image: "fljachki.jpg",
    },
    {
      name: "Булочка кайзерка",
      portion: "1шт",
      price: "₴15",
      description: "",
      image: "",
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
