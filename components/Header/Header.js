import Image from "next/image";
import pjecLogo from "@/public/tp_logo.svg";
export default function Header() {
  return (
    <>
      <div className="flex justify-around items-center">
        <Image
          src={pjecLogo}
          alt="Логотип кав'ярні-музею Теплий п'єц"
          width={100}
        ></Image>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-xl font-semibold">Кав&apos;ярня-музей </h1>
          <h2 className="text-xl font-semibold">&apos;&apos;Теплий п&apos;єц&apos;&apos;</h2>
          <p>&apos;&apos;Теплий п&apos;єц&apos;&apos; - частина старовинного Львова, затишок дому і осередок тепла</p>
        </div>
      </div>
    </>
  );
}
