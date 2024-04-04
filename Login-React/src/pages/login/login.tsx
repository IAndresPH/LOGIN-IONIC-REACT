import React, { useState } from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import './login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <IonPage>
      <IonContent className='login-content'>
        <div className="row">
          <div className="center col-md-6">
            <form onSubmit={handleFormSubmit}>
              <h2>Iniciar Sesión</h2>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="user">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />


                <input className="btn" type="submit" value="Enviar" />
              </div>
            </form>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
