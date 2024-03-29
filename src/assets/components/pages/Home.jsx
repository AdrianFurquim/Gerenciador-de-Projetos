import styles from "./Home.module.css"
import savings from "../../img/savings.svg"
import LinkButton from "../layout/Linkbutton"

export default function Home(){
    return (
        <section className={styles.home_conteiner}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto" />
            <img src={savings} alt="" />
        </section>
    )
}