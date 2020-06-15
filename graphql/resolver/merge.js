const Project = require("../../models/project");
const Unit = require("../../models/unit");
const User = require("../../models/user");
const SupplierType = require("../../models/suppliertype");
const ItemCategory = require("../../models/itemcategory");
const Item = require("../../models/item");
const ItemObject = require("../../models/itemobject");
const Role = require("../../models/role");
const Designation = require("../../models/designation");
const Module = require("../../models/module");
const Camp = require("../../models/camp");
const Caved = require("../../models/caved");
const VehicleType = require("../../models/vehicletype");
const Approval = require("../../models/approval");
const mmRequisition = require("../../models/mmrequisition");
const Supplier = require("../../models/supplier");
const mmInternalIndent = require("../../models/mminternalindent");
const { convertISODateToTimestamp } = require("../../helper/timestamp");

const project = async (projectId) => {
  try {
    const project = await Project.findOne({ _id: projectId });
    return {
      ...project._doc,
      _id: project.id,
      createdAt: convertISODateToTimestamp(project._doc.createdAt),
      updatedAt: convertISODateToTimestamp(project._doc.updatedAt),
    };
  } catch (err) {
    throw err;
  }
};
const camps = async (campIds) => {
  try {
    const camps = await Camp.find({ _id: { $in: campIds } });
    return camps.map((camp) => {
      return {
        ...camp._doc,
        _id: camp.id,
        project: project.bind(this, camp._doc.project),
        createdAt: convertISODateToTimestamp(camp._doc.createdAt),
        updatedAt: convertISODateToTimestamp(camp._doc.updatedAt),
      };
    });
  } catch (err) {
    throw err;
  }
};

const camp = async (campId) => {
  try {
    const camp = await Camp.findOne({ _id: campId });
    return {
      ...camp._doc,
      _id: camp.id,
      project: project.bind(this, camp._doc.project),
      createdAt: convertISODateToTimestamp(camp._doc.createdAt),
      updatedAt: convertISODateToTimestamp(camp._doc.updatedAt),
    };
  } catch (err) {
    throw err;
  }
};

const designation = async (designationId) => {
  try {
    const designation = await Designation.findOne({ _id: designationId });
    return {
      ...designation._doc,
      _id: designation.id,
      createdAt: convertISODateToTimestamp(designation._doc.createdAt),
      updatedAt: convertISODateToTimestamp(designation._doc.updatedAt),
    };
  } catch (err) {
    throw err;
  }
};

const unit = async (unitId) => {
  try {
    const unit = await Unit.findOne({ _id: unitId });
    return {
      ...unit._doc,
      _id: unit.id,
      createdAt: convertISODateToTimestamp(unit._doc.createdAt),
      updatedAt: convertISODateToTimestamp(unit._doc.updatedAt),
    };
  } catch (err) {
    throw err;
  }
};

const roles = async (roleIds) => {
  try {
    const roles = await Role.find({ _id: { $in: roleIds } });
    return roles.map((role) => {
      return {
        ...role._doc,
        _id: role.id,
        createdAt: convertISODateToTimestamp(role._doc.createdAt),
        updatedAt: convertISODateToTimestamp(role._doc.updatedAt),
      };
    });
  } catch (err) {
    throw err;
  }
};

const role = async (roleId) => {
  try {
    const role = await Role.findOne({ _id: roleId });
    return {
      ...role._doc,
      _id: role.id,
      createdAt: convertISODateToTimestamp(role._doc.createdAt),
      updatedAt: convertISODateToTimestamp(role._doc.updatedAt),
    };
  } catch (err) {
    throw err;
  }
};

const itemCategory = async (itemCategoryId) => {
  try {
    const itemCategory = await ItemCategory.findOne({ _id: itemCategoryId });
    return {
      ...itemCategory._doc,
      _id: itemCategory.id,
      createdAt: convertISODateToTimestamp(itemCategory._doc.createdAt),
      updatedAt: convertISODateToTimestamp(itemCategory._doc.updatedAt),
    };
  } catch (err) {
    throw err;
  }
};

const item = async (itemId) => {
  try {
    const item = await Item.findOne({ _id: itemId });
    return {
      ...item._doc,
      _id: item.id,
      unit: unit.bind(item._doc.unit),
      itemCategory: itemCategory.bind(item._doc.itemCategory),
      createdAt: convertISODateToTimestamp(item._doc.createdAt),
      updatedAt: convertISODateToTimestamp(item._doc.updatedAt),
    };
  } catch (err) {
    throw err;
  }
};

