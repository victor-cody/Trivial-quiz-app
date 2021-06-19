import {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const dataStore = {
	chosenCategory:null,
	questions: [],
};

//Contex
export const GameContex = createContext(dataStore);

//Provider Component
export const GameProvider = ({children}) => {

	//Reducer
	const [state, dispatch] = useReducer(AppReducer, dataStore)

	const setQuestions = (questions, type='SET_QUESTIONS') => {
		dispatch(type, questions)
	}

	const setCategory = (category, type = 'SET_CATEGORY') => {
		dispatch(type, category)
	}

	return (
		<GameContex.Provider value={{
			chosenCategory: state.chosenCategory,
			questions: state.questions,
			//ACTIONS
			setQuestions,
			setCategory
		}}>
			{children}
		</GameContex.Provider>
	)
}
