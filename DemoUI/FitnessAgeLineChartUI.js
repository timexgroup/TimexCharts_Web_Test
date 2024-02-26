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
* 															 project
*
*******************************************************************************/

import AveRestingHRLineChartModel from "./AveRestingHRLineChartModel.js";

export class FitnessAgeLineChartUI {
	constructor(fitnessAgeLineChart) {
		this.fitnessAgeLineChart = fitnessAgeLineChart;
	}

	setUp() {
		this.attachEventListeners();
	}

	attachEventListeners() {
		document.getElementById('clearChartButton').addEventListener('click', () => this.clearChartClick());
		document.getElementById('setThresholdButton').addEventListener('click', () => this.setThresholdsClick());
		document.getElementById('addHRButton').addEventListener('click', () => this.addAgeClick());
		document.getElementById('updateNoDataText').addEventListener('click', () => this.updateNoDataText());
	}

	addAgeClick() {
		const hrValue = document.getElementById('hr').value;
		const dateValue = document.getElementById('hrDate').value;

		if (hrValue === '' || dateValue === '') {
			alert('Please enter correct values.');
			return;
		}

		this.fitnessAgeLineChart.addData(new AveRestingHRLineChartModel(dateValue, parseInt(hrValue)), this.currentFilter);
		this.updateList();
	}

	updateNoDataText() {
		const newNoDataTextString = document.getElementById('noDataText').value;
		this.fitnessAgeLineChart.setNoDataText(newNoDataTextString);
	}

	clearChartClick() {
		this.fitnessAgeLineChart.clearChart();
		this.updateList();
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
				this.fitnessAgeLineChart.setThresholds(low, moderate, high);
			} else {
				alert('Please enter valid threshold values.');
			}
		}
	}

	updateList() {
		const listBody = document.getElementById('listBody');
		listBody.innerHTML = ''; 
		
		this.fitnessAgeLineChart.fitnessAgeData.forEach((dataPoint, index) => {
			const row = document.createElement('tr');
			
			const indexCell = document.createElement('td');
			indexCell.textContent = index + 1;
			indexCell.style.paddingRight = '10px';
			
			const date = dataPoint.x;
			const formattedDate = `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`;
			const dateCell = document.createElement('td');
			dateCell.textContent = formattedDate;
			
			const age = dataPoint.y;
			const formattedAge = `${age} years old`;
			const ageCell = document.createElement('td');
			ageCell.textContent = formattedAge;
			
			row.appendChild(indexCell);
			row.appendChild(dateCell);
			row.appendChild(ageCell);
			listBody.appendChild(row);
		});
	}
}
