const fs = require('fs');
const axios = require('axios');

function getReposList(username) {
  const url = `https://api.github.com/users/${username}/repos`;

  return axios.get(url)
    .then((response) => {
      const repos = response.data;
      return repos.map((repo) => repo.name);
    })
    .catch((error) => {
      throw new Error(`Failed to fetch repositories for ${username}. Please check the GitHub username and try again.\nError: ${error.message}`);
    });
}

async function getRepoReadme(username, repoName) {
  const url = `https://api.github.com/repos/${username}/${repoName}/readme`;

  try {
    const response = await axios.get(url);
    const { content } = response.data;
    return Buffer.from(content, 'base64').toString('utf-8');
  } catch (error) {
    console.log(error);
    return null; // Return null if the README doesn't exist or if an error occurs
  }
}

function createDocsFolder(repoList, docsFolderPath, username) {
  if (!fs.existsSync(docsFolderPath)) {
    fs.mkdirSync(docsFolderPath, { recursive: true });
  }

  repoList.forEach(async (repoName) => {
    const repoDocsFolderPath = `${docsFolderPath}/${repoName}`;
    fs.mkdirSync(repoDocsFolderPath, { recursive: true });

    const readmeContent = await getRepoReadme(username, repoName);
    if (readmeContent) {
      fs.writeFileSync(`${repoDocsFolderPath}/README.md`, readmeContent, 'utf8');
    } else {
      console.log(`No README found for ${repoName}. Skipping.`);
    }
  });
}

async function main() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question('Enter your GitHub username: ', async (username) => {
    try {
      const repoList = await getReposList(username);
      const docsFolderPath = './docusaurus_docs'; // Change this to your desired folder path
      createDocsFolder(repoList, docsFolderPath, username);
      console.log('Basic folder structure for Docusaurus docs created successfully.');
    } catch (error) {
      console.error(error.message);
    } finally {
      readline.close();
    }
  });
}

main();
