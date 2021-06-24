import React from 'react';


export default class Sidebar extends React.Component{

    render(){
        
        let categorie= Array.from(new Set(this.props.data.map(item=> item.cat)))
        let type= Array.from(new Set(this.props.data.map(item=> item.type)))
        let carac= Array.from(new Set(this.props.data.map(item=> item.carac)))
        let marque= Array.from(new Set(this.props.data.map(item=> item.marque)))
        return(
            <div className="col-md-3 col-lg-3 col-xl-3 mb-4" id="col1">
                <div className="row">
                    <div className="col-md-12"><br />
                        <h4 style={{color: '#083B57'}}>Catégorie</h4>
                        {categorie.map(item=>
                            <label key={item} className="custom-control material-checkbox">
                                <input type="checkbox" name="cat" value={item} className="material-control-input" onChange={this.props.handle}/>
                                <span className="material-control-indicator"></span>
                                <span className="material-control-description">{item}</span>
                            </label>
                        )}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <h4 style={{color: '#083B57'}}>Type</h4>
                        {type.map(item=>
                            <label key={item} className="custom-control material-checkbox">
                                <input type="checkbox" name="type" value={item} className="material-control-input" onChange={this.props.handle} />
                                <span className="material-control-indicator"></span>
                                <span className="material-control-description">{item}</span>
                            </label>
                        )}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <h4 style={{color: '#083B57'}}>Caracteristique</h4>
                        {carac.map(item=>
                            <label key={item} className="custom-control material-checkbox">
                                <input type="checkbox" name="carac" value={item} className="material-control-input" onChange={this.props.handle} />
                                <span className="material-control-indicator"></span>
                                <span className="material-control-description">{item}</span>
                            </label>
                        )}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <h4 style={{color: '#083B57'}}>Marque</h4>
                        {marque.map(item=>
                            <label key={item} className="custom-control material-checkbox">
                                <input type="checkbox" name="marque" value={item} className="material-control-input" onChange={this.props.handle} />
                                <span className="material-control-indicator"></span>
                                <span className="material-control-description">{item}</span>
                            </label>
                        )}
                    </div>
                </div>
            </div>
            
        )
    }
}