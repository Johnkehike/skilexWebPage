// import { myData  } from "./data.js";

function courses(myData){
    let unlimitedBody  = document.getElementById('unlimited-body');
    unlimitedBody.innerHTML = '';

    myData.forEach((item, index) => {
        let box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute('id','box');
        box.setAttribute('tag',`${item.tag}`);

        let displayBox = document.createElement('div');
        displayBox.classList.add('display');
        displayBox.setAttribute('id','display');
        displayBox.style.height = `${item.height}rem`;
        console.log(item.height);
        
        displayBox.style.backgroundColor = `${item.color}`;

        let texts = document.createElement('div');
        texts.classList.add('text');
        texts.setAttribute('id','text')

        let itemTitle = document.createElement('h4');
        itemTitle.textContent = `${item.title}`;

        let itemDuration = document.createElement('p');
        itemDuration.textContent = `${item.duration}`;

        //appends
        texts.append(itemTitle, itemDuration);
        box.append(displayBox, texts);
        unlimitedBody.appendChild(box);

    });




}

export { courses };