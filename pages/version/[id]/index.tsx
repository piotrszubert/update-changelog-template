import Head from 'next/head'
import { Nunito } from 'next/font/google'
import { useRouter } from 'next/router'
import styles from '@/styles/Version.module.css'
import data from '@/data/versionsData'

const nunito = Nunito({ subsets: ['latin'] })

export default function VersionPage() {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	}

	const version = data.find((version) => version.id === router.query.id);

	const cardBg = {
		backgroundColor: version?.bgColor
	}

	return (
		<>
			<Head>
				<title>Update - {router.query.id}</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${nunito.className} ${styles.main}`}>
				<div className={styles.ctaBack}>
					<button className={styles.backButton} onClick={handleBack}>
						Back
					</button>
				</div>
				<div className={styles.wrapper} style={cardBg}>
					<div className={styles.contentHeading}>
						<h1>
							{version?.title}
						</h1>
						<span>
							{version?.releaseDate}
						</span>
					</div>
					<div className={styles.featuresContent}>
						<h2>New Features:</h2>
						<ul>
							{version?.newFeatures?.map((feature, index) => (
								<li key={index}>{feature.long}</li>
							))}
						</ul>
						<h2>Improvements:</h2>
						<ul>
							{version?.improvements?.map((feature, index) => (
								<li key={index}>{feature.long}</li>
							))}
						</ul>
						<h2>Bug Fixes:</h2>
						<ul>
							{version?.bugFixes?.map((feature, index) => (
								<li key={index}>{feature.long}</li>
							))}
						</ul>
						<h2>Other Updates:</h2>
						<ul>
							{version?.otherUpdates?.map((feature, index) => (
								<li key={index}>{feature.long}</li>
							))}
						</ul>
					</div>
				</div>
			</main>
		</>
	)
}
