import React from 'react';
import './_option-styles.scss';

const GameOption = ({ number, text, id, answer }) => {

	//when a question choice is clicked
	function checkChoice (e, param) {
		const selectedChoice = e.target;
		const correctAnswer = document.querySelector(`p[data-choicenumber= "${answer}}"]`) ?? null;
		//Check if selected answer is wrong or right and apply corresponding class style
		if (selectedAnswer == currentQuestion.answer) {
			selectedChoice.classList.add('correct');
			incrementScore(BONUS);

		} else {
			selectedChoice.classList.add('incorrect');
			setTimeout(() => {
				correctAnswer.classList.add('correct');
			}, 1500);

		}
	}
	return (
			
			<div class="choice row align-items-center border-white mb-3 rounded-sm bg-light">
				<p class="choice__option col-md-3 px-3 py-3">{number}</p>
				<p class="choice__text col-md-9 px-3 py-3" data-choiceNumber={id}>{text}</p>
			</div>

	);
};

export default GameOption;
