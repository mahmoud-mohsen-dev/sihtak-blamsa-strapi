'use strict';

/**
 * articles-strapi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::articles-strapi.articles-strapi');
