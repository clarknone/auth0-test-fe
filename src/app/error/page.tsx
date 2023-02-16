"use client";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function ErrorPage() {
  const { isAuthenticated } = useAuth0();
  const router = useRouter();

  function goBack() {
    if (isAuthenticated) {
      router.push("/user");
    } else {
      router.push("/");
    }
  }
  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: "800px",
        width: "100%",
      }}
    >
      <CardContent>
        <Stack alignItems={"center"} gap="0.5em">
          <Typography variant="h5" fontSize={"1.8em"}>
            OOPS
          </Typography>
          <Typography fontSize={"1em"}>An error occurred, this is unusual</Typography>
          <Box>
            <Button onClick={goBack} variant="contained">
              Go Back
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
