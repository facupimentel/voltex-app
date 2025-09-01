import React from 'react'

export const Contact = () => {
  return (
    <>
    <form action="https://formspree.io/f/tu-endpoint" method="POST">
  <label>
    <input type="text" />
  </label>
  <label>
    Email:
    <input type="email" name="email" required>
  </label>
  <label>
    Mensaje:
    <textarea name="mensaje" required></textarea>
  </label>
  <button type="submit">Enviar</button>
</form>
    </>
  )
}
