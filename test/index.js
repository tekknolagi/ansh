var should = require('chai').should(),
    ansh = require('../index');

describe('#ansh', function () {
    it('returns ansh', function () {
	ansh.ansh().should.equal('ansh');
    });
});
