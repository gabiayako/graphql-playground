module.exports = {
  Query: {
    user: async (_, { username }, { dataSources }) => {
      const userData = await dataSources.githubAPI.getUserDataByUsername(
        username
      );
      return userData;
    },
    organizationRepositories: async (_, { organization }, { dataSources }) => {
      return await dataSources.githubAPI.getOrganizationRepositories(
        organization
      );
    },
  },
};
