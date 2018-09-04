function list(state = defaultState(), action) {
  return state
}

function defaultState() {
  return {
    games: [
      {
        title: "Timining 1D",
        url: "http://js.godsboss.org/timining-1d/"
      }
    ]
  }
}

export default list