const items = async (itemIds) => {
  try {
    const items = await Item.find({ _id: { $in: itemIds } });
    return items.map((item) => {
      return {
        ...item._doc,
        _id: item.id,
        unit: unit.bind(item._doc.unit),
        itemCategory: itemCategory.bind(item._doc.itemCategory),
        createdAt: convertISODateToTimestamp(item._doc.createdAt),
        updatedAt: convertISODateToTimestamp(item._doc.updatedAt),
      };
    });
  } catch (err) {
    throw err;
  }
};

const vehicleType = async (vehicleTypeId) => {
  try {
    const vehicleType = await VehicleType.findOne({ _id: vehicleTypeId });
    return {
      ...vehicleType._doc,
      _id: vehicleType.id,
      createdAt: convertISODateToTimestamp(vehicleType._doc.createdAt),
      updatedAt: convertISODateToTimestamp(vehicleType._doc.updatedAt),
    };
  } catch (err) {
    throw err;
  }
};

const caved = async (cavedId) => {
  try {
    const caved = await Caved.findOne({ _id: cavedId });
    return {
      ...caved._doc,
      _id: caved.id,
      create: roles.bind(this, caved._doc.create),
      approval: roles.bind(this, caved._doc.approval),
      view: roles.bind(this, caved._doc.view),
      edit: roles.bind(this, caved._doc.edit),
      delete: roles.bind(this, caved._doc.delete),
      createdAt: convertISODateToTimestamp(caved._doc.createdAt),
      updatedAt: convertISODateToTimestamp(caved._doc.updatedAt),
    };
  } catch (err) {
    throw err;
  }
};

const suppliertypes = async (supplierTypeIds) => {
  try {
    const supplierTypes = await SupplierType.find({
      _id: { $in: supplierTypeIds },
    });
    return supplierTypes.map((supplierType) => {
      return {
        ...supplierType._doc,
        _id: supplierType.id,
        createdAt: convertISODateToTimestamp(supplierType._doc.createdAt),
        updatedAt: convertISODateToTimestamp(supplierType._doc.updatedAt),
      };
    });
  } catch (err) {
    throw err;
  }
};

const imodules = async (moduleIds) => {
  try {
    const imodules = await Module.find({ _id: { $in: moduleIds } });
    return imodules.map((imodule) => {
      return {
        ...imodule._doc,
        _id: imodule.id,
        rolesAllowed: roles.bind(this, imodule._doc.rolesAllowed),
        createdAt: convertISODateToTimestamp(imodule._doc.createdAt),
        updatedAt: convertISODateToTimestamp(imodule._doc.updatedAt),
      };
    });
  } catch (err) {
    throw err;
  }
};

const approvals = async (approvalIds) => {
  try {
    const approvals = await Approval.find({ _id: { $in: approvalIds } });
    return approvals.map((approval) => {
      return {
        ...approval._doc,
        _id: approval.id,
        camp: camp.bind(this, approval._doc.camp),
        role: role.bind(this, approval._doc.role),
        createdAt: convertISODateToTimestamp(approval._doc.createdAt),
        updatedAt: convertISODateToTimestamp(approval._doc.updatedAt),
      };
    });
  } catch (err) {
    throw err;
  }
};

const approval = async (approvalId) => {
  try {
    const approval = await Approval.findOne({ _id: approvalIds });

    return {
      ...approval._doc,
      _id: approval.id,
      camp: camp.bind(this, approval._doc.camp),
      role: role.bind(this, approval._doc.role),
      createdAt: convertISODateToTimestamp(approval._doc.createdAt),
      updatedAt: convertISODateToTimestamp(approval._doc.updatedAt),
    };
  } catch (err) {
    throw err;
  }
};

const user = async (userId) => {
  try {
    const user = await User.findOne({ _id: userId });
    return {
      ...user._doc,
      _id: user.id,
      designation: designation.bind(this, user._doc.designation),
      rolesAllowed: roles.bind(this, user._doc.rolesAllowed),
      modulesAllowed: imodules.bind(this, user._doc.modulesAllowed),
      campsAllowed: camps.bind(this, user._doc.campsAllowed),
      createdAt: convertISODateToTimestamp(user._doc.createdAt),
      updatedAt: convertISODateToTimestamp(user._doc.updatedAt),
    };
  } catch (err) {
    throw err;
  }
};

