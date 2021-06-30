	import ScrollAnimation from "react-animate-on-scroll";
	import PageSection from "../../components/PageSection/PageSection";

	export default function HomePage() {
	return (
		<>
		<header className="">
			<nav className="nav"></nav>
		</header>
		<main className="container">
			<PageSection
			classes={`intro row align-items-center justify-content-between`}
			>
			<ScrollAnimation animateIn="fadeInLeft">
				<div className="col-md-9 col-lg-6 col-xl-5">
					<h2 className="font-weight-light text-small">
					300+ CHEETSHEETS. SORTING. OPEN SOURCE. CATEGORIES.
				</h2>
				<h3 className="font-weight-bold display-3 text-danger">
				World biggest storehouse of developer cheetsheets
				</h3>
				<p className="">
				Code House is the all in one storehouse for developer cheatsheets.
				Code House is made up of 300+ curated cheatsheets from 230+
				sources. Filter by categories, or source, sort by time or
				popularity, dark mode, bookmark cheatsheets, add new cheatsheets,
				request feature, and much more features, make the app amazing! 🤟
				</p>
				</div>
			</ScrollAnimation>
			<ScrollAnimation>
				<div className="col-md-9 col-lg-6 col-xl-5">
					<img src="" alt="" className="img-fluid" />
				</div>
			</ScrollAnimation>
			</PageSection>

			<PageSection classes={`about`}>
				<ScrollAnimation animateIn="bounceInUp">
					<h2 className="display-2 font-weight-bold">About Trivia Quizzes</h2>
				</ScrollAnimation>

				<ScrollAnimation animateIn='fadeInUp'>
					<div className="rounded w-100 px-3 py-2 bg-light shine">

				</div>
				</ScrollAnimation>
			</PageSection>
			<PageSection>
					<ScrollAnimation animateIn="bounceInUp"><h2 className="display-2 font-weight-bold">Features</h2></ScrollAnimation>
			</PageSection>
		</main>
		<footer className='' >

		</footer>
		</>
	);
	}
