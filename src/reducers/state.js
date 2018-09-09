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
        },
        ld: {
          no: 26,
          url: "http://ludumdare.com/compo/ludum-dare-26/?uid=20672"
        }
      },
      {
        id: 2,
        game: {
          title: "Ten Seconds Treasure Hunt",
          url: "http://js.godsboss.org/ten-seconds-treasure-hunt/"
        },
        ld: {
          no: 27,
          url: "http://ludumdare.com/compo/ludum-dare-27/?uid=20672"
        }
      },
      {
        id: 3,
        game: {
          title: "Torpedo 'em up!",
          url: "http://js.godsboss.org/torpedo-em-up/"
        },
        ld: {
          no: 29,
          url: "http://ludumdare.com/compo/ludum-dare-29/?uid=20672"
        }
      },
      {
        id: 4,
        game: {
          title: "Shape/Shift",
          url: "http://js.godsboss.org/shape-shift/"
        },
        ld: {
          no: 35,
          url: "http://ludumdare.com/compo/ludum-dare-35/?uid=20672"
        }
      },
      {
        id: 5,
        game: {
          title: "Planet Gaiardian",
          url: "http://js.godsboss.org/planet-gaiardian/"
        },
        ld: {
          no: 34,
          url: "http://ludumdare.com/compo/ludum-dare-34/?uid=20672"
        }
      }
    ]
  }
}

export default reduce
