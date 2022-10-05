/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Icon,
  IconButton,
  Theme,
  useTheme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import { useDrawerContext } from "../contexts";

interface ILayoutBasePaginasProps {
  titulo: string;
  barraDeFerramentas?: ReactNode;
  children: any;
}

export const LayoutBasePaginas: React.FC<ILayoutBasePaginasProps> = ({
  children,
  titulo,
  barraDeFerramentas,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const theme = useTheme();

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        display="flex"
        alignItems="center"
        gap={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
      >
        {/* Se a tela for pequena aparece o botão */}
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography
          variant={smDown ? "h6" : mdDown ? "h5" : "h4"}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {titulo}
        </Typography>
      </Box>
      <Box>{barraDeFerramentas && <Box> {barraDeFerramentas}</Box>}</Box>
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