const itemobjects = async (itemObjectIds) => {
  try {
    const itemobjects = await ItemObject.find({
      _id: { $in: itemObjectIds },
    });
    return itemobjects.map((itemobject) => {
      return {
        ...itemobject._doc,
        _id: itemobject.id,
        item: item.bind(this, itemobject._doc.item),
        itemCategory: itemCategory.bind(this, itemobject._doc.itemCategory),
        createdAt: convertISODateToTimestamp(itemobject._doc.createdAt),
        updatedAt: convertISODateToTimestamp(itemobject._doc.updatedAt),
      };
    });
  } catch (err) {
    throw err;
  }
};

const mmrequisition = async (mmrequisitionId) => {
  try {
    const mmrequisition = await mmRequisition.findOne({
      _id: mmrequisitionId,
    });
    return {
      ...mmrequisition._doc,
      _id: mmrequisition.id,
      camp: camp.bind(this, mmrequisition._doc.camp),
      items: itemobjects.bind(this, mmrequisition._doc.items),
      createdByUser: user.bind(this, mmrequisition._doc.createdByUser),
      approvalsNeeded: approvals.bind(this, mmrequisition._doc.approvalsNeeded),
      createdAt: convertISODateToTimestamp(mmrequisition._doc.createdAt),
      updatedAt: convertISODateToTimestamp(mmrequisition._doc.updatedAt),
    };
  } catch (err) {
    throw err;
  }
};

const supplier = async (supplierId) => {
  try {
    const supplier = await Supplier.findOne({
      _id: supplierId,
    });
    return {
      ...supplier._doc,
      _id: supplier.id,
      supplierTypes: suppliertypes.bind(this, supplier._doc.supplierTypes),
      createdAt: convertISODateToTimestamp(supplier._doc.createdAt),
      updatedAt: convertISODateToTimestamp(supplier._doc.updatedAt),
    };
  } catch (err) {
    throw err;
  }
};

const mminternalindent = async (mminternalindentId) => {
  try {
    const mminternalindent = await mmInternalIndent.findOne({
      _id: mminternalindentId,
    });
    return {
      ...mminternalindent._doc,
      _id: mminternalindent.id,
      createdByUser: user.bind(this, mminternalindent._doc.createdByUser),
      approvalsNeeded: approvals.bind(
        this,
        mminternalindent._doc.approvalsNeeded
      ),
      camp: camp.bind(this, mminternalindent._doc.camp),
      items: itemobjects.bind(this, mmrequisition._doc.items),
      requisition: mmrequisition.bind(this, mmrequisition._doc.requisition),
      supplierTypes: suppliertypes.bind(
        this,
        mminternalindent._doc.supplierTypes
      ),
      createdAt: convertISODateToTimestamp(mminternalindent._doc.createdAt),
      updatedAt: convertISODateToTimestamp(mminternalindent._doc.updatedAt),
    };
  } catch (err) {
    throw err;
  }
};

const transformProject = (project) => {
  return {
    ...project._doc,
    _id: project.id,
    createdAt: convertISODateToTimestamp(project._doc.createdAt),
    updatedAt: convertISODateToTimestamp(project._doc.updatedAt),
  };
};

const transformCamp = (camp) => {
  return {
    ...camp._doc,
    _id: camp.id,
    project: project.bind(this, camp._doc.project),
    createdAt: convertISODateToTimestamp(camp._doc.createdAt),
    updatedAt: convertISODateToTimestamp(camp._doc.updatedAt),
  };
};

const transformDesignation = (designation) => {
  return {
    ...designation._doc,
    _id: designation.id,
    createdAt: convertISODateToTimestamp(designation._doc.createdAt),
    updatedAt: convertISODateToTimestamp(designation._doc.updatedAt),
  };
};

const transformUnit = (unit) => {
  return {
    ...unit._doc,
    _id: unit.id,
    createdAt: convertISODateToTimestamp(unit._doc.createdAt),
    updatedAt: convertISODateToTimestamp(unit._doc.updatedAt),
  };
};

const transformOffice = (office) => {
  return {
    ...office._doc,
    _id: office.id,
    createdAt: convertISODateToTimestamp(office._doc.createdAt),
    updatedAt: convertISODateToTimestamp(office._doc.updatedAt),
  };
};
const transformSupplierType = (supplierType) => {
  return {
    ...supplierType._doc,
    _id: supplierType.id,
    createdAt: convertISODateToTimestamp(supplierType._doc.createdAt),
    updatedAt: convertISODateToTimestamp(supplierType._doc.updatedAt),
  };
};
const transformItemCategory = (itemCategory) => {
  return {
    ...itemCategory._doc,
    _id: itemCategory.id,
    createdAt: convertISODateToTimestamp(itemCategory._doc.createdAt),
    updatedAt: convertISODateToTimestamp(itemCategory._doc.updatedAt),
  };
};

