import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard, ListagemDeCidades, ListagemDePessoas } from "../pages";
// eslint-disable-next-line linebreak-style
export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();
  useEffect(() => {
    setDrawerOptions([
      {
        icon: "home",
        label: "Página Inicial",
        path: "/home",
      },
      {
        icon: "people",
        path: "/pessoas",
        label: "pessoas",
      },
      {
        icon: "location_city",
        path: "/cidades",
        label: "Cidades",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/pessoas" element={<ListagemDePessoas />} />
      <Route path="/cidades" element={<ListagemDeCidades />} />
      {/* "Rotas desconhecidas faz o Redirect to Home" */}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
