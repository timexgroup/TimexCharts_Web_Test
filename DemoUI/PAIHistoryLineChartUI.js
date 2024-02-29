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
*               02/21/2024 JRD – Created file for Timex Charts Library Javascript
*                                   project
*               02/28/2024 JRD - Code cleanup - Coding standard practice
*               02/29/2024 JRD - Fix accept negative value for pai and goal
*
*******************************************************************************/
// import PAIHistoryLineDataModel from "./PAIHistoryLineDataModel.js";

class PAIHistoryLineChartUI {
    constructor(paiHistoryLineChart) {
        this.paiHistoryLineChart = paiHistoryLineChart;
        this.currentFilter = this.paiHistoryLineChart.PAIHistoryFilter.WEEKLY;
    }

    setUp() {
        this.attachEventListeners();        
    }

    attachEventListeners() {
        document.getElementById('timeInterval').addEventListener('change', () => this.handleTimeIntervalChange());
        document.getElementById('clearChartButton').addEventListener('click', () => this.clearChartClick());
        document.getElementById('addPAIButton').addEventListener('click', () => this.addPAIClick());
        document.getElementById('updateGoalButton').addEventListener('click', () => this.updateGoalClick());
        document.getElementById('setTodayDateButton').addEventListener('click', () => this.setTodayDateClick());	
    }

    addPAIClick() {
        let paiValue = document.getElementById('pai').value;
    
        if (paiValue === '' || (parseInt(paiValue) < 0)) {
            alert('Please enter correct values.');
            return;
        }        
        this.paiHistoryLineChart.addData(paiValue, this.currentFilter);
        this.updateList();
    }

    updateGoalClick() {
        let goalValue = document.getElementById('goal').value;
        if (goalValue === '' || (parseInt(goalValue) < 0)) {
            alert('Please enter correct value');
            return;
        } 
        this.paiHistoryLineChart.setGoal(goalValue);
    }

    setTodayDateClick() {
        const todayDateElement = document.getElementById('todayDate');
        const todayDate = todayDateElement.value;

        if (!todayDateElement) {
            alert('Input element not found!');
        } else {
            if (todayDate.trim() === '' || isNaN(Date.parse(todayDate))) {
                alert('Please input a valid date!');
            } else {
                this.paiHistoryLineChart.setTodayDate(todayDate);
            }
        }
    }

    handleTimeIntervalChange() {
        const timeIntervalFilter = document.getElementById('timeInterval').value;
        switch (timeIntervalFilter) {
            case 'week':
                this.currentFilter = this.paiHistoryLineChart.PAIHistoryFilter.WEEKLY;
                this.paiHistoryLineChart.updateChart(this.paiHistoryLineChart.PAIHistoryFilter.WEEKLY);
            break;
            case 'month':
                this.currentFilter = this.paiHistoryLineChart.PAIHistoryFilter.MONTHLY;
                this.paiHistoryLineChart.updateChart(this.paiHistoryLineChart.PAIHistoryFilter.MONTHLY);
            break;
            case 'year':
                this.currentFilter = this.paiHistoryLineChart.PAIHistoryFilter.YEARLY;
                this.paiHistoryLineChart.updateChart(this.paiHistoryLineChart.PAIHistoryFilter.YEARLY);
            break;
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
                const [dateStr, valueStr] = line.split(',');
                const date = dateStr;
                const value = parseFloat(valueStr);
                parsedData.push({ x: date, y: value });
            });
            this.paiHistoryLineChart.addMultipleData(parsedData, this.currentFilter);
        }
    }

    

    clearChartClick() {
        this.paiHistoryLineChart.clearChart();
        this.updateList();
    }

    updateList() {
        const listBody = document.getElementById('listBody');
        listBody.innerHTML = '';
        
        this.paiHistoryLineChart.paiHistoryData.forEach((pai, index) => {
            const row = document.createElement('tr');            

            const indexCell = document.createElement('td');
            indexCell.textContent = index + 1;
            indexCell.style.paddingRight = '10px';
            
            const paiCell = document.createElement('td');
            paiCell.textContent = pai;
            
            row.appendChild(indexCell);
            row.appendChild(paiCell);
            listBody.appendChild(row);
        });
    }
}

// Export class for use in other scripts
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { PAIHistoryLineChartUI };
} else {
    window.PAIHistoryLineChartUI = PAIHistoryLineChartUI;
}
