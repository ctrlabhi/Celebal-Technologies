# 1. You have made changes to multiple files in your Git repository and want to stage and commit these changes. What commands would you use to stage all the changes and commit them with a meaningful commit message?
<span style="font-size: 25px;"Staging All Changes and Committing with a Meaningful Commit Message-</span>


**Stage all changes:**
git add .

**Commit with a meaningful message:**
git commit -m "Describe the changes made in this commit"

# 2. You have committed changes to a wrong branch. How would you move these commits to the correct branch?
*Moving Commits to the Correct Branch*

**Check out the correct branch:**
git checkout correct-branch-name

**Cherry-pick the commits from the wrong branch:**
git cherry-pick <commit-hash>

**Remove the commits from the wrong branch:**
git checkout wrong-branch
git reset --hard HEAD~n

(Replace n with the number of commits to remove)

# 3. You want to create a new branch, make changes, and push the branch to the remote repository. Outline the steps you would take to create a new branch, commit changes, and push the branch to GitHub.
*Creating a New Branch, Committing Changes, and Pushing to GitHub-*


**Create and switch to a new branch:**
git checkout -b new-branch

**Make changes and stage them:**
git add .

**Commit the changes:**
git commit -m "Describe the changes made"

**Push the new branch to GitHub:**
git push origin new-branch

# 4. You want to contribute to an open-source project hosted on GitHub.What are the steps you would follow to fork the repository, make changes, create a pull request, and collaborate with the original project?
*Contributing to an Open-Source Project on GitHub-*


**Fork the repository on GitHub.**
**Clone the forked repository:**
git clone https://github.com/your-username/repository-name.git
cd repository-name

**Create a new branch:**
git checkout -b new-feature-branch

**Make changes and stage them:**
git commit -m "Describe the changes made"

**Push the branch to your forked repository:**
git push origin new-feature-branch

**Create a pull request on the original repository.**

# 5. You are working on a team project, and there are conflicts between your branch and the main branch. How would you resolve these merge conflicts? Provide the necessary commands and steps.
*Resolving Merge Conflicts-*


**Fetch the latest changes from the main branch:**
git fetch origin

**Merge the main branch into your branch:**
git merge origin/main

**Resolve conflicts manually in the affected files.**

**Stage the resolved files:**
git add resolved-file

**Continue the merge:**
git commit

# 6. You want to create a feature branch based on the latest changes in the main branch. What commands would you use to create a new branch and automatically switch to it, ensuring it's up to date with the latest changes from the main branch?
*Creating a Feature Branch Based on the Latest Changes in the Main Branch-*


**Fetch the latest changes:**
git fetch origin

**Check out the main branch and pull the latest changes:**
git checkout main
git pull origin main

**Create and switch to a new branch:**
git checkout -b new-feature-branch

# 7. You have made a series of commits, but you realize that a change made several commits ago is causing issues in your application. How would you revert to a specific commit, discarding all changes made after that commit?
*Reverting to a Specific Commit-*


**Find the commit hash you want to revert to:**
git log

**Reset to the specific commit:**
git reset --hard <commit-hash>

# 8. You have accidentally deleted a file in your Git repository and committed the change. What commands would you use to restore the deleted file from the previous commit?
*Restoring a Deleted File-*


**Find the commit where the file existed:**
git log -- <file-path>

**Checkout the file from that commit:**
git checkout <commit-hash> -- <file-path>

**Stage and commit the restored file:**
git add <file-path>
git commit -m "Restore deleted file"
