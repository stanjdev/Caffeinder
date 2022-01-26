# Caffinder
Caffinder is a web application that allows users to search for local coffee shops and keep track of their favorite coffee shops.

github instructions:

Command to clone a specific branch:

`git clone -b dev https://github.com/stanjdev/Caffinder`

Run this command after you clone dev to ensure your fork has
the same information:

`git remote set-url --add origin <<Addyour repo link here>>`

Each member of the team should do the initial clone onto their
local machine with the dev brach of the repo (not main).

Once the dev branch has been cloned onto you local machine, 
you will then create a seperate branch for each of your tasts
that must be completed. 
Example  (git checkout -b omar-setup-server-app-file)

You will complete this task in this specific branch. Once the
task is done and your code is working, you will then go back
into the dev branch and merge your changes into the dev branch.
(git checkout dev) => (git merge omar-setup-server-app-file)

When moving onto the next task, you will start the same process
of creating a new branch with name and task

Once we are ready to go live and submit the final project and 
everything is working, I will merge it with main.

clone down dev branch:

-- `git clone -b dev https://github.com/stanjdev/Caffinder`

add your fork url to origin remote:

-- `git remote set-url --add origin <>`

create your branch off dev:

-- `git checkout -b branchname`

how to merge your branch with dev branch:

-- `git checkout dev`
-- `git merge (branch name)`

how to pull dev branch:

-- `git checkout dev`
-- `git pull origin dev`

how to push to dev:

-- `git push origin dev`


Sample workflow:

`git pull origin dev` - to pull most recent changes

`git checkout -b stan-button` - to create a new branch to work on

work on button

`git add . `

`git commit -m'worked on button'`

`git checkout dev` (now I'm on dev branch)

`git merge stan-button` (while I'm on dev branch)

Finally: `git push origin dev`
