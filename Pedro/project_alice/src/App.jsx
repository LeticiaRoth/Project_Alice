import { BrowserRouter as Router } from 'react-router-dom'; // ⚠️ O BrowserRouter DEVE ser o pai
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './AppRoutes'; // Importe o componente de rotas

// ⚠️ Remova o import desnecessário de 'useAuth' aqui

export default function App() {
    // ❌ REMOVA: const { loading } = useAuth();
    // ❌ REMOVA: if (loading) { return <p>Carregando autenticação...</p>; }

    return (
        // O AuthProvider deve ser o PAI do componente que usa o useAuth
        <AuthProvider>
            {/* O Router também deve ser o pai de Routes */}
            
                <AppRoutes />
            
        </AuthProvider>
    );
}