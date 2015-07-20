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


**a)** `"1" == 1` True. When we convert "1" from a string into a number, 1 and 1 are equal.

**b)** `"1" === 1` False. "1" is a string and 1 is a number. Therefore the two sides are not equal.

**c)** `x == 'x'` False. x is undefined, which is always false-y

**d)** `x == (x+'')` True. Both side are false, which makes them equal--thereby making this statement true.

**e)** `'' == ' '` True. Both sides are false-y, which makes the statement true

**f)** `x = true` True. We have assigned the value true to x, so the statement will come out as true.

**g)** `var x; x == 'undefined'` False. x is undefined and therefore false-y while 'undefined' is a string and truth-y, which makes the two sides unequal.

**h)** `'9'<'10'` True. The number 9 is less than the number 10. (I checked this in the console and know it's incorrect, but I can't figure out why.)

**i)** `typeof x + 1 === "number"` False. The left side is undefined and the right side is a string.

**j)** `typeof x % 2 === "number"` Fales. Left side is NaN and the right side is a string, so they are not the same.

**k)** `typeof (x % 2) === "number"` True, but I can't explain why. Somehow the parenthesis fixes things.

**l)** `x++ == ++x` False, but I can't explain why.

**m)** `++x == x++` True, but I can't explain why.

**n)** `"1"+x == 1+x` False. x is undefined and therefore false-y.

**o)** `"0"+1 == 1` True. 0 is a real number, so the computer adds it to 1.

**p)** `(typeof (x+1))===(typeof x)` False. The left side is a number and the right side is undefined.	

**q)** `(x*1 == x) || ((typeof x) != "number")` True. The left side is undefined and false-y, but the right it truth-y.

**r)** `(x=(typeof (x+(typeof x))))==x` True. Isn't this just asking if x==x?

---

_All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes._

 **2)** (_10%_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.

var mean = (x + y + z) / 3;

**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward the mean of the three.
That is, reset the value of each variable to something new based on its previous value.

var newMean = ((x/2) + (y/2) + (z/2)) / 3;

---

**3)** (_20%_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge (relative to some origin);
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.

var width = (r-l);
var height = (t-b);
var area = width * height;

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.

if (height > width) {
	true;
} else {
	false;
}

**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)

var cir = 3.14 * width;

**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.

a = 3.14 * ((Math.sqrt(width^2 + height^2))/2)^2

**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)

var miniL = l + (width/3); var miniR = r - (width/3); var miniT = t - (height/3); 
var miniB = b + (height/3);

---

**4)** (_25%_)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

* Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

* Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N===0 and the bottom-right has N===63.

**a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C.

	n = c + (r * 8);

**b)**  Given N, find R.  Write an expression for R which contains N.

 r = Math.floor(n/8);

**c)**  Given N, find C.  Write an expression for C which contains N.

c = n%8;

**d)**  Assume the squares are colored black and white, with the upper-left square black.
Write an expression (or pair of conditional statements) to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N (or a subset of them, if you don't need all three).

if ((n%2 === 0) && (r%2 === 0)) {
console.log(black);
}
else if ((n%2 === 1) && (r%2 === 1)) {
console.log(black);
} else {
console.log(white);
}

---

**5)** (_15%_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Assuming variables _n_ and _d_ are defined in advance (but you don't know their values), write a series of expressions to generate a string expressing the proper form of the fraction _n/d_.  For example, when _n===7_ and _d===4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.

a) Solve it first by making use of a function called _Math.floor_.

console.log(Math.floor(n/d) + ' ' + (n%d) + "/" + d);

b) Now solve it without calling any functions, using merely operators.  (Hint: you'll need at least the modulo operator _%_.)

console.log((n/d) - ((n/d)%1) + ' ' + (n%d) + "/" + d);