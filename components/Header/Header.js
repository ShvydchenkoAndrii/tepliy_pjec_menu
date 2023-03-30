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
          <h1 className="text-xl font-semibold">Кав'ярня-музей "Теплий п&apos;єц"</h1>
          <p>"Теплий п'єц" - частина старовинного Львова, затишок дому і осередок тепла</p>
        </div>
      </div>
    </>
  );
}
