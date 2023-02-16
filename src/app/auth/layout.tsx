"use client";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: ILayoutProps) {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <Container maxWidth={false} disableGutters>
      <AppBar position="relative">
        <Toolbar>
          <Button color="secondary" variant="contained" onClick={goBack}>
            Back
          </Button>
          <Typography> Welcome </Typography>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </Container>
  );
}
