import React, { PropTypes } from 'react'
import Service from './Service'
import deleteServiceAction from '../actions/'

const ServiceList = ({ dispatch, services, onServiceDeleteClick }) => (
  <ul>
    {services.map(service =>
      <Service
        key={ service.id }
        id={ service.id }
        onServiceDeleteClick = { (id) => {
            dispatch(deleteServiceAction(id))
        }}
        {...service}
      />
    )}
  </ul>
)

export default ServiceList
    