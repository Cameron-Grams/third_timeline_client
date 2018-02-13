import * as actionTypes from '../Actions/actionTypes'; 

const initialState = {
    userId: null,
    name: null,
    timelines: []
}

const UserReducer = ( state = initialState, action ) => {
    switch ( action.type ){
        case actionTypes.autenticationSuccess:{
            return{
                ...state,
                userId: action.response.id,
                name: action.response.name,
                timelines: action.response.analysis
            }
        }

        case actionTypes.returnUserBasicInfo:{
            return{ 
                ...state,
                userId: action.response.id,
                name: action.response.name,
                timelines: action.response.analysis
            }
        }

        case actionTypes.registerUserSuccess:{
            return{
                ...state,
            }
        }

        case actionTypes.logoutUserSession:{
            return {...state,
            userId: initialState.userId,
            name: initialState.name,
            timelines: initialState.timelines
            }
        }

        case actionTypes.newTimelineCreated:{
            const serverResponse = action.response; 
            const newTimelines = state.timelines; 
            const updateTimelines = ( serverResponse ) => {
                newTimelines.push( serverResponse ); 
                return newTimelines; 
            } 
            const newTimelinesForUser = updateTimelines( serverResponse ); 

            return{
                ...state,
                timelines: newTimelinesForUser
            }
        }

        
        default:{
            return{
                ...state
            }
        }
    }
}

export default UserReducer; 