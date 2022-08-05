import React from "react";
import { useState, useEffect } from "react";

type Repository = {
  info: {
    Sexo: string,
    Idade: string,
    Estado: string,
    Times: string,
    Afiliação: string
  }
  name: string,
  images: string,
  page: string
}
export default function Characters(){

  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://naruto-api.herokuapp.com/api/v1/characters')
      .then(response => response.json())
      .then(data => {
        setRepositories(data)
      })
  }, [])

  return(
    <div className='row'>
    {repositories.map(repo => {
      return (
        <div key={repo.name}>
          <div className="box">
            <div className="status">
              <a href={repo.page} id="name">{repo.name}</a>
              <p>
                {repo.info.Sexo}
              </p>
              <p>
                Idade: {repo.info.Idade ? repo.info.Idade : "Desconhecida"}
              </p>
              <p>
                Afiliação: {repo.info.Afiliação}
              </p>
            </div>
            <img src={repo.images[0]} alt={repo.images[0]} className="image" />
            <div />
          </div>
        </div>
      )
    })}
  </div>
  )
}