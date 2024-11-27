import { Link } from "react-router-dom";

const WhatsAppLink = () => {
  const phoneNumber = "902001257";
  const message = encodeURIComponent(
    "Hola! Mira esta imagen: https://pbs.twimg.com/profile_images/1509375257748307968/GTNeCmO1_400x400.jpg"
  );
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <Link to={whatsappLink} target="_blank" rel="noopener noreferrer">
      <img
        src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"
        alt="Enviar mensaje por WhatsApp"
        style={{ width: "200px", height: "auto", cursor: "pointer" }}
      />
    </Link>
  );
};

export default WhatsAppLink;
