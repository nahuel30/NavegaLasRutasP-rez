import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore"
import { cartContext } from "./CartContext"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'
import "../index.css"

const Checkout = () => {
  const { getTotalPrice, cart, cleanCart } = useContext(cartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleCreateOrder = () => {
    const MySwal = withReactContent(Swal);
    const db = getFirestore();
    const collectionRef = collection(db, 'orders');

    const orderData = {
      buyer: { name, email, phone },
      total: getTotalPrice(),
      items: cart,
      date: serverTimestamp(),
    };

    addDoc(collectionRef, orderData)
      .then((response) => {
        MySwal.fire({
          title: `Tu orden se creó correctamente con el ID: ${response.id}`,
        });
        cleanCart();
        navigate('/');
      })
      .catch(() => {
        console.log('Error al crear la orden');
      });
  };

  return (
    <div className="checkout-container">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleCreateOrder}>Crear Orden!</button>
    </div>
  );
};

export default Checkout;
