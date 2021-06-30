import {useState} from 'react';
import './styles.scss';

const BackToTopButton = () => {
	const [height] = useState(document.documentElement.scrollTop || document.body.scrollTop)
	const [isVisible, setIsVisible] = useState(false);

	const Scroll = () => {
		if (height > 500) setIsVisible(true);
		else setIsVisible(false);
	}

	const scrollToTop = (e) => {
		e.preventDefault()
		//if the height of the viewport is greater than 0 then we'll scroll to the top of the page
		if (height > 0) {
			window.scrollTo(0, height - height / 15);
			//Animating the scroll with the javascript requestAnimationFrame function
			window.requestAnimationFrame(scrollToTop);
		}
	}

	window.addEventListener('scroll', () => Scroll());
	Scroll();

	return (
		<button className='a rounded shine back-to-top' 
		style={{
			display: 'block' ? isVisible : 'none'
		}}
		onClick = {scrollToTop} 
		>
			<i className='bi-arrow-up'	/>
		</button>
	)

}

export default BackToTopButton;
