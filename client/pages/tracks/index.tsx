import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getTrackState } from "../../store/selectors/track";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchTrack } from "../../store/actions-creators/track";

function Index(): JSX.Element {
  const router = useRouter();

  const { tracks, error } = useTypedSelector(getTrackState);

  if (error !== "") {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Grid container>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button
                onClick={() => {
                  router.push("/tracks/create");
                }}
              >
                Загрузить
              </Button>
            </Grid>
            <TrackList tracks={tracks} />
          </Box>
        </Card>
      </Grid>
    </MainLayout>
  );
}

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(fetchTrack());
    return { props: {} };
  }
);
