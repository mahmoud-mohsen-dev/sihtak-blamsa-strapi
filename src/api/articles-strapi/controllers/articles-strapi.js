'use strict';

/**
 * articles-strapi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::articles-strapi.articles-strapi');
