import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { SERVER_URL } from "../../Constants";
import { useInput } from "../../hooks/useInput";
import MainLayout from "../../layouts/MainLayout";
import { wrapper } from "../../store";
import { ITrack } from "../../types/track";


function TrackPage({serverTrack}): JSX.Element {
  const [track, setTrack] = useState<ITrack>(serverTrack)
  const username = useInput('')
  const commentText = useInput('')
  
  const router = useRouter();

  const addComment = async () => {
    try {
      const response = await axios.post(`${SERVER_URL}comments/`, 
    {
      username: username.value, 
      text: commentText.value,
      trackId: track._id
    })
    setTrack({...track, comments: [response.data, ...track.comments]})
    } catch(e) {
      console.log(`Во время отправки комментария произошла ошибка: ${e}`);
    }
  }

  return (
    <MainLayout title={`inMusic | ${track.artist} - ${track.name}`} keywords={`Музыка, трек, исполнитель, ${track.artist}, ${track.name}`}>
      <Button
        onClick={() => {
          router.push("/tracks");
        }}
      >
        К списку
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={SERVER_URL.concat(track.picture)} alt={track.name} width={200} height={200} />
        <div style={{ marginLeft: "30px" }}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Количество прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова к песне:</h1>
      <p>{track.text}</p>
      <h1>Комментарии: </h1>
      <Grid container>
        <TextField label="Ваше имя:" fullWidth {...username}/>
        <TextField label="Комментарий:" fullWidth multiline rows={4} {...commentText}/>
        <Button onClick={addComment}>Отправить</Button>
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


export const getServerSideProps = wrapper.getServerSideProps(({params}) =>
   async () => {
    const response = await axios.get(`${SERVER_URL}tracks/${params.id}`)
    return {
      props: {
        serverTrack: response.data
      }
    }
  }
)