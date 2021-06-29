import ScrollAnimation from 'react-animate-on-scroll';
import PageSection from "../../components/PageSection/PageSecrtion";

export default function HomePage() {
  return (
    <>
      <main className="container">
		  <PageSection classes={`intro`} >
				<ScrollAnimation animateIn='fadeInLeft'>
					

				</ScrollAnimation>
		  </PageSection>
	  </main>
    </>
  );
}
