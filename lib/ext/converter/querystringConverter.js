/*
 * fis
 * http://fis.baidu.com/
 * 2014/8/7
 */

'use strict';

var Converter = require('../../converter.js');
var FormConverter = require('./fromConverter.js');
var logger = require('../../logger.js')('QuertStringConverter');
var util = require('util');
var ralUtil = require('../../util.js');
var urlencode = require('urlencode');

function QuertStringConverter() {
    Converter.call(this);
}

util.inherits(QuertStringConverter, Converter);

QuertStringConverter.prototype.unpack = FormConverter.prototype.unpack;

QuertStringConverter.prototype.pack = function (config, data) {
    data = data || {};
    config.query = config.query || {};
    ralUtil.merge(config.query, data);
    config.headers = config.headers || {};
    config.headers['Content-Type'] = 'application/json';
    logger.trace('pack querystring data succ ServiceID=' + config.serviceID);
    return null;
};

QuertStringConverter.prototype.getName = function () {
    return 'querystring';
};

module.exports = QuertStringConverter;