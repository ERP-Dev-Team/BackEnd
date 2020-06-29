const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    type Project {
        _id: ID!
        name: String!
        status: String!
        startDate: String
        endDate: String
        createdAt: String!
        updatedAt: String!
    }

    type Camp {
        _id: ID!
        name: String!
        status: String!
        project: Project!
        address: String
        startDate: String
        endDate: String
        createdAt: String!
        updatedAt: String!
    }

    type Designation{
        _id: ID!
        name: String!
        createdAt: String!
        updatedAt: String!
    }

    type Unit{
        _id: ID!
        name: String!
        createdAt: String!
        updatedAt: String!
    }

    type Office{
        _id: ID!
        name: String!
        phone1: String,
        phone2: String,
        email: String,
        contactPerson: String,
        address1: String,
        address2: String,
        city: String,
        state: String,
        country: String,
        zipcode: String,
        createdAt: String!
        updatedAt: String!
    }

    type SupplierType{
        _id: ID!
        name: String!
        createdAt: String!
        updatedAt: String!
    }

    type ItemCategory{
        _id: ID!
        name: String!
        createdAt: String!
        updatedAt: String!
    }

    type WorkType{
        _id: ID!
        name: String!
        unit: Unit!
        createdAt: String!
        updatedAt: String!
    }

    type Supplier{
        _id: ID!
        name: String!
        contactname: String
        email: String
        phone1: String
        address1: String
        address2: String
        city: String
        state: String
        country: String
        zipcode: String
        panNumber: String
        gstNumber: String
        cstNumber: String
        accountBankName: String
        accountBranchName: String
        accountBranchCity: String
        accountNumber: String
        accountIIFSCCode: String
        accountHolderName: String
        accountPaymentFavour: String
        supplierTypes: [SupplierType!]
        createdAt: String!
        updatedAt: String!
    }

    type Item{
        _id: ID!
        name: String!
        description: String
        partNumber: String
        unit: Unit
        hsnNumber: String
        itemCode: String!
        itemCategory: ItemCategory
        createdAt: String!
        updatedAt: String!
    }

    type Role{
        _id: ID!
        name: String!
        createdAt: String!
        updatedAt: String!
    }

    type Module{
        _id: ID!
        name: String!
        caved: Caved!
        createdAt: String!
        updatedAt: String!
    }

    type User{
        _id: ID!
        userName: String!
        password: String
        firstName: String!
        lastName: String
        email: String
        phone1: String
        phone2: String
        phoneIMEI: String
        address1: String
        address2: String
        city: String
        state: String
        country: String
        zipcode: String
        joiningPlace: String
        joiningDate: String
        dateOfBirth: String
        qualification: String
        salary: String
        batta: String
        salaryEffectiveDate: String
        salaryOld: String
        battaOld: String
        loginAllowed: Boolean
        lastLogin: String
        lastLoginDevice: String
        refPerson: String
        refPersonPhone: String
        refPersonAddress: String
        IMEIAllowed: Boolean
        bankAccountNumber: String
        bankName: String
        bankBranchName: String
        bankBranchCity: String
        bankIIFSCCode: String
        bankAccountHolderName: String
        designation: Designation
        rolesAllowed: [Role!]
        modulesAllowed: [Module!]
        campAllowed: [Camp!]
        createdAt: String!
        updatedAt: String!
    }

    type AuthData {
        userName: ID!
        token: String!
        tokenExpiration: Int!
        modulesAllowed: [Module!]
    }

    type Caved {
        _id: ID!
        create: [Role!]
        approval: [Role!]
        view: [Role!]
        edit: [Role!]
        delete: [Role!]
        createdAt: String!
        updatedAt: String!
    }

    type Permission {
        _id: ID!
        user: Caved!
        worktype: Caved!
        supplier: Caved!
        suppliertype: Caved!
        item: Caved!
        vehicletype: Caved!
        role: Caved!
        itemcategory: Caved!
        createdAt: String!
        updatedAt: String!
    }

    type VehicleType {
        _id: ID!
        name: String!
        createdAt: String!
        updatedAt: String!
    }

    type Vehicle {
        _id: ID!
        registrationNumber: String!
        vin: String
        vehicleType: VehicleType!
        make: String
        ownerStatus: String!
        createdAt: String!
        updatedAt: String!
    }

    type BankDetails {
        _id: ID!
        bankName: String!
        accountNumber: String!
        accountHolderName: String!
        IIFSCCode: String
        branch: String
        branchCity: String
        paymentFavour: String
        createdAt: String!
        updatedAt: String!
    }

    type BillingDetails {
        _id: ID!
        billingName: String
        address: String
        gstin: String!
        phone1: String
        phone2: String
        email: String
        website: String
        createdAt: String!
        updatedAt: String!
    }

    type Approval {
        _id: ID!
        role: Role!
        note: String
        camp: Camp
        isApproved: Boolean!
        createdAt: String!
        updatedAt: String!
    }

    type ItemObject {
        _id: ID!
        item: Item!
        quantity: Float
        cost: Float
        createdAt: String!
        updatedAt: String!
    }

    type mmRequisition {
        _id: ID!
        status: String!
        createdByUser: User!
        description: String!
        camp: Camp
        items: [ItemObject!]
        approvalsNeeded: [Approval!]
        createdAt: String!
        updatedAt: String!
    }

    type mmInternalIndent {
        _id: ID!
        status: String!
        createdByUser: User!
        indentNumber: Int!
        camp: Camp
        items: [ItemObject!]
        requisition: mmRequisition!
        approvalsNeeded: [Approval!]
        createdAt: String!
        updatedAt: String!
    }

    type Counter { 
        name: String!
        value: Int!
    }

    type mmPurchaseOrder {
        _id: ID!
        status: String!
        createdByUser: User!
        purchaseOrderNumber: Int!
        supplier: Supplier
        camp: Camp
        items: [ItemObject!]
        internalIndent: mmInternalIndent!
        approvalsNeeded: [Approval!]
        createdAt: String!
        updatedAt: String!
    }

    input ProjectInput {
        name: String!
        status: String!
        startDate: String
        endDate: String
    }

    input CampInput {
        name: String!
        project: ID!,
        status: String!
        address: String
        startDate: String
        endDate: String
    }

    input DesignationInput{
        name: String!
    }

    input UnitInput{
        name: String!
    }

    input OfficeInput{
        name: String!
        phone1: String,
        phone2: String,
        email: String,
        contactPerson: String,
        address1: String,
        address2: String,
        city: String,
        state: String,
        country: String,
        zipcode: String,
    }

    input SupplierTypeInput{
        name: String!
    }

    input ItemCategoryInput{
        name: String!
    }

    input WorkTypeInput{
        name: String!
        unit: ID!
    }

    input SupplierInput{
        name: String!
        contactname: String
        email: String
        phone1: String
        address1: String
        address2: String
        city: String
        state: String
        country: String
        zipcode: String
        panNumber: String
        gstNumber: String
        cstNumber: String
        accountBankName: String
        accountBranchName: String
        accountBranchCity: String
        accountNumber: String
        accountIIFSCCode: String
        accountHolderName: String
        accountPaymentFavour: String
        supplierTypes: [ID!]
    }

    input ItemInput{
        name: String!
        description: String
        partNumber: String
        unit: ID
        hsnNumber: String
        itemCode: String!
        itemCategory: ID
    }

    input RoleInput{
        name: String!
    }

    input ModuleInput{
        name: String!
    }

    input UserInput{
        userName: String!
        password: String!
        firstName: String!
        lastName: String
        email: String
        phone1: String
        phone2: String
        phoneIMEI: String
        address1: String
        address2: String
        city: String
        state: String
        country: String
        zipcode: String
        joiningPlace: String
        joiningDate: String
        dateOfBirth: String
        qualification: String
        salary: String
        batta: String
        salaryEffectiveDate: String
        salaryOld: String
        battaOld: String
        loginAllowed: Boolean!
        lastLogin: String
        lastLoginDevice: String
        refPerson: String
        refPersonPhone: String
        refPersonAddress: String
        IMEIAllowed: Boolean!
        bankAccountNumber: String
        bankName: String
        bankBranchName: String
        bankBranchCity: String
        bankIIFSCCode: String
        bankAccountHolderName: String
        designation: ID
        rolesAllowed: [ID!]
        modulesAllowed: [ID!]
        campAllowed: [ID!]
    }

    input CavedInput {
        create: [ID!]!
        approval: [ID!]
        view: [ID!]!
        edit: [ID!]
        delete: [ID!]
    }

    input PermissionInput {
        user: ID!
        worktype: ID!
        supplier: ID!
        suppliertype: ID!
        item: ID!
        vehicletype: ID!
        role: ID!
        itemcategory: ID!
    }

    input VehicleTypeInput {
        name: String!
    }

    input VehicleInput {
        registrationNumber: String!
        vin: String
        vehicleType: ID!
        make: String
        ownerStatus: String!
    }

    input BankDetailsInput {
        bankName: String!
        accountNumber: String!
        accountHolderName: String!
        IIFSCCode: String
        branch: String
        branchCity: String
        paymentFavour: String
    }

    input BillingDetailsInput {
        billingName: String
        address: String
        gstin: String!
        phone1: String
        phone2: String
        email: String
        website: String
    }

    input ApprovalInput {
        role: ID!
        note: String
        camp: ID
        isApproved: Boolean!
    }

    input ItemObjectInput {
        item: ID!
        quantity: Float
        cost: Float
    }

    input mmRequisitionInput {
        status: String!
        createdByUser: ID!
        description: String!
        camp: ID
        items: [ID!]
        approvalsNeeded: [ID!]
    }

    input mmInternalIndentInput {
        status: String!
        createdByUser: ID!
        camp: ID
        items: [ID!]
        requisition: ID!
        approvalsNeeded: [ID!]
    }

    input mmPurchaseOrderInput {
        status: String!
        createdByUser: ID!
        supplier: ID
        camp: ID
        items: [ID!]
        internalIndent: ID!
        approvalsNeeded: [ID!]
    }

    type RootQuery{
        projects: [Project!]
        project(_id:ID!): Project!

        camps: [Camp!]
        camp(_id:ID!): Camp!

        roles:[Role!]
        role(_id:ID!):Role!
       
        designations: [Designation!]
        designation(_id:ID!):Designation!

        units:[Unit!]
        unit(_id:ID!):Unit!

        offices:[Office!]
        suppliertypes:[SupplierType!]
        itemcategories:[ItemCategory!]
        worktypes:[WorkType!]
        suppliers:[Supplier!]
        items:[Item!]
        item(_id:ID!):Item!
       
        modules:[Module!]
        users:[User!]
        caveds:[Caved!]
        permissions:[Permission]
        vehicletypes:[VehicleType!]
        vehicles:[Vehicle!]
        bankdetails:[BankDetails!]
        billingdetails:[BillingDetails!]
        mmrequisitions:[mmRequisition!]
        mminternalindents:[mmInternalIndent!]
        counters: [Counter!]
        mmpurchaseorders: [mmPurchaseOrder!]

        login(userName: String!, password: String!): AuthData!
    }

    type RootMutation{
        createProject(projectInput: ProjectInput): Project!,
        updateProject(_id: ID!, name: String, status: String,startDate: String, endDate: String): Project!,
        deleteProject(_id:ID!): Project!,

        createCamp(campInput: CampInput): Camp!,
        updateCamp(_id: ID!, name: String,project: String, status: String,startDate: String, endDate: String): Camp!,
        deleteCamp(_id:ID!): Camp!,

        createDesignation(designationInput: DesignationInput): Designation!,
        updateDesignation(_id: ID!, name:String!): Designation!,
        deleteDesignation(_id: ID!):Designation!,

        createUnit(unitInput: UnitInput): Unit!,
        updateUnit(_id: ID!, name:String!): Unit!,
        deleteUnit(_id: ID!):Unit!,

        createOffice(officeInput: OfficeInput): Office,
        updateOffice(_id:String!, name: String!,phone1: String, phone2: String,email: String,contactPerson: String, address1: String,address2: String,city: String, state: String, country: String,zipcode: String): Office,
    
        createSupplierType(supplierTypeInput: SupplierTypeInput): SupplierType,
        updateSupplierType(_id: ID!, name:String!): SupplierType,

        createItemCategory(itemCategoryInput: ItemCategoryInput): ItemCategory,
        updateItemCategory(_id: ID!, name:String!): ItemCategory,

        createWorkType(workTypeInput: WorkTypeInput): WorkType,
        updateWorkType(_id: ID!, name:String, unit: ID): WorkType

        createSupplier(supplierInput: SupplierInput): Supplier,
        updateSupplier(_id: ID!, name:String, contactName:String, email:String, phone1:String,phone2:String, address1:String, address2: String,city: String,state: String, country:String, zipcode:String, panNumber:String,gstNumber:String,cstNumber:String,accountBankName:String,accountBranchName:String,accountBranchCity:String,accountNumber:String,accountIIFSCCode:String,accountHolderName:String,accountPaymentFavour:String,supplierTypes:[ID!]): Supplier,

        createItem(itemInput: ItemInput): Item,
        updateItem(_id: ID!, name:String, description: String, partNumber: String, unit:ID, hsnNumber: String, itemCode: String, itemCategory:ID): Item,
        deleteItem(_id: ID!):Item!,

        createRole(roleInput: RoleInput): Role,
        updateRole(_id: ID!, name:String): Role,
        deleteRole(_id: ID!):Role,

        createModule(moduleInput: ModuleInput): Module,
        updateModule(_id: ID!, name:String): Module,

        createUser(userInput: UserInput): User,
        updateUser(_id:ID!, firstName: String!, lastName: String, email: String, phone1:String, phone2: String, phoneIMEI:String, address1: String, address2: String, city: String, state: String, country: String, zipcode: String, joiningPlace: String, joiningDate: String, dateOfBirth: String, qualification: String, salary: String, batta: String, salaryEffectiveDate: String, salaryOld: String, battaOld: String, loginAllowed: Boolean, refPerson: String, refPersonPhone: String, refPersonAddress: String, IMEIAllowed: Boolean,bankAccountNumber: String,bankName: String, bankBranchName: String, bankBranchCity: String, bankIIFSCCode: String, bankAccountHolderName: String, designation:ID, rolesAllowed:[ID!],modulesAllowed:[ID!],campAllowed:[ID!]): User,

        createCaved(cavedInput: CavedInput): Caved,
        updateCaved(_id:ID!,create: [ID!]!, approval: [ID!], view: [ID!]!, edit: [ID!], delete:[ID!]): Caved
    
        createPermission(permissionInput: PermissionInput): Permission,

        createVehicleType(vehicleTypeInput: VehicleTypeInput): VehicleType,
        updateVehicleType(_id:ID!, name: String!): VehicleType,

        createVehicle(vehicleInput: VehicleInput): Vehicle,
        updateVehicle(_id:ID!, registrationNumber: String!, vin: String, vehicleType: ID!, make: String, ownerStatus: String!): Vehicle,

        createBankDetails(bankDetailsInput: BankDetailsInput): BankDetails,
        updateBankDetails(_id:ID!, bankName: String!, accountNumber: String!, accountHolderName: String!, IIFSCCode: String, branch: String, branchCity: String, paymentFavour: String): BankDetails,

        createBillingDetails(billingDetailsInput: BillingDetailsInput): BillingDetails,
        updateBillingDetails(_id:ID!, billingName: String!, address: String!, gstin: String!, phone1: String, phone2: String, email: String, website: String): BillingDetails,

        createApproval(approvalInput: ApprovalInput): Approval,
        updateApproval(_id:ID!,note: String, isApproved: Boolean!): Approval,

        createItemObject(itemObjectInput:ItemObjectInput): ItemObject,
        updateItemObject(_id:ID!,item:ID!,quantity: Float!,cost: Float): ItemObject,

        createmmRequisition(mmrequisitionInput:mmRequisitionInput):mmRequisition,
        updatemmRequisition(_id:ID!,camp:ID!,description:String!,items:[ID!]):mmRequisition,

        createmmInternalIndent(mminternalIndentInput:mmInternalIndentInput):mmInternalIndent,
        updatemmInternalIndent(_id:ID!,status:String!,camp:ID!,items:[ID!]):mmInternalIndent,

        createmmPurchaseOrder(mmpurchaseOrderInput:mmPurchaseOrderInput):mmPurchaseOrder,
        updatemmPurchaseOrder(_id:ID!,status: String!,camp: ID!, items:[ID!],supplier:ID):mmPurchaseOrder,
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }
`);
