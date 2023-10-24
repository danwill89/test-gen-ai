import styles from '../styles/card.module.scss';

interface CardProps {
    name: string;
    age: number;
    job: string;
}

const Card = ({ name, age, job }: CardProps) => {
    return (
        <section className={styles.card}>
            <p>{name}</p>
            <p>{age}</p>
            <p>{job}</p>
        </section>
    )
}

export default Card;