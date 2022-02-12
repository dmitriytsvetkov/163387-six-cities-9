import MainScreen from '../main-screen/mainScreen';
import Header from '../header/header';

type AppMainProps = {
  placesCount: number,
}

function App({placesCount}: AppMainProps): JSX.Element {
  return (
    <div className="page">
      <Header/>
      <MainScreen placesCount = {placesCount}/>
    </div>
  );
}

export default App;
