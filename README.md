# prior

Generate a list of prior inventions based on the work you've published on GitHub
(public and private repositories for all organizations) and the npm packages
that you've published. In order to prevent to much duplicate information we try
to match the npm packages with the list of GitHub repositories you've got access
to.

## Installation

As this is an command line utility it can be installed using:

```
npm install -g prior
```

## Generating

In order to generate a list we need to know a couple of things

- **npm** npm username.
- **github** GitHub username.
- **token** A personal access token that you can generate in your GitHub account
  settings.
- **registry** A reference to an npm registry you want to use for retrieving
  your published packages.

These options can either be supplied using command line flags:

```
prior-inventions --npm 3rdeden --github 3rd-Eden --token mytoken
```

If one of the flags is missing we will automatically prompt you for the
information (and attempt to detect some sane defaults like your npm account
using the `npm whoami` etc). After all information has been received we retrieve:

- The list of your public packages,
- Package details for each of these packages
- List of GitHub organizations
- List of repositories in these organization that you have access to
- Possible `package.json` contents in each of these repositories.

Once all data has been gathered we try to reduce the dataset by finding matches
between npm packages and github repositories. If we find duplicate matches we
will prompt you for the correct version:

```

Conflict found, can't find an unique GitHub repository for the following module:
  name: ws
  desc: simple to use, blazing fast and thoroughly tested websocket client, server and console for node.js, up-to-date against RFC-6455
To resolve this conflict please supply one of the following options:

0:
  name: ws
  desc: `ws`: The fastest RFC-6455 WebSocket implementation for Node.js.
  fork: false
  url: https://github.com/websockets/ws
1:
  name: ws
  desc: `ws`: The fastest RFC-6455 WebSocket implementation for Node.js.
  fork: true
  url: https://github.com/3rd-Eden/ws

To decline all options supply: x

prompt: choice:

```

After everything is done you will have a `prior-inventions.<ext>` in the
directory. The `<ext>` depends on the output formatter you used. The available
output formatters can be found by running `prior-inventions --help`.

> **Please do note that YOU should check and verify the generated list. It
> includes private repositories and public repositories where you might not be
> the author off and should be deleted from your list. This is some manual labor
> that we cannot really automate safely.**

## License

MIT
