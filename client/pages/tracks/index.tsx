import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList";

function Index(): JSX.Element {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
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
    },
    {
      _id: "635c37cafe0830079c0840d9",
      name: "Потеряли пацана",
      artist: "Tanir & Tyomcha",
      text: "*текст песни потеряли пацана*",
      listens: 0,
      picture:
        "http://localhost:5000/image/1b9a3519-0a41-4eaa-8cee-f51801f0d75e.jpg",
      audio:
        "http://localhost:5000/audio/f20dafcb-fae7-4da4-b004-ee1a6fbb811a.mp3",
      comments: [],
    },
    {
      _id: "635c380ffe0830079c0840db",
      name: "Panda e",
      artist: "CYGO",
      text: "*текст песни Panda e*",
      listens: 0,
      picture:
        "http://localhost:5000/image/57b4a13a-c68f-4784-9094-39dd48cfa383.jpg",
      audio:
        "http://localhost:5000/audio/b7c11c33-7427-40e2-90b4-10f029596dd4.mp3",
      comments: [],
    },
  ];
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
