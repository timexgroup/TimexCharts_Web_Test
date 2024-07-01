(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("timexcharts", [], factory);
	else if(typeof exports === 'object')
		exports["timexcharts"] = factory();
	else
		root["timexcharts"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./src/data/HeartRateInterval.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
*               01/10/2024 LMB – Created file for Timex JS Charts Library
*
*******************************************************************************/
var HeartRateInterval = /*#__PURE__*/function () {
  function HeartRateInterval(timeStamp, heartRate) {
    _classCallCheck(this, HeartRateInterval);
    this.timeStamp = timeStamp;
    this.heartRate = heartRate;
  }
  _createClass(HeartRateInterval, [{
    key: "heartRate",
    get: function get() {
      return this._heartRate;
    },
    set: function set(newHeartRate) {
      this._heartRate = newHeartRate;
    }
  }, {
    key: "timeStamp",
    get: function get() {
      return this._timeStamp;
    },
    set: function set(newTimeStamp) {
      this._timeStamp = newTimeStamp;
    }
  }]);
  return HeartRateInterval;
}();

;// CONCATENATED MODULE: ./src/data/HeartRateLineDataModel.js
function HeartRateLineDataModel_typeof(o) { "@babel/helpers - typeof"; return HeartRateLineDataModel_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, HeartRateLineDataModel_typeof(o); }
function HeartRateLineDataModel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function HeartRateLineDataModel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, HeartRateLineDataModel_toPropertyKey(descriptor.key), descriptor); } }
function HeartRateLineDataModel_createClass(Constructor, protoProps, staticProps) { if (protoProps) HeartRateLineDataModel_defineProperties(Constructor.prototype, protoProps); if (staticProps) HeartRateLineDataModel_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function HeartRateLineDataModel_toPropertyKey(t) { var i = HeartRateLineDataModel_toPrimitive(t, "string"); return "symbol" == HeartRateLineDataModel_typeof(i) ? i : String(i); }
function HeartRateLineDataModel_toPrimitive(t, r) { if ("object" != HeartRateLineDataModel_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != HeartRateLineDataModel_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
*
*******************************************************************************/
var HeartRateLineDataModel = /*#__PURE__*/function () {
  function HeartRateLineDataModel(hr, time) {
    HeartRateLineDataModel_classCallCheck(this, HeartRateLineDataModel);
    this._hr = hr;
    this._time = time;
  }
  HeartRateLineDataModel_createClass(HeartRateLineDataModel, [{
    key: "hr",
    get: function get() {
      return this._hr;
    },
    set: function set(hr) {
      this._hr = hr;
    }
  }, {
    key: "time",
    get: function get() {
      return this._time;
    },
    set: function set(time) {
      this._time = time;
    }
  }]);
  return HeartRateLineDataModel;
}();

;// CONCATENATED MODULE: ./src/data/StepCountInterval.js
function StepCountInterval_typeof(o) { "@babel/helpers - typeof"; return StepCountInterval_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, StepCountInterval_typeof(o); }
function StepCountInterval_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function StepCountInterval_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, StepCountInterval_toPropertyKey(descriptor.key), descriptor); } }
function StepCountInterval_createClass(Constructor, protoProps, staticProps) { if (protoProps) StepCountInterval_defineProperties(Constructor.prototype, protoProps); if (staticProps) StepCountInterval_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function StepCountInterval_toPropertyKey(t) { var i = StepCountInterval_toPrimitive(t, "string"); return "symbol" == StepCountInterval_typeof(i) ? i : String(i); }
function StepCountInterval_toPrimitive(t, r) { if ("object" != StepCountInterval_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != StepCountInterval_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
*               01/10/2024 LMB – Created file for Timex JS Charts Library
*
*******************************************************************************/
var StepCountInterval = /*#__PURE__*/function () {
  function StepCountInterval(startTime, stepCount) {
    StepCountInterval_classCallCheck(this, StepCountInterval);
    this.startTime = startTime;
    this.stepCount = stepCount;
  }
  StepCountInterval_createClass(StepCountInterval, [{
    key: "stepCount",
    get: function get() {
      return this._stepCount;
    },
    set: function set(newStepCount) {
      this._stepCount = newStepCount;
    }
  }, {
    key: "startTime",
    get: function get() {
      return this._startTime;
    },
    set: function set(newStartTime) {
      this._startTime = newStartTime;
    }
  }]);
  return StepCountInterval;
}();

;// CONCATENATED MODULE: ./src/charts/HeartRateLineChart.js
function HeartRateLineChart_typeof(o) { "@babel/helpers - typeof"; return HeartRateLineChart_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, HeartRateLineChart_typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function HeartRateLineChart_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function HeartRateLineChart_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, HeartRateLineChart_toPropertyKey(descriptor.key), descriptor); } }
function HeartRateLineChart_createClass(Constructor, protoProps, staticProps) { if (protoProps) HeartRateLineChart_defineProperties(Constructor.prototype, protoProps); if (staticProps) HeartRateLineChart_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = HeartRateLineChart_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function HeartRateLineChart_toPropertyKey(t) { var i = HeartRateLineChart_toPrimitive(t, "string"); return "symbol" == HeartRateLineChart_typeof(i) ? i : String(i); }
function HeartRateLineChart_toPrimitive(t, r) { if ("object" != HeartRateLineChart_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != HeartRateLineChart_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
*               02/29/2024 JRD - Setting lower max value than high threshold fix
*               03/11/2024 JRD - Fix for JIRA JSCHARTBUG-6 Heart Rate 
*                                Line Chart: Data point with 0 value is plotted
*               03/26/2024 JRD - Fix for JIRA JSCHARTBUG-48 Spanish Support
*               04/02/2024 JRD - Fix for JIRA JSCHARTBUG-61 and JSCHARTBUG-67 
*                                UI improvements remove click to enable tooltip 
*                                and remove opacity
*               04/15/2024 JRD - Fix for JIRA JSCHARTBUG-87 Add set No Data
*                                UI feature
*               04/15/2024 JRD - Fix for JIRA JSCHARTBUG-93 Updating Now Line
*                                indicator text does not function
*                                
*******************************************************************************/


var HeartRateLineChart = /*#__PURE__*/function () {
  function HeartRateLineChart(chartCanvas) {
    var _this = this;
    HeartRateLineChart_classCallCheck(this, HeartRateLineChart);
    _defineProperty(this, "hoverLineAndTextPlugin", {
      afterDatasetsDraw: function afterDatasetsDraw(chart, args, plugins) {
        var ctx = chart.ctx,
          canvas = chart.canvas,
          data = chart.data,
          _chart$chartArea = chart.chartArea,
          top = _chart$chartArea.top,
          bottom = _chart$chartArea.bottom,
          left = _chart$chartArea.left,
          right = _chart$chartArea.right,
          width = _chart$chartArea.width,
          height = _chart$chartArea.height,
          _chart$scales = chart.scales,
          x = _chart$scales.x,
          y = _chart$scales.y;
        if (_this.xHoverCoor && _this.yHoverCoor) {
          for (var i = 0; i < chart._metasets[0].data.length; i++) {
            var lastValue = void 0;
            var lastTimeValue = void 0;
            var xMin = chart._metasets[0].data[i].x - 1;
            var xMax = chart._metasets[0].data[i].x + 1;
            if (_this.xHoverCoor >= xMin && _this.xHoverCoor <= xMax) {
              chart.ctx.save();
              chart.ctx.beginPath();
              var lineColor = void 0;
              var hrValue = chart._metasets[0].data[i].$context.raw.y;
              var timeValue = chart._metasets[0].data[i].$context.raw.x;
              // Fix for JIRA JSCHARTBUG-6
              // Removed null checking since null is from 0 value.
              // 0 value is plotted on the chart if inputted in between data
              // Fix for JIRA JSCHARTBUG-61 and JSCHARTBUG-67
              // Remove checking of isChartClicked - automatically show the tooltip
              lastValue = hrValue;
              lastTimeValue = timeValue;
              if (hrValue >= _this.thresholds.ADJUSTABLE_MIN && hrValue < _this.thresholds.LOW) {
                lineColor = _this.colors.MIN;
              } else if (hrValue >= _this.thresholds.LOW && hrValue < _this.thresholds.MODERATE) {
                lineColor = _this.colors.LOW;
              } else if (hrValue >= _this.thresholds.MODERATE && hrValue < _this.thresholds.HIGH) {
                lineColor = _this.colors.MODERATE;
              } else if (hrValue >= _this.thresholds.HIGH && hrValue <= _this.thresholds.MAX) {
                lineColor = _this.colors.HIGH;
              }
              // DRAW hover if there is a value in the data set
              // Draw line
              chart.ctx.strokeStyle = lineColor;
              chart.ctx.lineWidth = _this.lineWidthValues.HOVER_LINE;
              chart.ctx.moveTo(_this.xHoverCoor, top - 20);
              chart.ctx.lineTo(_this.xHoverCoor, bottom);
              chart.ctx.stroke();
              chart.ctx.restore();

              // Fix for JIRA JSCHARTBUG-6
              // If value is null, assign to 0
              if (hrValue === null) {
                lastValue = 0;
              }
              var rectangleWidth = 200;
              var rectangleBorderWidth = 206;
              var rectangleHoverYPosition = height / 3 - lastValue;

              // Set limit line for top edge of chart
              if (rectangleHoverYPosition < top) {
                rectangleHoverYPosition = top;
              }
              var placeRectangleAtX = _this.xHoverCoor - rectangleWidth / 2;
              var placeTextAtRectangleX = placeRectangleAtX + 28;

              // Set limit line on left and right edges of chart
              if (_this.xHoverCoor < rectangleWidth / 2 + left) {
                placeRectangleAtX = left;
                placeTextAtRectangleX = placeRectangleAtX + 28;
              } else if (_this.xHoverCoor > right - rectangleWidth / 2) {
                placeRectangleAtX = right - rectangleWidth;
                placeTextAtRectangleX = placeRectangleAtX + 28;
              }

              // Create circle radius on data point
              chart.ctx.beginPath();
              ctx.arc(_this.xHoverCoor, y.getPixelForValue(hrValue), 5, 0, 2 * Math.PI);
              ctx.borderWidth = 5;
              ctx.borderColor = 'white';
              ctx.fillStyle = lineColor;
              ctx.fill();
              ctx.closePath();

              // hover rectangle border
              chart.ctx.beginPath();
              chart.ctx.fillStyle = lineColor;
              chart.ctx.roundRect(placeRectangleAtX - 3, rectangleHoverYPosition - 3, rectangleBorderWidth, 46, 0);
              chart.ctx.fill();

              // hover rectangle
              chart.ctx.beginPath();
              chart.ctx.fillStyle = 'white';
              chart.ctx.roundRect(placeRectangleAtX, rectangleHoverYPosition, rectangleWidth, 40, 0);
              chart.ctx.fill();

              // Create circle bullet point on text
              chart.ctx.beginPath();
              ctx.arc(placeTextAtRectangleX - 10, rectangleHoverYPosition + 22, 5, 0, 2 * Math.PI);
              ctx.fillStyle = lineColor;
              ctx.fill();
              ctx.closePath();

              // hover rectangle text
              chart.ctx.font = 'bold 20px sans-serif'; // Set default font style

              // Parse the date string and extract the time in 12-hour format
              var date = new Date(lastTimeValue);
              var hours = date.getHours();
              var period = hours >= 12 ? 'PM' : 'AM';
              var formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
              var minutes = date.getMinutes().toString().padStart(2, '0');
              var timeString = "".concat(formattedHours, ":").concat(minutes).concat(period);

              // Calculate the width of the bold text
              var boldTextWidth = chart.ctx.measureText("".concat(lastValue, " bpm ")).width;

              // Fill the bold and non-bold text separately
              chart.ctx.fillStyle = 'black';
              chart.ctx.fillText("".concat(lastValue, " bpm "), placeTextAtRectangleX, rectangleHoverYPosition + 23); // Bold text
              chart.ctx.font = '20px sans-serif';
              chart.ctx.fillText(timeString, placeTextAtRectangleX + boldTextWidth, rectangleHoverYPosition + 23); // Non-bold text

              break;
            } else {
              if (_this.xHoverCoor + 1 > data.datasets[0].placeLineInPixels) {
                chart.ctx.save();
                chart.ctx.beginPath();
                chart.ctx.strokeStyle = _this.colors.MIN;
                chart.ctx.lineWidth = _this.lineWidthValues.HOVER_LINE;
                chart.ctx.moveTo(_this.xHoverCoor, top - 20);
                chart.ctx.lineTo(_this.xHoverCoor, bottom);
                chart.ctx.stroke();
                chart.ctx.restore();
              }
            }
          }
        }
      }
    });
    _defineProperty(this, "customLineBorderPlugin", {
      beforeDraw: function beforeDraw(chart, args) {
        var bottom = chart.chartArea.bottom;
        var chartBoxDiv = _this.chartCanvas.parentNode;
        var chartBoxWidth = chartBoxDiv.offsetWidth;
        var chartBoxStyles = window.getComputedStyle(chartBoxDiv);
        var paddingLeft = chartBoxStyles.getPropertyValue('padding-left');
        var paddingRight = chartBoxStyles.getPropertyValue('padding-right');
        var padding = parseInt(paddingLeft, 10) + parseInt(paddingRight, 10);
        var chartRightEdge = chartBoxWidth - padding - 2;
        var ctx = chart.ctx;
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(128, 128, 128,0.5)';
        ctx.moveTo(1, 1);
        ctx.lineTo(chartRightEdge, 1);
        ctx.lineTo(chartRightEdge, bottom + 50);
        ctx.lineTo(1, bottom + 50);
        ctx.closePath();
        ctx.stroke();
      }
    });
    _defineProperty(this, "nowIndicatorLinePlugin", {
      beforeDatasetsDraw: function beforeDatasetsDraw(chart) {
        // Fix for JIRA JSCHARTBUG-6
        // Changed checking from getting the length to checking the global variable
        // Removed some unused parameters
        if (_this.isLineIndicatorOn === false || _this.hasData === false) {
          return;
        }
        var ctx = chart.ctx,
          data = chart.data,
          _chart$chartArea2 = chart.chartArea,
          top = _chart$chartArea2.top,
          bottom = _chart$chartArea2.bottom,
          left = _chart$chartArea2.left,
          right = _chart$chartArea2.right,
          _chart$scales2 = chart.scales,
          x = _chart$scales2.x,
          y = _chart$scales2.y;
        // Draw indicator line
        ctx.save();
        _this.myChart.ctx.beginPath();
        _this.myChart.ctx.strokeStyle = _this.colors.MODERATE;
        _this.myChart.ctx.lineWidth = _this.lineWidthValues.NOW_INDICATOR_LINE;
        var time = data.datasets[0].placeLine;
        var _time$split$map = time.split(':').map(Number),
          _time$split$map2 = _slicedToArray(_time$split$map, 2),
          hours = _time$split$map2[0],
          minutes = _time$split$map2[1];
        var totalMinutes = hours * 60 + minutes;
        var totalChartWidthPixels = right - left;
        var totalMinutesOneDay = 1440;
        var position = totalMinutes / totalMinutesOneDay * totalChartWidthPixels;
        // Get this pixel value so that hover knows the last position of data
        data.datasets[0].placeLineInPixels = position + left;
        _this.myChart.ctx.moveTo(position + left, 1);
        _this.myChart.ctx.lineTo(position + left, bottom);
        _this.myChart.ctx.stroke();
        _this.myChart.ctx.restore();
        // Draw indicator text
        _this.myChart.ctx.font = 'normal 23px Arial';
        _this.myChart.ctx.textBaseline = 'middle';
        _this.myChart.ctx.fillStyle = _this.colors.MODERATE;
        // Fix for JIRA JSCHARTBUG-48
        // Add Spanish Localization support
        // Added threshold to avoid cutoff of Spanish 'NOW' indicator
        if (right - data.datasets[0].placeLineInPixels < 20) {
          position -= 20;
        }
        // Fix for JIRA JSCHARTBUG-93
        // Use line idicator text as flag and remove value
        if (_this.lineIndicatorText !== '') {
          _this.myChart.ctx.fillText(_this.lineIndicatorText, position + 20, bottom + 70);
        } else {
          _this.myChart.ctx.fillText(_this.getLocalizedNowString(_this.language), position + 20, bottom + 70);
        }
      }
    });
    _defineProperty(this, "fadeChartPlugin", {
      afterDatasetsDraw: function afterDatasetsDraw(chart) {
        var ctx = chart.ctx,
          canvas = chart.canvas,
          data = chart.data,
          _chart$chartArea3 = chart.chartArea,
          top = _chart$chartArea3.top,
          bottom = _chart$chartArea3.bottom,
          left = _chart$chartArea3.left,
          right = _chart$chartArea3.right,
          width = _chart$chartArea3.width,
          height = _chart$chartArea3.height,
          _chart$scales3 = chart.scales,
          x = _chart$scales3.x,
          y = _chart$scales3.y;
        if (_this.isChartClicked) {
          var _ctx = chart.ctx;
          var yAxis = chart.scales.y;
          var xAxis = chart.scales.x;
          _ctx.save();
          _ctx.fillStyle = _this.colors.FADE_CHART_ONCLICK;
          _ctx.fillRect(2, 2, right, bottom - 2);
          _ctx.restore();
        }
      }
    });
    _defineProperty(this, "hoverCursorValuesXYPlugin", {
      afterEvent: function afterEvent(chart, args) {
        var ctx = chart.ctx,
          canvas = chart.canvas,
          data = chart.data,
          _chart$chartArea4 = chart.chartArea,
          top = _chart$chartArea4.top,
          bottom = _chart$chartArea4.bottom,
          left = _chart$chartArea4.left,
          right = _chart$chartArea4.right,
          width = _chart$chartArea4.width,
          height = _chart$chartArea4.height,
          _chart$scales4 = chart.scales,
          x = _chart$scales4.x,
          y = _chart$scales4.y;
        if (args.inChartArea) {
          _this.xHoverCoor = args.event.x;
          _this.yHoverCoor = args.event.y;
        } else {
          _this.xHoverCoor = undefined;
          _this.yHoverCoor = undefined;
        }
        args.changed = true;
      }
    });
    _defineProperty(this, "clickOnChartEnableHoverPlugin", {
      afterEvent: function afterEvent(chart, args) {
        var xCursor = args.event.x;
        var click = args.event.type;
        if (click === 'click') {
          var ctx = chart.ctx,
            data = chart.data,
            _chart$chartArea5 = chart.chartArea,
            top = _chart$chartArea5.top,
            bottom = _chart$chartArea5.bottom,
            left = _chart$chartArea5.left,
            right = _chart$chartArea5.right,
            _chart$scales5 = chart.scales,
            x = _chart$scales5.x,
            y = _chart$scales5.y;
          for (var i = 0; i < chart._metasets[0].data.length; i++) {
            var xMin = chart._metasets[0].data[i].x - 8;
            var xMax = chart._metasets[0].data[i].x + 8;
            if (xCursor >= xMin && xCursor <= xMax) {
              if (_this.isChartClicked) {
                _this.isChartClicked = false;
                return;
              } else {
                _this.isChartClicked = true;
                break;
              }
            }
          }
        }
      }
    });
    _defineProperty(this, "lineColorChangeOnThresholdPlugin", {
      afterLayout: function afterLayout(chart) {
        var ctx = chart.ctx;
        ctx.save();
        var yAxis = chart.scales.y;
        var gradient = ctx.createLinearGradient(0, yAxis.top, 0, yAxis.bottom);
        gradient.addColorStop(0, _this.colors.HIGH);
        gradient.addColorStop(_this.getThreshold(_this.thresholds.HIGH - _this.thresholds.ADJUSTABLE_MIN, yAxis.max - _this.thresholds.ADJUSTABLE_MIN), _this.colors.HIGH);
        gradient.addColorStop(_this.getThreshold(_this.thresholds.HIGH - 0.5 - _this.thresholds.ADJUSTABLE_MIN, yAxis.max - _this.thresholds.ADJUSTABLE_MIN), _this.colors.MODERATE);
        gradient.addColorStop(_this.getThreshold(_this.thresholds.MODERATE - _this.thresholds.ADJUSTABLE_MIN, yAxis.max - _this.thresholds.ADJUSTABLE_MIN), _this.colors.MODERATE);
        gradient.addColorStop(_this.getThreshold(_this.thresholds.MODERATE - 0.5 - _this.thresholds.ADJUSTABLE_MIN, yAxis.max - _this.thresholds.ADJUSTABLE_MIN), _this.colors.LOW);
        gradient.addColorStop(_this.getThreshold(_this.thresholds.LOW - _this.thresholds.ADJUSTABLE_MIN, yAxis.max - _this.thresholds.ADJUSTABLE_MIN), _this.colors.LOW);
        gradient.addColorStop(_this.getThreshold(_this.thresholds.LOW - _this.thresholds.ADJUSTABLE_MIN, yAxis.max - _this.thresholds.ADJUSTABLE_MIN), _this.colors.MIN);
        gradient.addColorStop(1, _this.colors.MIN);
        chart.data.datasets[0].borderColor = gradient;
        ctx.restore();
      }
    });
    _defineProperty(this, "customXAxisLabelColorPlugin", {
      beforeDraw: function beforeDraw(chart, args, options) {
        var _chart$scales$x = chart.scales['x'],
          top = _chart$scales$x.top,
          bottom = _chart$scales$x.bottom;
        var left = chart.chartArea.left;
        var right = chart.chartArea.right;
        var ctx = chart.ctx;
        ctx.fillStyle = _this.colors.X_AXIS_LABELS;
        ctx.fillRect(2, top, right + left - 5, 49);
      }
    });
    _defineProperty(this, "noDataTextPlugin", {
      afterDraw: function afterDraw(chart) {
        // Fix for JIRA JSCHARTBUG-6
        // Used the global variable for checking of data in chart
        if (!_this.hasData) {
          var _chart$chartArea6 = chart.chartArea,
            left = _chart$chartArea6.left,
            top = _chart$chartArea6.top,
            right = _chart$chartArea6.right,
            bottom = _chart$chartArea6.bottom,
            ctx = chart.ctx;
          var centerX = (left + right) / 2;
          var centerY = (top + bottom) / 2;
          ctx.save();
          ctx.textAlign = 'center';
          ctx.font = '40px Arial';
          ctx.fillStyle = 'black';
          ctx.textBaseline = 'middle';
          // Fix for JIRA JSCHARTBUG-48
          // Add Spanish Localization support
          // Fix for JIRA JSCHARTBUG-87
          // If variable has changed - custom no data text shall be used regardless of language set
          if (_this.noDataText !== '') {
            ctx.fillText(_this.noDataText, centerX, centerY);
          } else {
            ctx.fillText(_this.getLocalizedNoDataString(_this.language), centerX, centerY);
          }
          ctx.restore();
        }
      }
    });
    this.colors = {
      MIN: 'rgb(255, 197, 88)',
      LOW: 'rgb(0, 185, 255)',
      MODERATE: 'rgb(144, 112, 255)',
      HIGH: 'rgb(38, 203, 168)',
      X_AXIS_LABELS: 'rgb(237, 239, 240)',
      HOVER_RECTANGLE: 'rgba(237, 239, 240,0.3)',
      FADE_CHART_ONCLICK: 'rgba(255, 255, 255, 0.7)'
    };
    this.lineWidthValues = {
      NOW_INDICATOR_LINE: 3,
      HOVER_LINE: 2,
      CHART_LINE: 2,
      BORDER_LINE: 1
    };
    this.myChart;
    this.xHoverCoor;
    this.yHoverCoor;
    // this.isChartClicked = false; Fix for JIRA JSCHARTBUG-61 and JSCHARTBUG-67 - remove isChartClicked variable
    this.chartCanvas = chartCanvas;
    this.heartRateData = [];
    this.is12HourFormat = true;
    this.maxValue = 220;
    this.isLineIndicatorOn = true;
    // Fix for JIRA JSCHARTBUG-93
    // Use line idicator text as flag and remove value
    this.lineIndicatorText = '';
    // Fix for JIRA JSCHARTBUG-87
    // Use as no data flag and remove value
    this.noDataText = '';
    this.connectDuration = 10;
    this.isConnectAllPoints = true;
    // Fix for JIRA JSCHARTBUG-6
    // This variable will be used to check if all y values are null
    this.hasData = false;
    // Fix for JIRA JSCHARTBUG-48
    // Add Spanish Localization support
    this.language = ChartLanguage.ENGLISH;
    this.thresholds = {
      MIN: 0,
      ADJUSTABLE_MIN: 0,
      LOW: 94,
      MODERATE: 115,
      HIGH: 153,
      MAX: 250,
      FIXED_MAX: 300
    };
    this.initializeChart();
  }
  HeartRateLineChart_createClass(HeartRateLineChart, [{
    key: "initializeChart",
    value: function initializeChart() {
      var _this2 = this;
      /* Data block */
      var data = {
        labels: [],
        datasets: [{
          label: '',
          data: [],
          tension: 0.1,
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: this.lineWidthValues.CHART_LINE,
          spanGaps: false,
          placeLine: '00:00',
          placeLineInPixels: 0
        }]
      };

      /* Config block*/
      var config = {
        type: 'line',
        data: data,
        options: {
          animation: {
            duration: 0
          },
          layout: {
            padding: {
              bottom: 50
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'hour'
              },
              min: new Date('2024-01-01T00:00:00'),
              max: new Date('2024-01-02T00:00:00'),
              display: true,
              grid: {
                drawOnChartArea: false,
                display: false,
                drawBorder: false
              },
              border: {
                display: false
              },
              ticks: {
                offset: false,
                autoSkip: false,
                callback: function callback(value, index, values) {
                  switch (index) {
                    case 0:
                      return _this2.is12HourFormat ? '12:00AM' : '00:00';
                    case 6:
                      return _this2.is12HourFormat ? '06:00AM' : '06:00';
                    case 12:
                      return _this2.is12HourFormat ? '12:00PM' : '12:00';
                    case 18:
                      return _this2.is12HourFormat ? '06:00PM' : '18:00';
                    case 24:
                      return _this2.is12HourFormat ? '11:59PM' : '23:59';
                    default:
                      return undefined;
                  }
                },
                maxRotation: 0,
                minRotation: 0,
                color: 'black',
                padding: 8,
                font: {
                  weight: 'normal',
                  size: 20
                }
              }
            },
            y: {
              min: this.thresholds.ADJUSTABLE_MIN,
              max: this.thresholds.MAX,
              border: {
                display: false
              },
              ticks: {
                stepSize: 1,
                maxTicksLimit: this.thresholds.MAX * 2,
                color: 'black',
                font: {
                  weight: 'bold',
                  size: 20
                },
                callback: function callback(context, index) {
                  // Fix for JIRA JSCHARTBUG-6
                  // This variable will be used to check if all y values are null
                  if (_this2.hasData === false) {
                    return undefined;
                  }
                  if (context === _this2.thresholds.LOW || context === _this2.thresholds.MODERATE || context === _this2.thresholds.HIGH) {
                    return context;
                  }
                },
                gridLines: {
                  drawBorder: false
                }
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            }
          }
        },
        plugins: [this.customLineBorderPlugin, this.nowIndicatorLinePlugin, this.hoverCursorValuesXYPlugin,
        //this.fadeChartPlugin, Fix for JIRA JSCHARTBUG-61 and JSCHARTBUG-67 - remove opacity plugin
        this.hoverLineAndTextPlugin,
        //this.clickOnChartEnableHoverPlugin, Fix for JIRA JSCHARTBUG-61 and JSCHARTBUG-67 - remove click to enable plugin
        this.lineColorChangeOnThresholdPlugin, this.customXAxisLabelColorPlugin, this.noDataTextPlugin]
      };

      /* Render block */
      this.myChart = new Chart(this.chartCanvas, config);
    }
  }, {
    key: "showChart",
    value: function showChart() {
      // nothing happens
      // This API is deprecated as of 2/7/2024
      // Chart is already rendered when setChartData() is called
      // JDV
    }
  }, {
    key: "setChartData",
    value: function setChartData(data) {
      this.heartRateData = data;
      this.updateChart();
    }
  }, {
    key: "addMultipleData",
    value: function addMultipleData(data) {
      var _this$heartRateData;
      (_this$heartRateData = this.heartRateData).push.apply(_this$heartRateData, _toConsumableArray(data));
      this.updateChart();
    }
  }, {
    key: "addData",
    value: function addData(data) {
      this.heartRateData.push(data);
      this.updateChart();
    }
  }, {
    key: "updateChart",
    value: function updateChart() {
      // Clear the current chart
      this.myChart.data.datasets[0].data = [];
      // Convert x values to Date objects
      this.convertToDates();
      // Sort data by time and filter for one day
      this.sortHeartRateDataByTime();
      // Filter correct values from 0 to max HR values
      this.filterCorrectHRValues();
      // Update y-axis min and max values based on data
      this.updateChartYMinMax();
      // Update chart data
      this.updateChartData();
      // Check if data exist on chart
      // Fix for JIRA JSCHARTBUG-6
      // Call new function checking if all data are null values
      this.checkAllBlankData();
      // Update the chart
      this.myChart.update();
      console.log('Heart Rate Chart is rendered!');
    }
  }, {
    key: "updateChartData",
    value: function updateChartData() {
      var _this$heartRateData2;
      for (var i = 0; i < this.heartRateData.length; i++) {
        var currentData = this.heartRateData[i];
        // Fix for JIRA JSCHARTBUG-6
        // Instead of plotting the 0 value to chart dataset, replace it with null
        // Null will not plot the data on chart 
        var yVal = parseInt(currentData.hr) === 0 ? null : parseInt(currentData.hr);
        this.myChart.data.datasets[0].data.push({
          x: currentData.time,
          y: yVal
        });
        this.addGapIfRequired(i);
      }
      var latestTime = (_this$heartRateData2 = this.heartRateData[this.heartRateData.length - 1]) === null || _this$heartRateData2 === void 0 ? void 0 : _this$heartRateData2.time;
      // Fix for JIRA JSCHARTBUG-6
      // Move the NOW line indicator if latest value added is not NULL (zero)
      if (latestTime && this.heartRateData[this.heartRateData.length - 1].hr !== null) {
        this.moveLineToLatest(latestTime);
      }
    }
  }, {
    key: "addGapIfRequired",
    value: function addGapIfRequired(index) {
      if (index + 1 < this.heartRateData.length) {
        var timeDiff = (this.heartRateData[index + 1].time - this.heartRateData[index].time) / (1000 * 60);
        var connectAllPoints = this.isConnectAllPoints,
          connectDuration = this.connectDuration;
        if (!connectAllPoints && timeDiff > connectDuration) {
          var newTime = new Date(this.heartRateData[index].time.getTime() + 60 * 1000);
          this.myChart.data.datasets[0].data.push({
            x: newTime,
            y: null
          });
        }
      }
    }

    // Fix for JIRA JSCHARTBUG-6
    // New function to check if all values are null
    // Changes the value of the global variable hasData - true/false
  }, {
    key: "checkAllBlankData",
    value: function checkAllBlankData() {
      var datasets = this.myChart.data.datasets;
      this.hasData = false;
      var _iterator = _createForOfIteratorHelper(datasets[0].data),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var dataset = _step.value;
          if (dataset.y !== null) {
            this.hasData = true;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "convertToDates",
    value: function convertToDates() {
      this.heartRateData.forEach(function (dataPoint) {
        if (!(dataPoint.time instanceof Date)) {
          dataPoint.time = new Date('2024-01-01T' + dataPoint.time);
        }
      });
    }
  }, {
    key: "sortHeartRateDataByTime",
    value: function sortHeartRateDataByTime() {
      var startTime = new Date('2024-01-01T00:00:00').getTime();
      var endTime = new Date('2024-01-01T23:59:59').getTime();
      this.heartRateData = this.heartRateData.filter(function (entry) {
        var entryTime = entry.time.getTime();
        return entryTime >= startTime && entryTime <= endTime;
      }).sort(function (a, b) {
        return a.time.getTime() - b.time.getTime();
      });
    }
  }, {
    key: "filterCorrectHRValues",
    value: function filterCorrectHRValues() {
      var _this3 = this;
      this.heartRateData = this.heartRateData.filter(function (entry) {
        return entry._hr >= 0 && entry._hr <= _this3.thresholds.MAX;
      });
    }
  }, {
    key: "updateChartYMinMax",
    value: function updateChartYMinMax() {
      if (this.heartRateData.length !== 0) {
        var lowestHR = Math.min.apply(Math, _toConsumableArray(this.heartRateData.map(function (data) {
          return data.hr;
        })));
        var highestHR = Math.max.apply(Math, _toConsumableArray(this.heartRateData.map(function (data) {
          return data.hr;
        })));
        if (lowestHR <= 20) {
          this.thresholds.ADJUSTABLE_MIN = 0;
          this.myChart.options.scales.y.min = 0;
        } else {
          if (lowestHR >= this.thresholds.LOW) {
            this.thresholds.ADJUSTABLE_MIN = this.thresholds.LOW - 20;
          } else {
            this.thresholds.ADJUSTABLE_MIN = lowestHR - 20;
          }
          this.myChart.options.scales.y.min = this.thresholds.ADJUSTABLE_MIN;
        }
        if (highestHR <= this.thresholds.HIGH) {
          this.thresholds.ADJUSTABLE_MAX = this.thresholds.HIGH + 20;
        } else {
          this.thresholds.ADJUSTABLE_MAX = highestHR + 20;
        }
        this.myChart.options.scales.y.max = this.thresholds.ADJUSTABLE_MAX;
      } else {
        this.thresholds.ADJUSTABLE_MIN = 0;
        this.myChart.options.scales.y.min = 0;
      }
    }
  }, {
    key: "setMaxValue",
    value: function setMaxValue(maxValue) {
      if (maxValue > this.thresholds.FIXED_MAX) {
        alert('Error value. Max value is 300');
      } else if (maxValue >= this.thresholds.HIGH) {
        this.myChart.options.scales.y.max = maxValue;
        this.thresholds.MAX = maxValue;
        this.myChart.update();
      } else if (maxValue < this.thresholds.HIGH) {
        alert('Error value. Max value should be higher than HIGH threshold');
      }
    }
  }, {
    key: "setFormat",
    value: function setFormat(formatValue) {
      if (formatValue !== '12HR' && formatValue !== '24HR') {
        alert('Error value. Values accepted are only 12HR and 24HR');
        return;
      }
      this.is12HourFormat = formatValue === '12HR' ? true : false;
      this.updateChart();
    }
  }, {
    key: "deleteData",
    value: function deleteData(index) {
      if (index >= this.heartRateData.length) {
        alert('Error value. Cannot delete index from length of list value');
        return;
      }
      this.heartRateData.splice(index, 1);
      this.updateChart();
    }
  }, {
    key: "moveLine",
    value: function moveLine(time) {
      var militaryTimeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
      if (!militaryTimeRegex.test(time)) {
        alert('Invalid time format. Please use military time format (HH:mm).');
        return;
      }
      if (this.heartRateData.length === 0) {
        alert('No data in chart.');
      } else {
        this.myChart.data.datasets[0].placeLine = time;
        this.myChart.update();
      }
    }
  }, {
    key: "setThresholds",
    value: function setThresholds(lowInput, moderateInput, highInput) {
      if (lowInput === '' || moderateInput === '' || highInput === '') {
        alert('Please enter correct values.');
      } else {
        var low = parseInt(lowInput);
        var moderate = parseInt(moderateInput);
        var high = parseInt(highInput);
        if (!isNaN(low) && !isNaN(moderate) && !isNaN(high) && low <= moderate && moderate <= high && high <= this.thresholds.MAX) {
          this.thresholds.LOW = low;
          this.thresholds.MODERATE = moderate;
          this.thresholds.HIGH = high;
          this.updateChartYMinMax();
          this.myChart.update();
        } else if (high > this.thresholds.MAX) {
          alert("Current Max value is ".concat(this.thresholds.MAX, ". High threshold should not be higher than that"));
        } else {
          alert('Please enter valid threshold values.');
        }
      }
    }
  }, {
    key: "setTimeLineIndicatorToggle",
    value: function setTimeLineIndicatorToggle(toggle) {
      if (typeof toggle !== 'boolean') {
        return;
      }
      if (toggle) {
        this.isLineIndicatorOn = true;
      } else {
        this.isLineIndicatorOn = false;
      }
      this.myChart.update();
    }
  }, {
    key: "setLineIndicator",
    value: function setLineIndicator(newLineIndicatorValue) {
      this.lineIndicatorText = newLineIndicatorValue;
      this.myChart.update();
    }
  }, {
    key: "clearChart",
    value: function clearChart() {
      this.heartRateData = [];
      this.myChart.data.datasets[0].data = [];
      // Fix for JIRA JSCHARTBUG-6
      // Call updateChart() since this also calls checkAllBlankData()
      // Safer way to reset chart than just calling updateChartYMinMax() func
      this.updateChart();
      this.myChart.update();
    }
  }, {
    key: "setConnectDuration",
    value: function setConnectDuration(input) {
      var newDuration = parseInt(input, 10);
      if (!isNaN(newDuration) && newDuration >= 1 && newDuration <= 1440) {
        this.connectDuration = newDuration;
        this.updateChart();
      } else {
        alert('Please enter a valid duration (minimum 1 minute).');
      }
    }
  }, {
    key: "setConnectAllPoints",
    value: function setConnectAllPoints(isConnectAllPoints) {
      if (typeof isConnectAllPoints === 'boolean') {
        this.isConnectAllPoints = isConnectAllPoints;
        this.updateChart();
      } else {
        alert('Invalid parameter. Please provide a boolean value.');
      }
    }
  }, {
    key: "setNoDataText",
    value: function setNoDataText(textInput) {
      if (textInput === '') {
        alert('Error value. Please input something.');
      } else {
        this.noDataText = textInput;
        this.myChart.update();
      }
    }
  }, {
    key: "generateRandomHRArray",
    value: function generateRandomHRArray(numElements, minHR, maxHR, currentDate) {
      if (this.heartRateData.length > 0) {
        var latestTime = this.heartRateData[this.heartRateData.length - 1].time;
        var latestHour = latestTime.getHours();
        var latestMinutes = latestTime.getMinutes();
        var latestSeconds = latestTime.getSeconds();
        currentDate = currentDate || new Date('2024-01-01T00:00:00');
        currentDate.setHours(latestHour, latestMinutes, latestSeconds);
      } else {
        currentDate = currentDate || new Date('2024-01-01T00:00:00');
      }
      for (var i = 0; i < numElements; i++) {
        var randomHR = Math.floor(Math.random() * (maxHR - minHR + 1)) + minHR;
        this.heartRateData.push(new HeartRateLineDataModel(randomHR, new Date(currentDate)));
        currentDate.setMinutes(currentDate.getMinutes() + 1);
      }
    }
  }, {
    key: "moveLineToLatest",
    value: function moveLineToLatest(latestTime) {
      var date = new Date(latestTime);
      var hours = date.getHours().toString().padStart(2, '0');
      var minutes = date.getMinutes().toString().padStart(2, '0');
      this.myChart.data.datasets[0].placeLine = "".concat(hours, ":").concat(minutes);
    }
  }, {
    key: "getThreshold",
    value: function getThreshold(value, max) {
      return 1 - value / max;
    }
  }, {
    key: "formatDateTimeWithSeconds",
    value: function formatDateTimeWithSeconds(dateTime) {
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      return new Intl.DateTimeFormat('en-US', options).format(dateTime);
    }

    // Fix for JIRA JSCHARTBUG-48
    // Added getLocalizedNoDataString(), getLocalizedNowString(), setLanguage()
  }, {
    key: "getLocalizedNoDataString",
    value: function getLocalizedNoDataString(language) {
      var text = language === 'es' ? 'SIN DATOS' : 'NO DATA';
      return text;
    }
  }, {
    key: "getLocalizedNowString",
    value: function getLocalizedNowString(language) {
      var text = language === 'es' ? 'AHORA' : 'NOW';
      return text;
    }
  }, {
    key: "setLanguage",
    value: function setLanguage(language) {
      this.language = language;
      this.updateChart();
    }
  }]);
  return HeartRateLineChart;
}();

;// CONCATENATED MODULE: ./src/utils/TimeDisplayFormat.js
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
*               01/10/2024 LMB – Created file for Timex JS Charts Library
*
*******************************************************************************/
var TimeDisplayFormat = {
  USE_12HR_FORMAT: 0,
  USE_24HR_FORMAT: 1
};
/* harmony default export */ const utils_TimeDisplayFormat = (TimeDisplayFormat);
;// CONCATENATED MODULE: ./src/utils/TimeInterval.js
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
*               01/10/2024 LMB – Created file for Timex JS Charts Library
*
*******************************************************************************/
var TimeInterval = {
  ONE_SECOND: 86400,
  ONE_MINUTE: 1440,
  FIVE_MINUTES: 288,
  TEN_MINUTES: 144,
  FIFTEEN_MINUTES: 96,
  TWENTY_MINUTES: 72,
  THIRTY_MINUTES: 48,
  ONE_HOUR: 24
};
/* harmony default export */ const utils_TimeInterval = (TimeInterval);
;// CONCATENATED MODULE: ./src/utils/ChartLanguage.js
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
*               01/10/2024 LMB – Created file for Timex JS Charts Library
*
*******************************************************************************/
var ChartLanguage_ChartLanguage = {
  ENGLISH: 'en',
  SPANISH: 'es',
  SYSTEM_LANGUAGE: 'sys'
};
/* harmony default export */ const utils_ChartLanguage = (ChartLanguage_ChartLanguage);
;// CONCATENATED MODULE: ./src/charts/StepCountBarChart.js
function StepCountBarChart_typeof(o) { "@babel/helpers - typeof"; return StepCountBarChart_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, StepCountBarChart_typeof(o); }
function StepCountBarChart_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = StepCountBarChart_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function StepCountBarChart_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return StepCountBarChart_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return StepCountBarChart_arrayLikeToArray(o, minLen); }
function StepCountBarChart_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function StepCountBarChart_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function StepCountBarChart_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, StepCountBarChart_toPropertyKey(descriptor.key), descriptor); } }
function StepCountBarChart_createClass(Constructor, protoProps, staticProps) { if (protoProps) StepCountBarChart_defineProperties(Constructor.prototype, protoProps); if (staticProps) StepCountBarChart_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function StepCountBarChart_defineProperty(obj, key, value) { key = StepCountBarChart_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function StepCountBarChart_toPropertyKey(t) { var i = StepCountBarChart_toPrimitive(t, "string"); return "symbol" == StepCountBarChart_typeof(i) ? i : String(i); }
function StepCountBarChart_toPrimitive(t, r) { if ("object" != StepCountBarChart_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != StepCountBarChart_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
*               01/10/2024 LMB – Created file for Timex JS Charts Library
*
*******************************************************************************/




var StepCountBarChart = /*#__PURE__*/function () {
  function StepCountBarChart(_ctx) {
    var _this = this;
    StepCountBarChart_classCallCheck(this, StepCountBarChart);
    // Comment out since tooltip is now triggered by mouse over - Refer to JIRA issue JSCHARTBUG-62
    //---------------------- Start of Fix ----------------------
    // processBarClick = (event, bars) => {
    //     const clickedBar = bars[0];
    //     if (clickedBar) {
    //         const data = this.chart.data;
    //         const plugins = this.chart.options.plugins;
    //         const customToolTip = plugins.customToolTip;
    //         const customCursorTracker = plugins.customCursorTracker;
    //         if ((customToolTip.enabled === false) || ((customToolTip.enabled === true) && (customToolTip.barIndex === clickedBar.index))) {
    //             customToolTip.enabled = !customToolTip.enabled;
    //             customCursorTracker.enabled = !customCursorTracker.enabled;
    //         }
    //         customToolTip.barIndex = clickedBar.index;
    //         this.chart.update();
    //     }
    // }
    //---------------------- End of Fix ----------------------    
    // addCustomPlugins() {
    //     Chart.register({
    //         id: 'customXAxisBackground',
    //         beforeDraw: this.customXAxisBackgroundHandler
    //     });
    //     Chart.register({
    //         id: 'customCursorTracker',
    //         afterEvent: this.customCursorTrackerHandler
    //     });
    //     Chart.register({
    //         id: 'customToolTip',
    //         afterDatasetsDraw: this.customToolTipHandler
    //     });        
    // }
    StepCountBarChart_defineProperty(this, "customXAxisBackgroundHandler", {
      beforeDraw: function beforeDraw(chart, args, options) {
        var ctx = chart.ctx;
        var xAxis = chart.scales['x'];
        ctx.save();
        ctx.fillStyle = 'rgba(237, 239, 240, 1.0)';
        ctx.fillRect(0, chart.chartArea.bottom, xAxis.width, 30);
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText(chart.options.plugins.customXAxisBackground.label1, chart.chartArea.left + 30, chart.chartArea.bottom + 15);
        ctx.fillText(chart.options.plugins.customXAxisBackground.label2, xAxis.width / 2, chart.chartArea.bottom + 15);
        ctx.fillText(chart.options.plugins.customXAxisBackground.label3, chart.chartArea.right - 30, chart.chartArea.bottom + 15);
        ctx.restore();
      }
    });
    StepCountBarChart_defineProperty(this, "customCursorTrackerHandler", {
      afterEvent: function afterEvent(chart, args, options) {
        if (chart.options.plugins.customCursorTracker.enabled === true) {
          var ctx = chart.ctx;
          var canvas = chart.canvas;
          var xAxis = chart.scales['x'];
          var yAxis = chart.scales['y'];

          // Modified how cursor tracking is implemented so that tooltip 
          //  is not displayed immediately - Refer to JIRA issue JSCHARTBUG-89
          //---------------------- Start of Fix ----------------------
          var _this$chart$chartArea = _this.chart.chartArea,
            top = _this$chart$chartArea.top,
            right = _this$chart$chartArea.right,
            bottom = _this$chart$chartArea.bottom,
            left = _this$chart$chartArea.left;

          // Check if the Y value is a negative 0, if so, cursor is outside 
          //  chart display area
          if (args.event.y === 0 && !Object.is(args.event.y, 0)) {
            _this.chart.options.plugins.customToolTip.barIndex = -1;
            if (_this.chart.options.plugins.customToolTip.enabled) {
              _this.chart.options.plugins.customToolTip.enabled = false;
              _this.chart.update();
            }
          } else if (args.event.x >= left && args.event.x <= right && args.event.y >= top && args.event.y <= bottom) {
            var barIndex = xAxis.getValueForPixel(args.event.x);
            _this.chart.options.plugins.customToolTip.barIndex = -1;

            // Only update the hover index if the index contains actual step count
            if (_this.defdata.datasets[0].data[barIndex] > 0) {
              if (yAxis.getValueForPixel(args.event.y) > 0) {
                _this.chart.options.plugins.customToolTip.barIndex = barIndex;
                // Display tooltip if mouse cursor is within the display area - Refer to JIRA issue JSCHARTBUG-62
                // return;
              }
            }
            if (!_this.chart.options.plugins.customToolTip.enabled) {
              _this.chart.options.plugins.customToolTip.enabled = true;
              _this.chart.update();
            }
          } else {
            // Indicate that mouse cursor is outside of display area - Refer to JIRA issue JSCHARTBUG-62
            _this.chart.options.plugins.customToolTip.barIndex = -1;
            if (_this.chart.options.plugins.customToolTip.enabled) {
              _this.chart.options.plugins.customToolTip.enabled = false;
              _this.chart.update();
            }
          }
          //---------------------- End of Fix ----------------------        
        }
      }
    });
    StepCountBarChart_defineProperty(this, "customToolTipHandler", {
      afterDatasetsDraw: function afterDatasetsDraw(chart, args, options) {
        if (chart.options.plugins.customToolTip.enabled === true) {
          var ctx = chart.ctx;
          var canvas = chart.canvas;
          var xAxis = chart.scales['x'];
          var yAxis = chart.scales['y'];
          var _chart$chartArea = chart.chartArea,
            top = _chart$chartArea.top,
            right = _chart$chartArea.right,
            bottom = _chart$chartArea.bottom,
            left = _chart$chartArea.left;
          var barIndex = _this.chart.options.plugins.customToolTip.barIndex;

          // Don't show the tooltip if mouse cursor is outside display area - Refer to JIRA issue JSCHARTBUG-62
          //---------------------- Start of Fix ----------------------
          if (barIndex < 0) {
            return;
          }
          //---------------------- End of Fix ----------------------

          ctx.save();
          var stepCount = _this.defdata.datasets[0].data[barIndex];

          // Make sure a tooltip is only displayed for valid step data - Refer to JIRA issue JSCHARTBUG-119
          //---------------------- Start of Fix ----------------------
          // No need for a tooltip if step data is not greater than 0
          if (stepCount <= 0) {
            return;
          }

          // Get the running step total for the bar
          var runningTotalStepCount = _this.runningTotals[barIndex];
          //---------------------- End of Fix ----------------------

          // Tooltip is not being displayed properly when bar is near the leftmost part
          //  of the chart - Refer to JIRA issue JSCHARTBUG-89
          //---------------------- Start of Fix ----------------------
          var width = 155;
          var height = 65;
          var radius = 5;
          var y = yAxis.getPixelForValue(stepCount);
          var yTail;
          var toolTipRightSide = false;
          var x = xAxis.getPixelForValue(barIndex) - 170;
          if (x < 0) {
            x = xAxis.getPixelForValue(barIndex) + 15;
            toolTipRightSide = true;
          }
          //---------------------- End of Fix ----------------------

          // Make sure that the tooltip is being displayed within the 
          //  viewable area - Refer to JIRA issue JSCHARTBUG-25
          //---------------------- Start of Fix ----------------------
          if (y < 0) {
            y = 0;
          }
          //---------------------- End of Fix ----------------------

          // Make sure that the tooltip tail is drawn within the chart area
          if (y + 20 >= bottom) {
            yTail = y;
          } else {
            yTail = y + 20;
          }
          if (y + height > chart.height) {
            y = chart.height - height;
          }
          ctx.fillStyle = options.backgroundColor;
          ctx.strokeStyle = options.backgroundColor;
          ctx.beginPath();
          ctx.moveTo(x + width - radius, y + height);
          ctx.arcTo(x, y + height, x, y, radius);
          ctx.arcTo(x, y, x + width, y, radius);
          ctx.arcTo(x + width, y, x + width, y + height, radius);
          ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();

          // Make sure that the tooltip is being displayed within the 
          //  viewable area - Refer to JIRA issue JSCHARTBUG-25
          //---------------------- Start of Fix ----------------------
          if (yTail + 10 > bottom) {
            yTail = bottom - 10;
          }
          //---------------------- End of Fix ----------------------

          ctx.beginPath();

          // Tooltip is not being displayed properly when bar is near the leftmost part
          //  of the chart - Refer to JIRA issue JSCHARTBUG-89
          //---------------------- Start of Fix ----------------------
          // Check which side of the bar to display the tooltip tail
          if (toolTipRightSide) {
            ctx.moveTo(x, yTail);
            ctx.lineTo(x - 10, yTail + 10);
            ctx.lineTo(x, yTail + 20);
          } else {
            ctx.moveTo(x + 155, yTail);
            ctx.lineTo(x + 165, yTail + 10);
            ctx.lineTo(x + 155, yTail + 20);
          }
          //---------------------- End of Fix ----------------------

          ctx.closePath();
          ctx.stroke();
          ctx.fill();
          ctx.font = '24pt';
          ctx.fillStyle = 'white';
          ctx.textAlign = 'left';
          ctx.fillText(_this.convertTimeToTimeFormat(_this.convertIndexToTime(barIndex)), x + 5, y + 20);
          ctx.fillText(_this.getLocalizedStepCountString(_this.language), x + 5, y + 40);
          ctx.fillText(_this.getLocalizedTotalStepsString(_this.language), x + 5, y + 55);
          ctx.textAlign = 'right';
          ctx.fillText("".concat(stepCount), x + width - 5, y + 40);
          // Display the running step total - Refer to JIRA issue JSCHARTBUG-119
          ctx.fillText("".concat(runningTotalStepCount), x + width - 5, y + 55);
          ctx.restore();
        }
      }
    });
    this.ctx = _ctx;
    this.barColor = '#3EB1C8';
    this.xAxisColor = '#E7E8E9';
    this.timeFormat = utils_TimeDisplayFormat.USE_12HR_FORMAT;
    this.maxIntervalCount = utils_TimeInterval.ONE_SECOND;
    this.intervalUsed = utils_TimeInterval.ONE_SECOND;
    this.displayIntervalCount = utils_TimeInterval.FIFTEEN_MINUTES;
    this.language = utils_ChartLanguage.ENGLISH;

    // Added variable for fix - Refer to JIRA issue JSCHARTBUG-119
    var runningTotals = [0];
    var randomNumbers = [0];
    var labels = [''];

    // data block
    this.defdata = {
      labels: labels,
      datasets: [{
        data: randomNumbers,
        // Since the bar is zero, clear the bar color - Refer to JIRA issue JSCHARTBUG-37
        //---------------------- Start of Fix ----------------------
        backgroundColor: [this.xAxisColor],
        borderColor: [this.xAxisColor],
        hoverBackgroundColor: [this.xAxisColor],
        //---------------------- End of Fix ----------------------
        borderWidth: 0,
        barPercentage: 1,
        categoryPercentage: 1
      }]
    };

    // config block
    var config = {
      type: 'bar',
      data: this.defdata,
      options: {
        animation: false,
        aspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              maxTicksLimit: 24,
              callback: function callback(value, index, values) {
                var len = values.length;

                // Show only the first and last labels
                if (index === 0 || index === len - 1) {
                  return '';
                } else {
                  return ''; // Hide other labels
                }
              }
            }
          },
          y: {
            display: false,
            beginAtZero: true
          }
        },
        plugins: {
          tooltip: {
            enabled: false
          },
          legend: {
            display: false
          },
          customXAxisBackground: {
            enabled: true,
            label1: '12:00 AM',
            label2: '12:00 PM',
            label3: '11:59 PM'
          },
          customCursorTracker: {
            enabled: false
          },
          customToolTip: {
            enabled: false,
            // Initial value should be -1 so that tooltip is not displayed - Refer to JIRA issue JSCHARTBUG-89
            barIndex: -1,
            backgroundColor: 'rgba(51, 51, 51, 0.9)'
          }
        }
        // Comment out since tooltip is now triggered by mouse over - Refer to JIRA issue JSCHARTBUG-62
        // onClick: this.processBarClick,
      },
      plugins: [this.customXAxisBackgroundHandler, this.customCursorTrackerHandler, this.customToolTipHandler]
    };

    // this.addCustomPlugins();

    this.chart = new Chart(this.ctx, config);
  }
  StepCountBarChart_createClass(StepCountBarChart, [{
    key: "convertIndexToTime",
    value: function convertIndexToTime(index) {
      var totalMinutes = 0;
      switch (this.displayIntervalCount) {
        case utils_TimeInterval.ONE_SECOND:
          // 1-second interval is no longer being used, but just in case
          totalMinutes = Math.floor(index / 60);
          break;
        case utils_TimeInterval.ONE_MINUTE:
          totalMinutes = index * 1;
          break;
        case utils_TimeInterval.FIVE_MINUTES:
          totalMinutes = index * 5;
          break;
        case utils_TimeInterval.TEN_MINUTES:
          totalMinutes = index * 10;
          break;
        case utils_TimeInterval.FIFTEEN_MINUTES:
          totalMinutes = index * 15;
          break;
        case utils_TimeInterval.TWENTY_MINUTES:
          totalMinutes = index * 20;
          break;
        case utils_TimeInterval.THIRTY_MINUTES:
          totalMinutes = index * 30;
          break;
        case utils_TimeInterval.ONE_HOUR:
          totalMinutes = index * 60;
          break;
        default:
          index = 0;
          break;
      }
      var hour = Math.floor(totalMinutes / 60);
      var minute = totalMinutes % 60;
      return hour + ':' + (minute < 10 ? '0' : '') + minute;
    }
  }, {
    key: "convertTimeToIndex",
    value: function convertTimeToIndex(startTime) {
      var defaultTimeFormat = 'HH:mm';
      var time = startTime.split(':');
      var hour = 0;
      var minute = 0;
      var second = 0;
      var secondIncluded = false;
      var index = 0;
      if (startTime.length > defaultTimeFormat.length) {
        secondIncluded = true;
      }
      hour = Number(time[0]);
      minute = Number(time[1]);
      if (secondIncluded == true) {
        second = Number(time[2]);
      }
      switch (this.maxIntervalCount) {
        case utils_TimeInterval.ONE_SECOND:
          index = hour * 3600;
          index += minute * 60;
          if (secondIncluded === true) {
            index += second;
          }
          break;
        case utils_TimeInterval.ONE_MINUTE:
          index = hour * 60;
          index += minute;
          break;
        case utils_TimeInterval.FIVE_MINUTES:
          index = hour * 12;
          index += minute / 5;
          break;
        case utils_TimeInterval.TEN_MINUTES:
          index = hour * 6;
          index += minute / 10;
          break;
        case utils_TimeInterval.FIFTEEN_MINUTES:
          index = hour * 4;
          index += minute / 15;
          break;
        case utils_TimeInterval.TWENTY_MINUTES:
          index = hour * 3;
          index += minute / 20;
          break;
        case utils_TimeInterval.THIRTY_MINUTES:
          index = hour * 2;
          index += minute / 30;
          break;
        case utils_TimeInterval.ONE_HOUR:
          index = hour;
          break;
        default:
          index = 0;
          break;
      }
      return index;
    }
  }, {
    key: "setChartData",
    value: function setChartData(stepList) {
      var stepsArrayFromList = new Array(this.maxIntervalCount).fill(0);
      var index = 0;
      var displaySize = this.displayIntervalCount;
      if (this.displayIntervalCount > this.maxIntervalCount) {
        displaySize = this.maxIntervalCount;
      }
      if (stepList !== null && stepList !== undefined && Array.isArray(stepList)) {
        if (stepList.length > 0) {
          this.totalSteps = 0;
          this.setMaxIntervalCount(this.maxIntervalCount);
          var _iterator = StepCountBarChart_createForOfIteratorHelper(stepList),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var step = _step.value;
              index = this.convertTimeToIndex(step.startTime);

              // Keep track of the individual step count updates and total steps
              stepsArrayFromList[index] += step.stepCount;
              this.totalSteps += step.stepCount;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var displayArray = new Array(displaySize).fill(0);

          // Inititalize the variables for getting the running step total - Refer to JIRA issue JSCHARTBUG-119
          //---------------------- Start of Fix ----------------------
          var runnungTotalsArray = new Array(this.displaySize).fill(0);
          var runTotal = 0;
          //---------------------- End of Fix ----------------------

          // Bars with zero value should have no color - Refer to JIRA issue JSCHARTBUG-37
          var colorArray = new Array(displaySize).fill(this.xAxisColor);
          var intervalSize = this.maxIntervalCount / displaySize;
          var counter = 0;
          var dataCount = 0;
          for (var dispCount = 0; dispCount < displaySize; dispCount++) {
            for (counter = 0; counter < intervalSize; counter++) {
              displayArray[dispCount] += stepsArrayFromList[dataCount];

              // Keep track of the running step total for each step interval - Refer to JIRA issue JSCHARTBUG-119
              runTotal += stepsArrayFromList[dataCount];

              // Only assign a color to bars with non-zero values - Refer to JIRA issue JSCHARTBUG-37
              //---------------------- Start of Fix ----------------------
              if (displayArray[dispCount] > 0) {
                colorArray[dispCount] = this.barColor;
                // Save a copy of the running step total - Refer to JIRA issue JSCHARTBUG-119
                runnungTotalsArray[dispCount] = runTotal;
              }
              // There should be no running total if the step interval has no step data - Refer to JIRA issue JSCHARTBUG-119
              else {
                runnungTotalsArray[dispCount] = 0;
              }
              //---------------------- End of Fix ----------------------

              dataCount++;
            }
          }
          this.intervalUsed = this.displayIntervalCount;
          this.defdata.labels = new Array(displaySize).fill('');
          this.defdata.datasets[0].data = displayArray;

          // Keep a global copy of the running step total - Refer to JIRA issue JSCHARTBUG-119
          this.runningTotals = runnungTotalsArray;

          // Assign the processed bar colors - Refer to JIRA issue JSCHARTBUG-37
          //---------------------- Start of Fix ----------------------
          this.defdata.datasets[0].backgroundColor = colorArray;
          this.defdata.datasets[0].borderColor = colorArray;
          this.defdata.datasets[0].hoverBackgroundColor = colorArray;
          //---------------------- End of Fix ----------------------

          // Enable tooltip when chart data is available - Refer to JIRA issue JSCHARTBUG-62
          //---------------------- Start of Fix ----------------------
          this.chart.options.plugins.customCursorTracker.enabled = true;

          // Tooltip should not be initially displayed - Refer to JIRA issue JSCHARTBUG-119
          this.chart.options.plugins.customToolTip.enabled = false;
          // Initialize to -1 so that tooltip is not immediately displayed - Refer to JIRA issue JSCHARTBUG-89
          this.chart.options.plugins.customToolTip.barIndex = -1;
          //---------------------- End of Fix ----------------------

          this.chart.update();
        }
      }
    }
  }, {
    key: "resetChart",
    value: function resetChart() {
      // Make sure zero is assigned to all bars - Refer to JIRA issue JSCHARTBUG-37
      this.defdata.datasets[0].data = new Array(this.defdata.datasets[0].data.length).fill(0);
      // Clear the running step total copy - Refer to JIRA issue JSCHARTBUG-119
      this.runningTotals = new Array(this.defdata.datasets[0].data.length).fill(0);
      this.totalSteps = 0;

      // Since the bars are all zero, clear all bar colors - Refer to JIRA issue JSCHARTBUG-37
      //---------------------- Start of Fix ----------------------
      var colorArray = new Array(this.defdata.datasets[0].data.length).fill(this.xAxisColor);
      this.defdata.datasets[0].backgroundColor = colorArray;
      this.defdata.datasets[0].borderColor = colorArray;
      this.defdata.datasets[0].hoverBackgroundColor = colorArray;
      //---------------------- End of Fix ----------------------

      // Hide the plugins
      this.chart.options.plugins.customCursorTracker.enabled = false;
      this.chart.options.plugins.customToolTip.enabled = false;
      this.chart.update();
    }
  }, {
    key: "setMaxStepsPerInterval",
    value: function setMaxStepsPerInterval(maxSteps) {
      this.chart.options.scales.y.max = maxSteps;
      this.chart.update();
    }
  }, {
    key: "setMaxIntervalCount",
    value: function setMaxIntervalCount(intervalCount) {
      this.maxIntervalCount = intervalCount;
    }
  }, {
    key: "setDisplayIntervalCount",
    value: function setDisplayIntervalCount(displayIntervalCount) {
      this.displayIntervalCount = displayIntervalCount;
    }
  }, {
    key: "convertTimeToTimeFormat",
    value: function convertTimeToTimeFormat(label) {
      switch (this.timeFormat) {
        case utils_TimeDisplayFormat.USE_12HR_FORMAT:
          var timeParts = label.split(':');

          // Extract hours and minutes
          var hours = parseInt(timeParts[0], 10);
          var minutes = parseInt(timeParts[1], 10);

          // Determine AM or PM and adjust hours
          var ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12 === 0 ? 12 : hours % 12;

          // Format the result in 12-hour format
          var time12hr = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;
          return time12hr;
        default:
          return label;
      }
    }
  }, {
    key: "setTimeDisplayFormat",
    value: function setTimeDisplayFormat(timeFormat) {
      this.timeFormat = timeFormat;
      this.chart.options.plugins.customXAxisBackground.label1 = this.convertTimeToTimeFormat('00:00');
      this.chart.options.plugins.customXAxisBackground.label2 = this.convertTimeToTimeFormat('12:00');
      this.chart.options.plugins.customXAxisBackground.label3 = this.convertTimeToTimeFormat('23:59');
      this.chart.update();
    }
  }, {
    key: "setBarColor",
    value: function setBarColor(barColor) {
      this.barColor = barColor;

      // Assign the new color to bars with non-zero values - Refer to JIRA issue JSCHARTBUG-37
      //---------------------- Start of Fix ----------------------
      var chartData = this.defdata.datasets[0].data;
      var colorArray = new Array(chartData.length).fill(this.xAxisColor);

      // Go through the entire data set and apply the new color to non-zero bars only
      for (var index = 0; index < chartData.length; index++) {
        if (chartData[index] > 0) {
          colorArray[index] = barColor;
        }
      }
      this.defdata.datasets[0].backgroundColor = colorArray;
      this.defdata.datasets[0].borderColor = colorArray;
      this.defdata.datasets[0].hoverBackgroundColor = colorArray;
      //---------------------- End of Fix ----------------------

      this.chart.update();
    }
  }, {
    key: "getLocalizedStepCountString",
    value: function getLocalizedStepCountString(language) {
      var text = language === 'es' ? 'PASOS' : 'STEP COUNT';
      return text;
    }
  }, {
    key: "getLocalizedTotalStepsString",
    value: function getLocalizedTotalStepsString(language) {
      var text = language === 'es' ? 'PASOS TOTALES' : 'TOTAL STEPS';
      return text;
    }
  }, {
    key: "setLanguage",
    value: function setLanguage(language) {
      this.language = language;
      this.chart.update();
    }
  }]);
  return StepCountBarChart;
}();

;// CONCATENATED MODULE: ./src/charts/TileHeartRateLineChart.js
function TileHeartRateLineChart_typeof(o) { "@babel/helpers - typeof"; return TileHeartRateLineChart_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TileHeartRateLineChart_typeof(o); }
function TileHeartRateLineChart_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = TileHeartRateLineChart_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function TileHeartRateLineChart_toConsumableArray(arr) { return TileHeartRateLineChart_arrayWithoutHoles(arr) || TileHeartRateLineChart_iterableToArray(arr) || TileHeartRateLineChart_unsupportedIterableToArray(arr) || TileHeartRateLineChart_nonIterableSpread(); }
function TileHeartRateLineChart_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TileHeartRateLineChart_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TileHeartRateLineChart_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TileHeartRateLineChart_arrayLikeToArray(o, minLen); }
function TileHeartRateLineChart_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function TileHeartRateLineChart_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return TileHeartRateLineChart_arrayLikeToArray(arr); }
function TileHeartRateLineChart_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TileHeartRateLineChart_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function TileHeartRateLineChart_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, TileHeartRateLineChart_toPropertyKey(descriptor.key), descriptor); } }
function TileHeartRateLineChart_createClass(Constructor, protoProps, staticProps) { if (protoProps) TileHeartRateLineChart_defineProperties(Constructor.prototype, protoProps); if (staticProps) TileHeartRateLineChart_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function TileHeartRateLineChart_defineProperty(obj, key, value) { key = TileHeartRateLineChart_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function TileHeartRateLineChart_toPropertyKey(t) { var i = TileHeartRateLineChart_toPrimitive(t, "string"); return "symbol" == TileHeartRateLineChart_typeof(i) ? i : String(i); }
function TileHeartRateLineChart_toPrimitive(t, r) { if ("object" != TileHeartRateLineChart_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TileHeartRateLineChart_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
*               02/29/2024 JRD - Setting lower max value than high threshold fix
*               03/11/2024 JRD - Fix JSCHARTBUG-9 Tile Heart Rate Line Chart: 
*                                   Data point with 0 value is plotted
*               03/26/2024 JRD - Fix for JIRA JSCHARTBUG-56 Spanish Support
*
*******************************************************************************/


var TileHeartRateLineChart = /*#__PURE__*/function () {
  function TileHeartRateLineChart(chartCanvas) {
    var _this = this;
    TileHeartRateLineChart_classCallCheck(this, TileHeartRateLineChart);
    TileHeartRateLineChart_defineProperty(this, "lineColorChangeOnThresholdPlugin", {
      // LINE CHART CHANGING COLOR PLUGIN
      afterLayout: function afterLayout(chart) {
        var ctx = chart.ctx;
        ctx.save();
        var yAxis = chart.scales.y;
        var gradient = ctx.createLinearGradient(0, yAxis.top, 0, yAxis.bottom);
        gradient.addColorStop(0, _this.colors.HIGH);
        gradient.addColorStop(_this.getThreshold(_this.thresholds.HIGH - _this.thresholds.ADJUSTABLE_MIN, yAxis.max - _this.thresholds.ADJUSTABLE_MIN), _this.colors.HIGH);
        gradient.addColorStop(_this.getThreshold(_this.thresholds.HIGH - 0.5 - _this.thresholds.ADJUSTABLE_MIN, yAxis.max - _this.thresholds.ADJUSTABLE_MIN), _this.colors.MODERATE);
        gradient.addColorStop(_this.getThreshold(_this.thresholds.MODERATE - _this.thresholds.ADJUSTABLE_MIN, yAxis.max - _this.thresholds.ADJUSTABLE_MIN), _this.colors.MODERATE);
        gradient.addColorStop(_this.getThreshold(_this.thresholds.MODERATE - 0.5 - _this.thresholds.ADJUSTABLE_MIN, yAxis.max - _this.thresholds.ADJUSTABLE_MIN), _this.colors.LOW);
        gradient.addColorStop(_this.getThreshold(_this.thresholds.LOW - _this.thresholds.ADJUSTABLE_MIN, yAxis.max - _this.thresholds.ADJUSTABLE_MIN), _this.colors.LOW);
        gradient.addColorStop(_this.getThreshold(_this.thresholds.LOW - _this.thresholds.ADJUSTABLE_MIN, yAxis.max - _this.thresholds.ADJUSTABLE_MIN), _this.colors.MIN);
        gradient.addColorStop(1, _this.colors.MIN);
        chart.data.datasets[0].borderColor = gradient;
        ctx.restore();
      }
    });
    this.colors = {
      MIN: 'rgb(255, 197, 88)',
      LOW: 'rgb(0, 185, 255)',
      MODERATE: 'rgb(144, 112, 255)',
      HIGH: 'rgb(38, 203, 168)'
    };
    this.myChart;
    this.chartCanvas = chartCanvas;
    this.heartRateData = [];
    this.maxValue = 220;
    this.connectDuration = 10;
    this.isConnectAllPoints = true;
    // Fix for JSCHARTBUG-9
    // Added global variable for checking all data are null in chart
    this.hasData = false;
    // Fix for JIRA JSCHARTBUG-56
    // Add Spanish Localization support
    this.language = ChartLanguage.ENGLISH;
    this.thresholds = {
      MIN: 0,
      ADJUSTABLE_MIN: 0,
      LOW: 94,
      MODERATE: 115,
      HIGH: 153,
      MAX: 250,
      FIXED_MAX: 300
    };
    this.initializeChart();
  }
  TileHeartRateLineChart_createClass(TileHeartRateLineChart, [{
    key: "initializeChart",
    value: function initializeChart() {
      /* Data block */
      var data = {
        labels: [],
        datasets: [{
          label: '',
          data: [],
          tension: 0.1,
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 1,
          spanGaps: false
        }]
      };

      /* Config block*/
      var config = {
        type: 'line',
        data: data,
        options: {
          animation: {
            duration: 0
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'hour'
              },
              min: new Date('2024-01-01T00:00:00'),
              max: new Date('2024-01-02T00:00:00'),
              display: false
            },
            y: {
              min: this.thresholds.ADJUSTABLE_MIN,
              max: this.thresholds.MAX,
              border: {
                display: false
              },
              display: false
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            }
          }
        },
        plugins: [this.lineColorChangeOnThresholdPlugin]
      };

      /* Render block */
      this.myChart = new Chart(this.chartCanvas, config);
    }
  }, {
    key: "showChart",
    value: function showChart() {
      // nothing happens
      // This API is deprecated as of 2/7/2024
      // Chart is already rendered when setChartData() is called
      // JDV
    }
  }, {
    key: "setChartData",
    value: function setChartData(data) {
      this.heartRateData = data;
      this.updateChart();
    }
  }, {
    key: "addMultipleData",
    value: function addMultipleData(data) {
      var _this$heartRateData;
      (_this$heartRateData = this.heartRateData).push.apply(_this$heartRateData, TileHeartRateLineChart_toConsumableArray(data));
      this.updateChart();
    }
  }, {
    key: "addData",
    value: function addData(data) {
      this.heartRateData.push(data);
      this.updateChart();
    }
  }, {
    key: "updateChart",
    value: function updateChart() {
      // Clear the current chart
      this.myChart.data.datasets[0].data = [];
      // Convert x values to Date objects
      this.convertToDates();
      // Sort data by time and filter for one day
      this.sortHeartRateDataByTime();
      // Filter correct values from 0 to max HR values
      this.filterCorrectHRValues();
      // Update y-axis min and max values based on data
      this.updateChartYMinMax();
      // Update chart data
      this.updateChartData();
      // Check if data exist on chart
      // Fix for JSCHARTBUG-9
      // Call function to check if all data are null
      this.checkAllBlankData();
      // Update the chart
      this.myChart.update();
      console.log('Tile Heart Rate Chart is rendered!');
    }
  }, {
    key: "updateChartData",
    value: function updateChartData() {
      for (var i = 0; i < this.heartRateData.length; i++) {
        var currentData = this.heartRateData[i];

        // Fix for JSCHARTBUG-9
        // Instead of plotting 0 to chart, change to null
        // This will leave a space on the chart
        var yVal = parseInt(currentData.hr) === 0 ? null : parseInt(currentData.hr);
        this.myChart.data.datasets[0].data.push({
          x: currentData.time,
          y: yVal
        });
        this.addGapIfRequired(i);
      }
    }
  }, {
    key: "addGapIfRequired",
    value: function addGapIfRequired(index) {
      if (index + 1 < this.heartRateData.length) {
        var timeDiff = (this.heartRateData[index + 1].time - this.heartRateData[index].time) / (1000 * 60);
        var connectAllPoints = this.isConnectAllPoints,
          connectDuration = this.connectDuration;
        if (!connectAllPoints && timeDiff > connectDuration) {
          var newTime = new Date(this.heartRateData[index].time.getTime() + 60 * 1000);
          this.myChart.data.datasets[0].data.push({
            x: newTime,
            y: null
          });
        }
      }
    }

    // Fix for JSCHARTBUG-9
    // Call function to check if all data are null
  }, {
    key: "checkAllBlankData",
    value: function checkAllBlankData() {
      var datasets = this.myChart.data.datasets;
      this.hasData = false;
      var _iterator = TileHeartRateLineChart_createForOfIteratorHelper(datasets[0].data),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var dataset = _step.value;
          if (dataset.y !== null) {
            this.hasData = true;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "convertToDates",
    value: function convertToDates() {
      this.heartRateData.forEach(function (dataPoint) {
        if (!(dataPoint.time instanceof Date)) {
          dataPoint.time = new Date('2024-01-01T' + dataPoint.time);
        }
      });
    }
  }, {
    key: "sortHeartRateDataByTime",
    value: function sortHeartRateDataByTime() {
      var startTime = new Date('2024-01-01T00:00:00').getTime();
      var endTime = new Date('2024-01-01T23:59:59').getTime();
      this.heartRateData = this.heartRateData.filter(function (entry) {
        var entryTime = entry.time.getTime();
        return entryTime >= startTime && entryTime <= endTime;
      }).sort(function (a, b) {
        return a.time.getTime() - b.time.getTime();
      });
    }
  }, {
    key: "filterCorrectHRValues",
    value: function filterCorrectHRValues() {
      var _this2 = this;
      this.heartRateData = this.heartRateData.filter(function (entry) {
        return entry._hr >= 0 && entry._hr <= _this2.thresholds.MAX;
      });
    }
  }, {
    key: "updateChartYMinMax",
    value: function updateChartYMinMax() {
      if (this.heartRateData.length !== 0) {
        var lowestHR = Math.min.apply(Math, TileHeartRateLineChart_toConsumableArray(this.heartRateData.map(function (data) {
          return data.hr;
        })));
        var highestHR = Math.max.apply(Math, TileHeartRateLineChart_toConsumableArray(this.heartRateData.map(function (data) {
          return data.hr;
        })));
        if (lowestHR <= 20) {
          this.thresholds.ADJUSTABLE_MIN = 0;
          this.myChart.options.scales.y.min = 0;
        } else {
          if (lowestHR >= this.thresholds.LOW) {
            this.thresholds.ADJUSTABLE_MIN = this.thresholds.LOW - 20;
          } else {
            this.thresholds.ADJUSTABLE_MIN = lowestHR - 20;
          }
          this.myChart.options.scales.y.min = this.thresholds.ADJUSTABLE_MIN;
        }
        if (highestHR <= this.thresholds.HIGH) {
          this.thresholds.ADJUSTABLE_MAX = this.thresholds.HIGH + 20;
        } else {
          this.thresholds.ADJUSTABLE_MAX = highestHR + 20;
        }
        this.myChart.options.scales.y.max = this.thresholds.ADJUSTABLE_MAX;
      } else {
        this.thresholds.ADJUSTABLE_MIN = 0;
        this.myChart.options.scales.y.min = 0;
      }
    }
  }, {
    key: "addDataToChart",
    value: function addDataToChart(hr, timeInput) {
      if (hr === '' || timeInput === '' || isNaN(hr)) {
        alert('Please enter correct values.');
      } else if (parseInt(hr) > this.thresholds.MAX) {
        alert('Input exceeds max value. Please enter correct values.');
      } else if (parseInt(hr) < this.thresholds.MIN) {
        alert('Input is below minimum value. Please enter correct values.');
      } else {
        var newData = {
          hr: parseInt(hr),
          time: new Date("2024-01-01T".concat(timeInput))
        };
        this.heartRateData.push(newData);
      }
    }
  }, {
    key: "setMaxValue",
    value: function setMaxValue(maxValue) {
      if (maxValue > this.thresholds.FIXED_MAX) {
        alert('Error value. Max value is 300');
      } else if (maxValue >= this.thresholds.HIGH) {
        this.myChart.options.scales.y.max = maxValue;
        this.thresholds.MAX = maxValue;
        this.myChart.update();
      } else if (maxValue < this.thresholds.HIGH) {
        alert('Error value. Max value should be higher than HIGH threshold');
      }
    }
  }, {
    key: "setThresholds",
    value: function setThresholds(lowInput, moderateInput, highInput) {
      if (lowInput === '' || moderateInput === '' || highInput === '') {
        alert('Please enter correct values.');
      } else {
        var low = parseInt(lowInput);
        var moderate = parseInt(moderateInput);
        var high = parseInt(highInput);
        if (!isNaN(low) && !isNaN(moderate) && !isNaN(high) && low <= moderate && moderate <= high && high <= this.thresholds.MAX) {
          this.thresholds.LOW = low;
          this.thresholds.MODERATE = moderate;
          this.thresholds.HIGH = high;
          this.updateChartYMinMax();
          this.myChart.update();
        } else if (high > this.thresholds.MAX) {
          alert("Current Max value is ".concat(this.thresholds.MAX, ". High threshold should not be higher than that"));
        } else {
          alert('Please enter valid threshold values.');
        }
      }
    }
  }, {
    key: "deleteData",
    value: function deleteData(index) {
      if (index >= this.heartRateData.length) {
        alert('Error value. Cannot delete index from length of list value');
        return;
      }
      this.heartRateData.splice(index, 1);
    }
  }, {
    key: "clearChart",
    value: function clearChart() {
      this.heartRateData = [];
      this.myChart.data.datasets[0].data = [];
      // Fix for JSCHARTBUG-9
      // Call updateChart as this calls checkAllBlankData and is much safer 
      // than calling specific function updateChartYMinMax function
      this.updateChart();
      this.myChart.update();
    }
  }, {
    key: "setConnectDuration",
    value: function setConnectDuration(input) {
      var newDuration = parseInt(input, 10);
      if (!isNaN(newDuration) && newDuration >= 1 && newDuration <= 1440) {
        this.connectDuration = newDuration;
        this.updateChart();
      } else {
        alert('Please enter a valid duration (minimum 1 minute).');
      }
    }
  }, {
    key: "setConnectAllPoints",
    value: function setConnectAllPoints(isConnectAllPoints) {
      if (typeof isConnectAllPoints === 'boolean') {
        this.isConnectAllPoints = isConnectAllPoints;
        this.updateChart();
      } else {
        alert('Invalid parameter. Please provide a boolean value.');
      }
    }
  }, {
    key: "generateRandomHRArray",
    value: function generateRandomHRArray(numElements, minHR, maxHR, currentDate) {
      if (this.heartRateData.length > 0) {
        var latestTime = this.heartRateData[this.heartRateData.length - 1].time;
        var latestHour = latestTime.getHours();
        var latestMinutes = latestTime.getMinutes();
        var latestSeconds = latestTime.getSeconds();
        currentDate = currentDate || new Date('2024-01-01T00:00:00');
        currentDate.setHours(latestHour, latestMinutes, latestSeconds);
      } else {
        currentDate = currentDate || new Date('2024-01-01T00:00:00');
      }
      for (var i = 0; i < numElements; i++) {
        var randomHR = Math.floor(Math.random() * (maxHR - minHR + 1)) + minHR;
        this.heartRateData.push(new HeartRateLineDataModel(randomHR, new Date(currentDate)));
        currentDate.setMinutes(currentDate.getMinutes() + 1);
      }
    }
  }, {
    key: "getThreshold",
    value: function getThreshold(value, max) {
      return 1 - value / max;
    }
  }, {
    key: "formatDateTimeWithSeconds",
    value: function formatDateTimeWithSeconds(dateTime) {
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      return new Intl.DateTimeFormat('en-US', options).format(dateTime);
    }

    // Fix for JIRA JSCHARTBUG-56
    // Added getLocalizedNoDataString(), getLocalizedNowString(), setLanguage()
  }, {
    key: "getLocalizedNoDataString",
    value: function getLocalizedNoDataString(language) {
      var text = language === 'es' ? 'SIN DATOS' : 'NO DATA';
      return text;
    }
  }, {
    key: "getLocalizedNowString",
    value: function getLocalizedNowString(language) {
      var text = language === 'es' ? 'AHORA' : 'NOW';
      return text;
    }
  }, {
    key: "setLanguage",
    value: function setLanguage(language) {
      this.language = language;
      this.updateChart();
    }
  }]);
  return TileHeartRateLineChart;
}();

;// CONCATENATED MODULE: ./src/utils/TimexCharts.js
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
*               01/10/2024 LMB – Created file for Timex JS Charts Library
*
*******************************************************************************/
var TimexCharts = {
  NAME: 'Timex JS Charts Library',
  VERSION: 'vD.1.4.3.3',
  COMPANY: 'Timex Group USA'
};
/* harmony default export */ const utils_TimexCharts = (TimexCharts);
;// CONCATENATED MODULE: ./src/index.js
/* module decorator */ module = __webpack_require__.hmd(module);
// Import and re-export your classes and constants












// Export both classes for use in other scripts
if ( true && typeof module.exports !== 'undefined') {
  module.exports = {
    HeartRateInterval: HeartRateInterval,
    HeartRateLineDataModel: HeartRateLineDataModel,
    StepCountInterval: StepCountInterval,
    HeartRateLineChart: HeartRateLineChart,
    StepCountBarChart: StepCountBarChart,
    TileHeartRateLineChart: TileHeartRateLineChart,
    ChartLanguage: utils_ChartLanguage,
    TimeDisplayFormat: utils_TimeDisplayFormat,
    TimeInterval: utils_TimeInterval,
    TimexCharts: utils_TimexCharts
  };
} else {
  window.HeartRateInterval = HeartRateInterval;
  window.HeartRateLineDataModel = HeartRateLineDataModel;
  window.StepCountInterval = StepCountInterval;
  window.HeartRateLineChart = HeartRateLineChart;
  window.StepCountBarChart = StepCountBarChart;
  window.TileHeartRateLineChart = TileHeartRateLineChart;
  window.ChartLanguage = utils_ChartLanguage;
  window.TimeDisplayFormat = utils_TimeDisplayFormat;
  window.TimeInterval = utils_TimeInterval;
  window.TimexCharts = utils_TimexCharts;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(730);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});