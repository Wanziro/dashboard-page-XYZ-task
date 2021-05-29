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
						<img src='/af.jpg' alt='' style={{ width: "100%" }} />
					</div>
					<div className='col-4'>
						<div className='country-container bg-light  pt-2'>
							<h3>
								<CallReceived /> Stats
							</h3>
							<div className='row'>
								<div className='col-1'>
									<img src='/img2.jpg' alt='' />
								</div>
								<div className='col'>SENEGAL</div>
							</div>

							<div className='row'>
								<div className='col-1'>
									<img src='/img3.jpg' alt='' />
								</div>
								<div className='col'>20,040 campnies</div>
							</div>
							<div className='row'>
								<div className='col-1'>
									<img src='/img4.jpg' alt='' />
								</div>
								<div className='col'>French speaking</div>
							</div>
							<div className='row'>
								<div className='col-1'>
									<img src='/img5.jpg' alt='' />
								</div>
								<div className='col'>
									<span>
										Visit
										<a href='https://africa.xyz.senegal'>africa.xyz.senegal</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contents;
