import styles from '@/styles/Card.module.css'

interface Feature {
    short: string;
    long: string;
}
  
interface CardProps {
    title?: string;
    releaseDate?: string;
    newFeatures?: Feature[];
    improvements?: Feature[];
    bugFixes?: Feature[];
    otherUpdates?: Feature[];
    bgColor?: string; 
}

export default function Card({title, releaseDate, newFeatures, improvements, bugFixes, otherUpdates, bgColor}: CardProps) {
    const cardBackground = {
        background: bgColor, // Set background color using bgColor prop
    };
    
    return (
        <div className={styles.card} style={cardBackground}>
            <p className={styles.cardTitle}>
                {title}
                <br />
                <span className={styles.cardReleaseDate}>
                    {releaseDate}
                </span>
            </p>
            <div className={styles.cardBody}>
                <h2>New Features:</h2>
                <ul>
                    {newFeatures?.map((feature, index) => (
                        <li key={index}>{feature.short}</li>
                    ))}
                </ul>
                <h2>Improvements:</h2>
                <ul>
                    {improvements?.map((feature, index) => (
                        <li key={index}>{feature.short}</li>
                    ))}
                </ul>
                <h2>Bug Fixes:</h2>
                <ul>
                    {bugFixes?.map((feature, index) => (
                        <li key={index}>{feature.short}</li>
                    ))}
                </ul>
                <h2>Other Updates:</h2>
                <ul>
                    {otherUpdates?.map((feature, index) => (
                        <li key={index}>{feature.short}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.cardFooter}>
                <a href="#">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </a>
            </div>
        </div>
    );
}