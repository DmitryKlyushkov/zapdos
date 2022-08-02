import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Slider from "../components/Slider/Slider";
import ToDoList from "../components/ToDoList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zapdos</title>
        <meta name="description" content="ToDo site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <h1>ToDo List</h1>
          <Slider />
          <ToDoList />
        </>
      </Layout>
    </>
  );
};

export default Home;
