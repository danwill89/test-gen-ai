import styles from '../styles/card.module.scss';
const Card = ({ name }: any) => {
    return (
        <section className={styles.card}>
            <p>{name}</p>
        </section>
    )
}

export default Card;