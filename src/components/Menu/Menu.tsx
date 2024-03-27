import './style.scss';

// @ts-ignore
import logo from '../../images/logo.png';

export const Menu = () => {
  return (
    <nav className="page__menu menu" id="menu">
      <div className="container">
        <div className="menu__content">
          <div className="menu__top">
            <a href="#home" className="logo">
              <img
                src={logo}
                alt="Bose logo"
                className="logo__image"
              />
            </a>
            <a href="#" className="icon icon--cross"></a>
          </div>
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#home" className="menu__link">
                Home
              </a>
            </li>

            <li className="menu__item">
              <a href="#recommended" className="menu__link">
                Recommended
              </a>
            </li>

            <li className="menu__item">
              <a href="#Categories" className="menu__link">
                Categories
              </a>
            </li>

            <li className="menu__item">
              <a href="#how-to-buy" className="menu__link">
                How to buy
              </a>
            </li>

            <li className="menu__item">
              <a href="#contacts" className="menu__link">
                Contacts
              </a>
            </li>
          </ul>
          <a
            href="+1 234 5555-55-55"
            className="menu__call menu__call--phone"
          >
            +1 234 5555-55-55
          </a>
          <a
            href="+1 234 5555-55-55"
            className="menu__call menu__call--action"
          >
            Call to order
          </a>
        </div>
      </div>
    </nav>
  );
} 