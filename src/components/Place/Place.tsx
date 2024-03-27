import { Button } from '../Button/Button';
import './style.scss';

// @ts-ignore
import inear from '../../images/headphones-inear.png';
// @ts-ignore
import closed from '../../images/headphones-closed.png';
// @ts-ignore
import speaker from '../../images/speaker-1.png';
// @ts-ignore
import speaker_2 from '../../images/speaker-2.png';
// @ts-ignore
import glasses_1 from '../../images/glasses-1.png';
// @ts-ignore
import glasses_2 from '../../images/glasses-2.png';

export const Place = () => {

  const text = 'View all';

  return (
    <section className="page__section" id="Categories">
      <div className="container">
        <h2 className="page__section--title">
          Browse Bose
          <br />
          products by
          <br />
          category
        </h2>
        <div className="place">
          <div className="place__categories">
            <div className="grid">
              <div className="grid__item--tablet-1-4 grid__item--desktop-1-8">
                <div className="place__image-container">
                  <img
                    src={inear}
                    alt="inear-headphones"
                    className="place__image"
                  />
                </div>
              </div>
              <div className="grid__item--tablet-5-6 grid__item--desktop-9-12">
                <div className="place__image-container">
                  <img
                    src={closed}
                    alt="closed-headphones"
                    className="place__image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="place__description">Headphones and earbuds</div>
          <div className="grid">
            <div className="grid__item--tablet-1-4 grid__item--desktop-1-8">
              <div className="place__image-container">
                <img
                  src={speaker}
                  alt="inear-headphones"
                  className="place__image"
                />
              </div>
            </div>
            <div className="grid__item--tablet-5-6 grid__item--desktop-9-12">
              <div className="place__image-container">
                <img
                  src={speaker_2}
                  alt="closed-headphones"
                  className="place__image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="place__description">
          Speakers
        </div>

        <div className="grid">
          <div className="grid__item--tablet-1-2 grid__item--desktop-1-4">
            <div className="place__image-container">
              <img
                src={glasses_1}
                alt="inear-headphones"
                className="place__image"
              />
            </div>
          </div>
          <div className="grid__item--tablet-3-6 grid__item--desktop-5-12">
            <div className="place__image-container">
              <img
                src={glasses_2}
                alt="closed-headphones"
                className="place__image"
              />
            </div>
          </div>
        </div>
        <div className="place__description">
          Audio sunglasses
        </div>
        <Button purpose={text} />
      </div>

    </section>

  )

}