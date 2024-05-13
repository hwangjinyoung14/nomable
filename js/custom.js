//nav
let $List = document.getElementById('list');
let listItems = $List.getElementsByTagName('li');
console.log($List, listItems); 

for(let i=0; i<listItems.length; i++){
  listItems[i].addEventListener('mouseenter', function(){
    let subMenu = this.querySelector('.sub_menu');
    let subMenu2 = this.querySelector('.line');
    if(subMenu){subMenu.style.display='block';}
    if(subMenu2){subMenu2.style.display='block';}
  });
  
  listItems[i].addEventListener('mouseleave', function(){
    let subMenu = this.querySelector('.sub_menu');
    let subMenu2 = this.querySelector('.line');
    if(subMenu){subMenu.style.display='none';}
    if(subMenu2){subMenu2.style.display='none';}
  });
}

//tab
let contentDiv = document.querySelectorAll('.content > div');
contentDiv.forEach(function(div){
  div.style.display = 'none';
})
document.getElementById('tabmenu1').style.display = 'block';

let titleLink = document.querySelectorAll('.title a');
titleLink.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    let tab = this.getAttribute('href')
    contentDiv.forEach(function(div){
      div.style.display='none';
    });
    document.querySelector(tab).style.display='block';
    titleLink.forEach(function(link){
      link.classList.remove('on')
    });
      this.classList.add('on');
  })
})