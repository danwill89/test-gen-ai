import styles from '../styles/card.module.scss';
const Card = ({ name, age }: { name: string, age: number }) => {
    return (
        <section className={styles.card}>
            <p>{name}</p>
            <p>{age}</p>
        </section>
    )
}

export default Card;