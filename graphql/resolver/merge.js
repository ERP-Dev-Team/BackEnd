const Project = require('../../models/project');
const Unit = require('../../models/unit');
const SupplierType = require('../../models/suppliertype');
const ItemCategory = require('../../models/itemcategory');
const Role = require('../../models/role');
const Designation = require('../../models/designation');
const Module = require('../../models/module');
const Camp = require('../../models/camp');
const {convertISODateToTimestamp} = require('../../helper/timestamp');

const project = async projectId => {
    try {
      const project = await Project.findOne({ _id: projectId  });
        return {
          ...project._doc,
          _id: project.id,
          createdAt: convertISODateToTimestamp(project._doc.createdAt),
          updatedAt: convertISODateToTimestamp(project._doc.updatedAt)
        };
    } catch (err) {
      throw err;
    }
  };
  const camps = async campIds => {
    try {
      const camps = await Camp.find({ _id: { $in: campIds }  });
      return camps.map(camp => {
        return {
          ...camp._doc,
          _id: camp.id,
          project: project.bind(this,camp._doc.project),
          createdAt: convertISODateToTimestamp(camp._doc.createdAt),
          updatedAt: convertISODateToTimestamp(camp._doc.updatedAt)
        };
      });
    } catch (err) {
      throw err;
    }
  };

  const designation = async designationId => {
    try {
      const designation = await Designation.findOne({ _id: designationId  });
        return {
          ...designation._doc,
          _id: designation.id,
          createdAt: convertISODateToTimestamp(designation._doc.createdAt),
          updatedAt: convertISODateToTimestamp(designation._doc.updatedAt)
        };
    } catch (err) {
      throw err;
    }
  };

  const unit = async unitId => {
    try {
      const unit = await Unit.findOne({ _id: unitId  });
        return {
          ...unit._doc,
          _id: unit.id,
          createdAt: convertISODateToTimestamp(unit._doc.createdAt),
          updatedAt: convertISODateToTimestamp(unit._doc.updatedAt)
        };
    } catch (err) {
      throw err;
    }
  };

  const roles = async roleIds => {
    try {
      const roles = await Role.find({ _id:{ $in: roleIds }  });
      return roles.map(role => {
        return {
          ...role._doc,
          _id: role.id,
          createdAt: convertISODateToTimestamp(role._doc.createdAt),
          updatedAt: convertISODateToTimestamp(role._doc.updatedAt)
        };
      });
    } catch (err) {
      throw err;
    }
  };

  const itemCategory = async itemCategoryId => {
    try {
      const itemCategory = await ItemCategory.findOne({ _id: itemCategoryId  });
        return {
          ...itemCategory._doc,
          _id: itemCategory.id,
          createdAt: convertISODateToTimestamp(itemCategory._doc.createdAt),
          updatedAt: convertISODateToTimestamp(itemCategory._doc.updatedAt)
        };
    } catch (err) {
      throw err;
    }
  };

  

  const suppliertypes = async supplierTypeIds => {
    try {
      const supplierTypes = await SupplierType.find({ _id: { $in: supplierTypeIds }   });
      return supplierTypes.map(supplierType => {
        return {
          ...supplierType._doc,
          _id: supplierType.id,
          createdAt: convertISODateToTimestamp(supplierType._doc.createdAt),
          updatedAt: convertISODateToTimestamp(supplierType._doc.updatedAt)
        };
      });
    } catch (err) {
      throw err;
    }
  };

  const imodules = async moduleIds => {
    try {
      const imodules = await Module.findOne({ _id: { $in: moduleIds }  });
      return imodules.map(imodule => {
        return {
          ...imodule._doc,
          _id: imodule.id,
          rolesAllowed: roles.bind(this,imodule._doc.rolesAllowed),
          createdAt: convertISODateToTimestamp(imodule._doc.createdAt),
          updatedAt: convertISODateToTimestamp(imodule._doc.updatedAt)
        };
      });
    } catch (err) {
      throw err;
    }
  };

