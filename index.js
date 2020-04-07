function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelectorAll('Div')
}

function increaseRankBy(n){
  const ranks = document.getElemebtById('ranked-list').querySelectorAll('li')
  
  for (let i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = rank[i].parseInt + num
  }
  
}

function deepestChild(){
  
}
