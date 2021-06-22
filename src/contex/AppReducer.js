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
				category: action.category
			}
	
		default:
			return state
	}
}
