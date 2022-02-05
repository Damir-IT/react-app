const FOLLOWED = 'FOLLOWED'
const UNFOLLOWED = 'UNFOLLOWED'
const SET_USERS = 'SET-USERS'

let initialState = {
  users: [
    {
      id: 0,
      photo:
        'https://static.turbosquid.com/Preview/001193/041/HG/viking-character-pbr-rigged-3D-model_600.jpg',
      fullName: 'Ludwigue Bieurnson',
      status: 'Brother of Jarl',
      country: 'Scandinavia',
      city: 'Kareem',
      followed: false,
    },
    {
      id: 1,
      photo:
        'https://static.turbosquid.com/Preview/001193/041/HG/viking-character-pbr-rigged-3D-model_600.jpg',
      fullName: 'Ludwigue Bieurnson',
      status: 'Brother of Jarl',
      country: 'Scandinavia',
      city: 'Kareem',
      followed: false,
    },
    {
      id: 2,
      photo:
        'https://static.turbosquid.com/Preview/001193/041/HG/viking-character-pbr-rigged-3D-model_600.jpg',
      fullName: 'Vasya Pupkin',
      status: "Toje viking, mat' vashu",
      country: "Rus'",
      city: 'Tombov',
      followed: true,
    },
  ],
}

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWED:
      debugger
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    case UNFOLLOWED:
      debugger
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      }
    default:
      return state
  }
}

//ACTION-CREATORS
const followAC = (userID) => ({ type: FOLLOWED, userID })
const unfollowAC = (userID) => ({ type: UNFOLLOWED, userID })
const setUsersAC = (users) => ({ type: SET_USERS, users })

export {
  usersPageReducer,
  //ACTION-CREATORS
  followAC,
  unfollowAC,
  setUsersAC,
}
