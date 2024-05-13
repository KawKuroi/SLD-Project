import "./SimpleCard.css";

export default function SimpleCard({url,title,children=null}) {
	return (
		<article class="SimpleCard-box">
			<header class="SimpleCard-img-box">
				<img src={url} />
			</header>
			<aside class="SimpleCard-text-box">
				<h2>{title}</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Animi, ad a. Voluptate perferendis dolorem, illo unde
					tempora, ab sed aliquam ullam quo enim libero. Rerum laborum
					maiores reiciendis id tenetur?
				</p>
                <strong>{children}</strong>
                
			</aside>
		</article>
	);
}
