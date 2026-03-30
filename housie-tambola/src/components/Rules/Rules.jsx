import Styles from './Rules.module.css';

export default function Rules() {
    return (<>
        <h2>RULES</h2>
        <div className={Styles.container}>
            <div className={Styles.ruleBox}>
                <h4>HOW TO PLAY</h4>
                <ul>
                    <li>A caller calls out numbers randomly one by one between 1 and 90</li>
                    <li>Every player has a ticket with 15 numbers each</li>
                    <li>Players mark the numbers on their tickets as they are called out</li>
                    <li>The first player to cross all the numbers on their ticket wins the game</li>
                    <li>There are other pre-decided rules as well that can be completed to win intermediate prizes</li>
                </ul>
            </div>

            <div className={Styles.ruleBox}>
                <h4>HOW TO PLAY ON THIS WEBSITE</h4>
                <ul>
                    <li>Every player must open the website on their phones and generate a ticket</li>
                    <li>The caller will be set on automated or manual mode on a separate device to call out numbers one by one</li>
                    <li>The speed of the caller can be adjusted as per the requirement or can also be used to call out numbers manually</li>
                    <li>Players must mark the numbers by tapping the matching number on their tickets as they are called out</li>
                </ul>
            </div>


            <div className={Styles.ruleBox}>
                <h4>COMMON WINNING PATTERNS</h4>
                <ul>
                    <li>Early 5: First 5 numbers to be crossed</li>
                    <li>Top line: Cross all the numbers in the top line</li>
                    <li>Middle line: Cross all the numbers in the middle line</li>
                    <li>Bottom line: Cross all the numbers in the bottom line</li>
                    <li>Four corners: Cross all the corner numbers</li>
                    <li>Full house: Cross all the numbers on the ticket</li>
                </ul>
            </div>

        </div>
    </>)
}