const transformWorkType = (workType) => {
  return {
    ...workType._doc,
    _id: workType.id,
    unit: unit.bind(this, workType._doc.unit),
    createdAt: convertISODateToTimestamp(workType._doc.createdAt),
    updatedAt: convertISODateToTimestamp(workType._doc.updatedAt),
  };
};

const transformSupplier = (supplier) => {
  return {
    ...supplier._doc,
    _id: supplier.id,
    supplierTypes: suppliertypes.bind(this, supplier._doc.supplierTypes),
    createdAt: convertISODateToTimestamp(supplier._doc.createdAt),
    updatedAt: convertISODateToTimestamp(supplier._doc.updatedAt),
  };
};

const transformItem = (item) => {
  return {
    ...item._doc,
    _id: item.id,
    unit: unit.bind(this, item._doc.unit),
    itemCategory: itemCategory.bind(this, item._doc.itemCategory),
    createdAt: convertISODateToTimestamp(item._doc.createdAt),
    updatedAt: convertISODateToTimestamp(item._doc.updatedAt),
  };
};

const transformRole = (role) => {
  return {
    ...role._doc,
    _id: role.id,
    createdAt: convertISODateToTimestamp(role._doc.createdAt),
    updatedAt: convertISODateToTimestamp(role._doc.updatedAt),
  };
};

const transformModule = (imodule) => {
  return {
    ...imodule._doc,
    _id: imodule.id,
    rolesAllowed: roles.bind(this, imodule._doc.rolesAllowed),
    createdAt: convertISODateToTimestamp(imodule._doc.createdAt),
    updatedAt: convertISODateToTimestamp(imodule._doc.updatedAt),
  };
};

const transformUser = (user) => {
  return {
    ...user._doc,
    _id: user.id,
    password: null,
    designation: designation.bind(this, user._doc.designation),
    rolesAllowed: roles.bind(this, user._doc.rolesAllowed),
    modulesAllowed: imodules.bind(this, user._doc.modulesAllowed),
    campsAllowed: camps.bind(this, user._doc.campsAllowed),
    createdAt: convertISODateToTimestamp(user._doc.createdAt),
    updatedAt: convertISODateToTimestamp(user._doc.updatedAt),
  };
};

const transformPermission = (permission) => {
  return {
    ...permission._doc,
    _id: permission.id,
    user: caved.bind(this, permission._doc.user),
    worktype: caved.bind(this, permission._doc.worktype),
    supplier: caved.bind(this, permission._doc.supplier),
    suppliertype: caved.bind(this, permission._doc.suppliertype),
    item: caved.bind(this, permission._doc.item),
    vehicletype: caved.bind(this, permission._doc.vehicletype),
    role: caved.bind(this, permission._doc.role),
    itemcategory: caved.bind(this, permission._doc.itemcategory),
    createdAt: convertISODateToTimestamp(permission._doc.createdAt),
    updatedAt: convertISODateToTimestamp(permission._doc.updatedAt),
  };
};

const transformCaved = (caved) => {
  return {
    ...caved._doc,
    _id: caved.id,
    create: roles.bind(this, caved._doc.create),
    approval: roles.bind(this, caved._doc.approval),
    view: roles.bind(this, caved._doc.view),
    edit: roles.bind(this, caved._doc.edit),
    delete: roles.bind(this, caved._doc.delete),
    createdAt: convertISODateToTimestamp(caved._doc.createdAt),
    updatedAt: convertISODateToTimestamp(caved._doc.updatedAt),
  };
};

const transformVehicleType = (vehicleType) => {
  return {
    ...vehicleType._doc,
    _id: vehicleType.id,
    createdAt: convertISODateToTimestamp(vehicleType._doc.createdAt),
    updatedAt: convertISODateToTimestamp(vehicleType._doc.updatedAt),
  };
};

const transformVehicle = (vehicle) => {
  return {
    ...vehicle._doc,
    _id: vehicle.id,
    vehicleType: vehicleType.bind(this, vehicle._doc.vehicleType),
    createdAt: convertISODateToTimestamp(vehicle._doc.createdAt),
    updatedAt: convertISODateToTimestamp(vehicle._doc.updatedAt),
  };
};

const transformBankDetails = (bankDetails) => {
  return {
    ...bankDetails._doc,
    _id: bankDetails.id,
    createdAt: convertISODateToTimestamp(bankDetails._doc.createdAt),
    updatedAt: convertISODateToTimestamp(bankDetails._doc.updatedAt),
  };
};

