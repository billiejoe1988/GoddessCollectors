'use client'
 
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Oops error!</h2>
        <button onClick={() => reset()}>Refresh</button>
      </body>
    </html>
  )
}