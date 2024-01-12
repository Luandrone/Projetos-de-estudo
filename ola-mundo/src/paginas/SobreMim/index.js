import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/foto_sobre_mim_luan.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Luan!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Olá meu nome é Luan e esta é uma página para falar um pouco sobre mim. Com uma sólida formação técnica em Informática, graduação em Logística e aprimoramento contínuo através de cursos especializados, estou buscando minha primeira oportunidade na área de programação.

            </p>
            <p className={styles.paragrafo}>
                Meu histórico na Coca-Cola Femsa, ao longo de uma década, me proporcionou habilidades valiosas em negociação, gerenciamento de espaços de gôndola e atendimento ao cliente, inclusive em inglês, quando necessário. Estou comprometido em aplicar essa experiência, juntamente com minha paixão pela tecnologia, em uma carreira na área de programação.
            </p>
            <p className={styles.paragrafo}>
                Através de projetos no meu GitHub https://github.com/Luandrone, demonstro meu empenho e habilidades adquiridas durante meus estudos. Busco constantemente aprender e aplicar novos conhecimentos, sempre em busca de desafios que me permitam crescer profissionalmente.
            </p>
            <p className={styles.paragrafo}>
                Fora do ambiente profissional, sou um entusiasta por tecnologia e cultura geek, participando ativamente de eventos como BGS, Anime Friends, Comic Con, entre outros. Meu interesse nesse campo se deve à constante inovação e à forma como a tecnologia transforma e impacta o cotidiano das pessoas.

            </p>
            <p className={styles.paragrafo}>
                Atualmente, estou aprimorando minhas habilidades em JavaScript e React na Alura, onde também concluí formações em Front-end, HTML e CSS. Além disso, estou fazendo meu curso de Análise e Desenvolvimento de Sistemas na Impacta, buscando expandir minha expertise na área.
            </p>
        </PostModelo>
    )
}