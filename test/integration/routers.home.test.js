"use strict";

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../..');

describe('routes : home', () => {

    describe('GET /', () => {
        it('should return welcome string', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(200);
                    res.type.should.eql('text/plain');
                    res.text.should.eql('Welcome a koa2-api-skeleton');
                    done();
                });
        });
    });
});