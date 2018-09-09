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
          description: "Gather wood, mine resources and craft the epic crown of nerdiness.",
          url: "http://js.godsboss.org/timining-1d/",
          tags: [
            "crafting"
          ]
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
          description: "Find a treasure... you have ten seconds.",
          url: "http://js.godsboss.org/ten-seconds-treasure-hunt/",
          tags: [
            "puzzle",
            "time limit"
          ]
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
          description: "A simple horizontal shoot 'em up.",
          url: "http://js.godsboss.org/torpedo-em-up/",
          tags: [
            "shooter"
          ]
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
          description: "Shift shapes which also can shapeshift... or so.",
          url: "http://js.godsboss.org/shape-shift/",
          tags: [
            "puzzle"
          ]
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
          description: "You are a planet gaiardian, destined to inspire growth.",
          url: "http://js.godsboss.org/planet-gaiardian/",
          tags: [
            "puzzle",
            "time limit"
          ]
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
