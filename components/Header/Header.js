import Image from "next/image";
import pjecLogo from "@/public/tp_logo.svg";
export default function Header() {
  return (
    <>
      <div className="header">
        <Image
          src={pjecLogo}
          alt="Логотип кав'ярні-музею Теплий п'єц"
         
        ></Image>
        <div className="headerText">
          <h1 >Кав&apos;ярня-музей </h1>
          <h3 >Теплий п&apos;єц</h3>
          <p>&apos;&apos;Теплий п&apos;єц&apos;&apos; - частина старовинного Львова, затишок дому і осередок тепла</p>
        </div>
      </div>
    </>
  );
}
