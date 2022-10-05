import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';
import React from 'react';

interface IFerramentasDaListagemProps {
  textoDaBusca?: string;
  mostraInputBusca?: boolean;
  aoMudarTextoBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca = '',
  mostraInputBusca = false,
  aoMudarTextoBusca,
  textoBotaoNovo = 'Novo',
  aoClicarEmNovo,
  mostrarBotaoNovo = true,
}) => {
  const theme = useTheme();
  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      gap={1}
      alignItems='center'
      component={Paper}
    >
      {mostraInputBusca && (
        <TextField
          size='small'
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoBusca?.(e.target.value)}
          placeholder='Pesquisar...'
        />
      )}
      <Box flex={1} display='flex' justifyContent='end'>
        {mostrarBotaoNovo && (
          <Button
            variant='contained'
            color='primary'
            disableElevation
            onClick={aoClicarEmNovo}
            endIcon={<Icon>add</Icon>}
          >
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};
