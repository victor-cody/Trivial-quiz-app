import GithubStars from "../github-star-count/GithubStars";

const Footer = () => (
	<footer className="bg-light p-3 text-center">
		<div className="logo" />
		<p>
			Made with love by <a href="https://auth0.com">Victor Ikechukwu</a>
		</p>
		<GithubStars/>
	</footer>
);

export default Footer;
