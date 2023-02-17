"use client";
import { Stack } from "@mui/material";
import { Container } from "@mui/system";
import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: ILayoutProps) {
  return (
    <Container maxWidth={false} disableGutters>
      <Stack minHeight={"100vh"} justifyContent="center" alignItems={"center"}>
        <main>{children}</main>
      </Stack>
    </Container>
  );
}
