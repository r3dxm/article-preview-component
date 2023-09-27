import React from "react";
import styles from "./ArticlePreview.module.css";
import Drawers from "../images/drawers.jpg";
import MichelleAvatar from "../images/avatar-michelle.jpg";
import ShareIcon from "../images/icon-share.svg";
import FacebookIcon from "../images/icon-facebook.svg";
import TwitterIcon from "../images/icon-twitter.svg";
import PinterestIcon from "../images/icon-pinterest.svg";

function ArticlePreview(props) {
	return (
		<div className={styles.container}>
			<img className={styles.cardImage} src={Drawers} alt="drawers-image" />
			<div className={styles.articleContainer}>
				<div className={styles.articleText}>
					<h1>
						Shift the overall look and feel by adding these wonderful touches to
						furniture in your home
					</h1>
					<p>
						Ever been in a room and felt like something was missing? Perhaps it
						felt slightly bare and uninviting. I've got som simple tips to help
						make any room feel complete.
					</p>
				</div>
				<div className={styles.articleAuthorContainer}>
					<div className={styles.articleAuthor}>
						<img
							className={styles.avatar}
							src={MichelleAvatar}
							alt="michelle-avatar"
						/>
						<div className={styles.authorNameContainer}>
							<p className={styles.authorName}>Michelle Appleton</p>
							<p className={styles.date}>28 Jun 2020</p>
						</div>
					</div>
					<button className={styles.shareIcon}>
						<img
							className={styles.shareIconImage}
							src={ShareIcon}
							alt="share-icon"
						/>
						<span className={styles.shareContainer}>
							<p>S H A R E</p>
							<img src={FacebookIcon} alt="facebook-icon" />
							<img src={TwitterIcon} alt="twitter-icon" />
							<img src={PinterestIcon} alt="pinterest-icon" />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default ArticlePreview;
