import { useBEM } from "../../hooks/useBEM"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../hooks/reduxHooks"
import { selectHouseChoice, selectPlayerChoice, setPlayerChoice, setHouseChoice, addScore } from "../../store/slices/gameSlice"
import GameBtn from "../game/gameButton/GameButton"

const Results = () => {
    const [B,E] = useBEM('results')

    const dispatch = useAppDispatch()

    const player = useSelector(selectPlayerChoice)
    const house = useSelector(selectHouseChoice)

    const condArr = [
        {
            val: 'rock',
            win : ['scissors', 'lizard'],
            lose : ['spock', 'paper'],
        },
        {
            val: 'paper',
            win : ['rock', 'spock'],
            lose : ['scissors', 'lizard'],
        },
        {
            val: 'scissors',
            win : ['paper', 'lizard'],
            lose : ['spock', 'rock'],
        },
        {
            val: 'lizard',
            win : ['paper', 'spock'],
            lose : ['rock', 'scissors'],
        },
        {
            val: 'spock',
            win : ['scissors', 'rock'],
            lose : ['paper', 'lizard'],
        },
    ]

    const choiceCond = condArr.find(cond => cond.val === player);

    const results = () => {
        console.log('RESULTS!')
        switch(true){
            case player === house:
                return "DRAW!"
            case choiceCond.win.includes(house):
                return "YOU WIN"
            case choiceCond.lose.includes(house):
                return "YOU LOSE"
        }
    }

    const again = () => {
        dispatch(setHouseChoice(undefined))
        dispatch(setPlayerChoice(undefined))
    }

    const playerWin = () => {
        if (choiceCond.win.includes(house)) return E('placeholder', 'win')
        return E('placeholder');
    }

    const houseWin = () => {
        if (choiceCond.lose.includes(house)) return E('placeholder', 'win')
        return E('placeholder');
    }

    console.log(choiceCond)

    if (choiceCond.win.includes(house)) {
        setTimeout(()=>{
            dispatch(addScore())
        }, 1400)
    }

    return(
        <div className={B()}>
            <main className={E('cont')}>
                <section id={playerWin()} className={E('choice')}>
                    <h3 className={E('choice-label')}>YOU PICKED</h3>
                    <div className={E('btn-wrap')}>
                        <div className={playerWin()}></div>
                        <GameBtn id="player-btn" type={player} isStatic={true}/>
                    </div>
                </section>
                <section className={E('res')}>
                    <span className={E('res-label')}>{results()}</span>
                    <button onClick={again} className={E('res-btn')}>PLAY AGAIN</button>
                </section>
                <section id={houseWin()} className={E('choice')}>
                    <h3 className={E('choice-label')}>THE HOUSE PICKED</h3>
                    <div className={E('btn-wrap')}>
                        <div className={houseWin()}></div>
                        <GameBtn id="house-btn" type={house} isStatic={true}/>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Results