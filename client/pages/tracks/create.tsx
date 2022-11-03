import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import FileUpload from "../../components/FileUpload";
import StepWrapper from "../../components/StepWrapper";
import { SERVER_URL } from "../../Constants";
import { useInput } from "../../hooks/useInput";
import MainLayout from "../../layouts/MainLayout";

function Create(): JSX.Element {
  const router = useRouter()

  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const name = useInput('')
  const text = useInput('')
  const artist = useInput('')


  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      const trackData = new FormData()
      trackData.append('name', name.value)
      trackData.append('text', text.value)
      trackData.append('artist', artist.value)
      trackData.append('picture', picture)
      trackData.append('audio', audio)
      axios.post(`${SERVER_URL}tracks/`, trackData)
        .then((response) => router.push('/tracks/'))
        .catch((error) => console.log(`Ошибка при загрузке трека ${error}`)
        )
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout title="inMusic | Добавить трек">
      <h1>Загрузка трека</h1>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={"column"} style={{ padding: 20 }}>
            <TextField style={{ marginTop: 10 }} label={"Название трека"} {...name}/>
            <TextField style={{ marginTop: 10 }} label={"Имя исполнителя"} {...artist}/>
            <TextField
              {...text}
              style={{ marginTop: 10 }}
              label={"Текст трека"}
              multiline
              rows={3}
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload accept="image/*" setFile={setPicture}>
            <Button>Загрузить обложку</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload accept="audio/*" setFile={setAudio}>
            <Button>Загрузить трек</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent={"space-between"}>
        <Button disabled={activeStep === 0} onClick={back}>
          Назад
        </Button>
        <Button disabled={activeStep === 3} onClick={next}>
          Далее
        </Button>
      </Grid>
    </MainLayout>
  );
}

export default Create;
