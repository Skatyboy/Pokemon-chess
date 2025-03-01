import { Route } from 'wouter';
import Home from './pages/Home';
import './styles/pokemon-theme.css';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Route path="/" component={Home} />
    </div>
  );
}
