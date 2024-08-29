import styles from "./Card.module.css";
import placeHolderImage from "./placeholder.png";

interface CardProps {
  imgSrc: string;
  imgAltText: string;
  headerText: string;
  paragraphText: string;
}

const Card = ({imgSrc, imgAltText, headerText, paragraphText}: CardProps) => {
  return (
    <div className={`${styles.card} ${styles.center}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.qrCode} src={imgSrc || placeHolderImage.src} alt={imgAltText || "image alt text"} />
      <h1>{headerText || "Header text"}</h1>
      <p>
        {paragraphText || "paragraph text"}
      </p>
    </div>
  );
}

export default Card;