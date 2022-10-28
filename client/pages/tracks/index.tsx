import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

function Index(): JSX.Element {
  const router = useRouter();
  const tracks: ITrack[] | any[] = [{}];
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
              ></Button>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </MainLayout>
  );
}

export default Index;
