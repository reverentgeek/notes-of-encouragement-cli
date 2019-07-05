# Notes of Encouragement

This is a command-line interface (CLI) application written in Node.js that displays one random note of encouragement each time it is run.

I wrote this application for my son, so he can always get a note of encouragement from me whenever he needs one. You don't even need to be connected to the Internet!

## Modifying For Someone Special in Your Life

If you want to use this application for someone special, you can update the following using a good editor like [Visual Studio Code](https://code.visualstudio.com):

* `/bin/notes.json`: this contains a JavaScript object with an array of introductions and an array of notes.
* `/package.json`: change the `/bin` to be whatever command you want. Right now it's set to `heybuddy`. Change yours to `heygirl`, `heyprincess`, `hi-beautiful`, or whatever you wish!

## Installing on Someone's Computer

1. Download and install [node.js](https://nodejs.org).
1. Download, extract, and modify this source code, or copy all the modified source code from your computer to a folder on their computer.
1. Open up a terminal/command window.
1. Change to the directory where the source code files are located.
1. Run the following command to install dependencies and install it as a CLI app.

```bash
npm install
npm install -g .
```

Last, add instructions to your loved one's computer to open up a terminal/command prompt window and type `heybuddy` (or whatever you defined as your app in the `package.json` file).

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
