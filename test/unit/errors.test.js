'use strict';

const {
    InternalError,
    NotFound,
    BadRequest,
    UnprocessableEntity,
} = require('../../app/constants/error');

describe('Errors', () => {
    it('should internal error', (done) => {
        const error = new InternalError();
        error.statusCode.should.eql(500);
        error.code.should.eql('INTERNAL_ERROR');
        error.message.should.eql('The server encountered an internal error.');
        done();
    });
    it('should not found error', (done) => {
        const error = new NotFound();
        error.statusCode.should.eql(404);
        error.code.should.eql('UNKNOWN_ENDPOINT');
        error.message.should.eql('The requested endpoint does not exist.');
        done();
    });
    it('should bad request error', (done) => {
        const stringError = 'The request was invalid or cannot be otherwise served.';

        const error = new BadRequest(stringError);
        error.statusCode.should.eql(400);
        error.code.should.eql('BAD_REQUEST');
        error.message.should.eql(stringError);
        done();
    });
    it('should unprocessable entity error', (done) => {
        const stringError = 'tracking_number is required.';

        const error = new UnprocessableEntity(stringError);
        error.statusCode.should.eql(422);
        error.code.should.eql('UNPROCESSABLE_ENTITY');
        error.message.should.eql(stringError);
        done();
    });
});
