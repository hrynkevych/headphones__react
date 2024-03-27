import './style.scss';

type Props = {
    purpose: string;
};

export const Button: React.FC<Props> = ({ purpose }) => {

    if (purpose === 'View all') {
        return (
            <div className="grid grid--off">
                <div className="grid__item--tablet-2-5 grid__item--desktop-5-8">
                    <a href="#" className="button">
                        {purpose}
                    </a>
                </div>
            </div>
        )
    }

    if (purpose === 'Send') {
        return (
            <button className="button">
                {purpose}
            </button>
        )
    }

    return null;
}
