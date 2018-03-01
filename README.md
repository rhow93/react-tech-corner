# Columbia Road Tech Corner 9/3

You can find the latest documentation for CRA [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Note
You *do not* need to have programming experience to be able to participate in this tech corner. I will assume no experience in anything development related throughout the course of this workshop (and will up the pace if it's too easy). You will be partnered with a developer (if you are not one yourself) and they should be able to help you through the basic steps. Try to get through this setup before the day, though.

This guide assumes you're using a Mac. I won't be making any documentation for Windows / Linux (right now). If you want to write some documentation for another OS, I'm happy to review your pull request.

## Before The Day
You need to install xcode command line tools (if you don't have xcode installed at all). You can get these by running `xcode-select --install` into your terminal prompt. This is ~500mb of data to download and Aarnet is not exactly a speed demon so please do this before the day.

Then, Install brew (a package manager for MacOS) found [here](https://brew.sh/). Copy and paste that command into your terminal and you should be away.

Next, you'll need to install [Node](https://nodejs.org/en/). You can either follow the link and download the LTS package (8.9.4 at time of writing) or you can run `brew install node` in your terminal prompt.

Finally, you need to have a text editor so you can look at and edit the code. I (begrudgingly) recommend [Visual Studio Code](https://code.visualstudio.com/) which you can download by following that link or running `brew cask install visual-studio-code`. Other notable editors you might be interested in are [Atom](https://atom.io/), [Emacs](https://www.gnu.org/software/emacs/) and [Vim](https://github.com/vim/vim).

## On The Day
You're here, bright-eyed and ready to go. Now what?

### Installation
You need to get these files on your machine so you can run them. This is called "cloning" and you can do this with the following command:

`git clone https://github.com/ColumbiaRoad/react-tech-corner ~/Documents/React/tech-corner/`

This downloads all of the files (here) that Github is storing and sticks them in the folder `React/tech-corner` in your Documents.

Next, navigate to that folder using `cd ~/Documents/React/tech-corner/`

### Running

`npm install`

This will install React and some other packages _locally_ to this folder (So you're cluttering your whole environment with a certain React installation).

`npm start`

This will open a browser window and run your React application. Congratulations, you made it! 🎉




