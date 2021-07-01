import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useHarperDB } from "use-harperdb";
//Components
import Loader from '../../components/Loader/Loader';
import ProfileImage from '../../components/user-profile-image/ProfileImage';
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import GameOption from "../../components/game-option/GameOption";
import { GameContex } from "../../contex/GameContex";
import Countdown from "../../components/Countdown/Countdown";
//Hook
// import useAxios from '../../components/Hook';

const Game = () => {
	const history = useHistory();

	//States
	// const [availableQuestions, setAvailableQuestions] = useState(null);
	const [questionCounter, setQuestionCounter] = useState(0);
	const [score, setScore] = useState(0);
	const [showNextButton, setShowNextButton] = useState(false);
	const [currentQuestion, setcurrentQuestion] = useState({});
	const [countDown, setCountDown] = useState(true);
	const [timer, setTimer] = useState(0);
	const [timerID, setTimerID] = useState(null);

	const { chosenCategory, BONUS, MAX_QUESTIONS, QUESTION_TIME } =
		useContext(GameContex);

	console.log(chosenCategory);
	// Querying the database
	const [data, loading, error] = useHarperDB({
		query: {
			operation: "sql",
			sql: `SELECT * FROM questions.${chosenCategory}`
		},
	});

	// let availableQuestions = [];

	console.log(data);

	function startGame() {

		// setAvailableQuestions(data);
		// availableQuestions = Array.from(data);
		console.log(data[0]);
		getNewQuestion();
		setScore(0);
		setQuestionCounter(0);
		setTimerID(setInterval(countDownTime, 1000));
	}

	function getNewQuestion() {
		//Go to end game page if all questions have been rendered
		if (data?.length === 0 && questionCounter >= MAX_QUESTIONS) {
			// localStorage.setItem("mostRecentScore", score);
			// localStorage.setItem("maxScore", MAX_QUESTIONS * BONUS);
			return history.push("/end");
		}

		//else, first hide the next button
		setShowNextButton(false);

		//then select and render random question from questions array
		setQuestionCounter((prev) => prev++);
		const questionIndex = Math.floor(Math.random() * data.length);

		console.log(`this is the index \n ${[questionIndex]}`);

		setcurrentQuestion(data[questionIndex]);

		console.log(`the current question is ${currentQuestion}`);

		console.log(`this is the question \n ${data[questionIndex]}`);

		//Remove just rendered question from the question array
		data.splice(questionIndex, 1)
		console.log(`this is the available questions \n ${[data.length]}`);
		//Start the count down
		setCountDown(true);
	}

	//Timer function
	const countDownTime = () => {
		if (countDown === true && timer <= QUESTION_TIME) {
			setTimer((prev) => prev++);
		} else {
			setTimer(0);
			// getNewQuestion();
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

	useEffect(() => {

		startGame()

		return () => {
			const abort = new AbortController();
			abort.abort();
		};
	}, [chosenCategory]);


	if (loading) {
		return (
			<Loader />
		)
	}


	if (error) {
		return (
			<>
				<div>There was an error</div>
				{console.log(error)}
			</>
		)
	}


	if (data && data.length > 0) {
		return (
			<section className='d-flex justify-content-center flex-column align-items-center'>

				< header className="header d-flex flex-column px-2 py-2 justify-content-between" >
					<div className="d-flex justify-content-between align-items-center">
						<h2 className="text-center text-capitalize h1 font-weight-light" >{chosenCategory}</h2>
						<ProfileImage />
					</div>
					<div className="row align-items-center justify-content-between">
						<div className="d-flex align-items-center justify-content-between flex-column col-md-4">
							<p className="counter text-center h2">
								Question {questionCounter}/{MAX_QUESTIONS}{" "}
							</p>
							<ProgressBar counter={questionCounter} />
						</div>



						<div className="d-flex align-items-center justify-content-between  flex-column col-md-4">
							<p className="text-center h2">Score</p>
							<h2 className="score display-3 font-weight-bold">{score}</h2>
						</div>
					</div>
				</header>

				{(currentQuestion && <p className="display-3 mb-3 mt-1 font-weight-light">
					{currentQuestion.question}
				</p>)}

				{
					// console.log(`the current question is now ${JSON.stringify(currentQuestion)}`, availableQuestions)
					(currentQuestion && Object.entries(currentQuestion?.answers).map((answer, id) => (
						<GameOption
							key={"choice" + id}
							option={answer[0]}
							text={answer[1]}
							id={id}
							callback={evaluateChoice}
						/>

					)))
				}

				<Countdown counter={timer} />

				{showNextButton && (
					<button
						className="col-sm-7 a shine text-capitalize font-weight-bold btn mt-3 mb-1"
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
		)
	}
	else {
		return (
			<span>Something is comming</span>
		)
	}


};

export default Game;
