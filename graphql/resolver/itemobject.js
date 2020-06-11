const ItemObject = require('../../models/itemobject');

const { transformItemObject } = require('./merge');

module.exports = {
    itemobjects: async () => {
        try {
          const itemobjects = await ItemObject.find();
          if(itemobjects == undefined){
            throw new Error('No item objects found.');
          }
          return itemobjects.map(item => {
            return transformItemObject(item);
          });
        } catch (err) {
          throw err;
        }
      },
      createItemObject: async(args) =>{
        try{
          const itemobject = new ItemObject({
              item: args.itemObjectInput.item,
              quantity: args.itemObjectInput.quantity,
              cost: args.itemObjectInput.cost
            });

            let createdItemObject;
            try {
              const result = await itemobject.save();
              createdItemObject = transformItemObject(result);                 
            }catch(err){
                throw err;
            }
            return createdItemObject;
        }catch(err){
            throw err;
        }
    },
    updateItemObject:async(args)=>{
        try{
            const itemobject = await ItemObject.find({_id:args._id});
            if(itemobject == undefined){
                throw new Error('No item object found.');
            }
            let itemObjectUpdated;
            try{
                itemObjectUpdated=await ItemObject.findOneAndUpdate(
                {"_id": args._id},
                { "$set":{
                    item: args.item,
                    quantity: args.quantity,
                    cost: args.cost
                }},
                {"new": true} //returns new document else will return document before update
            ).exec();
            }catch(err){
                throw err;
            }
            return transformItemObject(itemObjectUpdated);
        }catch(err){throw err;}
    }
}