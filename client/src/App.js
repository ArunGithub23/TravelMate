
import './App.css';
import ResponsiveAppBar from './components/AppBar';
import ProfileCard from './components/ProfileCard';
import OurServices from './pages/OurServices';



function App() {
  return (
    <div className="App">
      <div className='nav-bar'>
        <ResponsiveAppBar/>
      </div>
      
      <div className='content-section' style={{display:'flex',flexDirection:'column', marginTop:'1rem'}}>
        <div className='services' >
          <h3>OurServices</h3>
        <OurServices/>
        </div>

        <div className='contacts'>
        <h3>Members</h3>
          <ProfileCard/>
        </div>
      </div>

      <div className='footer'>


      </div>


    </div>
  );
}

export default App;
