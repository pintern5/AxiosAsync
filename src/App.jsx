import { useState, useEffect } from 'react'
import axios from 'axios'

export const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://chess.sulla.hu/chess')
      setData(res.data)
    }
    fetchData()
  }, [])

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {data.map((player) => (
        <div key={player.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
          <img src={player.image_url} alt={player.name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
          <h3>{player.name}</h3>
          <p>Született: {player.birth_date}</p>
          <p>VB címek: {player.world_ch_won}</p>
          <a href={player.profile_url} target="_blank" rel="noreferrer">Profil</a>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
