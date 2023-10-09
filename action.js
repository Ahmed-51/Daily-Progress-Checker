let totalday = 31;


function calculate(){

  let day = document.getElementById('inp1').value;
  let score = document.getElementById('inp2').value;

  if(day>totalday) day=totalday;
  if(score>10) score=10;

  let tp = (day-1)*10;
  let start = ((day-1)*10)+(10-score);
  let end  = day*10;

  let x = document.getElementsByClassName("secondary");

  for(let i= tp; i<end;i++){
    x[i].style.backgroundColor = "#6930C3";
    if(i!=tp) x[i].style.borderTop = "1px solid black";
  }

  for(let i= start; i<end;i++){
    x[i].style.backgroundColor = "orange";
    if(i!=start) x[i].style.borderTop = "1px solid orange";
  }


  let var1 = "Day" + day;
  localStorage.setItem(var1, score);
}






function justLoaded(){

    let x = document.getElementsByClassName("secondary");

    for(let i=1; i<=totalday; i++){

      let var1 = "Day" + i;
      let score = parseInt(localStorage.getItem(var1));

      let start = ((i-1)*10)+(10-score);
      let end  = i*10;

      for(let j= start; j<end;j++){
        x[j].style.backgroundColor = "orange";
        if(j!=start) x[j].style.borderTop = "1px solid orange";
      }
    }
}




function reset(){
  for(let i=1;i<=totalday;i++){
    let var1 = "Day" + i;
    localStorage.setItem(var1, 0);
  }
}



// end of script
