"use client";
import setToken from "@/config/axios.config";
import { getUserProfile } from "@/service/api/profile";
import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Button, CircularProgress, Stack, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface ILayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: ILayoutProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        getAccessTokenSilently()
          .then((token) => {
            setToken(token);
            getUserProfile()
              .then((user) => {
                if (user.fullname) {
                  setLoading(false);
                } else {
                  router.replace("/onboard");
                }
              })
              .catch((e) => {
                console.log({m:e.message})
                if (e.message.includes("not found")) {
                  router.replace("/onboard");
                } else {
                  router.replace("/error");
                }
              });
          })
          .catch((e) => {
            console.log({ e });
          });
      } else {
        router.replace("/");
      }
    }
  }, [isLoading]);

  if (loading) {
    return (
      <Stack minHeight={"100vh"} width="100vw" alignContent="center" justifyContent="center">
        <CircularProgress variant="indeterminate" />
      </Stack>
    );
  } else {
    return (
      <Container maxWidth={false} disableGutters>
        <Stack minHeight={"100vh"} alignItems="center" justifyContent={"center"}>
          <main>{children}</main>
        </Stack>
      </Container>
    );
  }
}
