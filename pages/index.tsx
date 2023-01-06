import Link from "next/link";

import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import Head from "next/head";
import MainContainer from "../components/MainContainer";

const Home: NextPage = () => {
  return (
    <MainContainer>
      <Head>
        <title>Home</title>
        <meta
          name="keywords"
          content="aranet, GO, Goiás, Anápolis, Abadiânia, Alexânia, Ouro Verde, planos, provedor, internet, fibra, internet via rádio"
        ></meta>
        <meta
          name="description"
          content="Planos de internet de Aranet Provedor"
        ></meta>
      </Head>
      <div className={styles.container}>
        <h1>Hello Wrld!</h1>
      </div>
    </MainContainer>
  );
};

export default Home;
