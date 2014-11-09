'use strict';

describe('service', function () {
// load modules
  beforeEach(module('phonecatApp'));
  // Test service availability
  it('check the existence of Gift factory', inject(function(Gift) {
    expect(Gift).toBeDefined();
  }));
});