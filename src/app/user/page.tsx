"use client";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";

export default function UserPage() {
  const { user, logout } = useAuth0();

  function userLogout() {
    sessionStorage.clear();
    logout();
  }

  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: "500px",
        textAlign: "center",
        width: "100%",
      }}
    >
      <CardContent>
        <Stack alignItems={"center"} gap="0.5em">
          <Typography variant="h5" fontSize={"0.8em"}>
            Hello {user?.given_name},
          </Typography>
          <Typography variant="h5" fontSize={"1.3em"}>
            Welcome to my Auth0 App Test
          </Typography>
          <Typography fontSize={"0.8em"}>
            this is a dummy app that does not nothing but help the author gain a better understanding of Auth0
            architecture.
          </Typography>
          <Typography fontSize={"0.8em"}>Thank you for trying it out</Typography>
          <Box>
            <Button onClick={() => userLogout()} variant="contained">
              Logout
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
