'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create:  async (ctx) => {
        var _ = require('moment');
        var data = _().unix();

        var calc = parseInt(data);

        const query = await strapi.query('reserva').find(
            {
                hora_inicio_lte: (calc * 1000) - 10800000,
                hora_final_gte: (calc * 1000) - 10800000
            }
        );
        var query2;
        if(query.length > 0){
            query2 = await strapi.services.multas.create({
                condomino: query[0].condomino.id,
                reserva: query[0].id
            });
        }

        
        ctx.response.body = query2;

        return ctx.response.body;
    },

    find:  (ctx) => {
        var _ = require('moment');
        var data = _().unix();
        ctx.response.body = data;
        return ctx.response.body;
    }
};
