'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('../../node_modules/material-ui/styles/colors');

var _colorManipulator = require('../../node_modules/material-ui/utils/colorManipulator');

var _spacing = require('../../node_modules/material-ui/styles/spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  spacing: _spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: _colors.grey900,
    primary2Color: 'rgb(1,2,255)',
    primary3Color: 'rgb(100,200,255)',
    accent1Color: _colors.pinkA200,
    accent2Color: _colors.pinkA400,
    accent3Color: _colors.pinkA100,
    textColor: _colors.brown500,
    secondaryTextColor: _colors.brown500,
    alternateTextColor: _colors.brown500,
    canvasColor: _colors.brown500,
    borderColor: _colors.brown500,
    disabledColor: _colors.brown500,
    pickerHeaderColor: _colors.brown500,
    clockCircleColor: _colors.brown500,
  },
  appBar: {
    height: 44,
  }
};