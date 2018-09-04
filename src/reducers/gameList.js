function list(state = defaultState(), action) {
  return state
}

function defaultState() {
  return {
    games: [
      {
        title: "Timining 1D",
        url: "http://js.godsboss.org/timining-1d/"
      },
      {
        title: "Ten Seconds Treasure Hunt",
        url: "http://js.godsboss.org/ten-seconds-treasure-hunt/"
      },
      {
        title: "Torpedo 'em up!",
        url: "http://js.godsboss.org/torpedo-em-up/"
      },
      {
        title: "Shape/Shift",
        url: "http://js.godsboss.org/shape-shift/"
      }
    ]
  }
}

export default list
