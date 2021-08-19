import * as React from "react";
import { iconList } from '../../icons/index';
import { SocialWrapper, NlinkStyled } from './SocialStyles';

const Social = () => {

	console.log(iconList.map((icon) => icon))
	return (
		<SocialWrapper class="social-links">
			{iconList.map((icon) => (
				<div class="link">
					<NlinkStyled linkUrl={icon.ref} image={icon}  />
				</div>
			))}
		</SocialWrapper>
	)
}

export default Social;