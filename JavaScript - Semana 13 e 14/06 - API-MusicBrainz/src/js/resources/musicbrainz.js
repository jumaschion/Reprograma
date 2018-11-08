import axios from 'axios'


const musicbrainz =  document.getElementById('input')

function musicbrainz_artists_search () {
    axios.get('http://musicbrainz.org/ws/2/artist/?query=nirvana&fmt=json')
  .then(function (response) {
      input.addEventListener("submit", function(){
          input.value.innerHTML 


    
      })
  
    


    console.log('sucesso',response.data);
  })
  .catch(function (error) {
    console.log('error',error);
  });
}

export default musicbrainz_artists_search
