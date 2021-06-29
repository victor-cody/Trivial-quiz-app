import { createContext, useReducer, useState } from 'react';
import AppReducer from './AppReducer';

const dataStore = {
	chosenCategory: '',
	questions: [],
	maxScoreText: 0,
	highScores: []
};

//Contex
export const GameContex = createContext(dataStore);

//Provider Component
export const GameProvider = ({ children }) => {

	//Reducer
	const [state, dispatch] = useReducer(AppReducer, dataStore)

	//GAME CONSTANTS
	const [BONUS] = useState(10);
	const [QUESTION_TIME] = useState(20);
	const [MAX_QUESTIONS] = useState(20);

	const setQuestions = (questions, type = 'SET_QUESTIONS') => {
		dispatch({type: type, questions: questions})
	}

	const setCategory = (data) => {
		dispatch({type: 'SET_CATEGORY', category: data})
	}

	return (
		<GameContex.Provider value={{
			chosenCategory: state.chosenCategory,
			questions: state.questions,
			highScores: state.highScores,
			BONUS,
			QUESTION_TIME,
			MAX_QUESTIONS,

			//ACTIONS
			setQuestions,
			setCategory
		}}>
			{children}
		</GameContex.Provider>
	)
}
