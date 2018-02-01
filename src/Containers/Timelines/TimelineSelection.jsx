import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import { getTimeline } from '../../actions/timelineActions';
import BuildOptions from './selectBuilder'; 
import './timelinesCSS.css'; 

let ThemeSelection = ( props ) => {

    const userTimelines =  props.user.timelines.length > 0 ?  props.user.timelines: [];

    const selectedTimeline = ( values ) => {
        props.getSelectedTimeline( values.selectTimeline ); 
    }

    return(
        <div className="timelineSelector" >
            <h1>Themes available</h1>

           <BuildOptions 
             className={ "timelineOptions" }  
             optionsArray={ userTimelines } 
             onSubmit={ selectedTimeline } /> 

          

        </div>
    )
};

const mapStateToProps = ( state ) => ( {
    user: state.user,
    timeline: state.timeline
} );


export default connect( mapStateToProps, { getTimeline } )( ThemeSelection ); 

