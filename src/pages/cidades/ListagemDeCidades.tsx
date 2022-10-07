import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBasePaginas } from "../../shared/layouts";

export const ListagemDeCidades = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  return (
    <LayoutBasePaginas
      titulo="Lista de Cidades"
      barraDeFerramentas={
        <FerramentasDaListagem
          mostraInputBusca
          textoBotaoNovo="Nova"
          textoDaBusca={busca}
          aoMudarTextoBusca={(texto) =>
            setSearchParams({ busca: texto }, { replace: true })
          }
        />
      }
    ></LayoutBasePaginas>
  );
};
