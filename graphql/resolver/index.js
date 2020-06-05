const projectResolver = require('./project');
const campResolver = require('./camp');
const designationResolver = require('./designation');
const unitResolver = require('./unit');
const officeResolver = require('./office');
const supplierTypeResolver = require('./suppliertype');
const itemCategoryResolver = require('./itemcategory');
const workTypeResolver = require('./worktype');
const supplierResolver = require('./supplier');
const itemResolver = require('./item');
const roleResolver = require('./role');
const moduleResolver = require('./module');
const userResolver = require('./user');
const authResolver = require('./auth');

const rootResolver = {
    ...projectResolver,
    ...campResolver,
    ...designationResolver,
    ...unitResolver,
    ...officeResolver,
    ...supplierTypeResolver,
    ...itemCategoryResolver,
    ...workTypeResolver,
    ...supplierResolver,
    ...itemResolver,
    ...roleResolver,
    ...moduleResolver,
    ...userResolver,
    ...authResolver
  };
  
  module.exports = rootResolver;