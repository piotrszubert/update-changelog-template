import styles from '@/styles/Card.module.css'

export default function Card() {
    return (
        <div className={styles.card}>
            <p className={styles.cardTitle}>
                Version 1.0.0
            </p>
            <div className={styles.cardBody}>
                <h2>New Features:</h2>
                <ul>
                    <li>Introducing a powerful search functionality: We&apos;ve added an advanced search feature that allows users to easily find specific items within the app. Now you can quickly locate files, contacts, and messages with just a few keystrokes.</li>
                    <li>Enhanced collaboration tools: Collaborate seamlessly with your team through real-time document editing and commenting. Experience a new level of productivity with improved version control and simultaneous editing capabilities.</li>
                    <li>Dark mode option: We&apos;ve heard your requests, and now you can enjoy a sleek and easy-on-the-eyes dark mode. Save battery life and work comfortably in low-light environments.</li>
                </ul>
                <h2>Improvements:</h2>
                <ul>
                    <li>Revamped user interface: Our UI has undergone a complete makeover to enhance user experience. Enjoy a cleaner, more intuitive design that boosts productivity and reduces clutter.</li>
                    <li>Performance optimization: We&apos;ve fine-tuned the app to run faster and smoother, minimizing lags and improving overall responsiveness.</li>
                    <li>Improved security measures: Your data security is our top priority. We&apos;ve implemented stronger encryption and multi-factor authentication to keep your information safe and secure.</li>
                </ul>
                <h2>Bug Fixes:</h2>
                <ul>
                    <li>Addressed issue with file synchronization: Users reported occasional sync errors with cloud storage. We&apos;ve fixed this problem, and file synchronization now works flawlessly.</li>
                    <li>Resolved crashing on startup: Some devices experienced crashes upon launching the app. This issue has been resolved, ensuring a stable and reliable user experience.</li>
                    <li>Fixed data loss when offline: In rare cases, data saved offline was not properly synchronized upon reconnection. Rest assured, your data is now synced accurately, even if you were offline.</li>
                </ul>
                <h2>Other Updates:</h2>
                <ul>
                    <li>Improved localization: The app is now available in several new languages, making it more accessible to a global audience.</li>
                    <li>Streamlined onboarding process: New users will find it easier to set up their accounts and start using the app thanks to an improved onboarding flow.</li>
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