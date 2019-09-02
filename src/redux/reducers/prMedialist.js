// export const defaultState = {
// 	data: {},
// };

// export function prMediaList(state = defaultState, action) {
// 	console.log('d=============>', action);
// 	switch (action.type) {
// 		case 'GET_PR_MEDIALISTS': {
// 			return { ...state, code: 'uninitiated' };
// 		}
// 		case 'GET_PR_MEDIALISTS_STARTED': {
// 			return { ...state };
// 		}
// 		case 'GET_PR_MEDIALISTS_SUCCESS': {
// 			return { ...state, ...action.payload };
// 		}
// 		case 'GET_PR_MEDIALISTS_FAILED': {
// 			return {
// 				...state,
// 				...action.payload,
// 			};
// 		}
// 		default: {
// 			return state;
// 		}
// 	}
// }
