import 'assets/scss/main.scss';
import release1 from 'assets/images/releas_1.png';
import release2 from 'assets/images/releas_2.png';
import release3 from 'assets/images/releas_3.png';
import release4 from 'assets/images/releas_4.png';
import release5 from 'assets/images/releas_5.png';
import release6 from 'assets/images/releas_6.png';
import release7 from 'assets/images/releas_7.png';
import release8 from 'assets/images/releas_8.png';
import release9 from 'assets/images/releas_9.png';
import release10 from 'assets/images/releas_10.png';
import release11 from 'assets/images/releas_11.png';
import release12 from 'assets/images/releas_12.png';
import release13 from 'assets/images/releas_13.png';
import release14 from 'assets/images/releas_14.png';
import release15 from 'assets/images/releas_15.png';
import Carousel from 'components/Carousel';
import TextContents from 'components/TextContents';
const imageItems = [
  {
    image : release1
  },
  {
    image : release2
  },
  {
    image : release3
  },
  {
    image : release4
  },
  {
    image : release5
  },
  {
    image : release6
  },
  {
    image : release7
  },
  {
    image : release8
  },
  {
    image : release9
  },
  {
    image : release10
  },
  {
    image : release11
  },
  {
    image : release12
  },
  {
    image : release13
  },
  {
    image : release14
  },
  {
    image : release15
  },
]

function App() {

  return (
    <div className="App">
      <Carousel items={imageItems}/>
      <TextContents className='text-contents' items={imageItems}/>
    </div>
  );
}

export default App;
