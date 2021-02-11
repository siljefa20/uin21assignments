
window.onload = init();

var data;

var mytodos;

var completedButtons;

function init(){
    // definere output hvor vi vil ha kortene
    mytodos = document.getElementById('mytodos');
    // sette click event på add button
    document.querySelector('#btnadd').addEventListener("click", addCard);
    completedButtons = [];
    // hente data
    getCards();
    //loope data og generere opp html
    for(var i = 0; i < data.length; i++){
        var title = data[i].title;
        var text = data[i].text;
        // 
        createCard(title, text, i);
    }
    
}

function getCards(){
    //Hardkodet data. denne kommer vel til vanlig fra f.eks et api
    data = [
        {   title: 'Vaske opp',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione suscipit fuga...' },
        {   title: 'Lage smoothie',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione suscipit fuga...'},
        {   title: 'Planlegge fest',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione suscipit fuga...'},
        {   title: 'Kjøpe nye sko',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione suscipit fuga...'},
        {   title: 'Mate katten',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione suscipit fuga...'},
        {   title: 'Online salsakurs',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione suscipit fuga...'},
    ];
}

function addCard(){
    var title = document.getElementById('title').value;
    var text = document.getElementById('desctxt').value;
    data.push({title:`${title}`, text:`${text}`});
    updateData();
}

function createCard(title, text){
    //bytte ut mellomrom med - for å lage en id !ikke unik!->legge til sjekk?
    var id = title.toLowerCase().replace(/\s/g,'-');
    mytodos.innerHTML +=  `                   
        <article class="todocards">
        <h2 id="dum">${title}</h2>
        <p>${text}</p>
        <button type="button" class="btncompleted" id="${id}">Completed</button>
        </article>
        `;
    console.log(id);
    //completedButtons.push({btnid: id, cardtitle: title});
    var btn = document.querySelector('#dum');
    btn.style = "color:purple";
    btn.onclick = function() {
            //kode for å ta bort kort
    console.log('var i deleted');
    for(var i = 0; i < data.length; i++){
        if(data[i].text === text && data[i].title === title){
            data.splice(i,1);
        }
    }
    updateData();
    };
}

function updateData (){
    mytodos.innerHTML = '';
    for(var i = 0; i < data.length; i++){
        var title = data[i].title;
        var text = data[i].text;
        // 
        createCard(title, text);
    } 
}

function deleteCard(ti, te){
    //kode for å ta bort kort
    console.log('var i deleted');
    for(var i = 0; i < data.length; i++){
        if(data[i].text === te && data[i].title === ti){
            data.splice(i,1);
        }
    }
    updateData();
}
function k(){
    console.log('hey');
}