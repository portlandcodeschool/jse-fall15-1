/* Section 1
a) True -- == is not exact and JS will auto convert "1" to a number.

b) False -- === is exact, the values must match in type and value.

c) True -- for the same reason "a" was true, both value and type are not checked, however it does not actually return a value.

d) False -- the right side would be "undefined" and x!== undefined

e) False -- empty string is "undefined" and the right side is a string equal to a space.

f) True -- if x has a value of a string or a number, it is truthy, False if x has a value of Nan, empty string, or undefined.

g) True -- x could equal undefined if it's value is ' '

h) False -- string 9 and string 10 cannot be evaluated like numbers

i) False -- typeof x will return a value, adding 1 to that will not ever return just "number"

j) False -- same issue as "i" ^

k) True -- now the typeof is on the expression (x % 2), JS will assume x is a number because of what follows it.

l) False -- the right side would be one more than the left side.

m) True -- the left side would not have returned the + 1 yet.

n) False -- string 1 added to x will not equal number 1 added to x. If x is a number it might convert, but if it is anything else, it would concatonate on the left and not on the right.

o) True -- with this many numbers in the equation, JS will auto convert the string '0' to a 0.

p) True/False -- if x is a number it will be fine, if x is a string, the left would return NaN

q) True -- if x = 0, or infinity, or a string, this would be true

r) False/True -- x would end up undefined, though undefined could equal x?
*/

// Section 2

//a)
average = (x + y + z)/3

//b)
newX = ((average - x)/2) + x;
    newY = ((average - y)/2) + y;
    newZ = ((average - z)/2) + z;



// Section 3

//a)
area = (t-b) * (l-r);

//b)
if (t-b) > (l-r) {
  console.log (true);
} else {
  console.log (false);
};

//c)
var isTall = ((t-b) > (r-l));
var isWide = ((t-b) < (r-l));

if (isTall) {
  var diameter = (r-l);
} else if (isWide) {
  diameter = (t-b);
};

var circumference = (diameter * Math.PI);

console.log (circumference);

//d
var t = 7;
var b = 3;
var l = 2;
var r = 8;

var diameterSquared;
var diameter;

var topBottom = (t-b);
var leftRight = (r-l);

diameterSquared = Math.pow(leftRight, 2) + Math.pow(topBottom, 2);

diameter = Math.sqrt(diameterSquared);

console.log(diameter);

//e
var t = 60;
var b = 20;
var l = 10;
var r = 100;

var horizontal;
var vertical;

horizontal = ((r-l)/3);
vertical = ((t-b)/3);

var newLeft = (l + horizontal);
var newRight = (r - horizontal);
var newTop = (t - vertical);
var newBottom = (b + vertical);

console.log(newLeft, newRight, newTop, newBottom);

// Section 4

//a
n = (8 * r) + c;

//b
var r = (n - (n%8))/8

//c
var c = (n % 8);

//d
var r;
var n;
var evenRow = (r % 2 === 0);
var oddRow = (r % 2 !== 0);

var evenN = (n % 2 === 0);
var oddN = (n % 2 !== 0);

var color;

if (evenRow && evenN) {
    var color = 'black';
} else if (evenRow && oddN) {
    var color = 'white';
};

if (oddRow && oddN) {
    var color = 'black';
} else if (oddRow && evenN){
    var color = 'white';
};

console.log(color);

// Section 5

//a
var n;
var d;

var remainder = n % d;
var wholeNumber = Math.floor(n/d);

console.log(result);

//b
var n;
var d;
var remainder = n % d;
var wholeNumber = ((n - remainder)/d);

var result = wholeNumber + " " + remainder + '/' + d;

console.log(result);




