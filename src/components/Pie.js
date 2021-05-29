import React from "react";
import ReactApexChart from "react-apexcharts";

function Pie({ series }) {
	const op = {
		series: series,
		labels: ["A", "B", "C", "D", "E"],
		options: {
			chart: {
				type: "donut",
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: "bottom",
						},
					},
				},
			],
		},
	};
	return (
		<div id='chart'>
			<ReactApexChart options={op.options} series={op.series} type='donut' />
		</div>
	);
}

export default Pie;

// class ApexChart extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state =
// 	}

// 	render() {
// 		return (
// 			<div id='chart'>
// 				<ReactApexChart
// 					options={this.state.options}
// 					series={this.state.series}
// 					type='donut'
// 				/>
// 			</div>
// 		);
// 	}
// }

// //   const domContainer = document.querySelector('#app');
// //   ReactDOM.render(React.createElement(ApexChart), domContainer);
