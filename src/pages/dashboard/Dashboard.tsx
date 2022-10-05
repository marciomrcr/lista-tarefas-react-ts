import { FerramentasDeDetalhes } from '../../shared/components';
import { LayoutBasePaginas } from '../../shared/layouts';

export const Dashboard = () => {
  return (
    <LayoutBasePaginas
      titulo='Página inicial'
      barraDeFerramentas={(
       
        <FerramentasDeDetalhes
        textoBotaoNovo='New'
          mostrarBotaoNovo
          mostrarBotaoSalvarEFechar
          mostrarBotaoSalvarEFecharCarregando
          mostrarBotaoVoltar={false}
        />
      )}
    >
      Testando
    </LayoutBasePaginas>
  );
};
