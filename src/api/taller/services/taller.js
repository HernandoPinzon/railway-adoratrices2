'use strict';

/**
 * taller service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::taller.taller');
