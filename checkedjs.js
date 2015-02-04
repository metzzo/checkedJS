/*! checkedjs v0.0.0 - MIT license */
'use strict';

var checkedjs = function () {
  
  var declarations = {
    'int': function(self) {
      
    }, 
    'float': function(self) {
      
    }, 
    'string': function(self) {
      
    }, 
    'object': function(self) {
      
    }, 
    'ret': function(self) {
      
    }, 
    'or': function(self) {
      
    }, 
    'value': function(self) {
      
    }, 
    'prop': function(self) {
      
    }
  };
  
  var unassigned = { value: 42 };
  
  var template = { };
  template.chain = [];
  template.instance = unassigned; // the created instance
  template.build = function(func) {
    console.log('build');
    this.instance = 42;
  };
  
  for (var key in declarations) {
    (function(declaration) {
      Object.defineProperty(template, declarations, {
        configurable: false,
        enumerable: false,
        get: function() {
          if (this.instance !== unassigned) {
            return this.instance;
          } else if (declaration === 'prop') {
            return this.build(null);
          } else {
            this.chain.push(declaration);
          }
        },
        set: function(val) {
          if (this.instance === unassigned) {
            this.build(val);
          } else {
            this.instance = val;
          }
        }
      });
    })(key);
  }
  
  var type = function() {
    return function() {
      return Object.create(template);
    }
  };
};

if ( typeof module !== "undefined" ) {
  module.exports = checkedjs;
}