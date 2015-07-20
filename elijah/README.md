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
    true: js will convert right hand side to string

**b)** `"1" === 1`
    false: strict equal does no type conversion

**c)** `x == 'x'`
    false: if x is set to anything other than 'x'

**d)** `x == (x+'')`
    false if x is undefined: evaluates `x+''` to string 'undefined'
    true if x is set: ignores the empty string

**e)** `'' == ' '`
    false: empty string is 'falsey'

**f)** `x = true`
    true: sets the value of x to true

**g)** `var x; x == 'undefined'`
    false: x is primitive undefined, right side is a string

**h)** `'9'<'10'`
    false: comparison of strings is done character by character

**i)** `typeof x + 1 === "number"`
    false: evaluates `typeof x` as 'undefined', then adds 1 as a string making
    'undefined1'

**j)** `typeof x % 2 === "number"`
    false: evaluates `typeof x` as 'undefined', 'undefined'%2 is NaN

**k)** `typeof (x % 2) === "number"`
    true: evaluates `x%2` as NaN, typeof NaN is 'number'

**l)** `x++ == ++x`
    false: either side returns NaN, NaN != NaN

**m)** `++x == x++`
    false: either side returns NaN, NaN != NaN

**n)** `"1"+x == 1+x`
    false: type coersion makes left side "1undefined". right side is NaN

**o)** `"0"+1 == 1`
    true: `==` operator does type conversion before comparison

**p)** `(typeof (x+1))===(typeof x)`
    false if x is undefined: evaluates `x+1` as NaN, tpeof returns 'number'.
    `typeof x` returns 'undefined'
    true if x is number: both sides will return 'number'

**q)** `(x*1 == x) || ((typeof x) != "number")`
    true: value of x does not matter. if `(x*1 == x)` passes it will return
    true. If `(x*1 == x)` fails, `typeof x` will not return 'number'

**r)** `(x=(typeof (x+(typeof x))))==x`
    true: typeof typeof will return 'string' and set x to 'string'.

---

_All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes._

 **2)** (_10%_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.

    (x + y + z)/3

**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward the mean of the three.

    mean = ((x + y + z)/3);
    x = x - (x - mean)/2;
    y = y - (y - mean)/2;
    z = z - (z - mean)/2;

That is, reset the value of each variable to something new based on its previous value.

---

**3)** (_20%_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge (relative to some origin);
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.

    area = (r - l) * (b - t);

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.

    if ((r - l) < (b - t)) {
        return true;
    } else {
        return false;
    }

**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)

    var a = (r - l);
    var b = (b - t);
    if (a < b) {
        return 2*(Math.PI*(a/2));
    } else {
        return 2*(Math.PI*(b/2));
    }

**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.

    // get radius first
    r = Math.sqrt(Math.pow((r - l),2) + Math.pow((b - t),2))/2;
    // compute area
    area = Math.PI*Math.pow(r,2);

**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)

    width = (r - l);
    height = (b - t);

    cl = width/3;
    cr = width - (width/3);
    ct = height/3;
    cb = height - (height/3);

---

**4)** (_25%_)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

* Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

* Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N===0 and the bottom-right has N===63.

**a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C.
    
    var grid = 8; n = ((row * grid) + col);

**b)**  Given N, find R.  Write an expression for R which contains N.

    var grid = 8; r = Math.floor(n/grid);

**c)**  Given N, find C.  Write an expression for C which contains N.

    var grid = 8; c = (n%grid);

**d)**  Assume the squares are colored black and white, with the upper-left square black.
Write an expression (or pair of conditional statements) to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N (or a subset of them, if you don't need all three).

    var color;
    // assume n from previous
    // if divisible by 2
    if ((!(n%2)) && (!(r%2))) {
        color = "black";
    } else if ((!!(n%2)) &&  (!!(r%2))) {
        color = "black";
    } else {
        color = "white";
    }

---

**5)** (_15%_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Assuming variables _n_ and _d_ are defined in advance (but you don't know their values), write a series of expressions to generate a string expressing the proper form of the fraction _n/d_.  For example, when _n===7_ and _d===4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.

a) Solve it first by making use of a function called _Math.floor_.

    // for building strings
    var whole, rem;

    if (n > d) {
        whole = Math.floor(n/d);
        rem = n%d;
        console.log(whole + " " + rem + "/" + d);
    } else {
        console.log(n + "/" + d);
    }

b) Now solve it without calling any functions, using merely operators.  (Hint: you'll need at least the modulo operator _%_.)

    // for building strings
    var whole, rem;

    if (n > d) {
        // bitwise OR
        whole = (n/d) | 0;
        rem = n%d;
        console.log(whole + " " + rem + "/" + d);
    } else {
        console.log(n + "/" + d);
    }
