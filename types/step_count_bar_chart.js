import { TimeDisplayFormat } from './time_display_format.js';
import { TimeInterval } from './time_interval.js';

export class StepCountBarChart {

    constructor(ctx) {
        this.ctx = ctx;

        this.barColor = '#3EB1C8'
        this.timeFormat = TimeDisplayFormat.USE_12HR_FORMAT;
        this.maxIntervalCount = TimeInterval.ONE_SECOND;
        this.intervalUsed = TimeInterval.ONE_SECOND;
        this.displayIntervalCount = TimeInterval.FIFTEEN_MINUTES;

        let randomNumbers = [0];
        let labels = [''];

        // data block
        this.defdata = {
            labels: labels,
            datasets: [{
                data: randomNumbers,
                backgroundColor: this.barColor,
                borderColor: this.barColor,
                borderWidth: 1,
                barPercentage: 1,
                categoryPercentage: 1,
            }]
        };

        // config block
        const config = {
            type: 'bar',
            data: this.defdata,
            options: {
                animation: false,
                aspectRatio: false,                
                scales: {
                    x: {
                        grid: {
                            display: false, // Hide x-axis grid lines
                        },
                        ticks: {
                            maxTicksLimit: 24,
                            callback: function(value, index, values) {
                                var len = values.length;

                                // Show only the first and last labels
                                if (index === 0 || index === len - 1) {
                                    return '';
                                } else {
                                    return ''; // Hide other labels
                                }              
                            }
                        },            
                    },          
                    y: {
                        display: false,
                        beginAtZero: true
                    }
                },
                plugins: {
                    tooltip: {
                        enabled: false,
                    },                    
                    legend: {
                        display: false, // Hide the legend
                    },
                    customBackground: {
                        enabled: true,
                        label1: '12:00 AM',
                        label2: '12:00 PM',
                        label3: '11:59 PM',
                    },
                } 
            }
        };

        // Check if Chart class is available (to avoid re-adding the script if already loaded)
        // if (typeof Chart !== 'function') {
        //     // Add Chart.js script dynamically if not already loaded
        //     const chartJsScript = document.createElement('script');
        //     chartJsScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        //     document.head.appendChild(chartJsScript);
        // }

        this.addCustomXAxisLabels();

        // console.log(this.defdata);
        this.chart = new Chart(this.ctx, config);
    }

    addCustomXAxisLabels() {
        Chart.register({
            id: 'customBackground',
            beforeDraw: function(chart, args, options) {
                const ctx = chart.ctx;
                const xAxis = chart.scales['x'];

                ctx.save();
                ctx.fillStyle = 'rgba(237, 239, 240, 1.0)'; // Set the background color for the x-axis labels area
                ctx.fillRect(0, chart.chartArea.bottom, xAxis.width, 30);

                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.fillText(options.label1, chart.chartArea.left + 30, chart.chartArea.bottom + 15);
                ctx.fillText(options.label2, xAxis.width / 2, chart.chartArea.bottom + 15);
                ctx.fillText(options.label3, chart.chartArea.right - 30, chart.chartArea.bottom + 15);

                ctx.restore();
            }
        });
    }

    convertTimeToIndex(startTime) {
        const defaultTimeFormat = "HH:mm";
        const time = startTime.split(":");
        let hour = 0;
        let minute = 0;
        let second = 0;
        let secondIncluded = false;
        let index = 0;

        if (startTime.length > defaultTimeFormat.length) {
            secondIncluded = true;
        }

        hour = Number(time[0]);
        minute = Number(time[1]);

        if (secondIncluded == true) {
            second = Number(time[2]);
        }
        
        switch (this.maxIntervalCount) {
            case TimeInterval.ONE_SECOND:
                index = hour * 3600;
                index += minute * 60;
                if (secondIncluded === true) {
                    index += second;
                }
            break;
            case TimeInterval.ONE_MINUTE:
                index = hour * 60;
                index += minute;
            break;
            case TimeInterval.FIVE_MINUTES:
                index = hour * 12;
                index += (minute / 5);
            break;
            case TimeInterval.TEN_MINUTES:
                index = hour * 6;
                index += (minute / 10);
            break;
            case TimeInterval.FIFTEEN_MINUTES:
                index = hour * 4;
                index += (minute / 15);
            break;
            case TimeInterval.TWENTY_MINUTES:
                index = hour * 3;
                index += (minute / 20);
            break;
            case TimeInterval.THIRTY_MINUTES:
                index = hour * 2;
                index += (minute / 30);
            break;
            case TimeInterval.ONE_HOUR:
                index = hour;
            break;
            default:
                index = 0;
            break;
        }

        return index;
    }

    setChartData(stepList) {
        console.log("StepCountBarChart setChartData");

        const stepsArrayFromList = new Array(this.maxIntervalCount).fill(0);
        let index = 0;
        let displaySize = this.displayIntervalCount;

        if (this.displayIntervalCount > this.maxIntervalCount) {
            displaySize = this.maxIntervalCount;
        }

        if (stepList !== null && stepList !== undefined && Array.isArray(stepList)) {
            if (stepList.length > 0) {

                this.setMaxIntervalCount(this.maxIntervalCount);

                for (let step of stepList) {
                    index = this.convertTimeToIndex(step.startTime);

                    stepsArrayFromList[index] += step.stepCount;
                }

                const displayArray = new Array(displaySize).fill(0);
                const intervalSize = this.maxIntervalCount / displaySize;
                let counter = 0;
                let dataCount = 0;

                for (let dispCount = 0; dispCount < displaySize; dispCount++) {
                    for (counter = 0; counter < intervalSize; counter++) {
                        displayArray[dispCount] += stepsArrayFromList[dataCount];
                        dataCount++;
                    }
                }

        //         setChartData(displayArray, displaySize);
                // console.log(displayArray);
                // console.log(this.defdata);
                this.intervalUsed = this.displayIntervalCount;

                this.defdata.labels = new Array(displaySize).fill('');
                this.defdata.datasets[0].data = displayArray;
                this.chart.update();                
            }
        }
    }

    resetChart() {
        // console.log("StepCountBarChart resetChart");
        this.defdata.datasets[0].data = [];
        // console.log(this.defdata);
        this.chart.update();
    }

    setMaxStepsPerInterval() {
        console.log("StepCountBarChart setMaxStepsPerInterval");
    }

    setMaxIntervalCount(intervalCount) {
        this.maxIntervalCount = intervalCount;
    }

    setDisplayIntervalCount(displayIntervalCount) {
        this.displayIntervalCount = displayIntervalCount;
        // console.log(displayIntervalCount);
    }

    getXAxisLabelsWithFormatting(label1, label2) {
        switch (this.timeFormat) {
            case TimeDisplayFormat.USE_12HR_FORMAT:
                return label1;
            case TimeDisplayFormat.USE_24HR_FORMAT:
                return label2;
            default:
                return label1;
        }
    }

    setTimeDisplayFormat(timeFormat) {
        this.timeFormat = timeFormat;
        this.chart.options.plugins.customBackground.label1 = this.getXAxisLabelsWithFormatting('12:00 AM', '00:00');
        this.chart.options.plugins.customBackground.label2 = this.getXAxisLabelsWithFormatting('12:00 PM', '12:00');
        this.chart.options.plugins.customBackground.label3 = this.getXAxisLabelsWithFormatting('11:59 PM', '23:59');
        this.chart.update();
    }

    setBarColor(barColor) {
        this.barColor = barColor;
        this.defdata.datasets[0].backgroundColor = barColor;
        this.defdata.datasets[0].borderColor = barColor;
        this.chart.update();
    }    
}
