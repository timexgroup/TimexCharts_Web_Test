class TileHeartRateLineChartUI {
	constructor(heartRateChart) {
		this.heartRateChart = heartRateChart;
		this.updateList();
	}

	setUp() {
		this.attachEventListeners();
		this.setInitialElementValues();
	}

	attachEventListeners() {
		// Attach event listeners
		document.getElementById('addDataButton').addEventListener('click', () => this.addData());
		document.getElementById('generateValuesButton').addEventListener('click', () => this.generateValuesClick());
		document.getElementById('clearValuesButton').addEventListener('click', () => this.clearValuesClick());
		document.getElementById('addTextDataButton').addEventListener('click', () => this.addTextData());
		document.getElementById('setMaxValueButton').addEventListener('click', () => this.setMaxValueClick());
		document.getElementById('setThresholdButton').addEventListener('click', () => this.setThresholdsClick());
		document.getElementById('addHRButton').addEventListener('click', () => this.addIntervalData());
		document
			.getElementById('changeConnectDurationButton')
			.addEventListener('click', () => this.changeConnectDurationClick());
		document
			.getElementById('connectAllPointsToggle')
			.addEventListener('change', () => this.connectAllPointsToggle());
	}

	setInitialElementValues() {
		// Load default values to elements
		document.getElementById('connectDurationInput').value = this.heartRateChart.connectDuration;
		document.getElementById('connectAllPointsToggle').checked = this.heartRateChart.connectAllPoints;
	}

	addData() {
		console.log('passing data...');
		const hrInput = document.getElementById('hr').value.trim();
		const timeInput = document.getElementById('time').value.trim();

		if (hrInput === '' || timeInput === '') {
			alert('Please enter correct values.');
		} else if (parseInt(hrInput) > this.heartRateChart.thresholds.MAX) {
			alert('Input exceeds max value. Please enter correct values.');
		} else if (parseInt(hrInput) < this.heartRateChart.thresholds.MIN) {
			alert('Input is below minimum value. Please enter correct values.');
		} else {
			const newData = {
				hr: hrInput,
				time: timeInput,
			};
			
			console.log(newData);
			this.heartRateChart.addData(newData);
			// Reset input values
			document.getElementById('hr').value = '';
			document.getElementById('time').value = '';
			this.updateList();
		}
	}

	addTextData() {
		const textData = document.getElementById('textData').value.trim();
		console.log('add text data here');
		if (textData === '') {
			alert('Please enter data in the text area.');
		} else {
			const lines = textData.split('\n');
			const parsedData = [];

			lines.forEach((line) => {
				const [valueStr, timeStr] = line.split(',');
				const value = valueStr;
				const time = timeStr;
				parsedData.push({ hr: value, time: time });
			});
			this.heartRateChart.addMultipleData(parsedData);
			this.updateList();
		}
	}

	addIntervalData() {
		const hrInput = document.getElementById('hrInterval').value.trim();
		const intervalValue = document.getElementById('intervalDropdown').value;

		if (hrInput === '' || intervalValue === '') {
			alert('Please enter correct values.');
		} else if (parseInt(hrInput) > this.heartRateChart.thresholds.MAX) {
			alert('Input exceeds max value. Please enter correct values.');
		} else if (parseInt(hrInput) < this.heartRateChart.thresholds.MIN) {
			alert('Input is below minimum value. Please enter correct values.');
		} else {
			const startDate = new Date('2024-01-01T00:00:00');
			// If heartRateData has values, use the last time as the starting point
			const lastTime =
				this.heartRateChart.heartRateData.length > 0
					? this.heartRateChart.heartRateData[this.heartRateChart.heartRateData.length - 1].time
					: startDate;

			// Increment time based on the interval
			const newTime = new Date(lastTime.getTime() + intervalValue * 1000);

			const newData = {
				hr: parseInt(hrInput),
				time: newTime,
			};

			this.heartRateChart.addData(newData);
			this.updateList();
		}
	}

	deleteDataClick(index) {
		this.heartRateChart.deleteData(index);
		this.updateList();
	}

	updateList() {
		const heartRateList = document.getElementById('heartRateList');
		heartRateList.innerHTML = '';

		// Add column names
		const header = document.createElement('div');
		header.className = 'heartRateListHeader';
		header.innerHTML = '<div>Heart Rate</div><div>Date & Time</div><div>Action</div>';
		heartRateList.appendChild(header);

		if (this.heartRateChart.heartRateData.length === 0) {
			return;
		}

		// Add data items
		this.heartRateChart.heartRateData.forEach((data, index) => {
			const item = document.createElement('div');
			item.className = 'heartRateItem';
			const formattedDateTime = this.heartRateChart.formatDateTimeWithSeconds(data.time);
			item.innerHTML = `<div>${data.hr}</div><div>${formattedDateTime}</div>`;

			// Add delete button
			const deleteButton = document.createElement('button');
			deleteButton.className = 'deleteButton';
			deleteButton.textContent = 'Delete';
			deleteButton.onclick = () => this.deleteDataClick(index);
			item.appendChild(deleteButton);
			heartRateList.appendChild(item);
		});
	}

	generateValuesClick() {
		const min = document.getElementById('min').value.trim();
		const max = document.getElementById('max').value.trim();
		const lengthValues = document.getElementById('lengthValues').value.trim();

		if (min === '' || max === '' || lengthValues === '') {
			alert('Please enter correct values.');
		} else if (parseInt(max) > this.heartRateChart.thresholds.MAX) {
			alert('Input exceeds max value. Please enter correct values.');
		} else if (parseInt(min) > parseInt(max)) {
			alert('Please enter correct values.');
		} else if (parseInt(min) < this.heartRateChart.thresholds.MIN) {
			alert('Input is below minimum value. Please enter correct values.');
		} else {
			const startDate = new Date('2024-01-01T00:00:00');
			console.log(startDate);
			this.heartRateChart.generateRandomHRArray(parseInt(lengthValues), parseInt(min), parseInt(max), startDate);
			this.updateList();
			document.getElementById('min').value = '';
			document.getElementById('max').value = '';
			document.getElementById('lengthValues').value = '';
		}
		this.heartRateChart.updateChart();
		this.updateList();
	}

	clearValuesClick() {
		this.heartRateChart.clearChart();
		this.updateList();
	}

	setMaxValueClick() {
		const maxValueInput = document.getElementById('maxValue');
		const newMaxValue = parseInt(maxValueInput.value);

		if (!isNaN(newMaxValue)) {
			this.heartRateChart.setMaxValue(newMaxValue);
		} else {
			alert('Please enter a valid number for the max value.');
		}
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
				this.heartRateChart.setThresholds(low, moderate, high);
			} else {
				alert('Please enter valid threshold values.');
			}
		}
	}
	// Function to change the connection duration
	changeConnectDurationClick() {
		const connectDurationInput = document.getElementById('connectDurationInput').value;
		this.heartRateChart.setConnectDuration(connectDurationInput);
	}

	connectAllPointsToggle() {
		const connectAllPointsToggle = document.getElementById('connectAllPointsToggle');
		const connectAllPoints = connectAllPointsToggle.checked;

		if (connectAllPoints) {
			// Perform actions when connecting all points is turned ON
			this.heartRateChart.setConnectAllPoints(true);
			console.log('Connecting all points is ON');
		} else {
			// Perform actions when connecting all points is turned OFF
			this.heartRateChart.setConnectAllPoints(false);
			console.log('Connecting all points is OFF');
		}
	}
}

// Export both classes for use in other scripts
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { TileHeartRateLineChartUI };
} else {
    window.TileHeartRateLineChartUI = TileHeartRateLineChartUI;
}

