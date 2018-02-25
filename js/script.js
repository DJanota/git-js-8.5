+var a = 0,
+    h = 0;
+a = prompt('Triangle base');
+h = prompt('Triangle height');
+if (a<=0 || h<=0 || isNaN(a) || isNaN(h)) {
+    console.log('Incorrect data');
+} else {
+    var triangleArea = a*h/2;
+    console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);  
+} 