import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import ProgressBar from '../../components/ProgressBar/ProgressBar'
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

		const questionIndex = Math.floor(Math.random() * availableQuestions.length);
		setcurrentQuestion(availableQuestions[questionIndex]);
		question.innerText = currentQuestion.question;

		// choices.forEach(choice => {
		// 	const number = choice.dataset['choicenumber'];
		// 	choice.innerText = currentQuestion['choice' + number];
		// });

		//update progress bar


		//Remove just rendered question from the question array
		setAvailableQuestions(prev => prev.splice(questionIndex, 1))

		//Start the count down
		setCountDown(true);
	}


	// start game if their are available questions or if we haven't exceeded the maximum number of questions
	if ((availableQuestions && availableQuestions.length > 0) || questionCounter <= MAX_QUESTIONS) {
		return (
			<section>
				<h2>{chosenCategory}</h2>

				<header className="header">
					<div>
						<p className="counter hud-prefix">Question {questionCounter}/{MAX_QUESTIONS} </p>
						<ProgressBar counter={questionCounter}/>
					</div>
					<div></div>
				</header>

				{	currentQuestion.answers.map((answer, id) => (
					<GameOption
						number={id + 1}
						text={answer}
						id={id}
					/>
				))}


				{showNextButton && <button className="col-sm-7 a text-capitalize font-weight-bold btn mt-3 mb-1"
					onClick={(e) => {
						e.preventDefault();
						// removing the 'correct' and 'incorrect' class from each of the options element
						[...document.getElementsByClassName('choice-container')].forEach(element => {
							element.classList.remove('correct')
							element.classList.remove('incorrect')
						});
						// getting a new question
						getNewQuestion()
					}}
				>continue</button>}
			</section>
		);
	}


};

export default Game;
