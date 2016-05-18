import React from 'react'

const Service = ({ id, text, onServiceDeleteClick }) => (
    <div className="col-md-3 col-sm-6">
        <div className="panel panel-default text-center service">
            <div className="panel-heading">
                <span className="fa-stack fa-5x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-car fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div className="panel-body">
                <h4>{ text }</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button className="btn btn-primary">Learn More</button>
                    <button 
                        className="btn btn-danger"
                        onClick={() => {
                            onServiceDeleteClick(id)
                        }}>Delete</button>
            </div>
        </div>
    </div>
)

export default Service
