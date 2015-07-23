1a.  "1" == 1; true, same value
1b.  "1" === 1; false, dif types
1c.  x == 'x'; undefined, x isn't determined
1d.  x == (x+''); true, x + '' is same as x
1e.  '' == ' '; false, one has value, other doesn't
1f.  x = true; true, assigning value
1g.  var x; x == 'undefined'; false, undefined not a true value
1h.  '9' < '10'; false, string not less than another string
1i.  typeof x + 1 === "number"; false, undefined1 not identical to number
1j.  typeof x % 2 === "number"; false, NaN not identical to number
1k.	 typeof (x % 2) === "number"; false, NaN not identical
1l.  x++ == ++x; false
1m.  ++x == x++; false
1n.  "1" + x == 1 + x; false, "1" + x becomes 1x, not the same
1o.  "0" + 1 == 1; true, 01 is the same as 1, 0 is just a placeholder
1p.  (typeof (x+1)) === (typeof x); false, if x is undefined, undefined is not identical to number
1q.  (x * 1 == x) || ((typeof x) != "number"); true, if x is undefined, undefined is not not a number
1r.  (x = (typeof (x + (typeof x)))) == x; false, x is not a number

2.
a.  (x + y + z) / 3
b.  x = (mean - x) / 2 + x
c.  y = (mean - y) / 2 + y
d.  z + (mean - z) / 2 + z

3.
a.  var l = -3;
	var r = 3;
	var t = 2;
	var b = -2;
	var a = (r - l) * (t - b)

b.  var l = -3;
	var r = 3;
	var t = 2;
	var b = -2;
	var taller;
	if ((t - b) < (r - l)) {
		taller = true;
	}
	else	{
		taller = false;
	}

c.  var l = -3;
	var r = 3;
	var t = 2;
	var b = -2;
	var circum;
	if ((t - b) < (r - l)) {
		circum = 2 * Math.PI * ((t - b) / 2);
	}
	else	{
		circum = 2 * Math.PI * ((r - l) / 2);
	}

d.  var l = -3;
	var r = 3;
	var t = 2;
	var b = -2;
	var area;
	if ((t - b) < (r - l)) {
		area = Math.PI * Math.pow(((r - l) / 2) , 2)
	}
	else	{
		area = Math.PI * Math.pow(((t - b) / 2) , 2)
	}

e.  var l = -3;
	var r = 3;
	var t = 2;
	var b = -2;
	var l2 = ((r - l) / 3) + l;
	var r2 = r - ((r - l) / 3);
	var t2 = t - ((t - b) / 3);
	var b2 = ((t - b) / 3) + b;

4.
a.	var r = 4;
	var c = 7;
	var n = (r * 8) + c;

b.	r = (n -c) / 8
c.	c = n - (r * 8)

d.	var r = 6;
	var c = 3;
	var n;
	var color;
	if (r + c) % 2 == 0 {
		color = "black"
	}
	else {
		color = "white"
	}

5.	
a.	var n = 9;
	var d = 5;
	var proper = Math.floor(n / d) + " " + n % d + "/" + d

b.	var n = 9
	var d = 5
	var noFunc = ((n / d) >> 0) + " " + n % d + "/" + d

























