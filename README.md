# Notes of Encouragement

This is a command-line interface (CLI) application written in Node.js that displays one random note of encouragement each time it is run.

I wrote this application for my son, so he can always get a note of encouragement from me whenever he needs one. You don't even need to be connected to the Internet!

![Example Note](./cli-app-example.png)

## Try It

If you already have [Node.js](https://nodejs.org) installed, you can run it instantly without installing anything:

```bash
npx notes-of-encouragement
```

To install it so you can run it any time by typing `heybuddy`:

```bash
npm install -g notes-of-encouragement
heybuddy
```

It won't show you the same note twice in a row. 😊

## Modifying For Someone Special in Your Life

The published notes are for my son, but you can personalize your own copy for someone you love. Using a good editor like [Visual Studio Code](https://code.visualstudio.com), update:

* `bin/notes.json`: this contains a JavaScript object with an array of introductions (`intros`) and an array of notes (`notes`). Make them your own!
* `package.json`: change the `bin` command to whatever you want. Right now it's set to `heybuddy`. Change yours to `heygirl`, `heyprincess`, `hi-beautiful`, or whatever you wish!

```json
"bin": {
	"heygirl": "./bin/index.js"
}
```

## Installing Your Personalized Copy on Someone's Computer

1. Download and install [Node.js](https://nodejs.org).
1. Download, extract, and modify this source code, or copy all the modified source code from your computer to a folder on their computer.
1. Open up a terminal/command window.
1. Change to the directory where the source code files are located.
1. Run the following command to install it as a CLI app.

```bash
npm install -g .
```

Last, add instructions to your loved one's computer to open up a terminal/command prompt window and type `heybuddy` (or whatever you defined as your command in `package.json`).

Hope this helps you touch someone's heart and let them know you love them! ❤

## Updating

1. Modify the source code to add/remove notes.
1. Reinstall the CLI app same as installing it before.

```bash
npm install -g .
```

## Uninstalling

```bash
npm uninstall -g notes-of-encouragement
```

## Development

Run the test suite with:

```bash
npm test
```
