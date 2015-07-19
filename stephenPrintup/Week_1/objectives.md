## terminal

You should understand the meaning of the following terminal commands and related words:

bash, 						<----review: Bourne-again shell, referring to its objective as a free replacement for the Bourne shell. Bash is a command processor that typically runs in a text window, where the user types commands that cause actions. Bash can also read commands from a file, called a script. Like all Unix shells, it supports filename globbing (wildcard matching), piping, here documents, command substitution, variables and control structures for condition-testing and iteration.
shell, 						<----review: In computing, a shell is a user interface for access to an operating system's services. In general, operating system shells use either a command-line interface (CLI) or graphical user interface (GUI), depending on a computer's role and particular operation.
root, 						<----review: the first or top-most directory in a hierarchy
path,						<----review: in computer file systems, the human-readable address of a resource
.  							<----review: Current folder
..  						<----review: Parent/enclosing directory, e.g.
~   						<----review: 
/  
*   						<----review: 
_cd,    					<----review: 
ls, 
pwd, 
cp, 						<----review: cp [file] [newfile]	Copy file to file
mv, 						<----review: mv [file] [new filename]	Move/Rename, e.g. mv -v [file] [dir]
mkdir, 
rm, 						<----review: Remove a file, e.g. rm [file] [file]
rmdir,
sudo, 
chmod, 						<----review: Change access permissions
chown, 						<----review: Change file owner and group
ps, 						<----review: Process status, information about processes running in memory.
top, 						<----review: Display process information
man, 						<----review: Help manual
which,						<----review: Locate a program file in the user's path
history, 					<----review: Command Line history.
more, 						<----review: Page through text one screenful at a time, less provides more emulation and extensive enhancements.
less, 						<----review: Page through text one screenful at a time. Less is a program similar to more, but which allows backward movement in the file as well as forward movement.
head, 						<----review: Display the first lines of a file
tail, 						<----review: Display the last part of a file. Display the contents of file or, by default, its standard input, to the standard output.
env, 						<----review: List or Set environment variables
$PATH,						<----review: The shell path for a user in OSX is a set of locations in the filing system whereby the user can use certain applications, commands and programs without the need to specify the full path to that command or program in the Terminal.
node, 						<----review: is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.
vim, 
emacs, 						<----review: Emacs (pronounced EE-maks and sometimes spelled "emacs" or "EMACS") is a popular text editor used mainly on Unix-based systems by programmers, scientists, engineers, students, and system administrators.
git_


## git

### Jargon

You should understand the meaning of the following _git_ terminology:

_local repo, 
remote repo, 
working directory,
origin, 						<----review: that is the default name Git gives to the server you cloned from.
clone, 
branch, 
status,
checkout, 
add, 
remove, 
commit, 
staged, 
untracked,
merge, 
push, 
pull_


### Skills

You should be able to do the following basic _git_ actions:

* Create a repository
* Clone a repository
* Check the status of a local repo
* Create a new local branch
* Move from one branch to another
* Add changes to be committed
* Commit a set of changes
* Pull master from origin
* Push a branch to origin
* Make a pull request

## Javascript

### Jargon

You should understand the meaning and behavior of the following:

* Operators:

```
+ _(numeric and string)_
- / * %
== === != !== < > <= >=
= += -= /= *= %=
++X --X X++ X--
! && ||
X?Y:Z						<----review
typeof
```

* Statements and keywords:

```
var
if () {...}
if () {...} else {...}
```

* Special primitives:

```
true
false
undefined
''
NaN
Infinity
```

* Vocabulary:

_infix, 
prefix, 
postfix, 
unary, 
binary, 
ternary,
evaluation, 						<----review
operator, 
operand, 							<----review
type,
number, 
integer, 
float, 
string, 
numeric string,
string literal, 					<----review
concatenation, 
interpolation,						<----review
boolean, 
expression, 
statement, 
primitive,
auto-conversion, 					<----review
type coercion, 						<----review
parsing, 
precedence,
declare, 
initialize, 
keyword, 
REPL, 								<----review
mod,
conditional, 
condition, 
consequent, 						<----review
block, 
short-circuit, 						<----review
truthy/truish, 
falsey/falsish_

### Skills
You should be able to:

[]* Work confidently in the console of at least one browser and in the node REPL.

[X]* Declare and initialize variables, and use assignment and incremental assignment operators to modify them.

[]* Articulate branching conditions both with and without boolean operators.

[]* Use short-circuit boolean operators in conditional evaluation.

[]* Anticipate the behavior of special Numbers (_NaN, Infinity_), non-integer numbers, and non-numbers in computations.

[X]* Use common mathematical functions from the Math and Number objects.

[]* Manipulate variables to represent and solve simple arithmetic and geometric problems.

[]* Parse any expression, deconstructing it into a tree of constituent expressions and tracing their evaluation in the correct order.

[]* Notice all operators with side-effects and track any changes in the value of variables.

[]* Predict the exact result of any expression whose constituent values are known.

[]* Reason about the possible behavior of expressions which contain some unknown values.

[X]* Trace on paper the execution of simple programs.

