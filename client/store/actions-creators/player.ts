import { PlayerAction, PlayerActionsType } from "../../types/player";
import { ITrack } from "../../types/track";

export const playTrack = (): PlayerAction => {
  return {
    type: PlayerActionsType.PLAY,
  };
};
export const pauseTrack = (): PlayerAction => {
  return {
    type: PlayerActionsType.PAUSE,
  };
};
export const setActiveTrack = (payload: ITrack): PlayerAction => {
  return {
    type: PlayerActionsType.SET_ACTIVE,
    payload,
  };
};
export const setDurationTime = (payload: number): PlayerAction => {
  return {
    type: PlayerActionsType.SET_DURATION,
    payload,
  };
};
export const setCurrentTime = (payload: number): PlayerAction => {
  return {
    type: PlayerActionsType.SET_CURRENT_TIME,
    payload,
  };
};
export const setVolumeTrack = (payload: number): PlayerAction => {
  return {
    type: PlayerActionsType.SET_VOLUME,
    payload,
  };
};
