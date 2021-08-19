import * as React from "react";
import { windowStyles, imgStyles } from "./WindowToStyles";
import cowboyNick from '../../images/cowboyNick.jpg';
const WindowTo = () => {
	return (
		<section class="window-to" style={windowStyles}>
			<img style={imgStyles} src={cowboyNick} />
		</section>
	)
}

export default WindowTo