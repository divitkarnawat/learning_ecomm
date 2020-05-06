import React, { Component } from 'react';
import './EventsDisplay.css';
class EventsDisplay extends Component{
    render()
    {
        const category = this.props.category;
        const eventsList = category.events.map((event)=>
        {
            return(
                <div className="event row">
                    <div className="col-12 col-md-5 excerpt">
                        <h4>{event.name}</h4>
                        <h6>{event.date}</h6>
                        <h6>{`Rs ${event.price}`}</h6>
                    </div>
                    <div className="col-12 col-offset-0 col-md-3 offset-4">
                        <button> view event</button>
                    </div>

                </div>
            );
        })
        return(
            <div className="section">
                <h2 className="title"> {category.name}</h2  >   
                {eventsList}
                <button onClick={()=>this.props.toggleView('eventsDisplay','categoriesDisplay','')}>Home</button>
            </div>
        );
    }
}

export default EventsDisplay;