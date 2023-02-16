"use client";
import { Container } from "@mui/system";
import { Button, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const router = useRouter();
  const { loginWithRedirect } = useAuth0();

  const login = () => {
    loginWithRedirect({ authorizationParams: { redirect_uri: `${window.location.origin}/user` } });
  };

  const signUp = () => {
    loginWithRedirect({
      authorizationParams: { screen_hint: "signup", redirect_uri: `${window.location.origin}/user` },
    });
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Stack minHeight={"100vh"} width="100vw" justifyContent="center" alignItems={"center"}>
        <Card
          elevation={0}
          sx={{
            textAlign: "center",
            // width: "100%",
            // maxWidth: "600px",
          }}
        >
          <CardContent>
            <Typography fontSize={"1.2em"} variant="h4">
              Welcome to Auth Test
            </Typography>
            <Typography fontSize={"0.8"}> Login or Sign Up to continue </Typography>
          </CardContent>

          <CardActions>
            <Stack width="100%" justifyContent={"center"} gap="0.5em" direction={{ xs: "column", sm: "row" }}>
              <Button disableElevation variant="contained" onClick={() => login()}>
                Login
              </Button>
              <Button disableElevation variant="contained" onClick={() => signUp()}>
                Sign Up
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
}
