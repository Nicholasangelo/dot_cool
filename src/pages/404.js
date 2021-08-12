import * as React from "react"
import jenny404 from '../images/Jenny404.jpg';

const pageStyle = {
  display: 'flex',
  width: '100%',
}

const imgStyle = {
  width: '100%'
}
// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyle}>
      <title>Not found</title>
      <section>
        <img style={imgStyle} src={jenny404} />
      </section>
    </main>
  )
}

export default NotFoundPage
