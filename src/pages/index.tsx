import type { NextPage } from "next";
import Head from "next/head";
import { ImgContainer } from "../components/ImgContainer";
import { Login } from "../components/Login";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImgContainer />
      <Login />
    </div>
  );
};

export default Home;
