"use client";
import { IUserProfile } from "@/interface/profile";
import { updateUserProfile } from "@/service/api/profile";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Card, CardContent, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function OnboardPage() {
  const { user } = useAuth0();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const updateProfile = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: IUserProfile = {
      fullname: e.currentTarget["fullname"].value,
      phone: e.currentTarget["phone"].value,
    };

    setLoading(true);
    setError("");

    updateUserProfile(data)
      .then(() => {
        router.replace("/user");
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: "800px",
        width: "100%",
      }}
    >
      <CardContent>
        <Typography variant="h5" fontSize={"1.2em"}>
          Welcome {user?.email}
        </Typography>
        <Typography fontSize={"0.8em"}>Kindly complete your profile to proceed</Typography>
        <form onSubmit={updateProfile}>
          <Stack gap="0.5em">
            <TextField defaultValue={user?.given_name} name="fullname" />
            <TextField defaultValue={user?.phone_number} name="phone" />
            <Typography>{error}</Typography>
            <Box textAlign={"right"}>
              <Button disabled={loading} type="submit" variant="contained">
                {loading ? <CircularProgress /> : " Update"}
              </Button>
            </Box>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
}
