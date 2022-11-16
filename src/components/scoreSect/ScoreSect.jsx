import { useSelector } from "react-redux"
import { useBEM } from "../../hooks/useBEM"
import { selectScore } from "../../store/slices/gameSlice"

const ScoreSect = () => {
    const [B,E] = useBEM('score')

    const score = useSelector(selectScore)

    return(
        <div className={B()}>
            <img src="images/logo-bonus.svg" alt="app logo" className={E('logo')}/>
            <section className={E('wrap')}>
              <label htmlFor="score" className={E('label')}>SCORE</label>
              <span id='score'className={E('value')}>{score}</span>
            </section>
        </div>
    )
}

export default ScoreSect;