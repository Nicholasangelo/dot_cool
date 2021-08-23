import * as React from 'react';
import { iconList } from '../../icons';
import { SocialWrapper, NlinkStyled, LinkWrapper } from './SocialStyles';

const Social = () => {

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
