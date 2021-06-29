	import ScrollAnimation from "react-animate-on-scroll";
	import PageSection from "../../components/PageSection/PageSection";

	export default function HomePage() {
	return (
		<>
		<main className="container">
			<PageSection
			classes={`intro row align-items-center justify-content-between`}
			>
			<ScrollAnimation animateIn="fadeInLeft">
				<h2 className="font-weight-light text-small">
				300+ CHEETSHEETS. SORTING. OPEN SOURCE. CATEGORIES.
				</h2>
				<h3 className="font-weight-bold display-2 text-danger">
				{" "}
				World biggest storehouse of developer cheetsheets
				</h3>
				<p className="">
				Code House is the all in one storehouse for developer cheatsheets.
				Code House is made up of 300+ curated cheatsheets from 230+
				sources. Filter by categories, or source, sort by time or
				popularity, dark mode, bookmark cheatsheets, add new cheatsheets,
				request feature, and much more features, make the app amazing! 🤟
				</p>
			</ScrollAnimation>
			<ScrollAnimation>
				<img src="" alt="" className="" />
			</ScrollAnimation>
			</PageSection>

			<PageSection classes={`about`}>
				<ScrollAnimation animateIn="bounceInUp">
					<h2 className="display-2 font-weight-bold">About Trivia Quizzes</h2>
				</ScrollAnimation>

				<div className="rounded w-100 px-3py-2 bg-light">

				</div>
			</PageSection>
		</main>
		</>
	);
	}
