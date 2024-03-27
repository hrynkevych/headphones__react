import './style.scss';
// @ts-ignore
import speaker_1 from '../../images/porto-speaker-1.png';
// @ts-ignore
import speaker_2 from '../../images/porto-speaker-2.png';
// @ts-ignore
import speaker_3 from '../../images/porto-speaker-3.png';

export const Recommended = () => {
    return (<section className="page__section" id="recommended">
    <div className="container">
      <h2 className="page__section--title">
        Recommended
      </h2>
      <div className="grid grid--off">
        <div className="grid__item--tablet-2-5 grid__item--desktop-1-4 ">
          <img
            src={speaker_1}
            className="recommended__image"
            alt="Portatable speaker 1"
          />
          <p className="recommended__paragraph">
            Bose portable Smart speaker
          </p>
          <p className="recommended__paragraph recommended__text--weight-400">
            Smart home
          </p>
          <p className="recommended__paragraph">
            $ 399.00
          </p>
        </div>

        <div className="grid__item--tablet-2-5 grid__item--desktop-5-8">
          <img
            src={speaker_2}
            className="recommended__image"
            alt="Portatable speaker 2"
          />
          <p className="recommended__paragraph">
            SoundLink Flex Bluetooth speaker
          </p>
          <p className="recommended__paragraph recommended__text--weight-400">
            Portable bluetooth
          </p>
          <p className="recommended__paragraph">
            $ 149.00
          </p>
        </div>

        <div className="grid__item--tablet-2-5 grid__item--desktop-9-12">
          <img
            src={speaker_3}
            className="recommended__image"
            alt="Portatable speaker 3"
          />
          <p className="recommended__paragraph">
            SoundLink Color Bluetooth speaker II
          </p>
          <p className="recommended__paragraph recommended__text--weight-400">
            Portable bluetooth
          </p>
          <p className="recommended__paragraph">
            $ 129.00
          </p>
        </div>
      </div>
    </div>
  </section>
)
}