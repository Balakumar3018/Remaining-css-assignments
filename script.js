const container=document.querySelector(".short");
const header=document.querySelector(".header-short")
container.addEventListener("scroll",function (){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        header.style.display="none"
    }
    else{
        // header.style.display="none"
        // console.log(document.body.scrollTop)
        // console.log(document.documentElement.scrollTop);
    }
})

// Code for snackbar
const baseline=document.querySelector(".baseline");
const snackbar=document.querySelector(".output");
const leading=document.querySelector(".leading");

baseline.addEventListener("click",function (){
    snackbar.style.margin="5px"
    snackbar.style.visibility="visible"
        setTimeout(()=>{
            snackbar.style.visibility=snackbar.style.visibility.replace("visible", "hidden"); 
        }, 3000);
})

leading.addEventListener("click",()=>{
    snackbar.style.margin="100px"
    snackbar.style.visibility="visible"
    setTimeout(()=>{
        snackbar.style.visibility=snackbar.style.visibility.replace("visible","hidden")
    },3000)
})


// Code for Tabs component 
 

//  for(let i=0;i<tabButton.length;i++){
//     tabButton[i].addEventListener("click",()=>{
//         tabButton.style.borderBottom="1px solid black";
//     })
//  }
const tabOneBtn=document.querySelector(".tab-one-button");
const tabTwoBtn=document.querySelector(".tab-two-button");
const tabThreeBtn=document.querySelector(".tab-three-button");

tabOneBtn.addEventListener("click",()=>{
    tabOneBtn.style.borderBottom="1px solid black";
    tabTwoBtn.style.borderBottom="";
    tabThreeBtn.style.borderBottom="";
    tabOneBtn.style.backgroundColor="violet"
    tabTwoBtn.style.backgroundColor="transparent"
    tabThreeBtn.style.backgroundColor="transparent"
})
tabTwoBtn.addEventListener("click",()=>{
    tabOneBtn.style.borderBottom="";
    tabTwoBtn.style.borderBottom="1px solid black";
    tabThreeBtn.style.borderBottom="";
    tabTwoBtn.style.backgroundColor="violet"
    tabOneBtn.style.backgroundColor="transparent"
    tabThreeBtn.style.backgroundColor="transparent"
})
tabThreeBtn.addEventListener("click",()=>{
    tabOneBtn.style.borderBottom="";
    tabTwoBtn.style.borderBottom="";
    tabThreeBtn.style.borderBottom="1px solid black";
    tabThreeBtn.style.backgroundColor="violet"
    tabOneBtn.style.backgroundColor="transparent"
    tabTwoBtn.style.backgroundColor="transparent";
    tabThreeBtn.style.opacity="1.0"
})

// Dialogbox code
const alertButton=document.querySelector(".open-dialogbox");
const dialogbox=document.querySelector(".output-dialogbox");
const action1=document.querySelector(".action1");
const action2=document.querySelector(".action2")

alertButton.addEventListener("click",()=>{
    dialogbox.style.visibility="visible"
})
action1.addEventListener("click",()=>{
    dialogbox.style.visibility="hidden"
})
action2.addEventListener("click",()=>{
    dialogbox.style.visibility="hidden";
})

