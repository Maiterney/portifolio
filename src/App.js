import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.scss';
import About from './components/About';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import Stacks from './components/Stacks';

const App = () => (
    <div className="App">
      <div className="introduction-top">
        <Header />
        <Introduction />
      </div>
      <SocialMedia />
      <Stacks />
      <Projects />
      <About />
    </div>
)

export default App;