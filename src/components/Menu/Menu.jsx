import * as React from "react";
import './menu.css';
import "@fontsource/federo";

const fontType = {
	fontFamily: "'Federo', sans-serif",
} 
const Menu = () => {
	return (
		<div class="menu">
			<h3 style={fontType} class="nav" data-id="whoamiDiv">WHO I AM</h3>
			<h3 style={fontType} class="nav" data-id="whatiknowDiv">WHAT I KNOW</h3>
			<h3 style={fontType} class="nav" data-id="whatidoDiv">WHAT I'VE DONE</h3>
			<h3 style={fontType} class="nav" data-id="sketchbookDiv">DOODLES</h3>
		</div>
	)
}

export default Menu;