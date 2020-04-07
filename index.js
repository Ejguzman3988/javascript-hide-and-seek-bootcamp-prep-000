function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelectorAll('Div')[3]
}

function increaseRankBy(n){
  const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  ranks.parseInt;
  
  for (let i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = ranks[i].parseInt + n
  }
  
}

function deepestChild(){
  
}
