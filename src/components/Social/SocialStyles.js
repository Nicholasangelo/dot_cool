import styled from 'styled-components';
import Nlink from '../Nlink/Nlink';
export const SocialWrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 40px;
	padding-right: 90px;
	width: 100%;
	justify-content: end;
	@media (max-width: 898px) {
		justify-content: center;
		padding-right: 0px;
	}
`
export const LinkWrapper = styled.div`
	width: 50px;
`
export const NlinkStyled = styled(Nlink)`
text-decoration: none;
	&:hover{
		border-radius: 50%;
		box-shadow: 2px 2px 6px inset pink;
		cursor: pointer;
	}
`
