	import { useContext, useEffect, useState } from "react";
	import { useHistory } from "react-router";
	import { useHarperDB } from "use-harperdb";
	//Components
	import ProgressBar from "../../components/ProgressBar/ProgressBar";
	import GameOption from "../../components/game-option/GameOption";
	import { GameContex } from "../../contex/GameContex";
	import Countdown from "../../components/Countdown/Countdown";

	const Game = () => {
	const history = useHistory();

	//States
	const [availableQuestions, setAvailableQuestions] = useState([]);
	const [questionCounter, setQuestionCounter] = useState(0);
	const [score, setScore] = useState(0);
	const [showNextButton, setShowNextButton] = useState(false);
	const [currentQuestion, setcurrentQuestion] = useState({});
	const [countDown, setCountDown] = useState(true);
	const [timer, setTimer] = useState(0);
	const [timerID, setTimerID] = useState(null);

	const { chosenCategory, BONUS, MAX_QUESTIONS, QUESTION_TIME } =
	useContext(GameContex);

	// Querying the database
	const [questions, loading, error, refresh] = useHarperDB({
	query: { operation: "sql", sql: `select * from quizzes.${chosenCategory}` },
	});

	useEffect(() => {
	setAvailableQuestions(...questions);
	console.log(availableQuestions);
	setScore(0);
	setQuestionCounter(0);
	setTimerID(setInterval(countDownTime, 1000));
	}, [chosenCategory, questions]);

	const getNewQuestion = () => {
	//Go to end game page if all questions have been rendered
	if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
		localStorage.setItem("mostRecentScore", score);
		localStorage.setItem("maxScore", MAX_QUESTIONS * BONUS);
		return history.push("/end");
	}

	//else, first hide the next button
	setShowNextButton(false);

	//then select and render random question from questions array
	setQuestionCounter((prev) => prev++);
	const questionIndex = Math.floor(Math.random() * availableQuestions.length);
	setcurrentQuestion(availableQuestions[questionIndex]);

	//Remove just rendered question from the question array
	setAvailableQuestions((prev) => prev.splice(questionIndex, 1));

	//Start the count down
	setCountDown(true);
	};

	//Timer function
	const countDownTime = () => {
	if (countDown === true && timer <= QUESTION_TIME) {
		setTimer((prev) => prev++);
	} else {
		setTimer(0);
		getNewQuestion();
	}
	};

	//when a question choice is clicked
	const evaluateChoice = (e) => {
	if (!countDown) return;

	// pausing the countDown
	setCountDown(false);
	clearInterval(timerID);

	const selectedChoice = e.target;
	const correctAnswer = document.querySelector(
		`p[data-choicenumber = "${currentQuestion.correct}"]`
	);

	//Check if selected answer is wrong or right and apply corresponding class style
	if (selectedChoice.dataset["choicenumber"] === currentQuestion.correct) {
		selectedChoice.classList.add("correct");
		setScore(BONUS);
	} else {
		selectedChoice.classList.add("incorrect");
		setTimeout(() => {
		correctAnswer.classList.add("correct");
		}, 1200);
	}

	//show next question button
	setTimeout(() => {
		setShowNextButton(true);
	}, 2000);
	};

	if (loading) {
	return <h2>Loading...</h2>;
	}

	// start game if their are available questions or if we haven't exceeded the maximum number of questions
	if (
	(availableQuestions && availableQuestions.length > 0)
	) {
	return (
		<div className="container">
		<section>
			<h2>{chosenCategory}</h2>

			<header className="header">
			<div className="d-flex align-items-center justify-content-between flex-column">
				<p className="counter text-center h2">
				Question {questionCounter}/{MAX_QUESTIONS}{" "}
				</p>
				<ProgressBar counter={questionCounter} />
			</div>

			<div className="d-flex align-items-center justify-content-between  flex-column">
				<p className="text-center h2">Score</p>
				<h2 className="score display-3 font-weight-bold">{score}</h2>
			</div>
			</header>

			{
			// using the Object.entries method to loop over our answers object
			Object.entries(currentQuestion.answers).map((answer, id) => (
				<GameOption
				key={"choice" + id}
				option={answer[0]}
				text={answer[1]}
				id={id}
				callback={evaluateChoice}
				/>
			))
			}

			<Countdown counter={timer} />

			{showNextButton && (
			<button
				className="col-sm-7 a text-capitalize font-weight-bold btn mt-3 mb-1"
				onClick={(e) => {
				e.preventDefault();
				// removing the 'correct' and 'incorrect' class from each of the options element
				[
					...document.getElementsByClassName("choice-container"),
				].forEach((element) => {
					element.classList.remove("correct");
					element.classList.remove("incorrect");
				});
				// getting a new question
				getNewQuestion();
				}}
			>
				continue
			</button>
			)}
		</section>
		</div>
	);
	} else {
	return <div>{error}</div>;
	}
	};

	export default Game;
