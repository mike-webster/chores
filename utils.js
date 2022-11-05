

async function createIssue (title, body, repo, owner, token, options) {
    try {
        const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
        const headers =  {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }

        var body = {
            title,
            body,
        }

        if (options.labels) {
            body['labels'] = options.labels;
        }

        const resp = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });

        if (!resp.ok) {
            throw `unhappy response from github: ${JSON.stringify(resp)}`;
        }

        console.log(`issue created: ${(await resp.json()).html_url}`)
    } catch (ex) {
        console.log(`utils.createIssue::error: ${ex}`);
    }
}

async function addIssueToProject() {
    try {
        const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
        const headers =  {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }

        var body = {
            title,
            body,
        }

        if (options.labels) {
            body['labels'] = options.labels;
        }

        const resp = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });

        if (!resp.ok) {
            throw `unhappy response from github: ${JSON.stringify(resp)}`;
        }

        console.log(`issue created: ${(await resp.json()).html_url}`)
    } catch (ex) {
        console.log(`utils.createIssue::error: ${ex}`);
    }
}

module.exports = {
    createIssue
}

// leaving off
// 1. struggling with some graphql shit
//   - I need to figure out how to move the item to the desired column on the project board
//   - it's a cumbersome process... youd think they'd  let you specify the  column  when you  create it.