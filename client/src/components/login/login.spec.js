var React = require('react/addons'),
  TestUtils = React.addons.TestUtils;

describe('Login Component: ', function () {

  var Login;

  beforeEach(function () {
    Login = require('./login');
  });

  it('should instantiate the Login', function () {
    expect(Login).to.be.defined;
  });
});
