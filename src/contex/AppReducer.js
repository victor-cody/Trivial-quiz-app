export default function AppReducer (state, action) {
	switch (action.type) {
		case 'SET_QUESTIONS':
			return {
				...state,
				questions: [action.questions]
			}
		
		case 'SET_CATEGORY':
			return {
				...state,
				chosenCategory: action.category
			}
	
		default:
			return state
	}
}
