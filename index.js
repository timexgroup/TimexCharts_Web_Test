export * from './types/time_interval.js';
export * from './types/time_display_format.js';
export * from './types/step_count_interval.js';
export * from './types/step_count_bar_chart.js';

import * as TimeInterval from './types/time_interval.js';
import * as TimeDisplayFormat from './types/time_display_format.js';
import * as StepCountInterval from './types/step_count_interval.js';
import * as StepCountBarChart from './types/step_count_bar_chart.js';
// import { SleepQualityBarChart } as controllers from './types/SleepQualityBarChart.js';

export {
  TimeInterval,
  TimeDisplayFormat,
  StepCountInterval,
  StepCountBarChart,
  // SleepQualityBarChart,
};

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
