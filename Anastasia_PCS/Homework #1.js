//Homework #1

//(Due Monday 7/20)

//You need to turn in this homework by cloning this repo, making a new branch with your solutions, 
//pushing to github, and issuing a pull request. For details, follow the instructions here.//

//Please also read the learning objectives for this week.

//1) (30% of total time) Predict the output of each of the following expressions, and explain 
//the rules which determine that answer. (Hint: The rules for operator == are complicated, 
//but do your best!)

//If the output depends on the value or type of variable x, identify the conditions 
//(what x is) when the expression will output true (or false, if that's simpler). Assume the cases 
//are independent, and x is reset to an unknown value before each.

//Some of these are tricky! Don't trust your first instinct.//

a) "1" == 1	//TRUE - compares value only

b) "1" === 1 //FALSE - compares value & type

c) x == 'x' //TRUE - compares value only

d) x == (x+'') //TRUE - compares value only

e) '' == ' ' //FALSE - an empty string is "falsey" - Also, "undefined" == "string"

f) x = true //TRUE 

g) var x; x == 'undefined' //FALSE - x is not == to 'undefined'

h) '9'<'10' //FALSE - a string cannot be < or > another string

i) typeof x + 1 === "number" //FALSE - a Boolean is not a String

j) typeof x % 2 === "number" //FALSE - a NaN is not a String 

k) typeof (x % 2) === "number" //TRUE - x % 2 = "number" so "number" === "number"

l) x++ == ++x // FALSE - 10 != 11

m) ++x == x++ //TRUE - 11 = 11

n) "1"+x == 1+x //FALSE - string "1" is not the same as number 1

o) "0"+1 == 1 //TRUE - "0"+1 = 01 which is equal to the value 1

p) (typeof (x+1))===(typeof x) //TRUE because "number" === "number"

q) (x*1 == x) || ((typeof x) != "number") //TRUE - x! ==x = True, so there is no need to review the comparative value.

r) (x=(typeof (x+(typeof x))))==x //TRUE




//All of the following can be solved with ordinary expressions and global variables with primitive 
//values. You don't need functions, loops, or other topics beyond our first two classes.

//2) (10%)

//Assume variables x, y, and z are numbers.

//a) Write an expression for the mean (i.e. average) of x, y, and z.

(x+y+z)/3


//b) Write a series of expressions to adjust each of x, y, and z halfway toward the mean of the three. 
//That is, reset the value of each variable to something new based on its previous value.//

var average = (x+y+z/3);
newX=((average-x)/2) + x;
newY=((average-y)/2) + y;
newZ=((average-z)/2) + z;

//3) (20%)

//Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a 
//rectangle with four numeric variables:

l : horizontal position of left edge (relative to some origin);
r : horizontal position of right edge;
t : vertical position of top edge;
b : vertical position of bottom edge.

//a) Write an expression for the rectangle's area.
//var l = 5;
//var r = 5;
//var t = 3; 
//var b = 3;

var area = (t-b)*(l-r);
	//console.log(area); = 15


//b) Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.

if ((l-r)>(t-b)) {
	console.log (true);
}else{
	console.log (false);
};


//c) Write an expression for the circumference of the biggest circle which can fit inside the rectangle. 
//(Hint: you'll need logic similar to that in b.)

if ((t-b) > (r-l)) {
	var diameter = (r-1);
} else {
	diameter = (t-b);
}
var circumference = (diameter * Math.PI);
console.log(circumference); 

//or

var isTall = (t-b) > (r-l);
var isWide = (t-b) < (r-l);
if (isTall) {
	var diameter = (r-1);
}
else(isWide);{
	diameter = (t-b); 
}
var circumference = (diameter * Math.PI);
console.log(circumference); 

//d) Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) 
//the rectangle.

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

//e) Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 
//smaller rectangles, identical in shape but varying by position. Define four new variables describing the 
//centermost small rectangle. (Hint: one of the many solutions is very similar to the solution of 2b above.)

var t = 700;
var b = 300;
var l = 200; 
var r = 800;

var horizontal =  ((r-1)/3);
var vertical = ((t-b)/3);

 var newLeft = (1 + horizontal);
 var newRight = (1 - horizontal);
 var newBottom = (1 + vertical);
 var newTop = (1 - vertical);

console.log(newLeft, newRight, newBottom, newTop);

//4) (25%)

//Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

//Each square has integer coordinates (R,C) describing its row and column. Both values should be in the range 
//0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

//Each square has a unique integer number N from 0 to 63. These numbers run sequentially left-to-right 
//one row at a time, top to bottom. Therefore the upper-left square has N===0 and the bottom-right has 
//N===63.

//a) Given a particular R and C, find the corresponding N. That is, write an expression for variable 
//N containing variables R and C. 


var N = (8 * R) + C;


//EXAMPLES: 
//7,7 = 63
//6,6 = 54

//NOTE 0 - 63 means there are 64 spaces, so instead of multiplying by 7, I multiply by 8.

//b) Given N, find R. Write an expression for R which contains N.

var R = (N - (N % 8)) /8;

//c) Given N, find C. Write an expression for C which contains N.

var C = (N % 8);

//d) Assume the squares are colored black and white, with the upper-left square black. Write an 
//expression (or pair of conditional statements) to set a variable color to either 'black' or 'white'
//, describing the square identified by variables R,C, and N (or a subset of them, if you don't need 
//all three).

var evenRow = (r % 2 === 0);
var oddRow = (r% 2 !== 0);
var evenN = (n % 2 === 0);
var oddN = (n% 2 !== 0);
var color;

if (evenRow && evenN) {
	var color = 'black';
} else if (oddRow && oddN){
	var color = 'white';
}

if (oddRow && oddN) {
    var color = 'black';
}else if (evenRow && evenN){
    var color = 'white';
}


//5) (15%)

//Suppose you represent a fraction (n/d) with 2 integer variables: n for the numerator and d for 
//the denominator. If n is greater than d, the fraction is "improper", but it can be rewritten as 
//a proper fraction. For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

//Assuming variables n and d are defined in advance (but you don't know their values), write a series 
//of expressions to generate a string expressing the proper form of the fraction n/d. For example, 
//when n===7 and d===4, your resulting string should be "1 3/4". You may assume both n and d are positive 
//integers and n > d, but otherwise you should be able to handle any values of n and d.

//a) Solve it first by making use of a function called Math.floor.

var n;
var d;
var remainder = n % d;
var wholeNumber = Math.floor(n/d);
var result = wholeNumber + " " + remainder + '/' + d;


//b) Now solve it without calling any functions, using merely operators. (Hint: you'll need at least 
//the modulo operator %.)

var remainder = n % d;
var wholeNumber = ((n - remainder)/d);
var result = wholeNumber + " " + remainder + '/' + d;
console.log(result);

