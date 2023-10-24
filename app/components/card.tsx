import styles from '../styles/card.module.scss';
const Card = ({ name, age, job }: { name: string, age: number, job: string }) => {
    return (
        <section className={styles.card}>
            <p>{name}</p>
            <p>{age}</p>
            <p>{job}</p>
        </section>
    )
}

export default Card;