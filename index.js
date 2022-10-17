require('dotenv').config({path:`${__dirname}/.env`});
const utils = require('./utils');
console.log(process.env);

const parseValues = () => {
    const owner = process.env.OWNER;
    if (owner === null) throw 'cannot make request without an owner';

    const repo = process.env.REPO;
    if (repo === null) throw 'cannot make request without a repo';

    const token = process.env.GH_PAT;
    if (token === null) throw 'cannot make request without a token';

    const title = process.env.TITLE;
    if (title === null) throw 'cannot make request without a title';

    const body = process.env.BODY;
    if (body ===  null) throw  'cannot make request without a body';

    return {
        owner,
        repo,
        token,
        title,
        body
    }
}

const run = async() => {
    switch (process.env.FUNCTION) {
        case "CREATE":
            try {
                const values = parseValues();
                await utils.createIssue(values.title, values.body, values.repo, values.owner, values.token, {})
            } catch (ex) {
                console.log(`createIssue::error: ${ex}`);
            }
            break;
        default:
            console.log(`unsupported or missing function: ${process.env.FUNCTION || "[missing]"}`);
            break;
    }
}

run();