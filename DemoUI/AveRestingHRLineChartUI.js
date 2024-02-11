class AveRestingHRLineChartUI {
	constructor(aveRestingHRLineChart) {
		this.aveRestingHRLineChart = aveRestingHRLineChart;
		this.currentFilter = this.aveRestingHRLineChart.AverageRestingHRFilter.WEEKLY; // default value
	}

	setUp() {
		this.attachEventListeners();
	}

	attachEventListeners() {
		// Attach event listeners
		document.getElementById('timeInterval').addEventListener('change', () => this.handleTimeIntervalChange());
		document.getElementById('clearChartButton').addEventListener('click', () => this.clearChartClick());
		document.getElementById('setThresholdButton').addEventListener('click', () => this.setThresholdsClick());
		document.getElementById('addTextDataButton').addEventListener('click', () => this.addTextData());
		document.getElementById('generateValuesButton').addEventListener('click', () => this.generateValues());
		document.getElementById('addHRButton').addEventListener('click', () => this.addHRClick());
		document.getElementById('updateNoDataText').addEventListener('click', () => this.updateNoDataText());
	}

	// Function to handle adding HR
	addHRClick() {
		// Retrieve HR and Date values
		var hrValue = document.getElementById('hr').value;
		var dateValue = document.getElementById('hrDate').value;
		console.log('date in input ->' + dateValue);

		if (hrValue === '' || dateValue === '') {
			alert('Please enter correct values.');
			return;
		}

		const newData = {
			x: dateValue,
			y: parseInt(hrValue),
		};

		this.aveRestingHRLineChart.addData(newData, this.currentFilter);

		// Clear input fields after adding HR
		document.getElementById('hr').value = '';
		document.getElementById('hrDate').value = '';
	}

	updateNoDataText() {
		const newNoDataTextString = document.getElementById('noDataText').value;
		console.log('New Line Indicator Value:', newNoDataTextString);
		this.aveRestingHRLineChart.setNoDataText(newNoDataTextString);
	}

	// Function to handle time interval selection change
	handleTimeIntervalChange() {
		const timeIntervalFilter = document.getElementById('timeInterval').value;
		console.log('Selected Time Interval:', timeIntervalFilter);
		switch (timeIntervalFilter) {
			case 'week':
				this.currentFilter = this.aveRestingHRLineChart.AverageRestingHRFilter.WEEKLY;
				this.aveRestingHRLineChart.updateChart(this.aveRestingHRLineChart.AverageRestingHRFilter.WEEKLY);
				break;
			case 'month':
				this.currentFilter = this.aveRestingHRLineChart.AverageRestingHRFilter.MONTHLY;
				this.aveRestingHRLineChart.updateChart(this.aveRestingHRLineChart.AverageRestingHRFilter.MONTHLY);
				break;
			case 'year':
				this.currentFilter = this.aveRestingHRLineChart.AverageRestingHRFilter.YEARLY;
				this.aveRestingHRLineChart.updateChart(this.aveRestingHRLineChart.AverageRestingHRFilter.YEARLY);
				break;
		}

		this.aveRestingHRLineChart.myChart.update();
	}

	addTextData() {
		const textData = document.getElementById('textData').value.trim();
		if (textData === '') {
			alert('Please enter data in the text area.');
		} else {
			const lines = textData.split('\n');
			const parsedData = [];

			lines.forEach((line) => {
				const [dateStr, valueStr] = line.split(',');
				const date = dateStr;
				const value = parseFloat(valueStr);
				parsedData.push({ x: date, y: value });
			});
			//console.log('parse data is ' + typeof(parsedData));
			this.aveRestingHRLineChart.addMultipleData(parsedData, this.currentFilter);
		}
	}

	generateValues() {
		// Retrieve input values
		const max = document.getElementById('max').value;
		const min = document.getElementById('min').value;
		const lengthValues = document.getElementById('lengthValues').value;
		const startDate = document.getElementById('startDate').value;

		if (min === '' || max === '' || lengthValues === '' || startDate === '') {
			alert('Please enter correct values.');
		} else if (parseInt(min) > parseInt(max)) {
			alert('Please enter correct values.');
		} else if (parseInt(min) < this.aveRestingHRLineChart.thresholds.MIN) {
			alert('Input is below minimum value. Please enter correct values.');
		} else {
			console.log('generate start date - ' + startDate);
			let dummyData = [];
			const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
			let start = new Date(startDate + 'T00:00:00');
			for (let i = 0; i < lengthValues; i++) {
				const currentDate = new Date(start.getTime() + i * oneDay);
				// Set hours, minutes, seconds, and milliseconds to zero
				currentDate.setHours(0, 0, 0, 0);
				const randomY = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min); // Random number between 50 and 150
				dummyData.push({ x: currentDate, y: randomY });
			}
			this.aveRestingHRLineChart.setChartData(dummyData, this.currentFilter);
		}
	}

	clearChartClick() {
		this.aveRestingHRLineChart.clearChart();
	}

	setThresholdsClick() {
		const lowInput = document.getElementById('lowThreshold').value.trim();
		const moderateInput = document.getElementById('moderateThreshold').value.trim();
		const highInput = document.getElementById('highThreshold').value.trim();

		if (lowInput === '' || moderateInput === '' || highInput === '') {
			alert('Please enter correct values.');
		} else {
			const low = parseInt(lowInput);
			const moderate = parseInt(moderateInput);
			const high = parseInt(highInput);

			if (!isNaN(low) && !isNaN(moderate) && !isNaN(high) && low <= moderate && moderate <= high) {
				this.aveRestingHRLineChart.setThresholds(low, moderate, high);
			} else {
				alert('Please enter valid threshold values.');
			}
		}
	}
}

// Export both classes for use in other scripts
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { AveRestingHRLineChartUI };
} else {
    window.AveRestingHRLineChartUI = AveRestingHRLineChartUI;
}
