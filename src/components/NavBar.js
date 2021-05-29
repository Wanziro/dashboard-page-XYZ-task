import React from "react";
import { Menu, AccountBalanceWallet, ExitToApp } from "@material-ui/icons";

import "../styles/nav.scss";
function NavBar() {
	return (
		<div className='nav-bar-container'>
			<ul>
				<li style={{ width: "150px" }}>AFRICA | XYZ</li>
				<li style={{ width: "70%" }}>
					<Menu /> Dashboard
				</li>
				<li>
					<AccountBalanceWallet /> 13,0431 CREDITS
				</li>
				<li>
					<ExitToApp /> Logout
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
