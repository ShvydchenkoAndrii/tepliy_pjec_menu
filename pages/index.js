import React from "react";
import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header/Header";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import PartHead from "@/components/Part Head/PartHead";
import ShowMenuPart from "@/components/Show Menu Part/ShowMenuPart";
import ShowMenuPartHotDrinks from "@/components/Show Menu Part Hot Drinks/ShowMenuPartHotDrinks";
export const AppContext = React.createContext();

function App() {
  const store = {
    ShowMenuPart,
    ShowMenuPartHotDrinks,
    PartHead,
  };
  return (
    <AppContext.Provider value={store}>
      <Head>
        {/* <link rel="shortcut icon" href="/favicon.ai" /> */}
        <title>Теплий П&apos;єц</title>
      </Head>
      <Header />
      <Menu />
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
