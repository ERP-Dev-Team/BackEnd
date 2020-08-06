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

    type ProjectDashboard {
        openProjects: Int!
        pausedProjects: Int!
        closedProjects: Int!
        terminatedProjects: Int!
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
        campsAllowed: [Camp!]
        createdAt: String!
        updatedAt: String!
    }

    type AuthData {
        userName: ID!
        token: String!
        tokenExpiration: Int!
        modulesAllowed: [Module!]
        userModuleObjects: [UserModuleObject]
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

    type UserModuleObject {
        _id: ID!
        name: String!
        create: Boolean!
        edit: Boolean!
        view: Boolean!
        delete: Boolean!
        approval: Boolean!
    }

    type Device {
        _id: ID!
        make: String
        model: String
        OS: String
        upTime: String
        cellNumber: String
        IMEI: String!
        userAssigned: User
        lastUsedUser: User
        networkName: String
        networkType: String
        networkStrength: String
        batteryPercentage: String
        lastKnownLatitude: String
        lastKnownLongitude: String
        createdAt: String!
        updatedAt: String!
    }

    type Attendance {
        _id: ID!
        user: User!
        camp: Camp
        loginTimestamp: String
        loginPhoto: String
        logoutPhoto: String
        shift: String
        logoutTimestamp: String
        batta: String
        workType: WorkType
        loginLatitude: String
        loginLongitude: String
        logoutLatitude: String
        logoutLongitude: String
        quantity: String
        device: Device
        approvalsNeeded: [Approval]
        createdAt: String!
        updatedAt: String!
    }

    type DPR {
        _id: ID!
        camp: Camp
        workType: WorkType
        workDescription: String
        length: String
        breadth: String
        height: String
        cummulative: String
        createdBy: User
        photoLocation: String
        locationLatitude: String
        locationLongitude: String
        approvalsNeeded: [Approval]
        createdAt: String!
        updatedAt: String!
    }

    type Labour {
        _id:ID!
        name: String!
        camp:Camp
        idPhotoLocation: String
        wage: Int
        type: String
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
        campsAllowed: [ID!]
    }

    input UserEditInput {
        userName: String!
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
        designation: ID
        rolesAllowed: [ID!]
        modulesAllowed: [ID!]
        campsAllowed: [ID!]
    }

    input CavedInput {
        create: [ID!]
        approval: [ID!]
        view: [ID!]
        edit: [ID!]
        delete: [ID!]
    }

    input CavedEditInput {
        _id:  ID!
        create: [ID!]
        approval: [ID!]
        view: [ID!]
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

    input DeviceInput {
        make: String
        model: String
        cellNumber: String
        IMEI: String!
        userAssigned: ID
    }

    input EditDeviceInput {
        make: String
        model: String
        OS: String
        upTime: String
        cellNumber: String
        lastUsedUser: ID
        networkName: String
        networkType: String
        networkStrength: String
        batteryPercentage: String
        lastKnownLatitude: String
        lastKnownLongitude: String
    }

    input AttendanceInput {
        user: ID!
        camp: ID
        loginTimestamp: String
        loginPhoto: String
        logoutPhoto: String
        shift: String
        logoutTimestamp: String
        batta: String
        workType: ID
        loginLatitude: String
        loginLongitude: String
        logoutLatitude: String
        logoutLongitude: String
        quantity: String
        device: ID
        approvalsNeeded: [ID]
    }

    input EditAttendanceInput {
        camp: ID
        loginTimestamp: String
        loginPhoto: String
        logoutPhoto: String
        shift: String
        logoutTimestamp: String
        batta: String
        workType: ID
        loginLatitude: String
        loginLongitude: String
        logoutLatitude: String
        logoutLongitude: String
        quantity: String
        device: ID
    }

    input DPRInput {
        camp: ID
        workType: ID
        workDescription: String
        length: String
        breadth: String
        height: String
        cummulative: String
        createdBy: ID
        photoLocation: String
        locationLatitude: String
        locationLongitude: String
        approvalsNeeded: [ID]
    }

    input DPREditInput{
        camp: ID
        workType: ID
        workDescription: String
        length: String
        breadth: String
        height: String
        cummulative: String
        createdBy: ID
        photoLocation: String
        locationLatitude: String
        locationLongitude: String
    }

    input LabourInput {
        supplier: ID!
        name:String!
        idPhotoLocation: String
        camp: ID
        wage: Int
        type: String
    }

    input LabourEditInput {
        name:String!
        idPhotoLocation: String
        camp: ID
        wage: Int
        type: String
    }

    input SupplierEditInput{
        name:String
        contactName:String
        email:String
        phone1:String
        phone2:String
        address1:String
        address2: String
        city: String
        state: String
        country:String
        zipcode:String
        panNumber:String
        gstNumber:String
        cstNumber:String
        accountBankName:String
        accountBranchName:String
        accountBranchCity:String
        accountNumber:String
        accountIIFSCCode:String
        accountHolderName:String
        accountPaymentFavour:String
        supplierTypes:[ID!]
    }

    type RootQuery{
        projects: [Project!]
        project(_id:ID!): Project!
        projectDashboard: ProjectDashboard

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
        suppliertype(_id:ID!):SupplierType
        itemcategories:[ItemCategory!]
        itemcategory(_id:ID!):ItemCategory
        worktypes:[WorkType!]
        suppliers:[Supplier!]
        supplier(_id:ID!):Supplier
        items:[Item!]
        item(_id:ID!):Item!
       
        modules:[Module!]
        getModuleCavedById(_id:ID!):Caved!
        users:[User!]
        user(_id:ID!):User!
        caveds:[Caved!]
        caved(_id:ID!):Caved!
        permissions:[Permission]
        vehicletypes:[VehicleType!]
        vehicles:[Vehicle!]
        bankdetails:[BankDetails!]
        billingdetails:[BillingDetails!]
        mmrequisitions:[mmRequisition!]
        mminternalindents:[mmInternalIndent!]
        counters: [Counter!]
        mmpurchaseorders: [mmPurchaseOrder!]

        devices: [Device!]
        device(_id:ID!): Device

        attendance(_id:ID!):Attendance

        dprs: [DPR]
        dpr(_id:ID!): DPR

        approval(_id:ID!): Approval

        labourers: [Labour]
        labour(_id:ID!): Labour

        login(userName: String!, password: String!): AuthData!
    }

    type RootMutation{
        createProject(projectInput: ProjectInput): Project!,
        updateProject(_id: ID!, name: String, status: String,startDate: String, endDate: String): Project!,
        deleteProject(_id:ID!): Project!,

        createCamp(campInput: CampInput): Camp!,
        updateCamp(_id: ID!, name: String,project: ID!, status: String,startDate: String, endDate: String, address:String): Camp!,
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
        updateSupplier(_id: ID!,supplierEditInput:SupplierEditInput): Supplier,

        createItem(itemInput: ItemInput): Item,
        updateItem(_id: ID!, name:String, description: String, partNumber: String, unit:ID, hsnNumber: String, itemCode: String, itemCategory:ID): Item,
        deleteItem(_id: ID!):Item!,

        createRole(roleInput: RoleInput): Role,
        updateRole(_id: ID!, name:String): Role,
        deleteRole(_id: ID!):Role,

        createModule(moduleInput: ModuleInput): Module,
        updateModule(_id: ID!, name:String): Module,

        createUser(userInput: UserInput): User,
        updateUser(_id: ID!, userEditInput: UserEditInput): User,

        createCaved(cavedInput: CavedInput): Caved,
        updateCaved(cavedEditInput: CavedEditInput): Caved
    
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

        createDevice(deviceInput: DeviceInput): Device,
        updateDevice(_id:ID!,editDeviceInput:EditDeviceInput): Device,

        createAttendance(attendanceInput:AttendanceInput): Attendance,
        updateAttendance(_id:ID!,editAttendanceInput:EditAttendanceInput): Attendance,

        createDPR(dprInput:DPRInput):DPR,
        updateDPR(_id:ID!,dprEditInput:DPREditInput): DPR,
        deleteDPR(_id:ID):DPR,

        createLabour(labourInput:LabourInput): Labour,
        updateLabour(_id:ID!,labourEditInput: LabourEditInput): Labour,
        deleteLabour(_id:ID): Labour,

    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }
`);
