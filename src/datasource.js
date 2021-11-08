const { RESTDataSource } = require('apollo-datasource-rest');

class GithubApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.github.com/';
  }

  async getUserDataByUsername(username) {
    const response = await this.get(`users/${username}`);
    return this.userReducer(response);
  }

  userReducer(user) {
    return {
      id: user.id,
      username: user.login,
      name: user.name,
      avatar: user.avatar_url,
    };
  }

  async getOrganizationRepositories(organization) {
    const response = await this.get(`orgs/${organization}/repos`);
    return this.reposReducer(response);
  }

  reposReducer(repos) {
    return repos.map(async (repo) => {
      const contributors = await this.get(repo.contributors_url);

      return {
        id: repo.id,
        name: repo.name,
        owner: repo.owner.login,
        url: repo.url,
        contributorsAmount: contributors.length,
      };
    });
  }
}

module.exports = GithubApi;
