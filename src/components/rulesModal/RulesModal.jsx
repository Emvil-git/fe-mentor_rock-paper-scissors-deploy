import { useAppDispatch } from "../../hooks/reduxHooks";
import { useBEM } from "../../hooks/useBEM";
import { setIsModalShow } from "../../store/slices/gameSlice";

const RulesModal = () => {
    const [B,E] = useBEM('rules')
    const dispatch = useAppDispatch();

    return(
        <div className={B()}>
            <main className={E('cont')}>
                <header className={E('header')}>
                    <h2>RULES</h2>
                    <div onClick={() => {dispatch(setIsModalShow(false))}} className={E('close-cont')}>
                        <img className={E('icon')} src="images/icon-close.svg" alt="" />
                    </div>
                </header>
                <img className={E('rules-img')} src="images/image-rules-bonus.svg" alt="rules of the game" />
            </main>
        </div>
    )
}

export default RulesModal