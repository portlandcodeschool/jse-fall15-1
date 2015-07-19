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

true - "1" is kind of like 1

**b)** `"1" === 1`

false - the string "1" is not exactly the same as the number 1

**c)** `x == 'x'`

false, unless the value of _x_ is 'x'; 'x' will stay 'x' because it is a string; the value of _x_ will not be inserted (e.g. 'banana' == 'x' is false)

**d)** `x == (x+'')`

true, unless the value of _x_ is a boolean value - if _x_ is a number, like 1, then this equates to 1 == "1" and the number one is kind of like the string '1'.  If _x_ is a string, then both sides would be exactly alike (e.g. "banana" == "banana").  If _x_ is a boolean value, then you would get something like
true == "true" and the boolean value of true is not kind of like the string "true".

**e)** `'' == ' '`

false - I had initially thought this would be true because they are both strings but I guess the left side is just empty while the right side is a string....not completely confident on this one.

**f)** `x = true`

true? - I mean, this is just assigning x to true so it would be true.

**g)** `var x; x == 'undefined'`

false - the value of _x_ is undefined (not a string) and  'undefined' is a string.  Since undefined is not really anything, it cannot be kind of like a string.

**h)** `'9'<'10'`

false - I don't believe you can numerically compare two strings and have one be bigger or smaller than the other.

**i)** `typeof x + 1 === "number"`

false - the left side will convert the 1 to a string no matter what _x_ is (number, string, boolean) because the typeof command prints out a string.  So "number", "string" or "boolean" will be concatenated with "1" that results in something like "number1" and this is NOT exactly the same as "number".

**j)** `typeof x % 2 === "number"`

false - the typeof command prints out a string and you cannot divide a string by a number and end up with a remainder.  Therefore, the left side will be NaN no matter what _x_ is which is not exactly like "number".

**k)** `typeof (x % 2) === "number"`

true - I almost forgot that the type of NaN is "number" so it doesn't matter what type of variable _x_ is because a number will result in a "number" and a string or boolean will result in NaN which will make the left side "number" since its type is a number.

**l)** `x++ == ++x`

false - if _x_ is a number, the left side will take that number and make it positive but the right side will add another _x_ value to it so these numbers wouldn't be sort of alike.  If it is a string, both the left and right sides will be NaN when it tries to convert the string to a positive or increment it.  Apparently, booleans are converted to numbers (0 for false, 1 for true) and then act as numbers.

**m)** `++x == x++`

true for numbers and booleans (booleans are converted to their number equivalent) and false for string.  For numbers and booleans, the number on the left will increment, this number is transferred to the right side and converts it to a positive...I think.

**n)** `"1"+x == 1+x`

false for numbers and booleans, true for strings.  If _x_ is a number, like 1, it will get converted to a string on the left side since that is easiest and get concatenated onto "1" (e.g. "11").  The right side will actually add the number of _x_ to 1 (e.g. 2) and "11" and 2 are not kind of alike.  If _x_ is a string, the "1" will get concatenated to whatever the string is (e.g. "1banana") on the left side and the number 1 on the right side will get converted to a string because that is easiest which will also result in a concatenation of "1" and the string (e.g. "1banana").  If _x_ is a boolean, the boolean will get converted to a string on the left side because that is easier than converting a string to a boolean (or number) so the "1" will get concatenated to "true" or "false".  On the right side, it will be easiest to convert the boolean to a number which will result in a number on the right side, which will not be kind of like the string on the left.

**o)** `"0"+1 == 1`

true - the 1 on the left will get converted to a string because that is easier than converting the string to a number which will result in "01".  I can't assume "01" is much different than "1" which is kind of like 1 which would make this true.

**p)** `(typeof (x+1))===(typeof x)`

true for numbers and strings but false for booleans.  When _x_ is a boolean value and you try to add a number to it, it is converted to a number which would make the left side of this "number" but the right side would be "boolean" because the value of _x_ wasn't permanently changed to a number.

**q)** `(x*1 == x) || ((typeof x) != "number")`

true - Since this is an or operator, this will be true for all type of variable because the left side will be true for numbers and booleans (and therefore not have to evaluate the right side) and the right side will be true for strings.

**r)** `(x=(typeof (x+(typeof x))))==x`

true - regardless of the variable type, _x_ is being re-assigned on the left side to whatever the equation results in (in this case, "string") and then called on the right side so they will always be equal since the computer only does one thing at a time and moves left to right.

_All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes._

 **2)** (_10%_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.

`var mean = (x+y+z)/3`

**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward the mean of the three.
That is, reset the value of each variable to something new based on its previous value.

```
x = x - ( x - mean )/2
y = y - ( y - mean )/2
z = z - ( z - mean )/2
```

**3)** (_20%_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge (relative to some origin);
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.

`( r - l ) * ( t - b )`

or

```
var width = r - l
var height = t - b
var area = width * height
```

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.

```
if (height > width) {
  true;
} else {
  false;
}
```

**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)

```
if ( width <= height ) {
  circumference = width * Math.PI;
} else {
  circumference = height * Math.PI;
}
```

**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.

Knowing that the area of a circle is (radius^2) * Pi:

```
var radiusSquared = Math.pow(width/2, 2) + Math.pow(height/2, 2)
var smallestCircleArea = radiusSquared * Math.PI
```

**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)

```
var height = t - b
var width = r - l
var new_t = t - height/3
var new_b = b + height/3
var new_r = r - width/3
var new_l = l + width/3
```

**4)** (_25%_)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

* Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

* Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N===0 and the bottom-right has N===63.

**a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C.

`N = ( R * 7 ) + ( R + C )`

**b)**  Given N, find R.  Write an expression for R which contains N.

`R = ( N - 8 ) % 8`

**c)**  Given N, find C.  Write an expression for C which contains N.

`C = N % 8`

**d)**  Assume the squares are colored black and white, with the upper-left square black.
Write an expression (or pair of conditional statements) to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N (or a subset of them, if you don't need all three).

```
if ( N % 2 === 0 ) {
  color = 'black';
} else {
  color = 'white';
}
```

**5)** (_15%_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Assuming variables _n_ and _d_ are defined in advance (but you don't know their values), write a series of expressions to generate a string expressing the proper form of the fraction _n/d_.  For example, when _n===7_ and _d===4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.

a) Solve it first by making use of a function called _Math.floor_.

`Math.floor(n/d) + " " + n % d + "/" + d`

b) Now solve it without calling any functions, using merely operators.  (Hint: you'll need at least the modulo operator _%_.)

`(((d - ( n % d )) + n) / d ) - 1 + " " + n % d + "/" + d`

I feel like there is an easier way to do this....but this is what I came up with.
