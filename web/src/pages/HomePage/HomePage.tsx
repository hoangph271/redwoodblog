import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <main>
        <h1>HomePage</h1>
        <p>
          Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
        </p>
        <p>
          My default route is named <code>home</code>
        </p>
      </main>
    </>
  )
}

export default HomePage
