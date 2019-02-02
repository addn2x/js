// Tuples
// tuple definition - 
var address = ["my streeet", 3];
// enum 
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
;
var myColor = Color.Blue;
console.log(myColor);
