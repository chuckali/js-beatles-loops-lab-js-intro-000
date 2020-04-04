function theBeatlesPlay(musi,inst){
  var who  = [];
  for(let i=0; i<4; i++){
    who.push(`${musi[i]} plays ${inst[i]}`)
  }
  return who

}

function johnLennonFacts(facts){
var facts2 = []
  let i=0
  while(i<=facts.length+1){
    facts2.push(facts[i] + "!!!")
    i +=1
  } return facts2
}