const transformProject = project => {
    return {
        ...project._doc,
        _id: project.id,
        createdAt: convertISODateToTimestamp(project._doc.createdAt),
        updatedAt: convertISODateToTimestamp(project._doc.updatedAt)
      };
  };

  const transformCamp = camp => {
    return {
        ...camp._doc,
        _id: camp.id,
        project: project.bind(this, camp._doc.project),
        createdAt: convertISODateToTimestamp(camp._doc.createdAt),
        updatedAt: convertISODateToTimestamp(camp._doc.updatedAt)
      };
  };

  const transformDesignation = designation => {
    return {
        ...designation._doc,
        _id: designation.id,
        createdAt: convertISODateToTimestamp(designation._doc.createdAt),
        updatedAt: convertISODateToTimestamp(designation._doc.updatedAt)
      };
  };

  const transformUnit = unit => {
    return {
        ...unit._doc,
        _id: unit.id,
        createdAt: convertISODateToTimestamp(unit._doc.createdAt),
        updatedAt: convertISODateToTimestamp(unit._doc.updatedAt)
      };
  };

  const transformOffice = office => {
    return {
        ...office._doc,
        _id: office.id,
        createdAt: convertISODateToTimestamp(office._doc.createdAt),
        updatedAt: convertISODateToTimestamp(office._doc.updatedAt)
      };
  };
  const transformSupplierType = supplierType => {
    return {
        ...supplierType._doc,
        _id: supplierType.id,
        createdAt: convertISODateToTimestamp(supplierType._doc.createdAt),
        updatedAt: convertISODateToTimestamp(supplierType._doc.updatedAt)
      };
  };
  const transformItemCategory = itemCategory => {
    return {
        ...itemCategory._doc,
        _id: itemCategory.id,
        createdAt: convertISODateToTimestamp(itemCategory._doc.createdAt),
        updatedAt: convertISODateToTimestamp(itemCategory._doc.updatedAt)
      };
  };

  const transformWorkType = workType => {
    return {
        ...workType._doc,
        _id: workType.id,
        unit: unit.bind(this, workType._doc.unit),
        createdAt: convertISODateToTimestamp(workType._doc.createdAt),
        updatedAt: convertISODateToTimestamp(workType._doc.updatedAt)
      };
  };

  const transformSupplier = supplier => {
    return {
        ...supplier._doc,
        _id: supplier.id,
        supplierTypes: suppliertypes.bind(this, supplier._doc.supplierTypes),
        createdAt: convertISODateToTimestamp(supplier._doc.createdAt),
        updatedAt: convertISODateToTimestamp(supplier._doc.updatedAt)
      };
  };

  const transformItem = item => {
    return {
        ...item._doc,
        _id: item.id,
        unit: unit.bind(this, item._doc.unit),
        itemCategory: itemCategory.bind(this, item._doc.itemCategory),
        createdAt: convertISODateToTimestamp(item._doc.createdAt),
        updatedAt: convertISODateToTimestamp(item._doc.updatedAt)
      };
  };

  const transformRole = role => {
    return {
        ...role._doc,
        _id: role.id,
        createdAt: convertISODateToTimestamp(role._doc.createdAt),
        updatedAt: convertISODateToTimestamp(role._doc.updatedAt)
      };
  };

  const transformModule = imodule => {
    return {
        ...imodule._doc,
        _id: imodule.id,
        rolesAllowed: roles.bind(this,imodule._doc.rolesAllowed),
        createdAt: convertISODateToTimestamp(imodule._doc.createdAt),
        updatedAt: convertISODateToTimestamp(imodule._doc.updatedAt)
      };
  };

  const transformUser = user => {
    return {
        ...user._doc,
        _id: user.id,
        password: null,
        designation: designation.bind(this,user._doc.designation),
        rolesAllowed: roles.bind(this,user._doc.rolesAllowed),
        modulesAllowed: imodules.bind(this,user._doc.modulesAllowed),
        campsAllowed: camps.bind(this,user._doc.campsAllowed),
        createdAt: convertISODateToTimestamp(user._doc.createdAt),
        updatedAt: convertISODateToTimestamp(user._doc.updatedAt)
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