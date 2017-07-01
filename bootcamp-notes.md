# Front-End Bootcamp
This is an example of a notes taken in the Front-End Bootcamp.

## Environment Setup

### Install Git and Git bash

**Git** is a version control system (VCS) for tracking changes in computer files and coordinating work on those files among multiple people. [\[1\]](https://en.wikipedia.org/wiki/Git)

**Git Bash**
Git Bash and Git Shell are two different command line programs which allow you to interface with the underlying git program. _Bash_ is a Linux-based command line (which has been ported over to Windows) while Shell is a native Windows command line. You can use either of them. They'll just have different auxiliary commands, for example Bash has "ls" instead of "dir". [\[2\]](https://www.quora.com/What-is-the-difference-between-Git-bash-and-Git-shell)

#### Installation

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
