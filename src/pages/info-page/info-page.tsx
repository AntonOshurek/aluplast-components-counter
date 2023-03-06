//components
import Header from '../../components/header/header';
//styles
import './info-page.scss';
import './variables.css';
//icons
import GitHubIcon from './icons/git-hib-icon';
import InstagramIcon from './icons/instagram-icon';

const InfoPage = (): JSX.Element => {
  return (
    <div className='info-page'>
      <Header/>

      <main className='info-page__main'>
        <section className="info">
          <h2 className="info__title">Info about application</h2>
          <p className="info__text">
            Hi everyone! My name is Anton and this counter was specially made for the Aluplast company in Poznań!
          </p>
          <div className="info__stack">
            <h3 className="info__subtitle">technologies stack:</h3>
            <ul className="info__text info__stack-list">
              <li>
                <code>javaScript</code>
              </li>
              <li>
                <code>React.JS</code>
              </li>
              <li>
                <code>TypeScript</code>
              </li>
              <li>
                <code>Redux</code>
              </li>
              <li>
                <code>SASS</code>
              </li>
            </ul>
          </div>
          <p className="info__text">
            Check all my projects in my GitHub profile :) and subscribe in another's social media.
          </p>

          <div className="info__socials">
            <a className="info__social-link" href="https://github.com/AntonOshurek" target='blank'>
              <GitHubIcon/>
            </a>
            <a href="https://www.instagram.com/ooshurek/" target='blank'>
              <InstagramIcon/>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
};

export default InfoPage;
