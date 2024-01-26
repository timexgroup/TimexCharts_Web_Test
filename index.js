export * from './types/TimeInterval.js';
export * from './types/TimeDisplayFormat.js';
export * from './types/StepCountInterval.js';
export * from './types/StepCountBarChart.js';

import * as TimeInterval from './types/TimeInterval.js';
import * as TimeDisplayFormat from './types/TimeDisplayFormat.js';
import * as StepCountInterval from './types/StepCountInterval.js';
import * as StepCountBarChart from './types/StepCountBarChart.js';
// import { SleepQualityBarChart } as controllers from './types/SleepQualityBarChart.js';

export {
  TimeInterval,
  TimeDisplayFormat,
  StepCountInterval,
  StepCountBarChart,
  // SleepQualityBarChart,
},

// Export both classes for use in other scripts
// if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
//     module.exports = { TimeInterval, TimeDisplayFormat, StepCountInterval, StepCountBarChart };
// } else {
//     window.TimeInterval = TimeInterval;
//     window.TimeDisplayFormat = TimeDisplayFormat;
//     window.StepCountInterval = StepCountInterval;
//     window.StepCountBarChart = StepCountBarChart;
//     // window.SleepQualityBarChart = SleepQualityBarChart;
// }
