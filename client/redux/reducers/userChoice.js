import CHOICE from '../actions/userChoice'

const userChoice = (state = '', action) => {
  switch (action.type) {
    case CHOICE:
      return action.userChoice
    default:
      return state
  }
}

export default userChoice
