import Styles from './Rules.module.css';

export default function Rules() {
    return (<>
        <div className={Styles.container}>
            <h1>Rules</h1>
            <p>1. The game is played with a set of numbers from 1 to 90.</p>
            <p>2. Players have tickets with 15 numbers each.</p>
            <p>3. The game is played by calling out numbers one by one.</p>
            <p>4. Players mark the numbers on their tickets as they are called out.</p>
            <p>5. The first player to complete a line wins.</p>
            <p>6. The first player to complete a full house wins.</p>
        </div>
    </>)
}