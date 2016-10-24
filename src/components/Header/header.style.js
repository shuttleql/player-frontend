var _ = require('lodash');
import {commonStyle} from '../../common.style.js'

export var headerStyle = {
  appBar: _.defaults({
    'marginBottom': 8
  }, commonStyle.backgroundColor),
  appBarTitle: commonStyle.textColor,
};