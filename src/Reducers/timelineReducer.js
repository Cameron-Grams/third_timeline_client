import * as actionTypes from '../Actions/actionTypes'; 

const initialState = {
    id: null,
    title: null,
    data: [],
    currentEntry: {},
}

const TimelineReducer = ( state = initialState, action ) => {

    switch ( action.type ){
        case actionTypes.formSubmit:
        case actionTypes.entryUpdated: // should this be handled differently on integration into state? 
        case actionTypes.getSelectedTimelineSuccess:{  
            return{
                ...state,
                id: action.response._id, 
                title: action.response.title, 
                currentEntry: action.response.entries[ 0 ],
                data: action.response.entries
            }
        }

        case actionTypes.entryDeleted:
        case actionTypes.newTimelineCreated:{

            return{
                ...state
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