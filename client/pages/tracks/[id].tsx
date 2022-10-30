import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

function TrackPage(): JSX.Element {
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

  const router = useRouter();

  return (
    <MainLayout>
      <Button
        onClick={() => {
          router.push("/tracks");
        }}
      >
        К списку
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={track.picture} alt={track.name} width={200} height={200} />
        <div style={{ marginLeft: "30px" }}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова к песне:</h1>
      <p>{track.text}</p>
      <h1>Комментарии: </h1>
      <Grid container>
        <TextField label="Ваше имя:" fullWidth />
        <TextField label="Комментарий:" fullWidth multiline rows={4} />
        <Button>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map((content) => (
          <div>
            <div>Автор: {content.username}</div>
            <div>Комментарий: {content.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export default TrackPage;
