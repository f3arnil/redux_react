import React from 'react'
import { connect } from 'react-redux'
import { addService } from '../actions'

let AddService = ({ dispatch }) => {
    let input

    return ( <form onSubmit = {
                e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addService(input.value))
                    input.value = ''
                }} >
                <div className="col-md-3">
                    <input className="form-control" ref = {
                        node => {
                            input = node
                        }
                    } />
                </div>
                <div className="col-md-3">
                    <button type="submit" className="btn btn-success">Add Todo</button>
                </div>
            </form>
    )
}
AddService = connect()(AddService)

export default AddService
