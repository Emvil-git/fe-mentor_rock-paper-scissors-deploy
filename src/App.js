import './App.scss';
import { useBEM } from './hooks/useBEM';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './hooks/reduxHooks';
import { selectIsModalShow, selectView, setIsModalShow, selectPlayerChoice } from './store/slices/gameSlice';
import ScoreSect from './components/scoreSect/ScoreSect';
import Game from './components/game/Game';
import Results from './components/results/Results';
import RulesModal from './components/rulesModal/RulesModal';

function App() {
  const [B,E] = useBEM("App")
  const dispatch = useAppDispatch();

  const isModalShow = useSelector(selectIsModalShow);
  const playerChoice = useSelector(selectPlayerChoice);

  const changeView = () => {
    if (playerChoice) return <Results/>
    return <Game/>
  }

  return (
    <div className={B()}>
      {isModalShow && <RulesModal/>}
      <main className={E('body')}>
        <ScoreSect/>
        {changeView()}
      </main>
      <section className={E('btn-sect')}>
      <button onClick={() => {dispatch(setIsModalShow(true))}} className={E('rules-btn')}>RULES</button>
      </section>
    </div>
  );
}

export default App;
