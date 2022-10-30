import { type } from "os";
import { ITrack } from "./track";

export interface PlayerState {
  active: null | ITrack;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
}

export enum PlayerActionsType {
  PLAY = "PLAY",
  PAUSE = "PAUSE",
  SET_ACTIVE = "SET_ACTIVE",
  SET_DURATION = "SET_DURATION",
  SET_CURRENT_TIME = "SET_CURRENT_TIME",
  SET_VOLUME = "SET_VOLUME",
}

export interface PlayAction {
  type: PlayerActionsType.PLAY;
}

export interface PauseAction {
  type: PlayerActionsType.PAUSE;
}

export interface SetActiveAction {
  type: PlayerActionsType.SET_ACTIVE;
  payload: ITrack;
}

export interface SetDuraionAction {
  type: PlayerActionsType.SET_DURATION;
  payload: number;
}

export interface SetCurrentTimeAction {
  type: PlayerActionsType.SET_CURRENT_TIME;
  payload: number;
}

export interface SetVolumeAction {
  type: PlayerActionsType.SET_VOLUME;
  payload: number;
}

export type PlayerAction =
  | PlayAction
  | PauseAction
  | SetActiveAction
  | SetDuraionAction
  | SetCurrentTimeAction
  | SetVolumeAction;
