import styles from "../styles/cadastro.module.scss";
import Head from "next/head";
import { useState } from "react";
import { LoopCircleLoading } from "react-loadingg";
import { delay } from "../util/delay";

export default function Home() {
  const [idEmpresa, setIdEmpresa] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [nis, setNis] = useState("");
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handlerSubmit() {
    setLoading(true);
    const valorError = new Array();
    if (!idEmpresa) {
      valorError.push({
        input: "ID Empresa",
        message: "ID Empresa é obrigatorio",
      });
    }
    if (!nome) {
      valorError.push({
        input: "Nome",
        message: "Nome é obrigatorio",
      });
    } else if (nome.length < 2 || nome.length > 30) {
      valorError.push({
        input: "Nome",
        message: "Nome é invalido",
      });
    }
    if (!sobrenome) {
      valorError.push({
        input: "Sobrenome",
        message: "Sobrenome é obrigatorio",
      });
    } else if (sobrenome.length < 2 || sobrenome.length > 50) {
      valorError.push({
        input: "Sobrenome",
        message: "Sobrenome é invalido",
      });
    }
    if (!email) {
      valorError.push({
        input: "Email",
        message: "Email é obrigatorio",
      });
    } else {
      var reg = /\S+@\S+\.\S+/;
      if (!reg.test(email)) {
        valorError.push({
          input: "Email",
          message: "Email é invalido",
        });
      }
    }
    if (!nis) {
      valorError.push({
        input: "NIS",
        message: "Número NIS (PIS) é obrigatorio",
      });
    } else {
      var reg = /^[0-9]*$/;
      if (!reg.test(nis)) {
        valorError.push({
          input: "NIS",
          message: "Número NIS (PIS) é invalido",
        });
      }
    }

    delay(setLoading);
    setError(valorError);
  }
  if (loading) {
    return <LoopCircleLoading color={"#f96629"} />;
  }

  return (
    <>
      <Head>
        <title>NEW</title>
      </Head>
      <section className={styles.container}>
        <div className={styles.form}>
          <h2>Cadastro</h2>
          <input
            placeholder={"ID Empresa"}
            value={idEmpresa}
            type={"text"}
            onChange={(e) => setIdEmpresa(e.target.value)}
          />
          <input
            placeholder={"Nome"}
            type={"text"}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            placeholder={"Sobrenome"}
            type={"text"}
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
          <input
            placeholder={"Email"}
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder={"Número NIS (PIS)"}
            type={"number"}
            value={nis}
            onChange={(e) => setNis(e.target.value)}
          />
          <a onClick={handlerSubmit} className={styles.button}>
            salvar
          </a>
        </div>
      </section>
    </>
  );
}
