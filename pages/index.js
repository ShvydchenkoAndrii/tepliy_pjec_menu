import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header/Header";
import Head from "next/head";
import Tea from "@/components/Hot drinks/Tea/Tea";
import HotDrinks from "@/components/Hot drinks/HotDrinks";

export default function App() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ai" />
        <title>Теплий П&apos;єц</title>
      </Head>
      <Header />
      <Menu />
    </>
  );
}
