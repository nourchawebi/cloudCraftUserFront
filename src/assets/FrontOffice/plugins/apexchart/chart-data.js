'use strict';

$(document).ready(function() {

	function generateData(baseval, count, yrange) {
		var i = 0;
		var series = [];
		while (i < count) {
			var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
			var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
			var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

			series.push([x, y, z]);
			baseval += 86400000;
			i++;
		}
		return series;
	}
	
	// Chart

	if($('#instructor_chart').length > 0) {
	var options = {
			series: [{
				name: "Current month",
				data: [0, 10, 40, 43, 40, 25, 35, 25, 40, 30]
			},
		],
		colors: ['#FF9364'],
          chart: {
          height: 300,
          type: 'area',
		  toolbar: {
				show: false
			},
          zoom: {
            enabled: false
          }
        },
		markers: {
			size: 3,
		},
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
		  width: 3,
        },
		legend: {
			position: 'top',
			horizontalAlign: 'right',
		 },
        grid: {
          show: false,
        },
		yaxis: {
			axisBorder: {
				show: true,
			},
		},
        xaxis: {
          categories: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			}
    };

    var chart = new ApexCharts(document.querySelector("#instructor_chart"), options);
    chart.render();
	}
	
	// Simple Column
	if($('#order_chart').length > 0) {
	var sCol = {
		chart: {
			height: 350,
			type: 'bar',
			toolbar: {
			  show: false,
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '20%',
				endingShape: 'rounded', 
				startingShape: 'rounded'  
			},
		},
		 colors: ['#1D9CFD'],
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		series: [{
			name: 'Revenue',
			data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
		}],
		xaxis: {
			categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
		},
		fill: {
			opacity: 1

		},
		tooltip: {
			y: {
				formatter: function (val) {
					return "$ " + val + " thousands"
				}
			}
		}
	}

	var chart = new ApexCharts(
		document.querySelector("#order_chart"),
		sCol
	);

	chart.render();
	}
});