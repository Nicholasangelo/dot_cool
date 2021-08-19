import * as React from "react"
import jenny404 from '../../images/Jenny404.jpg';
import { PageStyle, imgStyle } from './FourOhFourStyles';

const FourOhFour = () => {
	return (
		<PageStyle>
			<title>Not found</title>
			<section>
				<img style={imgStyle} src={jenny404} />
			</section>
		</PageStyle>
	)
}

export default FourOhFour
