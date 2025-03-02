import { courses } from "./courses.js";

function search(myData){
    let buttons = document.querySelectorAll('.a-item');
    let firstButton = document.getElementById('first-a-item');

    firstButton.addEventListener('click', () => {
        firstButton.classList.remove('a-item');
        firstButton.classList.add('selected-item');
        buttons.forEach((item) => {
            item.classList.remove('selected-item');
            item.classList.add('a-item');
        });
        courses(myData);
    })
    //filter
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // e.preventDefault();
            const subText = button.getAttribute('data-filter');
            

            if (subText === 'all') {
                courses(myData);
                
                
            }else{
                const itemsFiltered = myData.filter(item => item.tag === subText);
                courses(itemsFiltered);
                
                firstButton.classList.remove('selected-item');
                firstButton.classList.add('a-item');
                buttons.forEach((item) => {
                    item.classList.remove('selected-item');
                    item.classList.add('a-item');
                    button.classList.remove('a-item');
                    button.classList.add('selected-item');
                    
                });
                
                
            }
        });
    })


}

export { search };
