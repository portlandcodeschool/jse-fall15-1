1a)	"1" == 1; 	true;  using == means equal to and will cast the 1 on the right side of the equation as a string
1b)	"1" === 1;  false;  using === means that the comparison includes not only equal value but equal type.  (here is string versus number)
1c)	 x == 'x';	false;  string 'x' is converted tonumber(x) which is different than the number x
1d)	 x == (x+''); true;  number is equal to that number + an empty string
1e)	'' == ' ';	false;  empty sting is always false but ' ' is a valid string
1f)	x = true;	true;	assignment variable can assign x = true
1g)	var x; x == 'undefined';	false;	undefined is equal to null but not a true value
1h)	'9'<'10'; false;	These both evaluate to a string so they both are equal
1i)	typeof x + 1 === "number";	false;	typeof x + 1 converts typeof x to a string with the type and adds 1 (e.g. 'number1') which is not = 'number'
1j)	typeof x % 2 === "number";	false;	typeof x % 2 = NaN which is not equal in value to the string 'number'
1k)	typeof (x % 2) === "number";	true;  typeof (x % 2) = 'number' which is equal to the string "number"
1l)	x++ == ++x;	false;  these are valid increment operators where one is post decrement and the second is pre-decrement which results in different values for x
1m)	++x == x++;	true;	the pre-increment and post increment values are not implemented until after x is compared to x
1n)	"1"+x == 1+x;	false; the left side evaluates to '1x' as a string whereas the right side evaluates to x+1. e.g. if x where 3 then left side = '13' and right = 4
1o)	"0"+1 == 1;	true;	the left evaluates to '01' which is converted to a number which makes the zero a placeholder and the value = 1 same as the right side
1p)	(typeof (x+1))===(typeof x);	true (if x is a number) false if x is string or undefined;  both sides evaluate to a 'number'
1q)	(x*1 == x) || ((typeof x) != "number");	false;	if either of the conditional ORs evaluate to something other than a number the equation is true(.  
	(x*1 == x) equals boolean true which is not equal to 'number'
1p)	(x=(typeof (x+(typeof x))))==x;	true;	evaluating the inner typeofs, we get x = stringwhich is == x

2a)
	var x; 
	var y; 
	var z; 
	var mean;
	mean = (x + y + z) / 3;  // Calculates the average (mean) value
	countlog(mean);

2b)
	var x; 
	var y; 
	var z; 
	var mean;
	mean = (x + y + z) / 3;  // Calculate mean of three variables
	x = (mean - x) / 2 + x; // Calculates new value of x to be halfway to mean
	y = (mean - y) / 2 + y; // Calculates new value of y to be halfway to mean
	z = (mean - z) / 2 + z; // Calculates new value of z to be halfway to mean
	
3a)
	var l; 
	var r;
	var t; 
	var b;
	var area;
	area = (r - l) * (t - b); // Calculates the are of rectangle (l, r, t, b)
	
3b)
	var l; 
	var r;
	var t; 
	var b;
	var shape;
	if ((r - l) < (t-b)) // Tests if width is less than height of rectangle
		shape = 'true'; // Width is less than height
	else 
		shape = 'false'; // Width is greater than height

3c)
	var l; 
	var r;
	var t; 
	var b;
	var circumference;
	var pi = 3.1415
	if ((r - l) > (t - b)) // Tests which has the greater value, width or height
		circumference = 2 * pi * (t - b)/2; // If width is greater, use height to calculate a circle to fit inside the rectangle
	else 
		circumference = 2 * pi * (r - l)/2; // If height is greater, use width to calculate a circle to fit inside the rectangle

3d)
	var l; 
	var r;
	var t; 
	var b;
	var area;
	var pi = 3.1415;
	if ((r - l) < (t - b)) // Tests which has the greater value, width or height
		area = pi * ((t - b) / 2) * ((t - b) / 2);  // If width is greater, use width to calculate a circle size to fit around entire rectangle
	else 
		area = pi * ((r - l) / 2) * ((r - l) / 2); // If width is less, use height to calculate a circle size to fit around entire rectangle
		
3e)
	var l; 
	var r;
	var t; 
	var b;
	var l2; 
	var r2;
	var t2; 
	var b2;
	l2 = ((r - l) / 3) + l;  // Returns the left coordinate
	r2 = r - ((r - l) / 3);  // Returns the right coordinate
	t2 = t - ((t - b) / 3);	 // Returns the top coordinate
	b2 = ((t - b) / 3) + b;  // Returns the bottom coordinate
	
4a)
	var R;
	var C;
	var N;
	N = (R * 8) + C; // Calculate Square num when Row num and Col num are known
	
4b)
	var R;
	var C;
	var N;
	R = (N - C) / 8; // Calculate Row num when Col num and Square num are known
	
4c)
	var R;  
	var C;
	var N;
	C = N - (R * 8); // Calculate Column number when Row num and Square num are known

4d)
	var R;  
	var C;
	var N;
	var W;
	var B;
	N = (R * 8) + C; // Calculate value of square number N
	if ((R + C) % 2) === 0; // Calculate if mod Row num + Col num  is zero then is black
		B = true;
	else
		W = true;

5a)
	var n;
	var d;
	// Calculates improper fraction and displays in format 'x n/d' where x is the rounded number of times d goes into n using Math.floor()
	var resultString = Math.Floor(n/d) + ' ' + Math.Floor(n) % Math.Floor(d) + '/' + d 
	
5b)
	var n;
	var d;
	var resultString;
	var whole;
	whole = (n / d) >> 0;
	// Calculates improper fraction and displays in format 'x n/d' where x is the rounded number of times d goes into n
	resultString = whole + ' ' + (n % d) + '/' + d 