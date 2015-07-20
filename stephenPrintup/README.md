### Homework #1
(Due Monday 7/20)

You need to turn in this homework by 

[X]cloning this repo, 
[X]making a new branch with your solutions, 
[X]pushing to github, and 
[X]issuing a pull request.

For details, follow the instructions [here](http://portlandcodeschool.github.io/jse/2015/01/07/command-line-and-git-slides/#/14).

Please also read the [learning objectives](objectives.md) for this week.

---

**1)** (_30% of total time_)
Predict the output of each of the following expressions, and explain the rules which determine that answer.  (_Hint: The rules for operator `==` are complicated, but do your best!_)

If the output depends on the value or type of variable _x_, identify the conditions (what _x_ is) when the expression will output true (or false, if that's simpler).  Assume the cases are independent, and _x_ is reset to an unknown value before each.

Some of these are tricky!  Don't trust your first instinct.  


**a)** `"1" == 1`

prediction 	11							<---wrong
result 		true

**b)** `"1" === 1`

prediction	false
result      false

**c)** `x == 'x'`

prediction true								<----wrong
result     undefined

**d)** `x == (x+'')`

prediction undefined
result     undefined

**e)** `'' == ' '`

prediction  true							<----wrong
result      false

**f)** `x = true`

prediction  true
result      true

**g)** `var x; x == 'undefined'`

prediction  undefined							<----wrong
result      false

**h)** `'9'<'10'`

prediction true
result     false 				            	<---reveiw

**i)** `typeof x + 1 === "number"`

prediction false, because "number" is a string
result     false

**j)** `typeof x % 2 === "number"`

prediction false, because "number" is a string
result     false

**k)** `typeof (x % 2) === "number"`

prediction false, because "number" is a string
result    true                      				<----review

**l)** `x++ == ++x`

prediction false, x++ will add 1 and ++x will turn x into number
result     false

**m)** `++x == x++`

prediction false, ++x will produce a number with a left over + and x ++ will add a number
result     undefined									<---review

**n)** `"1"+x == 1+x`

prediction false, "1" + x produces string and 1 + x could produce string
result      undefined										<----review

**o)** `"0"+1 == 1`

prediction  false, "0" + 1 == "01"
result true, "0" + 1 = "01", which is still truthy

**p)** `(typeof (x+1))===(typeof x)`	

prediction false, first is a number second is undefined, ===
result     undefined											<----wrong

**q)** `(x*1 == x) || ((typeof x) != "number")`

prediction  true, if x is a string it is set to number then a string (left) and on the right it is a string which is not a number
result      undefined									<----reveiw

**r)** `(x=(typeof (x+(typeof x))))==x`

prediction   true, because nothing is changing
result       undefined									<----review

---

_All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes._

 **2)** (_10%_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.

(x + y + z)/3

**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward the mean of the three.
That is, reset the value of each variable to something new based on its previous value.

var mean = (x + y + z)/3
x = x/mean
y = y/mean
z = z/mean

---

**3)** (_20%_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge (relative to some origin);
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.

var width = r - l
var length = t - b
var area = width * length

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.

if (length > width)

**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)

var smallRadius = if (length < width) {
					return length/2} else {
					return width /2
				};
var biggestInnerCircleCircumference = Math.PI(smallRadius)^2

**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.

var a = width/2
var b = length/2
var c = ((a^2)+(b^2))
var bigRadius =c^2
var biggestInnerCircleCircumference = Math.PI(bigRadius)^2


**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)



---

**4)** (_25%_)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

* Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

RC = "Integer Coordinates"
R = "row integer"
C = "column integer"
RC = (R, C)

* Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N===0 and the bottom-right has N===63.

N = "Integer # 0 to 63"


**a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C.

N = C + (R * 8) 

**b)**  Given N, find R.  Write an expression for R which contains N.

R = Math.floor(N / 8)

**c)**  Given N, find C.  Write an expression for C which contains N.

C = N % 8

**d)**  Assume the squares are colored black and white, with the upper-left square black.
Write an expression (or pair of conditional statements) to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N (or a subset of them, if you don't need all three).

var color = black
if (Math.even(N)) {
	color = white;
	} else { color = black;};


---

**5)** (_15%_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Assuming variables _n_ and _d_ are defined in advance (but you don't know their values), write a series of expressions to generate a string expressing the proper form of the fraction _n/d_.  For example, when _n===7_ and _d===4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.

n = numerator
d = denominator

a) Solve it first by making use of a function called _Math.floor_.

print(Math.floor(n/d) + " " + n%d + "/" + d)


b) Now solve it without calling any functions, using merely operators.  (Hint: you'll need at least the modulo operator _%_.)

n/d + " " + n%d + "/" + d

This one is tough. How to find the number of times the numerator fits into the denomenator without the decimal places and without rounding. I have been testing 14/3 and 7/4. 

14/3 = 4.6666
7/4 = 1.75

So I need 4 and 1 respectivly. I was thinking of changing the data into strings and somehow iterating over each charactor until a decimal was found, but that wouldn't work because the class hasn't hit on loops yet and I'm sure there is a way to do it without them. 

The number that I'm searching for is the number of iterations of the numerator in the denominator. I was thinking of just using the first integer in the variable and assuming the iterations would only be 1 digit long. Ok new course. 

These are the operators availible from our coursework that I think are relevant: - / * %

How to make 14/3 = 4
12/3= 4; 
the difference between 12 and 14 is 2; 
2 is a fraction of 3, the denomenator; calculate the difference between 14/3 and ; but I still need to round to do this... 
subtract the fraction of the denominator (12/3) from gross iteration variable (14/3); 
find the fraction of the denominator: 14%3 = 2
subtract this from the denominator  n-(n%d); 3 - (14 % 3), 3 - (2), 1
then divide numerator by denominator, thus factoring out remainder prior to calculation: n-(n%d); 14-(14%3); 14-(2); 12 (woot)
Divide this modified numerator by denominator: ((n-(n%d))/d); ((14-(14%3))/3); ((14-(2))/3); ((12)/3); 4 (woot) 


((n-(n%d))/d) + " " + n%d + "/" + d








