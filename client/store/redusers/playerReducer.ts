import {
  PlayerActionsType,
  PlayerAction,
  PlayerState,
} from "../../types/player";

const initialState: PlayerState = {
  currentTime: 0,
  active: null,
  duration: 0,
  volume: 0,
  pause: true,
};

export const playerReducer = (
  state = initialState,
  action: PlayerAction
): PlayerState => {
  switch (action.type) {
    case PlayerActionsType.PLAY:
      return { ...state, pause: false };
    case PlayerActionsType.PAUSE:
      return { ...state, pause: true };
    case PlayerActionsType.SET_ACTIVE:
      return { ...state, active: action.payload, duration: 0, currentTime: 0 };
    case PlayerActionsType.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    case PlayerActionsType.SET_DURATION:
      return { ...state, duration: action.payload };
    case PlayerActionsType.SET_VOLUME:
      return { ...state, volume: action.payload };
    default:
      return state;
  }
};
