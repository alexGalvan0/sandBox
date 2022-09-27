const getDataBtn = document.getElementById('getDataBtn');
const list = document.getElementById('list');

async function getData(){
    for(let i=1; i<=826; i++){
        let response = axios.get(`https://rickandmortyapi.com/api/character/${i}`)
        let imgPath = await response
        let image = document.createElement('img')

       let listImage =  list.appendChild(image)
       listImage.src = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`
        
    }
}  
getData()