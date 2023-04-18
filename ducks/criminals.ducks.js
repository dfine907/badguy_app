// event name
const choosePoi = 'CHOOSE_POI'

export const chooseCriminal = (criminal) => (dispatch) => {
  dispatch({
    type: choosePoi,
    payload: criminal,
  })
}

export const fakeEvent = (criminal) => (dispatch) => {
  dispatch({
    type: 'FAKE_EVENT',
    payload: criminal,
  })
}

// action handler aka reducer
const criminals = (
  state = {
    //initial state
    poi: null,
  },
  action
) => {
  switch (
    action.type // listen for an event
  ) {
    case choosePoi:
      return {
        // handle the event
        ...state,
        poi: action.payload,
      }
    case 'FAKE_EVENT':
      return {
        ...state,
        false: action.payload,
      }

    default:
      return { ...state }
  }
}

export default criminals
