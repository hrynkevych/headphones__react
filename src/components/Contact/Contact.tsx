import { SetStateAction, useState } from 'react';
import { Button } from '../Button/Button';
import './style.scss';

export const Contact = () => {

    const text = 'Send';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');   
    
    const handleNameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setName(event.target.value);
      };
    
      const handleEmailChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
      };
    
      const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
      };

    return (
        <section className="page__section contact-us" id="contacts">
            <div className="container">
                <h2 className="page__section--title">
                    Contact us
                </h2>
                <div className="grid grid--off">
                    <div className="grid__item--tablet-1-3 grid__item--desktop-1-5">
                        <form onSubmit={handleSubmit} id="form">
                            <input
                                name="name"
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="Name"
                                className="contact-us__field form-field"
                                required
                            />
                            <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Email"
                                className="contact-us__field form-field"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                className="
                                    contact-us__field
                                    contact-us__field--last
                                    form-field
                                    form-field--textarea"
                                required
                            ></textarea>
                            <Button purpose={text} />
                        </form>
                    </div>

                    <div className="grid__item--tablet-4-6 grid__item--desktop-8-12">
                        <div className="contact-us__info">
                            <div className="contact-us__info-title">
                                Phone
                            </div>
                            <a
                                href="tel:1 234 5555-55-55"
                                className="contact-us__info-link">
                                +1 234 5555-55-55
                            </a>
                        </div>

                        <div className="contact-us__info">
                            <div className="contact-us__info-title">
                                Email
                            </div>
                            <a
                                href="mailto:hello@miami.com"
                                className="contact-us__info-link">
                                hello@miami.com
                            </a>
                        </div>

                        <div className="contact-us__info">
                            <div className="contact-us__info-title">
                                Adress
                            </div>
                            <a
                                href="https://www.google.com/maps/place/400+N+1st+Ave+STE+700,+Minneapolis,+MN+55401,+США/@44.9813258,-93.2731311,17z/data=!3m1!4b1!4m5!3m4!1s0x52b3328fdf233887:0x3348e5113ed2472d!8m2!3d44.9813258!4d-93.2731311"
                                className="contact-us__info-link"
                                target="_blank"
                            >
                                400 first ave. <br />
                                suite 700<br />
                                Minneapolis, MN 55401
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
