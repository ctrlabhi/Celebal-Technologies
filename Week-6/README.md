1. You have made changes to multiple files in your Git repository and want to stage and commit these changes. What commands would you use to stage all the changes and commit them with a meaningful commit message?

git add .
git commit -m "Your meaningful commit message"

2. You have committed changes to a wrong branch. How would you move these commits to the correct branch?

# Ensure you are on the wrong branch
git checkout wrong-branch

# Create a new branch from the current state
git branch correct-branch

# Switch to the correct branch
git checkout correct-branch

# Remove the commits from the wrong branch
git checkout wrong-branch
git reset --hard HEAD~n  # Replace 'n' with the number of commits to remove

# Push the changes to the remote repository
git push -f origin wrong-branch


3. You want to create a new branch, make changes, and push the branch to the remote repository. Outline the steps you would take to create a new branch, commit changes, and push the branch to GitHub.

# Create a new branch
git checkout -b new-branch

# Make changes to your files

# Stage and commit the changes
git add .
git commit -m "Description of changes made"

# Push the new branch to the remote repository
git push origin new-branch

4. You want to contribute to an open-source project hosted on GitHub.What are the steps you would follow to fork the repository, make changes, create a pull request, and collaborate with the original project?

# Fork the repository on GitHub through the web interface

# Clone the forked repository to your local machine
git clone https://github.com/your-username/repo-name.git

# Navigate to the repository directory
cd repo-name

# Add the original repository as an upstream remote
git remote add upstream https://github.com/original-owner/repo-name.git

# Create a new branch for your changes
git checkout -b feature-branch

# Make changes to the code

# Stage and commit the changes
git add .
git commit -m "Description of changes made"

# Push the changes to your forked repository
git push origin feature-branch

# Create a pull request on GitHub from your fork's feature-branch to the original repository's main branch

5. You are working on a team project, and there are conflicts between your branch and the main branch. How would you resolve these merge conflicts? Provide the necessary commands and steps.

# Ensure you are on your branch
git checkout your-branch

# Fetch the latest changes from the remote main branch
git fetch origin main

# Merge the main branch into your branch
git merge main

# Resolve conflicts in your files, then stage the resolved files
git add <resolved-file1> <resolved-file2> ...

# Commit the resolved merge
git commit

# Push the changes to the remote repository
git push origin your-branch

6. You want to create a feature branch based on the latest changes in the main branch. What commands would you use to create a new branch and automatically switch to it, ensuring it's up to date with the latest changes from the main branch?

# Fetch the latest changes from the remote repository
git fetch origin

# Checkout the main branch and ensure it's up to date
git checkout main
git pull origin main

# Create a new feature branch from the updated main branch and switch to it
git checkout -b feature-branch

7. You have made a series of commits, but you realize that a change made several commits ago is causing issues in your application. How would you revert to a specific commit, discarding all changes made after that commit?

# Find the commit hash you want to revert to using `git log`
git log

# Reset to the specific commit
git reset --hard <commit-hash>

# Push the changes to the remote repository (force push might be necessary)
git push origin HEAD --force

8. You have accidentally deleted a file in your Git repository and committed the change. What commands would you use to restore the deleted file from the previous commit?

# Checkout the deleted file from the previous commit
git checkout HEAD^ -- path/to/deleted-file

# Stage and commit the restored file
git add path/to/deleted-file
git commit -m "Restore deleted file"

# Push the changes to the remote repository
git push origin your-branch
