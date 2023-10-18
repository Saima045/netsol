let icon = document.querySelector('.icon');
let l1 = document.querySelector('.line1');
let l2 = document.querySelector('.line2');
let l3 = document.querySelector('.line3');
let menu = document.querySelector('.menu');
let over = document.querySelector('.overlay');
let lan = document.querySelector('.languages');



let list = document.querySelectorAll('.liMenubar')
let down=true;

icon.addEventListener('click', () => {
    if (down)
    {
       // up=true;
        down=false;
        icon.style.transform="rotate(180deg)"
    }
    else 
    {
      
        down=true;

        icon.style.transform="rotate(0deg)"
    }

    
  // icon.style.display background="red"
    lan.classList.toggle('show')
})

let menuOpen=false;
let menubtn = document.querySelector('.menubtn')


menu.addEventListener('click', () => {

    if (!menuOpen)
    {
        menubtn.innerHTML="CLOSE"
        menuOpen=true;
    }
    else
    {
      
        menubtn.innerHTML="MENU"
        menuOpen=false;

    }
    
    over.classList.toggle('show-overlay');
    l1.classList.toggle('l1_move')
    l3.classList.toggle('l3_move')
    l2.classList.toggle('l2_move')
    list.forEach((li, index) => {
        setTimeout(() => {
            li.classList.toggle('animate')
        }, 100 * index)
    })
})

console.log(list[0])
let backdrop=document.querySelector('.backimg')
let li1=list[0]
li1.addEventListener('mouseover',()=>{
   
   backdrop.style.content=`url("https://netsoltech.com/images/netsolVector.svg")`
   
})
let li2=list[1]
let subAbout=document.querySelector('.subMenu')
li2.addEventListener('mouseover',()=>{

   backdrop.style.content=`url("https://netsoltech.com/images/netsolVector.svg")`
   subAbout.style.display="block"

})
li2.addEventListener('mouseout',()=>{
   
    subAbout.style.display="none"
})

let li3=list[2]
let subProd=document.querySelector('.subProd')

li3.addEventListener('mouseover',()=>{
   
   backdrop.style.content=`url("https://netsoltech.com/images/ascentVector.svg")`
   subProd.style.display="block"
   
})

li3.addEventListener('mouseout',()=>{
   
    subProd.style.display="none"
})

let li4=list[3]
li4.addEventListener('mouseover',()=>{
   
   backdrop.style.content=`url("https://netsoltech.com/images/investorsVector.svg")`
   
})

let li5=list[4]
li5.addEventListener('mouseover',()=>{
   
   backdrop.style.content=`url("https://netsoltech.com/images/innovationVector.svg")`
   
})

let li6=list[5]
li6.addEventListener('mouseover',()=>{
   
   backdrop.style.content=`url("https://netsoltech.com/images/eventsVector.svg")`
   
})




