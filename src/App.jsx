
import { useEffect, useState } from 'react'
import './App.css'

const puzzles = [
  { name: 'Mickey Mouse',
     level: 1,
    image:"https://i.pinimg.com/736x/20/2e/17/202e1792071390d8d2b44e532940942a.jpg"
    },
  { name: 'Minnie Mouse', level: 1,
    image:"https://i.pinimg.com/originals/bd/7b/40/bd7b40cc5fee566db75c24934b4930cc.jpg"
  },
  { name: '', level: 1 ,
    image:"https://tse1.mm.bing.net/th/id/OIP.wkt5Ms4VAGMyCOcuUwoESAHaFj?r=0&w=1440&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  { name: 'Goofy', level: 1 ,
     image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/075e6179-193b-428b-9821-39443f487dcd/dah66lh-b19212de-ea6c-4a69-9efc-494d98fb6d0a.jpg/v1/fill/w_1024,h_1357,q_75,strp/goofy_by_robertbakerart_dah66lh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3NWU2MTc5LTE5M2ItNDI4Yi05ODIxLTM5NDQzZjQ4N2RjZFwvZGFoNjZsaC1iMTkyMTJkZS1lYTZjLTRhNjktOWVmYy00OTRkOThmYjZkMGEuanBnIiwiaGVpZ2h0IjoiPD0xMzU3Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvMDc1ZTYxNzktMTkzYi00MjhiLTk4MjEtMzk0NDNmNDg3ZGNkXC9yb2JlcnRiYWtlcmFydC00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.GDolqB2ouyl-_7J9kDc-4XUosQG2dpwlb8iE3CrzNp4"},
  { name: 'Daisy Duck', level: 1 , 
    image:"https://tse2.mm.bing.net/th/id/OIP.b391e1892Qzmxm42VnM5-wAAAA?r=0&w=300&h=300&rs=1&pid=ImgDetMain&o=7&rm=3"},
  { name: 'Cinderella', level: 2,
     image:"https://images.nightcafe.studio/galleries/mXzQkk2YjR94T0C4lDvR/a_whimsical_dreamlike_illustration_of--1--itln0.jpg" },
  { name: 'Belle', level: 2,
     image:"https://wallpapercave.com/wp/wp6420202.jpg" },
  { name: 'Ariel', level: 2,
     image:"https://media.craiyon.com/2025-07-24/vXTJAbDVTQCTfj5kQGgjqg.webp" },
  { name: 'Rapunzel', level: 2 ,
     image:"https://th.bing.com/th/id/R.de7fc2bfc3a9ba3416018eed4216711c?rik=xePj2XBPESnQBQ&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f34100000%2fRapunzel-at-Lake-princess-rapunzel-from-tangled-34119103-1172-900.png&ehk=8gUjXvvVJxb8Xe6%2fVCPvWgdanzefhLX5anXCsjXvPZ0%3d&risl=1&pid=ImgRaw&r=0"},
  { name: 'Snow White', level: 2 , 
    image:"https://i.pinimg.com/originals/d7/28/ab/d728ab9ec69852fea03d28efb76200d2.jpg"},
  { name: 'Elsa', level: 3 ,
     image:"https://tse2.mm.bing.net/th/id/OIP.jZ3VretBN3SVIqn3khm3xwHaNK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
  { name: 'Anna', level: 3 ,
     image:"https://tse4.mm.bing.net/th/id/OIP.p2fVTj0hBP73D-zJeGsVPwHaNK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
  { name: 'Olaf', level: 3 , 
    image:"https://tse4.mm.bing.net/th/id/OIP.RTmbCUaDtMFiHt89y-kJvwHaGl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
  { name: 'Moana', level: 3,
     image:"https://getwallpapers.com/wallpaper/full/6/b/5/688211-moana-movie-wallpapers-1080x1920-large-resolution.jpg" },
  { name: 'Maui', level: 3,
     image:"https://wallpaperaccess.com/full/7026767.jpg" },
  { name: 'Woody', level: 4,
     image:"https://tse2.mm.bing.net/th/id/OIP.UolprRXzXyoqVX5DtRQC0wHaNK?r=0&w=1080&h=1920&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: 'Buzz Lightyear', level: 4 , image:"https://tse1.mm.bing.net/th/id/OIP.tclk9Oyv0VL3Quw0enj1MgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
  { name: 'Stitch', level: 4 , image:"https://tse3.mm.bing.net/th/id/OIP.Q_Ok-4Hm5fQtukgZ2IoSjwHaJh?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"},
  { name: 'Simba', level: 4 , image:"https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=2048,f=jpeg,q=85/posts/images/701375422499371634/8535a950-d101-494a-9b96-b79c89ef877f.png"},
  { name: 'Nala', level: 4 , image:"https://static1.srcdn.com/wordpress/wp-content/uploads/2019/02/nala.png"},
  { name: 'Tinker Bell', level: 5 , image:"https://i.pinimg.com/originals/16/82/ac/1682accdf1ac012a6ad6e9fc033384ed.jpg"},
  { name: 'Dumbo', level: 5, image:"https://tse2.mm.bing.net/th/id/OIP.mBQHuD6Ci-8grgtAwn2DCQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: 'Bambi', level: 5, image:"https://www.kolpaper.com/wp-content/uploads/2021/09/hd-bambi-wallpaper-kolpaper-8.jpg" },
  { name: 'Winnie the Pooh', level: 5, image:"https://wallpapers.com/images/hd/cute-winnie-the-pooh-lying-in-grass-9mbgil4aetm1gnkf.jpg" },
  { name: 'Baymax', level: 5, image:"https://tse3.mm.bing.net/th/id/OIP.o0j8b6s8ijPvZ2Is1L7ytAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" }
].map((puzzle, index) => ({
  ...puzzle,
  id: index
}))

function shufflePieces() {
  const pieces = Array.from({ length: 9 }, (_, index) => index)

  for (let i = pieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pieces[i], pieces[j]] = [pieces[j], pieces[i]]
  }

  // Avoid starting with an already completed puzzle.
  if (pieces.every((piece, index) => piece === index)) {
    ;[pieces[0], pieces[1]] = [pieces[1], pieces[0]]
  }

  return pieces
}

function App() {
  const [puzzleIndex, setPuzzleIndex] = useState(0)
  const [pieces, setPieces] = useState(shufflePieces)
  const [score, setScore] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [playerName, setPlayerName] = useState('')
  const [gameStatus, setGameStatus] = useState('playing')
  const [draggedIndex, setDraggedIndex] = useState(null)
  const [message, setMessage] = useState('')
  const [leaderboard, setLeaderboard] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem('disneyPuzzleLeaderboard') || '[]'
      )
    } catch {
      return []
    }
  })

  const currentPuzzle = puzzles[puzzleIndex]
  const level = Math.floor(puzzleIndex / 5) + 1
  const puzzleInLevel = (puzzleIndex % 5) + 1
  const solved = pieces.every((piece, index) => piece === index)

  useEffect(() => {
    if (gameStatus !== 'playing') return

    const timer = setInterval(() => {
      setSeconds(old => old + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [gameStatus])

  function movePiece(targetIndex) {
    if (draggedIndex === null || draggedIndex === targetIndex) return

    const newPieces = [...pieces]

    ;[newPieces[draggedIndex], newPieces[targetIndex]] = [
      newPieces[targetIndex],
      newPieces[draggedIndex]
    ]

    setPieces(newPieces)
    setDraggedIndex(null)

    if (newPieces.every((piece, index) => piece === index)) {
      setScore(old => old + 100)
      setMessage('🎉 Amazing! Puzzle completed! +100 points')
    }
  }

  function nextPuzzle() {
    if (!solved) return

    if (puzzleIndex === puzzles.length - 1) {
      setGameStatus('finished')
      return
    }

    setPuzzleIndex(old => old + 1)
    setPieces(shufflePieces())
    setMessage('')
  }

  function saveScore() {
    if (!playerName.trim()) {
      alert('Please enter your name!')
      return
    }

    const newEntry = {
      name: playerName.trim(),
      score,
      time: seconds
    }

    const updated = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score || a.time - b.time)
      .slice(0, 10)

    localStorage.setItem(
      'disneyPuzzleLeaderboard',
      JSON.stringify(updated)
    )

    setLeaderboard(updated)
    setGameStatus('saved')
  }

  function restartGame() {
    setPuzzleIndex(0)
    setPieces(shufflePieces())
    setScore(0)
    setSeconds(0)
    setPlayerName('')
    setMessage('')
    setGameStatus('playing')
  }

  function formatTime(time) {
    return `${Math.floor(time / 60)}:${String(time % 60).padStart(2, '0')}`
  }

  return (
    <div className="app">
      <header className="hero">
        <div className="castle">🏰</div>
        <h1>Disney Puzzle Paradise</h1>
        <p>Piece by piece, unlock the magic!</p>
      </header>

      <section className="stats">
        <div className="stat">
          <span>⭐</span>
          <small>Score</small>
          <strong>{score}</strong>
        </div>

        <div className="stat">
          <span>🎮</span>
          <small>Level</small>
          <strong>{level} / 5</strong>
        </div>

        <div className="stat">
          <span>🧩</span>
          <small>Puzzle</small>
          <strong>{puzzleInLevel} / 5</strong>
        </div>

        <div className="stat">
          <span>⏱️</span>
          <small>Time</small>
          <strong>{formatTime(seconds)}</strong>
        </div>
      </section>

      {gameStatus === 'playing' && (
        <main className="game-card">
          <div className="level-label">LEVEL {level}</div>

          <h2>{currentPuzzle.name}</h2>
          <p className="instructions">
            Drag one tile onto another tile to swap their positions.
            Arrange all 9 tiles to complete the picture.
          </p>

          <div className="puzzle-board">
            {pieces.map((piece, index) => {
              const row = Math.floor(piece / 3)
              const col = piece % 3

              return (
                <div
                  key={index}
                  className={`puzzle-piece ${draggedIndex === index ? 'selected' : ''}`}
                  draggable
                  onDragStart={() => setDraggedIndex(index)}
                  onDragOver={event => event.preventDefault()}
                  onDrop={() => movePiece(index)}
                  onDragEnd={() => setDraggedIndex(null)}
                  onClick={() => {
                    if (draggedIndex === null) {
                      setDraggedIndex(index)
                    } else {
                      movePiece(index)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Puzzle tile ${index + 1}`}
                  onKeyDown={event => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      if (draggedIndex === null) {
                        setDraggedIndex(index)
                      } else {
                        movePiece(index)
                      }
                    }
                  }}
                  style={{
                    backgroundImage: `url("${currentPuzzle.image}")`,
                    backgroundPosition: `${col * 50}% ${row * 50}%`
                  }}
                />
              )
            })}
          </div>

          <p className="feedback" aria-live="polite">
            {message || '✨ Find the correct place for every piece!'}
          </p>

          {solved && (
            <button className="primary-button" onClick={nextPuzzle}>
              {puzzleIndex === 24
                ? 'Finish Game 🏆'
                : puzzleInLevel === 5
                  ? 'Complete Level & Continue →'
                  : 'Next Puzzle →'}
            </button>
          )}

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${((puzzleIndex + 1) / 25) * 100}%` }}
            />
          </div>

          <p className="progress-text">
            Overall progress: {puzzleIndex + 1} / 25
          </p>
        </main>
      )}

      {gameStatus === 'finished' && (
        <section className="game-card finish-card">
          <div className="finish-icon">🏆</div>
          <h2>You completed all 25 puzzles!</h2>
          <p>Your score: <strong>{score}</strong></p>
          <p>Your time: <strong>{formatTime(seconds)}</strong></p>

          <input
            className="name-input"
            value={playerName}
            onChange={event => setPlayerName(event.target.value)}
            placeholder="Enter your name"
            maxLength={30}
          />

          <button className="primary-button" onClick={saveScore}>
            Save Score
          </button>
          <button className="secondary-button" onClick={restartGame}>
            Play Again
          </button>
        </section>
      )}

      {gameStatus === 'saved' && (
        <section className="game-card">
          <h2>🏆 Hall of Fame</h2>
          <p>Your score has been saved on this device.</p>

          <div className="leaderboard">
            {leaderboard.map((player, index) => (
              <div className="leader-row" key={`${player.name}-${index}`}>
                <span>{index + 1}.</span>
                <strong>{player.name}</strong>
                <span>{player.score} pts</span>
                <span>{formatTime(player.time)}</span>
              </div>
            ))}
          </div>

          <button className="primary-button" onClick={restartGame}>
            Play Again
          </button>
        </section>
      )}

      <footer>✨ A little magic in every piece ✨</footer>
    </div>
  )
}

export default App
