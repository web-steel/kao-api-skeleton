"use strict";

const { BadRequest, UnprocessableEntity } = require('../constants/error');

module.exports = () => {
    return async (ctx, next) => {
        const valid = ctx.validate;

        ctx.validate = async function (inputs, rules, message) {
            const props = {};
            for(let prop in rules) {
                if(rules.hasOwnProperty(prop)) {
                    if (Array.isArray(rules[prop])) {
                        props[prop] = rules[prop].join('|');
                    } else
                        props[prop] = rules[prop];
                }
            }
            const v = await valid(inputs, props, message);
            const isValid = await v.check();

            if(!isValid) {

                const error = getError(v.errors);

                throw (isRequired(v.errors) ?
                    new BadRequest(error) :
                    new UnprocessableEntity(error));
            }

            return true;
        };

        await next();
    };
};

/**
 *
 * @param {array} errors
 * @returns {*}
 */
function isRequired(errors) {
    for(let prop in errors) {
        if(errors.hasOwnProperty(prop))
            if(errors[prop]['rule'] === 'required')
                return errors[prop]['message'];
    }

    return false;
}

/**
 * Get error
 * @param {array} errors
 * @returns {*}
 */
function getError(errors) {
    let error = isRequired(errors);

    if(!error) {
        for (let prop in errors) {
            if (errors.hasOwnProperty(prop))
                return errors[prop]['message'];
        }
    }

    return error;
}

