function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelectorAll('div')[3]
}

function increaseRankBy(n){
  const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML , 10) + n
  }
  
}

function deepestChild(){
  var deep = document.getElementById("grand-node").querySelectorAll("div")
  
  return deep[deep.length-1]
  
  
  
}
