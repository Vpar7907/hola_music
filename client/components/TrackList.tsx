import { Box, Grid } from "@mui/material";
import { ITrack } from "../types/track";
import TrackItem from "./TrackItem";

interface Props {
  tracks: ITrack[];
}

function TaskList({ tracks }: Props) {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem track={track} key={track._id} />
        ))}
      </Box>
    </Grid>
  );
}

export default TaskList;
