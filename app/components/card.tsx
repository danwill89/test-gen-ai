import { title } from 'process';
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
    title: string;
}

const API_KEY = "ab4b4brjhbfsufd7ba87as7by7bsdf";

const Card = ({ name, age, job, title }: CardProps) => {
    return (
        <section className={styles.card}>
            <p>{name}</p>
            <p>{age}</p>
            <p>{job}</p>
            <p>{title}</p>
        </section>
    )
}

export default Card;