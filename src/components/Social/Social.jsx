import * as React from "react";
import { iconList } from '../../icons/index';
import { SocialWrapper, NlinkStyled, LinkWrapper } from './SocialStyles';

const Social = () => {

	console.log(iconList.map((icon) => icon))
	return (
		<SocialWrapper>
			{iconList.map((icon) => (
				<LinkWrapper>
					<NlinkStyled linkUrl={icon.ref} image={icon}  />
				</LinkWrapper>
			))}
		</SocialWrapper>
	)
}

export default Social;