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
        rolesAllowed: [Role!]
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
        superRole: String!
        createdAt: String!
        updatedAt: String!
    }

    type AuthData {
        userName: ID!
        token: String!
        tokenExpiration: Int!
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
        rolesAllowed: [ID!]
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
        superRole: String!
    }

    type RootQuery{
        camps: [Camp!]
        projects: [Project!]
        designations: [Designation!]
        units:[Unit!]
        offices:[Office!]
        suppliertypes:[SupplierType!]
        itemcategories:[ItemCategory!]
        worktypes:[WorkType!]
        suppliers:[Supplier!]
        items:[Item!]
        roles:[Role!]
        modules:[Module!]
        users:[User!]
        
        login(userName: String!, password: String!): AuthData!
    }

    type RootMutation{
        createProject(projectInput: ProjectInput): Project,
        updateProject(_id: ID!, name: String, status: String,startDate: String, endDate: String): Project,

        createCamp(campInput: CampInput): Camp,
        updateCamp(_id: ID!, name: String,project: String, status: String,startDate: String, endDate: String): Camp,

        createDesignation(designationInput: DesignationInput): Designation,
        updateDesignation(_id: ID!, name:String!): Designation,

        createUnit(unitInput: UnitInput): Unit,
        updateUnit(_id: ID!, name:String!): Unit,

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
        updateItem(_id: ID!, name:String, description: String, partNumber: String, unit:ID, hsnNumber: String, itemCode: String, itemCategory:ID): Item

        createRole(roleInput: RoleInput): Role,
        updateRole(_id: ID!, name:String): Role,

        createModule(moduleInput: ModuleInput): Module,
        updateModule(_id: ID!, name:String, rolesAllowed:[ID]): Module,

        createUser(userInput: UserInput): User,
        updateUser(_id:ID!, firstName: String!, lastName: String, email: String, phone1:String, phone2: String, phoneIMEI:String, address1: String, address2: String, city: String, state: String, country: String, zipcode: String, joiningPlace: String, joiningDate: String, dateOfBirth: String, qualification: String, salary: String, batta: String, salaryEffectiveDate: String, salaryOld: String, battaOld: String, loginAllowed: Boolean, refPerson: String, refPersonPhone: String, refPersonAddress: String, IMEIAllowed: Boolean,bankAccountNumber: String,bankName: String, bankBranchName: String, bankBranchCity: String, bankIIFSCCode: String, bankAccountHolderName: String, designation:ID, rolesAllowed:[ID!],modulesAllowed:[ID!],campAllowed:[ID!], superRole:String): User
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }
`);
