'use strict';

/**
 * articles-strapi router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::articles-strapi.articles-strapi');
