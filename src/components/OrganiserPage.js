import React, { Component } from 'react';
import './OrganiserPage.css';

class OrganiserPage extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            event_data: {
                ename: '',
                edate: '',
                eprice: '',
                catid: 'c1',
                org_id: 'o6'
            }
        }
        this.handleChange.bind(this);
    }

    handleChange = (event)=>
    {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    //    console.log(`name = ${name} | value = ${value} | state = ${this.state.event_data[name]}` );
        this.setState(prevState =>({
            event_data: {
                ...prevState.event_data,
                [name]: value
            }  
        }));
        
    }
    createEvent=(e)=>
    {   
        
        //alert('Event Created');
        
        e.preventDefault();
        this.props.addEvent(this.state.event_data);
       // alert(`Event Created  
         //       Name: ${this.state.event_data.ename}  | Date:  ${this.state.event_data.edate} | Price:  ${this.state.event_data.eprice}`)
    }
    render()
    {
        return(
            <div className="section">

                <form className="createEventForm" onSubmit={this.createEvent}> 
                    <h1> Event Detail</h1>
                    
                    <input type="text" name="ename" id="ename"  onChange={this.handleChange} required placeholder="Name"></input>
                    
                    <input type="text" name="edate" id="edate"  onChange={this.handleChange} required placeholder="Date"></input>
                    
                    <input type="text" name="eprice" id="eprice"  onChange={this.handleChange} required placeholder="Price in Rs"></input>
                    
                    <select name='catid' value={this.state.event_data.catid} onChange={this.handleChange}>
                        <option value="c1">Virtual Runs</option>
                        <option value="c2">10K Runs</option>
                    </select>
                    <button type="submit"> Create Event </button>
                </form>
            </div>
        );
    }
}

export default OrganiserPage;