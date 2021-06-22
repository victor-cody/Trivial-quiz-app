import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import GameOption from '../../components/game-option/GameOption';
import { GameContex } from '../../contex/GameContex';


const Game = () => {

	const history = useHistory();

	//States
	const [availableQuestions, setAvailableQuestions] = useState([]);
	const [questionCounter, setQuestionCounter] = useState(0)
	const [showNextButton, setShowNextButton] = useState(false)
	const [currentQuestion, setcurrentQuestion] = useState({})
	const [countDown, setCountDown] = useState(true)

	const question = {
		"question": "Which of the statements is the correct way to create a variable called rate and assign it a value of 100?",
		"answers": {
			"choice1": "let rate = 100;",
			"choice2": "let 100 = rate;",
			"choice3": "100 = let rate;",
			"choice4": "rate = 100;"
		},
		"correct": 0
	};

	const { questions, chosenCategory, setQuestions, BONUS, MAX_QUESTIONS } = useContext(GameContex)

	setTimeout(() => {
		setQuestions(question)
	}, 3000);

	const getNewQuestion = () => {
		//Go to end game page if all questions have been rendered
		if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
			localStorage.setItem('mostRecentScore', score);
			localStorage.setItem('maxScore', MAX_QUESTIONS * BONUS);
			return history.push("/end");
		}

		//else, first hide the next button
		setShowNextButton(false)

		//then select and render random question from question array
		setQuestionCounter(prev => prev++);
		// questionCounterText.innerHTML = `Question ${questionCounter}/${MAX_QUESTIONS}`
		const questionIndex = Math.floor(Math.random() * availableQuestions.length);
		setcurrentQuestion(availableQuestions[questionIndex]);
		question.innerText = currentQuestion.question;

		// choices.forEach(choice => {
		// 	const number = choice.dataset['choicenumber'];
		// 	choice.innerText = currentQuestion['choice' + number];
		// });

		//update progress bar
		progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

		//Remove just rendered question from the question array
		setAvailableQuestions(prev => prev.splice(questionIndex, 1))

		//Start the count down
		setCountDown(true);
	}



	if (questions && questions.length > 0) {
		return (
			<div>
				<h2>{chosenCategory}</h2>

				{questions.map((question, id) => (

					question.answer.map((answer, id) => (
						<GameOption
							number={id + 1}
							text={answer}
							id={id}
						/>
					))
				))}
			</div>
		);
	}


};

export default Game;
