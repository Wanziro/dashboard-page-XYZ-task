import React from "react";
import Pie from "./Pie";
import { CallReceived } from "@material-ui/icons";
function Contents() {
	return (
		<div className='contents-container'>
			<div className='pie-container'>
				<div className='row'>
					<div className='col-md-4'>
						<h2>SMS Remaining</h2>
						<div className='pie-card'>
							<Pie series={[44, 55, 41, 17, 15]} />
							<div className='number'>40</div>
						</div>
					</div>
					<div className='col-md-4'>
						<h2>SMS Send</h2>
						<div className='pie-card'>
							<Pie series={[44, 55, 41, 17, 15]} />
							<div className='number'>60</div>
						</div>
					</div>
					<div className='col-md-4'>
						<h2>Delivery Status</h2>
						<div className='pie-card'>
							<Pie series={[14, 82]} />
							<div className='number'>82%</div>
						</div>
					</div>
				</div>
			</div>

			{/* other */}
			<div className='mt-2 country'>
				<div className='row'>
					<div className='col'>
						<img
							src='/dashboard-page-xyz-task/af.png'
							alt=''
							style={{ width: "100%" }}
						/>
					</div>
					<div className='col-4'>
						<div className='country-container bg-light pt-2'>
							<h5 className='text-center'>
								<CallReceived /> Stats
							</h5>
							<div className='rw'>
								<img src='/dashboard-page-xyz-task/img2.png' alt='' />
								<span>SENEGAL</span>
							</div>

							<div className='rw'>
								<img src='/dashboard-page-xyz-task/img3.png' alt='' />
								<span>20,040 campnies</span>
							</div>

							<div className='rw'>
								<img src='/dashboard-page-xyz-task/img4.png' alt='' />
								<span>French speaking</span>
							</div>

							<div className='rw'>
								<img src='/dashboard-page-xyz-task/img4.png' alt='' />
								<span>
									Visit&nbsp;
									<a href='https://africa.xyz.senegal'>africa.xyz.senegal</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contents;
