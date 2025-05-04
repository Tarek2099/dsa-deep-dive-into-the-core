// What is Heron's formula? This formula credited to Heron of Alexandria
// Area = sqrt of s * (s-a) * (s-b) * (s-c);
// s= semi-parameter which is (a+b+c)/2
function getArea(a, b, c) {
    let s = (a + b+ c)/2;
    // Get the root of
    let sqr = (s * (s - a)*(s-b)*(s-c)) 
    let area = Math.sqrt(sqr)
    console.log(area)

}
getArea(2,1,6)