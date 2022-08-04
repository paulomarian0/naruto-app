import React, { useEffect, useState } from 'react';
import './styles.css';

type Repository = {
  info: {
    Sexo: string,
    Idade: string
  }
  name: string,
  images:string
}

function App() {
  const [repositories, setRepositories] = useState<Repository[]>([])

useEffect(() =>{
  fetch('https://naruto-api.herokuapp.com/api/v1/characters')
  .then(response => response.json())
  .then(data => {
    setRepositories(data)
  })
})

  return (
    <div className="App">
      <div className='xx'>
        aaaa
      {repositories.map(repo => {
        return(
          <div key={repo.name} className="col">
          <div className="card">
              <div>
                  <p></p>
                  <strong className="name-strong">{repo.name}</strong>
              </div>
              <div className="status">{repo.info.Sexo} - {repo.info.Idade}</div>
              <br />
              <img src={repo.images[0]} alt={repo.images[0]} className="image" />
              <br />
              <br />
              <br />

              <div />
          </div>
      </div>

)
})}


</div>

    </div>
  );
}

export default App;
