/* eslint-disable @next/next/no-img-element */
import styles from "../styles/home.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NEW</title>
      </Head>
      <section className={styles.container}>
        <div>
          <h1>Bem Vindo</h1>
          <h3>
            Aqui você pode cadastrar e <br /> visualizar seus funcionarios
          </h3>
        </div>

        <div>
          <img src={"/images/conceptDesign.png"} alt="background" />
        </div>
      </section>
    </>
  );
}
