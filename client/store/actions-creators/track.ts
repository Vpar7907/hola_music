import { Dispatch } from "react";
import { TrackActions, TrackActionTypes } from "../../types/track";
import { SERVER_URL } from "../../Constants";
import axios from "axios";

export const fetchTrack = () => {
  return async (dispatch: Dispatch<TrackActions>) => {
    try {
      const response = await axios.get(`${SERVER_URL}tracks/`);
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
    } catch (e) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: "Произошла ошибка при загрузке треков",
      });
    }
  };
};
