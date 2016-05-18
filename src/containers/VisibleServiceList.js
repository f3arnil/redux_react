import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import ServiceList from '../components/ServiceList'

const getVisibleTodos = (services, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return services
  }
}

const mapStateToProps = (state) => {
  return {
    services: getVisibleTodos(state.services, state.visibilityFilter)
  }
}

const VisibleServiceList = connect(
  mapStateToProps
)(ServiceList)

export default VisibleServiceList
