
document.getElementById("operation").addEventListener("change", e => {

  if (document.getElementById("operation").value == "Logo Insertion") {
    console.log(document.getElementById("operation").value);
    $("#third").show();
    $("#padding").show();
    document.getElementById("topLabel").innerHTML = "Segment Start: "
    document.getElementById("top").setAttribute("class","segmentStart");
    document.getElementById("bottomLabel").innerHTML = "Logo In: ";
    document.getElementById("bottom").setAttribute("class","logoIn");
  }
  else if (document.getElementById("operation").value == "Addition") {
   $("#third").hide();
   $("#padding").hide();
   document.getElementById("topLabel").innerHTML = "Original: "
   document.getElementById("top").setAttribute("class","original");
   document.getElementById("bottomLabel").innerHTML = "Addend: ";
   document.getElementById("bottom").setAttribute("class","addend");
  }
  else if (document.getElementById("operation").value == "Subtraction") {
   $("#third").hide();
   $("#padding").hide();
   document.getElementById("topLabel").innerHTML = "Original: "
   document.getElementById("top").setAttribute("class","original");
   document.getElementById("bottomLabel").innerHTML = "Minuend: ";
   document.getElementById("bottom").setAttribute("class","minuend");
  }
  else if (document.getElementById("operation").value == "Duration") {
   $("#third").hide();
   $("#padding").hide();
   document.getElementById("topLabel").innerHTML = "Start: "
   document.getElementById("top").setAttribute("class","start");
   document.getElementById("bottomLabel").innerHTML = "End: ";
   document.getElementById("bottom").setAttribute("class","end");
  }
});
function flagSubmit(){
    const flag = document.getElementById("operation").value;
    let end = document.getElementById("end").value;
    let start = document.getElementById("start").value;
    let third = document.getElementById("thirdInput").value;
    let topTimecode = new DropFrame(Number(start.slice(9,11)), Number(start.slice(6,8)), Number(start.slice(3,5)), Number(start.slice(0,2)));
    topTimecode.display();
    let bottomTimecode = new DropFrame(Number(end.slice(9,11)), Number(end.slice(6,8)), Number(end.slice(3,5)), Number(end.slice(0,2)));
    bottomTimecode.display();
    let thirdTimecode = new DropFrame(Number(third.slice(9,11)), Number(third.slice(6,8)), Number(third.slice(3,5)), Number(third.slice(0,2))); 
    thirdTimecode.display();
    console.log(flag);
  
    if (flag == "Duration"){
    if (topTimecode.duration(topTimecode, bottomTimecode) == undefined) {
        return;
    }
    var resultant = topTimecode.duration(topTimecode, bottomTimecode);
    console.log(resultant);
    document.getElementById("result").innerHTML = "Duration: " + resultant.string();
  }
    if (flag == "Addition"){
    var resultant = topTimecode.add(bottomTimecode);
    console.log(resultant);
    document.getElementById("result").innerHTML = "Result: " + resultant.string();    
  }
    if (flag == "Subtraction"){
      if (topTimecode.subtract(bottomTimecode) == undefined) {
        return;
      }
      var resultant = topTimecode.subtract(bottomTimecode);
      console.log(resultant);
      document.getElementById("result").innerHTML = "Result: " + resultant.string();
    }
    if (flag == "Logo Insertion"){
      // SOP cologo + transition
      var tenSeconds = new DropFrame(0,12,0,0);
      var logoStart = thirdTimecode.duration(topTimecode, bottomTimecode);
      var coLogo = logoStart.subtract(tenSeconds);
      var logoDuration =thirdTimecode.duration(bottomTimecode, thirdTimecode);
      document.getElementById("result").innerHTML = "Cologo: " + coLogo.string() + "   Duration: 00:00:10:00<p></p>" + "Logo: " + logoStart.string() + " Duration: " + logoDuration.string();

    }
  
   
}