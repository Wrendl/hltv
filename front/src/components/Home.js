import Events from './Events';
import Matches from './Matches';
import News from './News'
import Profile from './Profile';
import Rankings from './Rankings';

const Home = () => {
  return (
    <div class="main grid-contain">
        <div className='hltv-logo-container'></div>
        <div className='ranksHome'><Rankings></Rankings></div>
        <div className='newsHome'><News></News></div>
        <div className='eventsHome'><Events></Events></div>
        <div className='matchesHome'><Matches></Matches></div>
    </div>
  )
};

export default Home;