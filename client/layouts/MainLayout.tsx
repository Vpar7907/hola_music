import * as React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import Player from "../components/Player";
import Head from "next/head";

interface Props {
  children?: React.ReactNode
  title?: string
  description?: string
  keywords?: string
}

function MainLayout({ children, title, description, keywords }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{title || 'inMusic - независимая музыкальная платформа'}</title>
        <meta name="description" content={`inMusic -независимая музыкальная платформа. ${description || ""}`}/>
        <meta name='robots' content="index, follow"/>
        <meta name='keywords' content={keywords || 'Музыка, треки, слушать музыку, исполнители'}/>
      </Head>
      <Navbar />
      <Container style={{ margin: "90px 0" }}>{children}</Container>
      <Player />
    </>
  );
}

export default MainLayout;
