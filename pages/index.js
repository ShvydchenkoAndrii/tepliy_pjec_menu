import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header/Header";
import Head from "next/head";

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
