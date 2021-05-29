import React from "react";
import DashboardIcon from "@material-ui/icons/ImportantDevices";
import SmsIcon from "@material-ui/icons/Send";
import TeamIcon from "@material-ui/icons/Contacts";
import SubscriptionIcon from "@material-ui/icons/History";
import BusinessIcon from "@material-ui/icons/Public";
import UrlIcon from "@material-ui/icons/LocalDining";
import PaymentIcon from "@material-ui/icons/Payment";
import WalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ModuleIcon from "@material-ui/icons/ViewModule";
import PriceIcon from "@material-ui/icons/Euro";
import SupportIcon from "@material-ui/icons/SportsSoccer";
import Expand from "@material-ui/icons/ExpandMore";
function SideBar() {
	return (
		<div className='side-bar'>
			<div>
				<img src='/dashboard-page-xyz-task/img1.jpg' alt='' />
			</div>
			<div className='sidebar-container'>
				<ul>
					<li className='active'>
						<DashboardIcon /> Dashboard
					</li>
					<li>
						<TeamIcon />
						Team members
					</li>
					<li endicon={<Expand />}>
						<SmsIcon />
						Direct SMS
					</li>
					<li endicon={<Expand />}>
						<SubscriptionIcon />
						Subscriptions
					</li>
					<li endicon={<Expand />}>
						<BusinessIcon />
						Business page
					</li>
					<li endicon={<Expand />}>
						<PaymentIcon />
						Payments
					</li>
					<li>
						<UrlIcon />
						URL Shortner
					</li>
					<li>
						<WalletIcon />
						Wallets
					</li>
					<li>
						<ModuleIcon />
						Modules & API
					</li>
					<li>
						<PriceIcon />
						Price List
					</li>
					<li>
						<SupportIcon />
						Support
					</li>
					<li></li>
				</ul>
			</div>
		</div>
	);
}

export default SideBar;
