
import Layout from './components/Layouts/Navbar';
import './App.css';
import 'antd/dist/antd.css';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Layouts/Footer';
function App() {
  return (
    <div className="App">
      <Layout/>
      <Homepage/>
      <Footer/>
  
    </div>
  );
}

export default App;
