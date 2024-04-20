In todays session we learned about github.

1.	git init – Create an empty local repository.
2.	git add . – Add all the saved changes to the staging area.
3.	git commit -m “Commit Message” – Save staged changes to the local repository.
4.	git remote add origin remoteUrl – connect the local repo to the remote repo.
5.	git branch -m branchName – create a new branch with branchName. 
6.	git push -u origin branchName– push all the local repo data to the remote repo on branch master.


Pushing code for First Time:
1. git init
2. git add .
3. git commit -m “First Commit”
4. git remote add origin remote url.
5. git push -u origin branch Name


Pushing code for nth Time:
1.	git add .
2.	git commit -m “Commit message”
3.	git push


To change the branch
1. git checkout branchName

To Merge the branch
1. Go to the base branch (git checkout git-demo)
2. git merge changesBranch (git merge master)
3. git push