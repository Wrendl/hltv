import Events from './Events';
import Matches from './Matches';
import News from './News'
import Profile from './Profile';
import Rankings from './Rankings';

const Home = () => {
  return (
    <div class="main grid-contain">
        <div className='hltv-logo-container'></div>
        <div className='col-box-con'><Rankings></Rankings></div>
        <div className='contentCol'><News></News></div>
        <Events></Events>
        <Matches></Matches>
    </div>
  )
};

export default Home;