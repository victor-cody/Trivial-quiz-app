import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useHarperDB } from "use-harperdb";
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import GameOption from '../../components/game-option/GameOption';
import { GameContex } from '../../contex/GameContex';


const Game = () => {

const history = useHistory();

//States
const [availableQuestions, setAvailableQuestions] = useState([]);
const [questionCounter, setQuestionCounter] = useState(0)
const [score, setScore] = useState(0)
const [showNextButton, setShowNextButton] = useState(false)
const [currentQuestion, setcurrentQuestion] = useState({})
const [countDown, setCountDown] = useState(true)

const { chosenCategory, BONUS, MAX_QUESTIONS } = useContext(GameContex)

// Querying the database
const [questions, loading, error, refresh] = useHarperDB({
	query: { operation: 'sql', sql: `select * from quizzes.${chosenCategory}` },
});

useEffect(() => {
	setAvailableQuestions(...questions)
	setScore(0)
	setQuestionCounter(0)
	return () => {

	}
}, [chosenCategory, questions])


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

	//Remove just rendered question from the question array
	setAvailableQuestions(prev => prev.splice(questionIndex, 1))

	//Start the count down
	setCountDown(true);
}

if (loading) {
	return (
		<h2>Loading</h2>
	)
}
// start game if their are available questions or if we haven't exceeded the maximum number of questions
if ((availableQuestions && availableQuestions.length > 0) || questionCounter <= MAX_QUESTIONS) {
	return (
		<section>
			<h2>{chosenCategory}</h2>

			<header className="header">

				<div className='d-flex align-items-center justify-content-between flex-column' >

					<p className="counter text-center h2">Question {questionCounter}/{MAX_QUESTIONS} </p>
					<ProgressBar counter={questionCounter} />
				</div>

				<div className='d-flex align-items-center justify-content-between  flex-column' >
					<p className="text-center h2">Score</p>
					<h2 className="score display-3 font-weight-bold">{score}</h2>
				</div>

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
else {
	return (
		<div>
			{error}
		</div>
	)
}


};

export default Game;
