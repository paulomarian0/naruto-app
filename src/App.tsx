import React, { useEffect, useState } from 'react';
import './styles.css';

type Repository = {
  info: {
    Sexo: string,
    Idade: string,
    Estado: string,
    Times: string,
    Peso: string
  }
  name: string,
  images: string,
  page: string
}

function App() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://naruto-api.herokuapp.com/api/v1/characters')
      .then(response => response.json())
      .then(data => {
        setRepositories(data)
      })
  }, [])

  return (
    <div className="App">
      <div className='row'>
        {repositories.map(repo => {
          return (
            <div key={repo.name} className="col">
              <div className="card">
                <div>
                  <a href={repo.page} className="name-strong">{repo.name}</a>
                </div>
                <div className="status">
                  <p>
                    {repo.info.Sexo} - {repo.info.Idade ? repo.info.Idade : "Desconhecida"}
                  </p>
                </div>
                <img src={repo.images[0]} alt={repo.images[0]} className="image" />
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
