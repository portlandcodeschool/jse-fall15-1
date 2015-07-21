### Homework #1
(Due Monday 7/20)

You need to turn in this homework by cloning this repo, making a new branch with your solutions, pushing to github, and issuing a pull request.
For details, follow the instructions [here](http://portlandcodeschool.github.io/jse/2015/01/07/command-line-and-git-slides/#/14).

Please also read the [learning objectives](objectives.md) for this week.

---

**1)** (_30% of total time_)
Predict the output of each of the following expressions, and explain the rules which determine that answer.  (_Hint: The rules for operator `==` are complicated, but do your best!_)

If the output depends on the value or type of variable _x_, identify the conditions (what _x_ is) when the expression will output true (or false, if that's simpler).  Assume the cases are independent, and _x_ is reset to an unknown value before each.

Some of these are tricky!  Don't trust your first instinct.  


**a)** `"1" == 1`

True, this is because it is comparing the values so even though one is a string it is coercing the value to be true.

**b)** `"1" === 1`

False, because when using triple equals you are comparing the pure values and a string does not equal the number.

**c)** `x == 'x'`

When x is undefined it cannot equal the other

**d)** `x == (x+'')`

**e)** `'' == ' '`

False because the quotes do not equal the same type.

**f)** `x = true`

True, because we are defining x and it is a value therefore true.

**g)** `var x; x == 'undefined'`

False, because undefined is considered not a number therefore it cannot be equal to not a number because there is no value.

**h)** `'9'<'10'`

 True, because we have the less than symbol and 9 is less than 10

**i)** `typeof x + 1 === "number"`

  False because x + 1 does not equal an numbered string

**j)** `typeof x % 2 === "number"`

False because again the numbered string is not purely equal to the x we are using that is undefined.

**k)** `typeof (x % 2) === "number"`

False because again the typeof is not a string therefore it cannot equal a string

**l)** `x++ == ++x`

False because the type is not the same

**m)** `++x == x++`

  True, because both types are similar rather than undefined.

**n)** `"1"+x == 1+x`

 False, because adding a string to x is not the same as adding the number 1 to x

**o)** `"0"+1 == 1`

 True, because string 0 is undefined which means its 1 is equal to 1 both numbers.

**p)** `(typeof (x+1))===(typeof x)`	

 True, When you follow the sequence x+1 is equal to typeof x because both are the same type making it true.

**q)** `(x*1 == x) || ((typeof x) != "number")`

True because x is equal to x or type of x is not equal to a number string which is all true

**r)** `(x=(typeof (x+(typeof x))))==x`

   True, typeof x is equal to x.

---

_All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes._

 **2)** (_10%_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.

variable x;
x = 4

variable y;
y = 6

variable z;
z = 20

(x+y+z)/3 


**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward the mean of the three.
That is, reset the value of each variable to something new based on its previous value.


x + (mean - x)*.5;



**3)** (_20%_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge (relative to some origin);
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.

var x = l * b

var l = 2

var b = 4

l * b = x

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.
 
var t = 2

var l = 4

(l * t)&&(!<=t)

**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)

var circumference;

!(l<=t)&&((t*Math.Pl))

**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.

(l<=t)&&(t * Math.Pl)||!(l<=t)&&(l * Math.Pl)

**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)



---

**4)** (_25%_)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

* Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

* Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N===0 and the bottom-right has N===63.

**a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C.

var r = 7;

var c = 7;

r * c = n + 7 * 2

**b)**  Given N, find R.  Write an expression for R which contains N.

n - 7 * 2 = r

**c)**  Given N, find C.  Write an expression for C which contains N.

n - 14 / 2 = c

**d)**  Assume the squares are colored black and white, with the upper-left square black.
Write an expression (or pair of conditional statements) to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N (or a subset of them, if you don't need all three).

if upper square r,c = 0,0  then color = black

**5)** (_15%_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Assuming variables _n_ and _d_ are defined in advance (but you don't know their values), write a series of expressions to generate a string expressing the proper form of the fraction _n/d_.  For example, when _n===7_ and _d===4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.

a) Solve it first by making use of a function called _Math.floor_.

Math.floor (9/4) = 2


b) Now solve it without calling any functions, using merely operators.  (Hint: you'll need at least the modulo operator _%_.)



