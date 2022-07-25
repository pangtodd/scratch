function backwards(word){
  backwardsWord=word.split("").reverse().join();
  return backwardsWord
}

function backWardsRecurse(word){
  if (word === ""){
    return "";
  } else {
    return backWardsRecurse(word.substring(1))+word[0]
  }
}

function tXd(num){
  let string ="";
    for(let i = 0; i < num; i++){
      console.log("time"+ i)
      string = string + "red green refactor "
    }
    return string;
}

function rgr(num){
  if (num<= 0){
    return
  } else {
    return rgr(num -1) + "red green refactor ";
  }
}

const rgr = (num) =>{
  let string = ""
  if (num<=0){
    return "";
  } else {
    string = string + "red green refactor ";
    return rgr(num -1) + string;
  }
}

function pre(sir) {
  return function(yourName) {
    return `${sir} ${yourName}`
  }
}

const doc = prefix("Doctor");

doc("Bobby Mc Bobby")