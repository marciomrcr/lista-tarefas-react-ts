import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import { FerramentasDeDetalhes } from "../../shared/components"
import { LayoutBasePaginas } from "../../shared/layouts"
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";

export const DetalhesDePessoas: React.FC = () => {
  const { id = 'nova'} = useParams<'id'>();
  const navigate = useNavigate();

  const [ isLoading, setIsLoading] = useState(false)
  const [ nome, setNome] = useState('')

  useEffect(() => {
    if(id !== 'nova'){
      setIsLoading(true)

      PessoasService.getById(Number(id))
      .then((result) => {
        setIsLoading(false)

        if (result instanceof Error){
          alert(result.message);
          navigate('/pessoas');
        } else {
          setNome(result.nomeCompleto)
          console.log(result)
        }
      });
    }
  }, [id])

  const handleSave = () =>{
    return 
  }

  const handleDelete = (id: number) =>{
    if(confirm('Deseja excluir o registro?' )){
      PessoasService.deleteById(id)
      .then(result => {
        if(result instanceof Error){
          alert(result.message);
        } else {
          
          alert('Registro excluído com sucesso!')
          navigate('/pessoas');
        }
      });
    }
  }

  return(
    
    <LayoutBasePaginas
    titulo={id === 'nova' ? 'Nova Pessoa': nome}
    barraDeFerramentas={
      <FerramentasDeDetalhes
      textoBotaoNovo="Nova"
      mostrarBotaoSalvarEFechar
      mostrarBotaoNovo={id !== 'nova'}
      mostrarBotaoApagar={id !== 'nova'}

      aoClicarEmSalvar={handleSave}
      aoClicarEmApagar={() =>handleDelete(Number(id))}
      aoClicarEmSalvarEFechar={handleSave}
      aoClicarEmVoltar={() => navigate('/pessoas')}
      aoClicarEmNovo={() => navigate('/pessoas/detalhes/nova')}

      />
    }
    >
      {isLoading && ( 
      <LinearProgress variant="indeterminate"/>
      )}

      <p>Detalhes</p>
    </LayoutBasePaginas>
  )
}