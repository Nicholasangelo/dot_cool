import styled from 'styled-components';
import Nlink from '../Nlink/Nlink';
export const SocialWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 90%;
	justify-content: flex-end;
	height: 40px;
`

export const NlinkStyled = styled(Nlink)`
text-decoration: none;
	&:hover{
		border-radius: 50%;
		box-shadow: 2px 2px 6px inset pink;
		cursor: pointer;
	}
`
