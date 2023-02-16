"use client";
import setToken from "@/config/axios.config";
import { useAuth0 } from "@auth0/auth0-react";
import { Stack } from "@mui/material";
import { Container } from "@mui/system";
import { ReactNode, useEffect } from "react";

interface ILayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: ILayoutProps) {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  console.log({ isAuthenticated });
  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        getAccessTokenSilently()
          .then((token) => {
            console.log({ token });
            setToken(token);
          })
          .catch((e) => {
            console.log({ e });
          });
      }
    }
  }, [isLoading]);

  return (
    <Container maxWidth={false} disableGutters>
      <Stack minHeight={"100vh"} justifyContent="center" alignContent={"center"}>
        <main>{children}</main>
      </Stack>
    </Container>
  );
}
