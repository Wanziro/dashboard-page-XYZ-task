import React from "react";
import { Menu, AccountBalanceWallet, ExitToApp } from "@material-ui/icons";

import "../styles/nav.scss";
function NavBar() {
	return (
		<div className='nav-bar-container'>
			<ul>
				<li style={{ width: "150px" }}>AFRICA | XYZ</li>
				<li className='w-100'>
					<table className='w-100'>
						<tr>
							<td style={{ width: "80%" }}>
								<Menu /> Dashboard
							</td>
							<td>
								<AccountBalanceWallet /> 13,0431 CREDITS
							</td>
							<td>
								<ExitToApp /> Logout
							</td>
						</tr>
					</table>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
