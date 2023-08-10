import Card from "./card";
import data from "@/data/versionsData";
import styles from '@/styles/CardList.module.css'

let values = [...data];
const descendingVersions = values.reverse(); 

export default function CardList() {
	return (
		<div className={styles.cardListWrapper}>
			{descendingVersions.map((item, index) => (
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
						id={item.id}
					/>
				</div>
			))}
		</div>
	);
}