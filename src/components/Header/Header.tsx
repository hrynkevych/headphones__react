import './style.scss';

// @ts-ignore
import logo from '../../images/logo.png';

export const Header = () => {
    return (
        <header className="page__section header">
            <div className="container">
                <div className="header__content">
                    <div className="header__top">
                        <a href="#home" className="logo">
                            <img
                                src={logo}
                                alt="Bose logo"
                                className="logo__image"
                            />
                        </a>
                        <div className="header__link">
                            <a
                                href="tel:1 234 5555-55-55"
                                className="icon icon--phone"
                            >
                                <div className="icon__tooltip">
                                    +1 234 555-55-55
                                </div>
                            </a>
                            <a href="#menu" className="icon icon--menu"></a>
                        </div>
                    </div>
                    <h1 className="header__title">
                        The world shades.<br/>
                            Your music shines
                    </h1>
                </div>
            </div>
        </header>
    );
}