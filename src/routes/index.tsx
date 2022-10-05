import { Navigate, Route, Routes } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard } from '../pages';
// eslint-disable-next-line linebreak-style
export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();
  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página Inicial',
        icon: 'home',
        path: '/home',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path='/home' element={<Dashboard />} />
      {/* "Rotas desconhecidas faz o Redirect to Home" */}
      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  );
};