const transformBillingDetails = (billingDetails) => {
  return {
    ...billingDetails._doc,
    _id: billingDetails.id,
    createdAt: convertISODateToTimestamp(billingDetails._doc.createdAt),
    updatedAt: convertISODateToTimestamp(billingDetails._doc.updatedAt),
  };
};

const transformApproval = (approvalDetails) => {
  return {
    ...approvalDetails._doc,
    _id: approvalDetails.id,
    role: role.bind(this, approvalDetails._doc.role),
    camp: camp.bind(this, approvalDetails._doc.camp),
    createdAt: convertISODateToTimestamp(approvalDetails._doc.createdAt),
    updatedAt: convertISODateToTimestamp(approvalDetails._doc.updatedAt),
  };
};

const transformItemObject = (itemObject) => {
  return {
    ...itemObject._doc,
    _id: itemObject.id,
    item: item.bind(this, itemObject._doc.item),
    createdAt: convertISODateToTimestamp(itemObject._doc.createdAt),
    updatedAt: convertISODateToTimestamp(itemObject._doc.updatedAt),
  };
};

const transformmmRequisition = (mmRequisition) => {
  return {
    ...mmRequisition._doc,
    _id: mmRequisition.id,
    camp: camp.bind(this, mmRequisition._doc.camp),
    items: itemobjects.bind(this, mmRequisition._doc.items),
    createdByUser: user.bind(this, mmRequisition._doc.createdByUser),
    approvalsNeeded: approvals.bind(this, mmRequisition._doc.approvalsNeeded),
    createdAt: convertISODateToTimestamp(mmRequisition._doc.createdAt),
    updatedAt: convertISODateToTimestamp(mmRequisition._doc.updatedAt),
  };
};

const transformmmInternalIndent = (mmInternalIndent) => {
  return {
    ...mmInternalIndent._doc,
    _id: mmInternalIndent.id,
    camp: camp.bind(this, mmInternalIndent._doc.camp),
    items: itemobjects.bind(this, mmInternalIndent._doc.items),
    createdByUser: user.bind(this, mmInternalIndent._doc.createdByUser),
    approvalsNeeded: approvals.bind(
      this,
      mmInternalIndent._doc.approvalsNeeded
    ),
    requisition: mmrequisition.bind(this, mmInternalIndent._doc.requisition),
    createdAt: convertISODateToTimestamp(mmInternalIndent._doc.createdAt),
    updatedAt: convertISODateToTimestamp(mmInternalIndent._doc.updatedAt),
  };
};

const transformmmPurchaseOrder = (mmPurchaseOrder) => {
  return {
    ...mmPurchaseOrder._doc,
    _id: mmPurchaseOrder.id,
    camp: camp.bind(this, mmPurchaseOrder._doc.camp),
    items: itemobjects.bind(this, mmPurchaseOrder._doc.items),
    createdByUser: user.bind(this, mmPurchaseOrder._doc.createdByUser),
    approvalsNeeded: approvals.bind(this, mmPurchaseOrder._doc.approvalsNeeded),
    supplier: supplier.bind(this, mmPurchaseOrder.supplier),
    internalIndent: mminternalindent.bind(
      this,
      mmPurchaseOrder._doc.internalIndent
    ),
    createdAt: convertISODateToTimestamp(mmPurchaseOrder._doc.createdAt),
    updatedAt: convertISODateToTimestamp(mmPurchaseOrder._doc.updatedAt),
  };
};

exports.transformProject = transformProject;
exports.transformCamp = transformCamp;
exports.transformDesignation = transformDesignation;
exports.transformUnit = transformUnit;
exports.transformOffice = transformOffice;
exports.transformSupplierType = transformSupplierType;
exports.transformItemCategory = transformItemCategory;
exports.transformWorkType = transformWorkType;
exports.transformSupplier = transformSupplier;
exports.transformItem = transformItem;
exports.transformRole = transformRole;
exports.transformModule = transformModule;
exports.transformUser = transformUser;
exports.transformCaved = transformCaved;
exports.transformPermission = transformPermission;
exports.transformVehicleType = transformVehicleType;
exports.transformVehicle = transformVehicle;
exports.transformBankDetails = transformBankDetails;
exports.transformBillingDetails = transformBillingDetails;
exports.transformApproval = transformApproval;
exports.transformItemObject = transformItemObject;
exports.transformmmRequisition = transformmmRequisition;
exports.transformmmInternalIndent = transformmmInternalIndent;
exports.transformmmPurchaseOrder = transformmmPurchaseOrder;
