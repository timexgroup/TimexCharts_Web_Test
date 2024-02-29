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
*               02/29/2024 JRD - Set value input ranging 0 to 300 fix
*
*******************************************************************************/

// import AveRestingHRLineChartModel from "./AveRestingHRLineChartModel.js";

class AveRestingHRLineChartUI {
    constructor(aveRestingHRLineChart) {
        this.aveRestingHRLineChart = aveRestingHRLineChart;
        this.currentFilter = this.aveRestingHRLineChart.AverageRestingHRFilter.WEEKLY;
    }

    setUp() {
        this.attachEventListeners();
    }

    attachEventListeners() {
        document.getElementById('timeInterval').addEventListener('change', () => this.handleTimeIntervalChange());
        document.getElementById('clearChartButton').addEventListener('click', () => this.clearChartClick());
        document.getElementById('setThresholdButton').addEventListener('click', () => this.setThresholdsClick());
        document.getElementById('addTextDataButton').addEventListener('click', () => this.addTextData());
        document.getElementById('generateValuesButton').addEventListener('click', () => this.generateValues());
        document.getElementById('addHRButton').addEventListener('click', () => this.addHRClick());
        document.getElementById('updateNoDataText').addEventListener('click', () => this.updateNoDataText());
    }

    addHRClick() {
        const hrValue = document.getElementById('hr').value;
        const dateValue = document.getElementById('hrDate').value;
        console.log('date in input ->' + dateValue);

        if (hrValue === '' || dateValue === '' || hrValue < 0 || hrValue > this.aveRestingHRLineChart.thresholds.FIXED_MAX) {
            alert('Please enter correct values.');
            return;
        }
        this.aveRestingHRLineChart.addData(new AveRestingHRLineChartModel(dateValue, parseInt(hrValue)), this.currentFilter);
    }

    updateNoDataText() {
        const newNoDataTextString = document.getElementById('noDataText').value;
        this.aveRestingHRLineChart.setNoDataText(newNoDataTextString);
    }

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
            default:
                this.currentFilter = this.aveRestingHRLineChart.AverageRestingHRFilter.WEEKLY;
                this.aveRestingHRLineChart.updateChart(this.aveRestingHRLineChart.AverageRestingHRFilter.WEEKLY);
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
                parsedData.push(new AveRestingHRLineChartModel(date, value));
            });

            this.aveRestingHRLineChart.addMultipleData(parsedData, this.currentFilter);
        }
    }

    generateValues() {
        const max = document.getElementById('max').value;
        const min = document.getElementById('min').value;
        const lengthValues = document.getElementById('lengthValues').value;
        const startDate = document.getElementById('startDate').value;
        
        if (min === '' || max === '' || lengthValues === '' || startDate === '') {
            alert('Please enter correct values.');
        } else if (parseInt(min) > parseInt(max)) {
            alert('Please enter correct values.');
        } else if (parseInt(min) < this.aveRestingHRLineChart.thresholds.MIN ||
                   parseInt(max) > this.aveRestingHRLineChart.thresholds.FIXED_MAX) {
            alert('Input is invalid. Please enter correct values.');
        } else {
            console.log('generate start date - ' + startDate);
            let dummyData = [];
            const oneDay = 24 * 60 * 60 * 1000; 
            const start = new Date(startDate + 'T00:00:00');
            for (let i = 0; i < lengthValues; i++) {
                const currentDate = new Date(start.getTime() + i * oneDay);
                currentDate.setHours(0, 0, 0, 0);
                const randomY = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
                dummyData.push(new AveRestingHRLineChartModel(currentDate, randomY));
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

            if (!isNaN(low) && 
                !isNaN(moderate) && 
                !isNaN(high) && 
                low <= moderate && 
                moderate <= high &&
                high <= this.aveRestingHRLineChart.thresholds.FIXED_MAX &&
                low >= 0 ) {
                    this.aveRestingHRLineChart.setThresholds(low, moderate, high);
            } else {
                alert('Please enter valid threshold values.');
            }
        }
    }
}

// Export class for use in other scripts
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { AveRestingHRLineChartUI };
} else {
    window.AveRestingHRLineChartUI = AveRestingHRLineChartUI;
}
