import { useState } from "react";
import "./TwitterCard.css";
export default function TwitterCard({ nombre, nick, is_following = false }) {
	const imgSrc = `https://unavatar.io/${nick}`;

    const [isFollowing,setIsFollowing] = useState(is_following)
    
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
	const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing 
    ? 'twitter-button is-following'
    : 'twitter-button'

	return (
		<article className="twitter-card-box">
			<header>
				<img src={imgSrc} alt="img/png" />
				<div>
					<strong>{nombre}</strong>
					<span>@{nick}</span>
				</div>
			</header>
			<aside>
				<button className={buttonClassName} onClick={handleClick}>
					<p>{text}</p>
				</button>
			</aside>
		</article>
	);
}
