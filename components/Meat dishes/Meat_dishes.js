import { useContext } from "react";
import { AppContext } from "@/pages";
export default function MeatDishes() {
  const { ShowMenuPart, PartHead } = useContext(AppContext);
  const meatDishes = [
    // {
    //   name: "Львівська мачанка",
    //   portion: "(300г)",
    //   price: "₴196",
    //   description: "бургер із запеченою бужениною та біґос",
    //   image: "lvivska-machanka.png",
    // },
    {
      name: "Ґуґлики з телятини",
      portion: "(350г)",
      price: "₴413",
      description:
        "телячі боли су-від на подушці з горохового пюре та овочами гриль",
      image: "gugliki.jpg",
    },
    {
      name: "Печена ковбаска",
      portion: "(370г)",
      price: "₴291",
      description: "подається з яблуками та цибулькою",
      image: "kovbaska-pechena.jpg",
    },
    {
      name: "Торбинка пічника",
      portion: "(400г)",
      price: "₴233",
      description: "дерун із тушкованим телячим язиком та грибами",
      image: "torbinka.jpg",
    },
    {
      name: "Кишка на кельні",
      portion: "(300г)",
      price: "₴224",
      description: "кров'янка з біґосом",
      image: "kishka.jpg",
    },
    {
      name: "Рушта",
      portion: "(за 100г)",
      price: "₴119",
      description: "запечені ребра",
      image: "rebra.jpg",
    },
    {
      name: "Пательня свіжини",
      portion: "(за 100г)",
      price: "₴145",
      description: "свинячий шашлик",
      image: "patelnja-svigini.jpg",
    },

    {
      name: "Шніцель по-віденськи",
      portion: "(400г)",
      price: "₴319",
      description: "з традиційною картопляною салаткою",
      image: "shnitzel.jpg",
    },
    // {
    //   name: "Стейк із язика на грилі",
    //   portion: "(270г)",
    //   price: "₴327",
    //   description: "на гороховому пюре з запеченими овочами",
    //   image: "steik_yazyk.jpg",
    // },
    {
      name: '"А той індик..."',
      portion: "(350г)",
      price: "₴406",
      description:
        "індиче стегно су-від, подається з карамелізованою грушею та соусом",
      image: "a-toj-indyk.png",
    },
    {
      name: "Печінка з журавлиним соусом",
      portion: "(450г)",
      price: "₴271",
      description: "",
      image: "pechinka-z-guravlinoju.jpg",
    },

    {
      name: "Деруни по-гуцульськи",
      portion: "(400г)",
      price: "₴241",
      description:
        "деруни з м'ясом, запечені у вершковому соусі з сиром та грибами",
      image: "deruny-po-guculsky.jpg",
    },
    {
      name: "Чорні вареники",
      portion: "(250г)",
      price: "₴280",
      description: "з інидчкою та грибним соусом",
      image: "chorni_z_indykom.jpg",
    },
  ];

  return (
    <div className="menuPart">
      <div className="partHead">
        {PartHead()}
        <h1 className="partName">М&apos;ЯСНІ СТРАВИ</h1>
        {PartHead()}
      </div>
      <div className="partDesc">{ShowMenuPart(meatDishes)}</div>
      <div className="blackUnderlline"></div>
    </div>
  );
}
