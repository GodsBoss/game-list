function reduce(state = defaultState(), action) {
  return state
}

function defaultState() {
  return {
    games: [
      {
        id: 1,
        game: {
          title: "Timining 1D",
          url: "http://js.godsboss.org/timining-1d/"
        }
      },
      {
        id: 2,
        game: {
          title: "Ten Seconds Treasure Hunt",
          url: "http://js.godsboss.org/ten-seconds-treasure-hunt/"
        }
      },
      {
        id: 3,
        game: {
          title: "Torpedo 'em up!",
          url: "http://js.godsboss.org/torpedo-em-up/"
        }
      },
      {
        id: 4,
        game: {
          title: "Shape/Shift",
          url: "http://js.godsboss.org/shape-shift/"
        }
      },
      {
        id: 5,
        game: {
          title: "Planet Gaiardian",
          url: "http://js.godsboss.org/planet-gaiardian/"
        }
      }
    ]
  }
}

export default reduce
