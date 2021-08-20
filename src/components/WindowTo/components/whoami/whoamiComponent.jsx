import * as React from "react";
import cowboyNick from '../../../../images/cowboyNick.jpg';
import { imgStyles } from './whoamiStyled';

const WhoamiComponent = () => {
	return (
		<div className="whoiam">
			<img style={imgStyles} src={cowboyNick} />
		</div>
	)
}

export default WhoamiComponent;