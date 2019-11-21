export const CHOICE = 'CHOICE'

export const userChoice = (userChoice) => {
  return {
    type: CHOICE,
    userChoice
  }
}
