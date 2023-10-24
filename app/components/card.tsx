import styles from '../styles/card.module.scss';

export enum Job {
    SOFTWARE_ENGINEER = 'Software Engineer',
    DATA_SCIENTIST = 'Data Scientist',
    PRODUCT_MANAGER = 'Product Manager',
}
interface CardProps {
    name: string;
    age: number;
    job: Job;
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