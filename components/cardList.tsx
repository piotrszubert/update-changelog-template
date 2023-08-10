import Card from "./card";
import data from "@/data/versionsData";

import styles from '@/styles/CardList.module.css'

export default function CardList() {
	return (
		<div className={styles.cardListWrapper}>
			{data.map((item, index) => (
				<div
					key={index}
				>
					<Card
						title={item.title}
						releaseDate={item.releaseDate}
						newFeatures={item.newFeatures}
						improvements={item.improvements}
						bugFixes={item.bugFixes}
						otherUpdates={item.otherUpdates}
						bgColor={item.bgColor}
					/>
				</div>
			))}
		</div>
	);
}