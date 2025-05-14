import React from 'react';

const Contact = () => {
  return (
    <div className="centered-content">
      <div className="home-content">
        <h1>Contattaci</h1>
        <p>Se hai domande o richieste, non esitare a contattarci!</p>
        <form>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" placeholder="Inserisci il tuo nome" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Inserisci la tua email" />
          </div>
          <div>
            <label htmlFor="message">Messaggio:</label>
            <textarea id="message" placeholder="Scrivi il tuo messaggio"></textarea>
          </div>
          <button type="submit">Invia</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
