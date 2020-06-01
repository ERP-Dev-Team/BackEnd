const Office = require('../../models/office');

const { transformOffice } = require('./merge');

module.exports = {
    offices: async () => {
        try {
          const offices = await Office.find();
          if(offices == undefined){
            throw new Error('No offices found.');
          }
          return offices.map(office => {
            return transformOffice(office);
          });
        } catch (err) {
          throw err;
        }
      },
      createOffice: async(args) =>{
        try{
          const office = new Office({
              name: args.officeInput.name,
              phone1: args.officeInput.phone1,
              phone2: args.officeInput.phone2,
              email: args.officeInput.email,
              contactPerson: args.officeInput.contactPerson,
              address1: args.officeInput.address1,
              address2: args.officeInput.address2,
              city: args.officeInput.city,
              country: args.officeInput.state,
              zipcode: args.officeInput.zipcode,
            });

            let createdOffice;
            try {
              const result = await office.save();
              createdOffice = transformOffice(result);                 
            }catch(err){
                throw err;
            }
            return createdOffice;
        }catch(err){
            throw err;
        }
    },
    updateOffice:async(args)=>{
        try{
            const office = await Office.find({_id:args._id});
            if(office == undefined){
                throw new Error('No office found.');
            }
            let officeUpdated;
            try{
                officeUpdated=await Office.findOneAndUpdate(
                {"_id": args._id},
                { "$set":{
                    name: args.name,
                    phone1: args.phone1,
                    phone2: args.phone2,
                    email: args.email,
                    contactPerson: args.contactPerson,
                    address1: args.address1,
                    address2: args.address2,
                    city: args.city,
                    country: args.state,
                    zipcode: args.zipcode,
                }},
                {"new": true} //returns new document else will return document before update
            ).exec();
            }catch(err){
                throw err;
            }
            return transformOffice(officeUpdated);
        }catch(err){throw err;}
    }
}