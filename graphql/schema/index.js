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
        supplierType: [SupplierType!]
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
        supplierType: ID!
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
        updateSupplier(_id: ID!, name:String, contactName:String, email:String, phone1:String,phone2:String, address1:String, address2: String,city: String,state: String, country:String, zipcode:String, panNumber:String,gstNumber:String,cstNumber:String,accountBankName:String,accountBranchName:String,accountBranchCity:String,accountNumber:String,accountIIFSCCode:String,accountHolderName:String,accountPaymentFavour:String,supplierType:[ID!]): Supplier
    }

    schema{
        query: RootQuery
        mutation: RootMutation
    }
`);
