'use strict';

require('mocha');
var assert = require('assert');
var <%= camelcase(alias) %> = require('<%= relative(dest) %>');

describe('<%= name %>', function() {
  {% body %}
});
