import React, { Component } from 'react';
import './Categories.css'

class Categories extends Component{
    
    
    render()
    {

        const categories = this.props.categories.map((category)=>
        {
            const id = category.id;
            return(<div key={id} className="col-12 col-md-6">
                <div className="category" onClick={()=>
                {
                    this.props.toggleView('categoriesDisplay','eventsDisplay',id);
                }}>
                    <h1> {category.name} </h1>
                </div>
            </div>);
        });
        return(
            <div className="categoriesSection">
       
                <div className="title">FIND A RACE</div>
                <div className="divider" />
                <div className="categoriesInnerSection">
                    <div className="row">
                        {categories}
                    </div>
                </div>
            </div>
  
        );
    }
}

export default Categories;