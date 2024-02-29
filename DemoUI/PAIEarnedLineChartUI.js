/*******************************************************************************
*
* Copyright (c) 2024 Timex Group USA, Inc.
*
* This document is the property of, and contains information proprietary to
* Timex Group USA, Inc.. It is to be returned upon request. Reproduction by
* any means, disclosure, or use of its contents for other than the expressed
* purpose for which it is loaned, without the written consent of Timex Group
* USA, Inc., is strictly prohibited.
*
* File Change History:
*
*               02/21/2024 JRD – Created file for Timex Charts Library 
*                                Javascript project
*               02/28/2024 JRD - Code cleanup - Coding standard practice
*               02/29/2024 JRD - Add checking for negative values
*
*******************************************************************************/

// import HeartRateLineDataModel from "./HeartRateLineDataModel.js";

class PAIEarnedLineChartUI {
    constructor(paiEarnedLineChart) {
        this.paiEarnedLineChart = paiEarnedLineChart;
        this.updateList();
    }

    setUp() {
        this.attachEventListeners();
        this.setInitialElementValues();
    }

    attachEventListeners() {
        document.getElementById('addDataButton').addEventListener('click', () => this.addData());
        document.getElementById('generateValuesButton').addEventListener('click', () => this.generateValuesClick());
        document.getElementById('clearValuesButton').addEventListener('click', () => this.clearValuesClick());
        document.getElementById('addTextDataButton').addEventListener('click', () => this.addTextData());
        document.getElementById('setMaxValueButton').addEventListener('click', () => this.setMaxValueClick());
        document.getElementById('setThresholdButton').addEventListener('click', () => this.setThresholdsClick());
        document.getElementById('applyFormatButton').addEventListener('click', () => this.setFormatClick());
        document.getElementById('moveLineButton').addEventListener('click', () => this.moveLineClick());
        document.getElementById('nowTimeToggle').addEventListener('change', () => this.timeLineIndicatorToggle());
        document.getElementById('changeLineIndicatorButton').addEventListener('click', () => this.changeLineIndicatorTextClick());
        document.getElementById('addHRButton').addEventListener('click', () => this.addIntervalData());
        document.getElementById('changeConnectDurationButton').addEventListener('click', () => this.changeConnectDurationClick());
        document.getElementById('connectAllPointsToggle').addEventListener('change', () => this.connectAllPointsToggle());
    }

    setInitialElementValues() {
        document.getElementById('timeFormat').value = this.paiEarnedLineChart.is12HourFormat ? '12HR' : '24HR';
        document.getElementById('connectDurationInput').value = this.paiEarnedLineChart.connectDuration;
        document.getElementById('connectAllPointsToggle').checked = this.paiEarnedLineChart.isConnectAllPoints;
        document.getElementById('nowTimeToggle').checked = this.paiEarnedLineChart.isLineIndicatorOn;
        document.getElementById('lineIndicatorInput').value = this.paiEarnedLineChart.lineIndicatorText;
        document.getElementById('maxValue').value = this.paiEarnedLineChart.thresholds.MAX;
    }

    addData() {
        const hrInput = document.getElementById('hr').value.trim();
        const timeInput = document.getElementById('time').value.trim();
        console.log(timeInput);
        if (hrInput === '' || timeInput === '') {
            alert('Please enter correct values.');
        } else if (parseInt(hrInput) > this.paiEarnedLineChart.thresholds.MAX) {
            alert('Input exceeds max value. Please enter correct values.');
        } else if (parseInt(hrInput) < this.paiEarnedLineChart.thresholds.MIN) {
            alert('Input is below minimum value. Please enter correct values.');
        } else {
            this.paiEarnedLineChart.addData(new HeartRateLineDataModel(hrInput, timeInput));
            // Reset input values
            document.getElementById('hr').value = '';
            document.getElementById('time').value = '';
            this.updateList();
        }
    }

    addTextData() {
        const textData = document.getElementById('textData').value.trim();
        if (textData === '') {
            alert('Please enter data in the text area.');
        } else {
            const lines = textData.split('\n');
            const parsedData = [];

            lines.forEach((line) => {
                const [valueStr, timeStr] = line.split(',');
                const value = valueStr;
                const time = timeStr;
                parsedData.push(new HeartRateLineDataModel(value, time));
            });
            this.paiEarnedLineChart.addMultipleData(parsedData);
            this.updateList();
        }
    }

    addIntervalData() {
        const hrInput = document.getElementById('hrInterval').value.trim();
        const intervalValue = document.getElementById('intervalDropdown').value;

        if (hrInput === '' || intervalValue === '') {
            alert('Please enter correct values.');
        } else if (parseInt(hrInput) > this.paiEarnedLineChart.thresholds.MAX) {
            alert('Input exceeds max value. Please enter correct values.');
        } else if (parseInt(hrInput) < this.paiEarnedLineChart.thresholds.MIN) {
            alert('Input is below minimum value. Please enter correct values.');
        } else {
            const startDate = new Date('2024-01-01T00:00:00');
            // If paiEarnedData has values, use the last time as the starting point
            const lastTime =
                (this.paiEarnedLineChart.paiEarnedData.length > 0) ? 
                    this.paiEarnedLineChart.paiEarnedData[this.paiEarnedLineChart.paiEarnedData.length - 1].time : 
                    startDate;

            // Increment time based on the interval
            const newTime = new Date(lastTime.getTime() + intervalValue * 1000);

            this.paiEarnedLineChart.addData(new HeartRateLineDataModel(parseInt(hrInput), newTime));
            this.updateList();
        }
    }

