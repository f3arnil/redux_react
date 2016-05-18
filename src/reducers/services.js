const serviceReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                service(undefined, action)
            ]
        case 'DELETE_SERVICE':
            return _deleteService(state, action.id)
        default:
            return state
    }
}

const service = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

//const services = (state = [], action) => {
//  switch (action.type) {
//    case 'ADD_TODO':
//      return [
//        ...state,
//        service(undefined, action)
//      ]
//    default:
//      return state
//  }
//}

const _deleteService = (state, targetServiceId) => {
    let services = []
    
    state.map((service) => {
        if (service.id != targetServiceId) {
            services.push(service)
        }
    })
    
    return services
}

export default serviceReducer
