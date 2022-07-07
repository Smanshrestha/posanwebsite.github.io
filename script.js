document.querySelector('.cross').style.display ='none';
document.querySelector('.menuCross').addEventListener("click", ()=>{
    document.querySelector('.navi').classList.toggle('naviLost');

    if(document.querySelector('.navi').classList.contains('naviLost'))
    {
        document.querySelector('.menu').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }

    else{
        setTimeout(() => {
            document.querySelector('.cross').style.display='inline'
            
        },300);
        document.querySelector('.menu').style.display='none'
    }
})