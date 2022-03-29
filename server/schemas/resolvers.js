const { Tech, Matchup } = require('../models');

const resolvers = {
  Query: {
    allTech: async () => {
      return Tech.find();
    },
    allMatchup: async () => {
      return Matchup.find();
    },
    matchup: async (parent, { matchupId }) => {
      return Matchup.findOne({_id: matchupId});
    },

  Mutation: {
    addMatchup: async (parent, {tech1, tech2 }) => {
      Matchup.create({ tech1, tech2 })
    },
    
  }
    

  },
}

module.exports = resolvers;
