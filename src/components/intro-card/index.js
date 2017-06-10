import {h, Component} from 'preact';
import { Link } from 'preact-router/match';

import style from './style.scss'

export default class Intro extends Component {
  render() {
    let { swapTab } = this.props
    return (
      <div className={`${style.introCard} container`}>
        <div className="title">
          SYDPWA
        </div>
        <div className={style.logo}>
          <svg width="196" height="213" viewBox="0 0 196 213" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="2.07%" y1="91.29%" x2="98.55%" y2="94.99%" id="a">
                <stop stop-color="#FB71C1" offset="0%"/>
                <stop stop-color="#FE9839" offset="18.11%"/>
                <stop stop-color="#A82F7E" offset="44.43%"/>
                <stop stop-color="#7078F2" offset="76.65%"/>
                <stop stop-color="#56BEC6" offset="100%"/>
              </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <path d="M0 59.68c0-3.87 2.74-8.53 6.1-10.4L91.9 1.4c3.36-1.87 8.84-1.87 12.2 0l85.8 47.87c3.36 1.88 6.1 6.55 6.1 10.4v94.25c0 3.87-2.75 8.5-6.13 10.38l-85.74 47.2c-3.4 1.87-8.88 1.87-12.26 0L6.13 164.3C2.73 162.43 0 157.78 0 153.92V59.68z" fill="#212734"/>
              <path d="M43.95 105.07c5.13 3.23 8.25 7.8 10.18 13.24.24.7.26 1.5.14 2.2-.16.9-.56 1.7-1.5 2-.97.3-1.8 0-2.5-.7-.75-.7-1.1-1.6-1.4-2.6-2.4-7.7-9.9-12.7-17.9-11.8-.7.1-1.4.3-2.12.4-1.1.2-2.13.1-3.06-.5-1.3-.8-1.4-2.4-.3-3.4.5-.5 1.2-.8 2-1 5.8-1.2 11.3-.5 16.4 2.4zm.4 16.2H69.1c-2.17-19.96-18.2-35.2-37.7-35.2-1.84 0-3.67.13-5.46.4-1.48.24-2.85-.85-3.07-2.4-.2-1.54.82-2.97 2.3-3.2 2.04-.3 4.14-.46 6.22-.46 4.6 0 9.1.8 13.3 2.3L41.3 67c-.13-.88.08-1.8.6-2.48.6-.67 1.4-1.03 2.27-.97 20.1 1.4 37.5 14.43 45.3 33.62 7.1-6.66 16.4-10.4 26-10.4 5.2 0 10.26 1.04 15.05 3.13 1.4.6 2.03 2.25 1.45 3.7-.56 1.44-2.14 2.12-3.52 1.52-4.1-1.8-8.5-2.7-12.98-2.7-9.1 0-17.8 3.83-24.1 10.58 1.52 5.24 2.3 10.62 2.3 16 0 .73-.04 1.5-.07 2.3h44.03c.4 0 .8.08 1.14.25l8.56 4.1h4.95c.08-.55.2-1.1.6-1.56l14.4-18.4c-9.7-1.4-19.86.8-28.4 6.5-.95.6-2.2.5-3.1-.2-5.2-2.4-10.7-3.6-16.44-3.6h-1.17c-1.48 0-2.68-1.2-2.7-2.8-.06-1.57 1.1-2.87 2.6-2.9h1.24c6.3 0 12.3 1.22 18 3.73 7.4-4.6 15.7-7 24.1-7 3.9 0 7.8.5 11.5 1.5.9.24 1.7.94 1.9 1.86.3.9.2 1.9-.4 2.67l-15.7 19.97h19.9c1.5 0 2.7 1.27 2.7 2.84s-1.2 2.8-2.7 2.8h-31.8c-.4 0-.8-.07-1.1-.25l-8.56-4.1-119.74-.05c-1.5 0-2.7-1.23-2.7-2.8 0-1.54 1.2-2.8 2.7-2.8H39c-2.16-3.2-5.9-4.76-10.1-4.12-1.48.22-2.16-.1-2.57-1.2-.4-1.1.07-2.3 1.2-3 .6-.37 1.3-.53 2-.63 3-.43 6.2.27 9.82 2.47 2.4 1.5 4.16 3.8 5 6.44zm4.38-25.36c7.48 4.7 12.25 11.1 14.38 19.4.5 1.8 0 3.2-1.3 3.7-1.2.5-2.7-.2-3.5-1.8-.2-.4-.4-.9-.5-1.4-3.5-12.9-16.2-20.9-29.4-18.5-1.3.3-2.5.2-3.6-.6-.7-.5-1.2-1.2-1.1-2.2.1-1 .8-1.5 1.6-1.9l1.2-.3c8.1-1.5 15.6-.1 22.4 3.9zm39.55 25.4c.03-.8.05-1.5.05-2.3 0-5.3-.83-10.6-2.46-15.7-.03-.1 0-.2-.03-.2-5.82-18-20.6-30.7-38.35-33.4l3 14.2c.1.5 0 .9-.1 1.3 13.1 6.8 22.5 20.2 24 36.3h13.8z" fill="url(#a)" fill-rule="nonzero" transform="translate(0 9)"/>
            </g>
          </svg>
        </div>

        <p className={style.subtitle}>
          We're Sydney Progressive Web Apps Developer Group.
        </p>
        <nav className={style.nav}>
          <div className="content">
            <Link activeClassName="active" href="/">
              Events
            </Link>
            <Link activeClassName="active" href="/speakers">
              Speakers
            </Link>
            <Link activeClassName="active" href="/socialise">
              Socialise
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
