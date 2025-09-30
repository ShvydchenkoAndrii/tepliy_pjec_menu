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
    /* {
      name: "Ґуґлики з телятини",
      portion: "(350г)",
      price: "₴413",
      description:
        "телячі боли су-від на подушці з горохового пюре та овочами гриль",
      image: "gugliki.jpg",
    }, */
    {
      name: "Голубці",
      portion: "(380г)",
      price: "₴278",
      description: "з грибною мачанкою",
      image: "golubci.jpg",
    },
    {
      name: "Люлька барана",
      portion: "(360г)",
      price: "₴380",
      description: "кебаб з баранини і біґосом",
      image: "",
    },
    {
      name: "Печена ковбаска",
      portion: "(370г)",
      price: "₴313",
      description: "подається з яблуками та цибулькою",
      image: "kovbaska-pechena.jpg",
    },
    {
      name: "Торбинка пічника",
      portion: "(400г)",
      price: "₴231",
      description: "дерун із тушкованим телячим язиком та грибами",
      image: "torbinka.jpg",
    },
    {
      name: "Кров'янка з біґосом",
      portion: "(300г)",
      price: "₴236",
      description: "",
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
      price: "₴163",
      description: "свинячий шашлик",
      image: "patelnja-svigini.jpg",
    },

    {
      name: "Шніцель по-віденськи",
      portion: "(400г)",
      price: "₴332",
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
    /* {
      name: '"А той індик..."',
      portion: "(350г)",
      price: "₴406",
      description:
        "індиче стегно су-від, подається з карамелізованою грушею та соусом",
      image: "a-toj-indyk.png",
    }, */
    {
      name: "Томлений індик",
      portion: "(300г)",
      price: "₴355",
      description: "на подушці з баношу",
      image: "",
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
      price: "₴247",
      description:
        "деруни з м'ясом, запечені у вершковому соусі з сиром та грибами",
      image: "deruny-po-guculsky.jpg",
    },
    {
      name: "Чорні вареники",
      portion: "(250г)",
      price: "₴274",
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
