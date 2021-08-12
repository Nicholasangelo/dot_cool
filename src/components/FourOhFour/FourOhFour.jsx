import * as React from "react"
import jenny404 from '../../images/Jenny404.jpg';
import { pageStyle, imgStyle } from './FourOhFourStyles';

// markup
const FourOhFour = () => {
	return (
		<main style={pageStyle}>
			<title>Not found</title>
			<section>
				<img style={imgStyle} src={jenny404} />
			</section>
		</main>
	)
}

export default FourOhFour
