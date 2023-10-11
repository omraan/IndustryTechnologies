"use client";
import { Chart } from "chart.js";
import "chart.js/auto";
import "chartjs-adapter-moment";
import { format } from "date-fns";
import { useEffect } from "react";
import { Line } from "react-chartjs-2";

interface ChartData {
	x: number;
	y: number;
}

interface ChartProps {
	data: ChartData[];
}

function ChartComponent({ data }: ChartProps) {
	const chartData = {
		datasets: [
			{
				label: "Data",
				data: data.map((d) => ({ x: d.x, y: d.y })),
				borderColor: "blue",
				fill: false,
			},
		],
	};
	useEffect(() => {
		console.log(data);
	}, []);

	const chartOptions = {
		scales: {
			x: {
				position: "bottom",
				type: "time",
				time: {
					unit: "day",
					displayFormats: {
						day: "MMM D",
					},
				},
				ticks: {
					autoSkip: true,
					maxTicksLimit: 20,
					maxRotation: 0,
					callback: function (value: any) {
						return format(new Date(value), "MMM d");
					},
				},
			},
			y: {
				beginAtZero: true,
			},
		},
	};
	return <></>;
	// return <div>{data && <Line data={chartData} options={chartOptions} />}</div>;
}

export default ChartComponent;