    deleteDataClick(index) {
        this.paiEarnedLineChart.deleteData(index);
        this.updateList();
    }

    updateList() {
        const paiEarnedList = document.getElementById('paiEarnedList');
        paiEarnedList.innerHTML = '';

        // Add column names
        const header = document.createElement('div');
        header.className = 'heartRateListHeader';
        header.innerHTML = '<div>PAI Earned</div><div>Date & Time</div><div>Action</div>';
        paiEarnedList.appendChild(header);

        if (this.paiEarnedLineChart.paiEarnedData.length === 0) {
            return;
        }

        // Add data items
        this.paiEarnedLineChart.paiEarnedData.forEach((data, index) => {
            const item = document.createElement('div');
            item.className = 'heartRateItem';
            const formattedDateTime = this.paiEarnedLineChart.formatDateTimeWithSeconds(data.time);
            item.innerHTML = `<div>${data.hr}</div><div>${formattedDateTime}</div>`;

            // Add delete button
            const deleteButton = document.createElement('button');
            deleteButton.className = 'deleteButton';
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => this.deleteDataClick(index);
            item.appendChild(deleteButton);

            paiEarnedList.appendChild(item);
        });
    }

    generateValuesClick() {
        const min = document.getElementById('min').value.trim();
        const max = document.getElementById('max').value.trim();
        const lengthValues = document.getElementById('lengthValues').value.trim();

        if (min === '' || max === '' || lengthValues === '') {
            alert('Please enter correct values.');
        } else if (parseInt(max) > this.paiEarnedLineChart.thresholds.MAX) {
            alert('Input exceeds max value. Please enter correct values.');
        } else if (parseInt(min) > parseInt(max)) {
            alert('Please enter correct values.');
        } else if (parseInt(min) < this.paiEarnedLineChart.thresholds.MIN) {
            alert('Input is below minimum value. Please enter correct values.');
        } else {
            const startDate = new Date('2024-01-01T00:00:00');
            this.paiEarnedLineChart.generateRandomHRArray(
                parseInt(lengthValues),
                parseInt(min),
                parseInt(max),
                startDate
            );
            this.updateList();
            document.getElementById('min').value = '';
            document.getElementById('max').value = '';
            document.getElementById('lengthValues').value = '';
        }
        this.paiEarnedLineChart.updateChart();
        this.updateList();
    }

    clearValuesClick() {
        this.paiEarnedLineChart.clearChart();
        this.updateList();
    }

    setMaxValueClick() {
        const maxValueInput = document.getElementById('maxValue');
        const newMaxValue = parseInt(maxValueInput.value);

        if (!isNaN(newMaxValue) && 
            (newMaxValue > 0 && newMaxValue <= this.paiEarnedLineChart.thresholds.FIXED_MAX)) {
                this.paiEarnedLineChart.setMaxValue(newMaxValue);
        } else {
            alert('Please enter a valid number for the max value.');
        }
    }

    setThresholdsClick() {
        const lowInput = document.getElementById('lowThreshold').value.trim();
        const moderateInput = document.getElementById('moderateThreshold').value.trim();
        const highInput = document.getElementById('highThreshold').value.trim();

        if (lowInput === '' || moderateInput === '' || highInput === '') {
            alert('Please enter valid threshold values.');
        } else {
            const low = parseInt(lowInput);
            const moderate = parseInt(moderateInput);
            const high = parseInt(highInput);

            if (!isNaN(low) && !isNaN(moderate) && !isNaN(high) && 
                low <= moderate && 
                moderate <= high &&
                low >= 0) {
                    this.paiEarnedLineChart.setThresholds(low, moderate, high);
            } else {
                alert('Please enter valid threshold values.');
            }
        }
    }

    setFormatClick() {
        let formatValue = document.getElementById('timeFormat').value;
        this.paiEarnedLineChart.setFormat(formatValue);
    }

    moveLineClick() {
        const timeInput = document.getElementById('timeLine').value.trim();
        if (this.paiEarnedLineChart.paiEarnedData.length === 0) {
            alert('No data in chart.');
        } else {
            this.paiEarnedLineChart.moveLine(timeInput);
        }
    }

    timeLineIndicatorToggle() {
        const nowTimeToggle = document.getElementById('nowTimeToggle');
        if (nowTimeToggle.checked) {
            this.paiEarnedLineChart.setTimeLineIndicatorToggle(true);
        } else {
            this.paiEarnedLineChart.setTimeLineIndicatorToggle(false);
        }
    }

    changeLineIndicatorTextClick() {
        const newLineIndicatorValue = document.getElementById('lineIndicatorInput').value;
        this.paiEarnedLineChart.setLineIndicator(newLineIndicatorValue);
    }

    changeConnectDurationClick() {
        const connectDurationInput = document.getElementById('connectDurationInput').value;
        this.paiEarnedLineChart.setConnectDuration(connectDurationInput);
    }

    connectAllPointsToggle() {
        const connectAllPointsToggle = document.getElementById('connectAllPointsToggle');
        const connectAllPoints = connectAllPointsToggle.checked;

        if (connectAllPoints) {
            this.paiEarnedLineChart.setConnectAllPoints(true);
        } else {
            this.paiEarnedLineChart.setConnectAllPoints(false);
        }
    }
}

// Export class for use in other scripts
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { PAIEarnedLineChartUI };
} else {
    window.PAIEarnedLineChartUI = PAIEarnedLineChartUI;
}
