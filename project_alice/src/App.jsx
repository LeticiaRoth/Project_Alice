import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './AppRoutes'; // Importe o componente de rotas

// ⚠️ Remova o import desnecessário de 'useAuth' aqui

export default function App() {

    return (
        // O AuthProvider deve ser o 'pai' do componente que usa o useAuth
        <AuthProvider>
            {/* O Router também deve ser o pai de Routes */}
            
                <AppRoutes />
            
        </AuthProvider>
    );
}