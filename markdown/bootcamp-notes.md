## Environment Setup

### Install Git and Git bash

**Git** is a version control system (VCS) for tracking changes in computer files and coordinating work on those files among multiple people. [1]

**Git Bash**
Git Bash and Git Shell are two different command line programs which allow you to interface with the underlying git program. _Bash_ is a Linux-based command line (which has been ported over to Windows) while Shell is a native Windows command line. You can use either of them. They'll just have different auxiliary commands, for example Bash has "ls" instead of "dir". [2]

#### Installing Git and Git Bash

To install Git and Git Bash Website and [download Git](https://git-scm.com/downloads).

After the installation you need to configured Git with the following commands, putting your own name and email:

```bash
git config --global user.name "<Your Name>"
git config --global user.email "<Your Email>"
```

**Notes**:
If you are a Linux or Mac user probably you have Git installed. To check if you have Git installed run the following command:

```bash
git --version
```

If you see something like: `git version 2.11.1` you have Git installed and is not necessary the step above.

### Configured the SSH Keys

Using the SSH protocol, you can connect and authenticate to remote servers and services. With SSH keys, you can connect to GitHub without supplying your username or password at each visit. [3]

#### Generating a new SSH Key

1. Open a Terminal or Git Bash for Windows users.
2. Run the following command there:
```bash
ssh-keygen -t rsa -b 4096 -C "<Your Email>"
```
3. It is going to ask you two things. The path where you want to generate the key and the passphrase. We are going to let the default values so just hit enter key two times.

### Create a GitHub account

**GitHub** is a web-based Git or version control repository and Internet hosting service. It is mostly used for code. [4]

#### Creating and account in GitHub

To create a GitHub account just go to fill your personal data in the form. (Nickname, email and a new password) and click on **Sign up for GitHub**. You need to verified your email after that.

[1]: https://en.wikipedia.org/wiki/Git
[2]: https://www.quora.com/What-is-the-difference-between-Git-bash-and-Git-shell
[3]: https://help.github.com/articles/about-ssh/
[4]: https://en.wikipedia.org/wiki/GitHub
