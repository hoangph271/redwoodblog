import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <header>
        <h1>AboutPage</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.tsx</code>
      </p>
      <p>
        My default route is named <code>about</code>, link to me with `
        <Link to={routes.about()}>About</Link>`
      </p>
    </>
  )
}

export default AboutPage
