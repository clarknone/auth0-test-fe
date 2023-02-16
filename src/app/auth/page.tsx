"use client";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function AuthPage() {
  const { loginWithRedirect, isLoading } = useAuth0();

  const login = () => {
    loginWithRedirect({ authorizationParams: { redirect_uri: `${window.location.origin}/user` } });
  };

  const signUp = () => {
    loginWithRedirect({ authorizationParams: { screen_hint: "signup" } });
  };

  return (
    <Box>
      <Typography> Welcome Auth </Typography>
      <Stack mx="auto" gap={"2em"} maxWidth="400px">
        <Button variant="contained" onClick={() => login()}>
          Login
        </Button>
        <Button variant="contained" onClick={() => signUp()}>
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
}
