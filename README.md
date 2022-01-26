# Caffinder
Caffinder is a web application that allows users to search for local coffee shops and keep track of their favorite coffee shops.

github instructions:

Command to clone a specific branch:

git clone -b dev https://github.com/stanjdev/Caffinder

Run this command after you clone dev to ensure your fork has
the same information:

git remote set-url --add origin <<Addyour repo link here>>

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