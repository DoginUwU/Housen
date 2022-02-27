import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';

import Header from './components/Header';
import Home from './pages/Home';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
