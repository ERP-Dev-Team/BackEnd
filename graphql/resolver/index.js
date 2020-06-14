const projectResolver = require("./project");
const campResolver = require("./camp");
const designationResolver = require("./designation");
const unitResolver = require("./unit");
const officeResolver = require("./office");
const supplierTypeResolver = require("./suppliertype");
const itemCategoryResolver = require("./itemcategory");
const workTypeResolver = require("./worktype");
const supplierResolver = require("./supplier");
const itemResolver = require("./item");
const roleResolver = require("./role");
const moduleResolver = require("./module");
const userResolver = require("./user");
const authResolver = require("./auth");
const cavedResolver = require("./caved");
const permissionResolver = require("./permission");
const vehicleTypeResolver = require("./vehicletype");
const vehicleResolver = require("./vehicle");
const bankDetailsResolver = require("./bankdetails");
const billingDetailsResolver = require("./billingdetails");
const approvalResolver = require("./approval");
const itemObjectResolver = require("./itemobject");
const mmRequisitionResolver = require("./mmrequisition");
const mmInternalIndentResolver = require("./mminternalindent");
const counterResolver = require("./counter");

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
  ...authResolver,
  ...cavedResolver,
  ...permissionResolver,
  ...vehicleTypeResolver,
  ...vehicleResolver,
  ...bankDetailsResolver,
  ...billingDetailsResolver,
  ...approvalResolver,
  ...itemObjectResolver,
  ...mmRequisitionResolver,
  ...mmInternalIndentResolver,
  ...counterResolver,
};

module.exports = rootResolver;
