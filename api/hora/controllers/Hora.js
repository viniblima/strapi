'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create:  (ctx) => {
        var _ = require('moment');
        var data = _().unix();
        ctx.response.body = data;
        return ctx.response.body;
    },

    find:  (ctx) => {
        var _ = require('moment');
        var data = _().unix();
        ctx.response.body = data;
        return ctx.response.body;
    }
};
