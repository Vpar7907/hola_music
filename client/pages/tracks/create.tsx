import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import FileUpload from "../../components/FileUpload";
import StepWrapper from "../../components/StepWrapper";
import MainLayout from "../../layouts/MainLayout";

function Create(): JSX.Element {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout>
      <h1>Загрузка трека</h1>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={"column"} style={{ padding: 20 }}>
            <TextField style={{ marginTop: 10 }} label={"Название трека"} />
            <TextField style={{ marginTop: 10 }} label={"Имя исполнителя"} />
            <TextField
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
