import React, { Component } from 'react'

import { Modal, Button } from 'react-bootstrap/lib'

class SampleModal extends Component {
	constructor() {
		super()

		this.state = {
			show: false
		}
	}
	render() {
		return (
			<span className="static-modal">
				<button className="btn btn-lg btn-default btn-block" onClick={ () => this._showModal() }>Call to action</button>

				<Modal bsStyle='primary' title='Modal heading' show={ this.state.show }>
					<div className='modal-header'>
						<h3>Sample title</h3>
					</div>
					<div className='modal-body'>
						<p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit. 
                            Amet porro necessitatibus illo 
                            libero modi odio iusto ea facilis 
                            impedit, error autem quas, explicabo 
                            quam assumenda. Quam dignissimos vero 
                            blanditiis cumque.
                        </p>
					</div>
                    <div className='modal-footer'>
						<Button onClick={ () => this._hideModal() }>Close</Button>
					</div>
				</Modal>
			</span>
		)
	}
	_hideModal() {
		this.setState({ show: false })
	}
	_showModal() {
		this.setState({ show: true })
	}
}

export default SampleModal
    