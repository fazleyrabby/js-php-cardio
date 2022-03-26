// import { menu } from "./menu.js";

let menu = '[{"icon":"menu test","name":"menu test","href":"#"},{"icon":"menu1","href":"#","name":"menu1","children":[{"icon":"menu1sub","name":"menu1sub","href":"#href1sub","children":[{"icon":"menu1subsub","name":"menu1subsub","href":"#href1sub2"}]},{"icon":"menu1sub2","name":"menu1sub2","href":"#href1sub2"}]},{"icon":"menu2","href":"#","name":"menu2","children":[{"icon":"menu2sub","name":"menu2sub","href":"#href2sub1"}]},{"icon":"menu3","name":"menu3","href":"#"}]';

document.addEventListener("DOMContentLoaded", function(){
    const li = document.querySelectorAll('li.dropdown a');
    const btn = document.querySelector('.nav-btn');
    const nav = document.querySelector('ul.nav');
    
    btn.addEventListener('click', e=>{
        nav.classList.toggle('toggle');
    })
    
    
    li.forEach((each)=>{
        if (each.nextElementSibling !== null) {
            each.addEventListener('click', e=>{
                if (window.innerWidth < 768) {
                  e.target.parentElement.classList.toggle("active");  
                }
            })
        }
    })


    // nested menu with js

    let navParent = document.querySelector('nav');
    
    let menus = JSON.parse(menu);
    
    function iterateJsonMenu(menus, inital= true, key=''){
      // console.log(menus)
      const ul = document.createElement('ul');
      inital ? ul.classList.add('nav') : ''

      if(inital){
        navParent.appendChild(ul)
      }else{
        let position = document.querySelector(`[data-position="${key}"]`);
        if(position) position.appendChild(ul)
      }    

      menus.forEach((menu, key) => {
        const li = document.createElement('li');
        menu?.children ? li.classList.add('dropdown') : ''

        let randomStr = menu?.name.replace(/\s/g, '')+key;

        li.setAttribute('data-position', randomStr)
        ul.appendChild(li)

        const a = document.createElement('a');
        a.setAttribute('href', menu.href)
        a.textContent = menu.name
        li.appendChild(a)

        if(menu.children){
          iterateJsonMenu(menu.children, false, randomStr)
        }
        
      })  
    }
    iterateJsonMenu(menus)

    let allList = document.querySelectorAll('li[data-position]');
    
    if(allList.length){
      allList.forEach((each) => each.removeAttribute('data-position'))
    }

    }); 



