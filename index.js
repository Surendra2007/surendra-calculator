
let cur="";
  let input=document.querySelector("input");
  let ans=input.getAttribute("value");
  ans=cur;
  function number(num){
    cur+=num;
    ans=cur;
    input.setAttribute("value",ans)
  }
  function cleared(){
    cur='';
    input.setAttribute("value","")
  }
  function operator(str){
    cur +=str ;
    input.setAttribute("value",cur)
  }
  function deleted(){
    cur =cur.slice(0,-1) ;
    input.setAttribute("value",cur)
  }
  function Evaluate(){
    let cal_ans = eval(cur);
    input.setAttribute("value",cal_ans)
    cur=cal_ans;
  }
