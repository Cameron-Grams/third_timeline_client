import * as actionTypes from '../Actions/actionTypes'; 

const initialState = {
    id: null,
    title: null,
    data: [],
    currentEntry: {},
}

const TimelineReducer = ( state = initialState, action ) => {

    switch ( action.type ){
        case actionTypes.getSelectedTimelineSuccess:{  
            return{
                ...state,
                id: action.response.id, 
                title: action.response.title, 
                data: action.response.entries,
                currentEntry: action.response.entries[ 0 ]
            }
        }
        
        case actionTypes.newTimelineCreated:{
            return{
                ...state,
            }
        }

        case actionTypes.loadCurrentEntry:{
            return{
                ...state,
                title: action.title,
                what: action.what
            }
        }
 
        case actionTypes.synchCurrentEntry:{
            return{
                ...state,
                currentEntry: action.newEntry
            }
        }

        default:{
            return{
                ...state
            }
        }
    }

}

export default TimelineReducer; 