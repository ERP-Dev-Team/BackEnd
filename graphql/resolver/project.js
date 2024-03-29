const Project = require("../../models/project");

const { transformProject } = require("./merge");

module.exports = {
  projects: async () => {
    try {
      const projects = await Project.find();
      if (projects == undefined) {
        throw new Error("No projects found.");
      }
      return projects.map((project) => {
        return transformProject(project);
      });
    } catch (err) {
      throw err;
    }
  },
  projectDashboard: async () => {
    var openProjects = 0;
    var closedProjects = 0;
    var pausedProjects = 0;
    var terminatedProjects = 0;
    try{
      openProjects = await Project.find({status:"Open"}).count();
      closedProjects = await Project.find({status:"Closed"}).count();
      pausedProjects = await Project.find({status:"Paused"}).count();
      terminatedProjects = await Project.find({status:"Terminated"}).count();
    }catch(err){
    }

    try{
      return {
        openProjects: openProjects,
        closedProjects: closedProjects,
        pausedProjects: pausedProjects,
        terminatedProjects: terminatedProjects,
      };
    }catch(err){
      throw err;
    }
  },
  project: async (args) => {
    try {
      const project = await Project.findOne({ _id: args._id });
      if (project == undefined) {
        throw new Error("No project found.");
      }
      return transformProject(project);
    } catch (err) {
      throw err;
    }
  },
  createProject: async (args, req) => {
    /*if(!req.isAuth){
          throw new Error('Not authorized');
        }*/
    try {
      const project = new Project({
        name: args.projectInput.name,
        status: args.projectInput.status,
        startDate: args.projectInput.startDate,
        endDate: args.projectInput.endDate,
      });

      let createdProject;
      try {
        const result = await project.save();
        createdProject = transformProject(result);
      } catch (err) {
        throw err;
      }
      return createdProject;
    } catch (err) {
      throw err;
    }
  },
  updateProject: async (args) => {
    try {
      const project = await Project.find({ _id: args._id });
      if (project == undefined) {
        throw new Error("No project found.");
      }
      let projectUpdated;
      try {
        projectUpdated = await Project.findOneAndUpdate(
          { _id: args._id },
          {
            $set: {
              name: args.name,
              status: args.status,
              startDate: args.startDate,
              endDate: args.endDate,
            },
          },
          { new: true } //returns new document else will return document before update
        ).exec();
      } catch (err) {
        throw err;
      }
      return transformProject(projectUpdated);
    } catch (err) {
      throw err;
    }
  },
  deleteProject: async (args) => {
    try {
      const project = await Project.find({ _id: args._id });
      if (project == undefined) {
        throw new Error("No project found.");
      }
      let projectDelete;
      try {
        projectDelete = await Project.findByIdAndDelete(args._id);
        return transformProject(projectDelete);
      } catch (err) {
        throw err;
      }
    } catch (err) {
      throw err;
    }
  },
};
