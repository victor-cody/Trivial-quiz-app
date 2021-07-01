import ScrollAnimation from "react-animate-on-scroll";
import PageSection from "../../components/PageSection/PageSection";
import GithubStars from '../../components/github-star-count/GithubStars';
import Footer from '../../components/Footer/Footer';

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
						<div className="d-flex">
							<Link className="col-sm-5 a text-capitalize font-weight-bold btn my-3 shine"
								to='/categories'
							>let's play! <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-lg ml-1 mt-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09zM4.157 8.5H7a.5.5 0 01.478.647L6.11 13.59l5.732-6.09H9a.5.5 0 01-.478-.647L9.89 2.41 4.157 8.5z" clip-rule="evenodd"></path></svg></Link>
							<GithubStars classes='col-sm-5' />
						</div>

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
						<GithubStars classes='col-sm-5' />
					</div>
				</ScrollAnimation>
			</PageSection>
			<PageSection>
				<ScrollAnimation animateIn="bounceInUp"><h2 className="display-2 font-weight-bold">Features</h2></ScrollAnimation>
			</PageSection>
		</main>
		<Footer />
	</>
);
}
