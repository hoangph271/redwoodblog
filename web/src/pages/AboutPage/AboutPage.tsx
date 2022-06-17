import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.tsx</code>
      </p>
      <p>
        My default route is named <code>about</code>
      </p>
    </>
  )
}

export default AboutPage
