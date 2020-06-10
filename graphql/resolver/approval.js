const Approval = require('../../models/approval');

const { transformApproval } = require('./merge');

module.exports = {

      createApproval: async(args,req) => {
        try{
          const approval = new Approval({
              role: args.approvalInput.role,
              note: args.approvalInput.note,
              camp: args.approvalInput.camp,
              isApproved: args.approvalInput.isApproved
            });
          
            let createdApproval;
            try {
              const result = await approval.save();
              createdApproval = transformApproval(result);            
            }catch(err){
                throw err;
            }
            return createdApproval;
        }catch(err){
            throw err;
        }
    }
}