import {useContext} from 'react';
import GameOption from '../../components/game-option/GameOption';
import { GameContex } from '../../contex/GameContex';


const Game = () => {
	
	const question = {
		"question": "Which of the statements is the correct way to create a variable called rate and assign it a value of 100?",
		"answer": {
			"choice1": "let rate = 100;",
			"choice2": "let 100 = rate;",
			"choice3": "100 = let rate;",
			"choice4": "rate = 100;"
		},
		"correct": 0
	};

	const { questions, chosenCategory, setQuestions} = useContext(GameContex)

	setTimeout(() => {
		setQuestions(question)
	}, 3000);


	if (questions && questions.length > 0) {
		return (
			<div>
				<h2>{chosenCategory}</h2>

				{questions.map((question,id) => (
					
					question.answer.map((answer,id) => (
						<GameOption
							number={id + 1}
							text={answer}
							id = {id}
						/>
					))
				))}
			</div>
		);
	}

	
};

export default Game;
