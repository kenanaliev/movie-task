let modal=document.querySelector(".modal");
let button=document.querySelector(".show")
let save=document.querySelector('.save')
let img=document.querySelector('.image')
let Name=document.querySelector('.name')
let imdb=document.querySelector('.imdb')
let category=document.querySelector('.category')
let rejisor=document.querySelector('.rejisor')
let tbody=document.querySelector('tbody')
button.addEventListener('click',()=>{
    modal.classList.toggle('active')
})


save.addEventListener('click',(e)=>{
    e.preventDefault()
    let tr=document.createElement('tr')
    let imageTd=document.createElement('td')
    let image=document.createElement('img')
    console.log("d",image);
    let nameTd=document.createElement('td')
    let imdbTd=document.createElement('td')
    let categoryTd=document.createElement('td')
    let rejisorTd=document.createElement('td')
    let settings=document.createElement('td')
    let del=document.createElement('button')
    let edit=document.createElement('button')
    
    image.src=img.value 
    imageTd.style.width= ('100px')
    imageTd.append(image)
    imdbTd.textContent=imdb.value
    nameTd.textContent=Name.value
    categoryTd.textContent=category.value
    rejisorTd.textContent=rejisor.value
    del.textContent="del"
    edit.textContent="edit"

    settings.append(edit,del)
    tr.append(imageTd,nameTd,imdbTd,categoryTd,rejisorTd,settings)
    tbody.append(tr)


   del.addEventListener('click',()=>{
    del.parentElement.parentElement.remove()
   })
})











