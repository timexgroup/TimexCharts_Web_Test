export class StepCountInterval {
    constructor(startTime, stepCount) {
        this.startTime = startTime;
        this.stepCount = stepCount;
    }

    set stepCount(newStepCount) {
        this._stepCount = newStepCount;
    }

    get stepCount() {
        return this._stepCount;
    }

    set startTime(newStartTime) {
        this._startTime = newStartTime;
    }

    get startTime() {
        return this._startTime;
    }
}