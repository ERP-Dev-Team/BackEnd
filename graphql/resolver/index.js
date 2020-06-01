const projectResolver = require('./project');
const campResolver = require('./camp');
const designationResolver = require('./designation');
const unitResolver = require('./unit');
const officeResolver = require('./office');
const supplierTypeResolver = require('./suppliertype');
const itemCategoryResolver = require('./itemcategory');
const workTypeResolver = require('./worktype');
const supplierResolver = require('./supplier');

const rootResolver = {
    ...projectResolver,
    ...campResolver,
    ...designationResolver,
    ...unitResolver,
    ...officeResolver,
    ...supplierTypeResolver,
    ...itemCategoryResolver,
    ...workTypeResolver,
    ...supplierResolver
  };
  
  module.exports = rootResolver;