import { TimeInterval } as controllers from './types/TimeInterval.js';
import { TimeDisplayFormat } as controllers from './types/TimeDisplayFormat.js';
import { StepCountInterval } as controllers from './types/StepCountInterval.js';
import { StepCountBarChart } as controllers from './types/StepCountBarChart.js';
// import { SleepQualityBarChart } as controllers from './types/SleepQualityBarChart.js';

// export {
//   TimeInterval,
//   TimeDisplayFormat,
//   StepCountInterval,
//   StepCountBarChart,
//   SleepQualityBarChart,
// },

// Export both classes for use in other scripts
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { TimeInterval, TimeDisplayFormat, StepCountInterval, StepCountBarChart };
} else {
    window.TimeInterval = TimeInterval;
    window.TimeDisplayFormat = TimeDisplayFormat;
    window.StepCountInterval = StepCountInterval;
    window.StepCountBarChart = StepCountBarChart;
    // window.SleepQualityBarChart = SleepQualityBarChart;
}
