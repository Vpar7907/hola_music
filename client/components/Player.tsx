import { Grid, IconButton } from "@mui/material";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import styles from "../styles/Player.module.scss";
import { ITrack } from "../types/track";
import TrackProgress from "./TrackProgress";

function Player(): JSX.Element {
  const track: ITrack = {
    _id: "635c374dfe0830079c0840d7",
    name: "Малый повзрослел",
    artist: "Макс Корж",
    text: "*текст песни малый повзрослел*",
    listens: 0,
    picture:
      "http://localhost:5000/image/55a354d3-c2d4-4c32-b725-f9bf1c6e9caf.jpg",
    audio:
      "http://localhost:5000/audio/e7fad5ef-db43-4c36-92e2-3b7da5ab7614.mp3",
    comments: [],
  };
  const active: boolean = false;
  return (
    <div className={styles.player}>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ margin: "15px" }}
      >
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: "12px", color: "gray" }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={(e) => {}} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={0} right={100} onChange={(e) => {}} />
    </div>
  );
}

export default Player;
