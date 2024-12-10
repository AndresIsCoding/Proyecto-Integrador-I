import React, { useEffect, useState } from "react";
import { db } from "../../../firebase.config"; // Ruta correcta
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Calificaciones.css"; // Archivo CSS separado

const Calificaciones = () => {
  const [maxScore, setMaxScore] = useState(null);
  const auth = getAuth();
  const user = auth.currentUser;

  const navigate = useNavigate(); // Para regresar al inicio

  useEffect(() => {
    const fetchMaxScore = async () => {
      if (user) {
        const userRef = doc(db, "scores", user.uid); // Referencia al documento del usuario
        try {
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            setMaxScore(docSnap.data().maxScore);
          } else {
            setMaxScore(0); // Si no existe, asignar 0
          }
        } catch (error) {
          console.error("Error al obtener la puntuación:", error);
        }
      }
    };

    fetchMaxScore();
  }, [user]);

  // Determinar la medalla basada en la puntuación
  const getMedal = () => {
    if (maxScore === 0) {
      return "🏅 Medalla de Participación";
    } else if (maxScore < 4) {
      return "🥉 Medalla de Bronce";
    } else if (maxScore > 6) {
      return "🥇 Medalla de Oro";
    }
    return "🎖️ Buen Intento";
  };

  return (
    <div className="calificaciones-container">
      <h1 className="calificaciones-title">Tus Calificaciones</h1>
      {maxScore !== null ? (
        <div className="score-display">
          <p className="score-text">Puntuación más alta:</p>
          <h2 className="score-value">{maxScore}</h2>
          <p className="medal-text">{getMedal()}</p> {/* Mostrar la medalla */}
        </div>
      ) : (
        <p className="loading-text">Cargando...</p>
      )}
      <button className="return-button" onClick={() => navigate("/inicio")}>
        Regresar al inicio
      </button>
    </div>
  );
};

export default Calificaciones;
