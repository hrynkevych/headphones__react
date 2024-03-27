import './App.scss';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { Recommended } from './components/Recommended/Recommended';
import { Place } from './components/Place/Place';
import { Buy } from './components/Buy/Buy';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="page__body">
      <Header />
      <Menu />
      <main>
        <Recommended />
        <Place />
        <Buy />
        <Contact />
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
