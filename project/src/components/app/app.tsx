import Main from '../../pages/main';
import Header from '../header/header';

type AppMainProps = {
  placesCount: number,
}

function App({placesCount}: AppMainProps): JSX.Element {
  return (
    <div className="page">
      <Header/>
      <Main placesCount = {placesCount}/>
    </div>
  );
}

export default App;
