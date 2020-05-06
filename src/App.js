import React, { Component } from 'react';
import Categories from './components/Categories';
import EventsDisplay from './components/EventsDisplay';
import OrganiserPage from './components/OrganiserPage';
import {categoriesList} from './dataStore';





class App extends Component{
  constructor(props)
  {
    super(props);

    this.state = {
      routes: {
        categoriesDisplay : true,
        eventsDisplay: false,
      },
      categories: categoriesList
    }    
  }


  toggleView = (prevView, nextView, id) =>
  {
 
    this.catid = id;
    
    this.setState({routes: {
      [prevView]: false,
      [nextView]: true
    }});
    
  }


addEvent = (event)=>
{
    let id = "e";
    let index = categoriesList.findIndex(category=>category.id == event.catid);
    let events_size = categoriesList[index].events.length +1;
    id += events_size;
    categoriesList[index].events.push({
        id: id,
        org_id: event.org_id,
        name: event.ename,
        date: event.edate,
        price: event.eprice
    });
    
    this.setState({categories: categoriesList});
}
  render()
  {
    const routes = this.state.routes; 
    return (
      <>
        {routes.categoriesDisplay ? <Categories categories={this.state.categories} toggleView={this.toggleView.bind(this)} /> : ''}  
        {routes.eventsDisplay ?  <EventsDisplay category={this.state.categories.find((category)=>category.id == this.catid)} toggleView={this.toggleView.bind(this)}  /> : ''}  
        <OrganiserPage addEvent={this.addEvent.bind(this)} />
        {/*
        <Categories categories={this.state.categories} toggleView={this.toggleView.bind(this)} /> 
        <EventsDisplay category={this.state.categories.find((category)=>category.id == this.catid)} /> 
        */}
      </>
    );  
  }
  
}

export default App;
