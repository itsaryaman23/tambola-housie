import Styles from './Header.module.css';

const Header = ({ view }) => {
    const viewClass = view === "Home" ? Styles.headerHome : Styles.headerNotHome;

    return (
        <div className={`${Styles.headerContainer} ${viewClass}`} id="header">
            <h1 className={Styles.heading}>TAMBOLA HOUSIE</h1>
        </div>
    );
}
export default Header;