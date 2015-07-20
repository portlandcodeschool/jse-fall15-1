### Chad Miller
### Answers are all inline, either after or below the question, beginning with //

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


**a)** `"1" == 1` //true / js will change types when using ==

**b)** `"1" === 1` //false / js will NOT change types when using ===

**c)** `x == 'x'` //false / unless x has been set to 'x'

**d)** `x == (x+'')` //true / == ignores the added string

**e)** `'' == ' '` //false / an empty string is not equal to a string with a space in it

**f)** `x = true` //true / sets x to true

**g)** `var x; x == 'undefined'` //false / x == undefined, not the string 'undefined'

**h)** `'9'<'10'` //false / alphabetically 1 is "less" than 9

**i)** `typeof x + 1 === "number"` //false / typeof is unary so operates on the first thing it sees to it's right. in this case typeof x is "number", but then a 1 gets concatenated on the end so it's not === to "number"

**j)** `typeof x % 2 === "number"` //false / in this case typeof x starts out as "number" but then the % 2 adds uncertainty so js says NaN???

**k)** `typeof (x % 2) === "number"` //true / this time js operates in the () first and, assuming x was a number, will spit out a number to the typeof, resulting in  "number"

**l)** `x++ == ++x` //false / pre-incrementing is happening on the right side of the expression, so they can never be equal. ex. x=3; x++(outputs 3 and sets x to 4) == ++x(sets x to 5 and outputs 5) will be false.

**m)** `++x == x++` //true / pre-incrementing happens on the left only so... x=3; ++X(sets x to 4 and outputs 4) == x++(outputs 4 and then sets x to 5) both sides output 4 so the expression is true

**n)** `"1"+x == 1+x` //false / "1"+x concatenates 1 and the value of x while 1+x adds 1 to the value of x

**o)** `"0"+1 == 1` //true/ js will compare the string "01" with 1 and find it to be truthy

**p)** `(typeof (x+1))===(typeof x)` //true / assuming x is a number, the left side will operate like **k)** above, and both sides will spit out "number"

**q)** `(x*1 == x) || ((typeof x) != "number")` //true / the left side of the || returns a "boolean" which does not equal "number"

**r)** `(x=(typeof (x+(typeof x))))==x`//true / the left side sets x = to "string" and then compares it to x on the right side which is now "string" thanks to the left side??

---

_All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes._

 **2)** (_10%_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.
// var mean = (x+y+z)/3;

**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward the mean of the three.
That is, reset the value of each variable to something new based on its previous value.
//x=(x+mean)/2;
  y=(y+mean)/2;
  z=(z+mean)/2;
---

**3)** (_20%_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge (relative to some origin);
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.
// var area = (r-l)*(b-t);

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.
// (b-t)>(r-l);

**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)
// var x = (r-l);
   var y = (b-t);
   var circ = (Math.min(x,y)) * 3.14159;

**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.
// var x = (r-l);
   var y = (b-t); 
   var circ = (Math.max(x,y)) * 3.14159;

**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)
// var xMid = l + ((r - l) / 2);
   var yMid = t + ((b - t) / 2);
   var r2 = (xMid + r) / 2;
   var l2 = (l + xMid) / 2; 
   var t2 = (t + yMid) / 2;
   var b2 = (yMid + b) / 2;

---

**4)** (_25%_)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

* Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

* Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N===0 and the bottom-right has N===63.

**a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C.
// n = (r * 8) + c

**b)**  Given N, find R.  Write an expression for R which contains N.
// r = Math.floor(n / 8)

**c)**  Given N, find C.  Write an expression for C which contains N.
// c = n - (Math.floor(n / 8) * 8) 


**d)**  Assume the squares are colored black and white, with the upper-left square black.
Write an expression (or pair of conditional statements) to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N (or a subset of them, if you don't need all three).
// var evenBoth = (r + 2) % 2 === 0 && (n + 2) % 2 === 0; ### true if both row and number are even
   var oddBoth = (r + 2) % 2 !== 0 && (n + 2) % 2 !== 0; ### true if both row and number are odd
   for (var n=0; n<64; n++) {
     if (evenBoth || oddBoth) {
       color = black;   
     } else {
       color = white;
     }
   }
### the premise seems like it would work, but this doesn't seem like the right structure. I think there need to be some functions involved.
---

**5)** (_15%_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Assuming variables _n_ and _d_ are defined in advance (but you don't know their values), write a series of expressions to generate a string expressing the proper form of the fraction _n/d_.  For example, when _n===7_ and _d===4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.

a) Solve it first by making use of a function called _Math.floor_.
// var proper = "";
   var properNum = n%d;
   proper += Math.floor(n / d);
   proper += " " + properNum + "/" + d;

b) Now solve it without calling any functions, using merely operators.  (Hint: you'll need at least the modulo operator _%_.)
// not sure how to rid myself of the numbers to the right of the decimal point without Math.floor() or Math.trunc()