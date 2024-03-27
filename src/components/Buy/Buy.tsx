import './style.scss';

export const Buy = () => {
    return (
        <section className="page__section buy" id="how-to-buy">
        <div className="container">
          <div className="grid grid--off">
            <div className="grid__item--tablet-1-3 grid__item--desktop-1-4">
              <h2 className="buy__title">
                Why buy direct
                <br/>
                from Bose
              </h2>
            </div>
            <div className="grid__item--tablet-4-6 grid__item--desktop-6-10">
              <ul className="buy__list">
                <li className="buy__item">
                  Free 2-day shipping and returns
                </li>
                <li className="buy__item">
                  90-day risk-free trial
                </li>
                <li className="buy__item">
                  World class customer service
                </li>
                <li className="buy__item">
                  My Bose account management
                </li>
              </ul>
              <p className="buy__text">
                A great product is more than what’s in the box. It’s a promise of premium performance, world-class support, and everything you expect from a trusted brand. It’s just one of many reasons why you’ll shop with confidence on Bose.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}