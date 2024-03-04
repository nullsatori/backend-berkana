'use strict';

/**
 * gerbiczidy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gerbiczidy.gerbiczidy');
