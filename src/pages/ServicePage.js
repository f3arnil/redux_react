import React, { Component } from 'react'
import Navigation from '../components/Navigation'
    
import AddService from '../containers/AddService'
import VisibleTodoList from '../containers/VisibleServiceList'

import { addTodo } from '../actions'


class ServicePage extends Component {
    constructor() {
 		super()

 		this.state = {}
 	}

 	render() {
 		const { children } = this.props

 		return ( <div>
 				<Navigation />
 				<div className="container">
 					<div className="row">
 						<div className="col-lg-12">
 							<h1 className="page-header">Services</h1>
 							<ol className="breadcrumb">
 								<li><a href="index.html">Home</a></li>
 								<li className="active">Services</li>
 							</ol>
 						</div>
 					</div>
					

 			        <div className="row">
 			            <div className="col-lg-12">
 			                <h3>Add Panel</h3>
 			                <AddService />
 			            </div>
 					</div>
                    <br/>
 					<div className="row">
                        <div className="col-lg-12">
                            <VisibleTodoList />
                        </div>
 					</div>
 				</div>
 			</div>
 		)
 	}
 }

export default ServicePage
