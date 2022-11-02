import { ITrack } from "../types/track";
import { Card, Grid, IconButton } from "@mui/material";
import styles from "../styles/TrackItem.module.scss";
import { Pause, PlayArrow, Delete } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useActions } from "../hooks/useAction";
import React from "react";
import { SERVER_URL } from "../Constants";

interface Props {
  track: ITrack;
  active?: boolean;
}

function TrackItem({ track, active = false }: Props): JSX.Element {
  const router = useRouter();
  const { playTrack, pauseTrack, setActiveTrack } = useActions();

  const play = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveTrack(track);
    playTrack();
  };

  return (
    <Card
      className={styles.track}
      onClick={() => {
        router.push("/tracks/" + track._id);
      }}
    >
      <IconButton onClick={play} style={{ margin: "15px" }}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img
        width={70}
        height={70}
        src={SERVER_URL.concat(track.picture)}
        alt={track.name}
      />
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: "12px", color: "gray" }}>{track.artist}</div>
      </Grid>
      {active && <div> 02:32 / 3:01</div>}
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ marginLeft: "auto" }}
      >
        <Delete />
      </IconButton>
    </Card>
  );
}

export default TrackItem;
