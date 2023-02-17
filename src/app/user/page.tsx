"use client";
import { sendEmailVerification } from "@/service/api/auth";
import { useAuth0 } from "@auth0/auth0-react";
import { Alert, AlertTitle, Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";

export default function UserPage() {
  const { user, logout } = useAuth0();

  function userLogout() {
    sessionStorage.clear();
    logout();
  }

  function sendEmail() {
    sendEmailVerification().catch((e) => {});
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
      {!user?.email_verified ? (
        <CardContent>
          <Alert severity="info" action={<Button onClick={sendEmail}> Resend </Button>}>
            <Typography fontSize={"0.8em"}>
              You email is not yet verified, please check your email and click on the link to verify your account{" "}
            </Typography>
          </Alert>
        </CardContent>
      ) : null}
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
          <Stack direction="row" justifyContent="center" gap="0.8em">
            <Button
              LinkComponent={"a"}
              target="_blank"
              href="https://application-form.sh/WJ7YU54FM2SMAA4RTT7IZ47O7LX5I4F3TG3WI2VGZTZK6YTPUDTIVWDADICED725LODIJ3PREQ4GXZBV3CTBR5OCT3ARFQH5YRPXSIUHY5HWMUL37SZDNL56CLUVFBZVOZV3DPUF3HKCJD7QREZXM43FSTPC2FG7NEW7S"
            >
              Vist Application Form
            </Button>
            <Button onClick={() => userLogout()} variant="contained">
              Logout
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
