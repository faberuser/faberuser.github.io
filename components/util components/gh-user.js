const axios = require('axios')

class GitHubUser {
    constructor() {
        if (!GitHubUser.instance) {
            this.init()
            GitHubUser.instance = this
        }

        return GitHubUser.instance
    }

    async init() {
        this.baseUrl = 'https://api.github.com'
        this.username = process.env.NEXT_PUBLIC_GITHUB_USERNAME.trim()
        const response = await axios.get(`${this.baseUrl}/users/${this.username}`)

        this.name = response.data.name
        this.email = response.data.email
        this.avatarUrl = response.data.avatar_url

        const reposResponse = await axios.get(`${this.baseUrl}/users/${this.username}/repos`)
        this.repositories = reposResponse.data

        const hasUserRepo = this.repositories.some(repo => repo.name === this.username)

        if (hasUserRepo) {
            const readmeResponse = await axios.get(`${this.baseUrl}/repos/${this.username}/${this.username}/readme`)
            this.readmeContent = Buffer.from(readmeResponse.data.content, 'base64').toString('utf8')
        } else {
            this.readmeContent = "User does not have a profile readme"
        }
    }

    getUsername() {
        return this.username
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getAvatarURL() {
        return this.avatarUrl
    }

    getRepositories() {
        return this.repositories
    }

    getReadmeContent() {
        return this.readmeContent
    }
}

const gitHubUser = new GitHubUser();

(async () => {
    try {
        await gitHubUser.init();
    } catch (error) {
        console.error('Error initializing GitHub user:', error);
    }
})();

module.exports = gitHubUser;