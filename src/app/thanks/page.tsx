export default function Thanks() {
  return (
    <section className="py-0">
      <div className="container mx-auto">
        gracias por tu mensaje, me pondré en contacto contigo lo más pronto
        posible.
      </div>
      <button
        className="bg-accent text-white px-4 py-2 rounded-md mt-4"
        onClick={() => (window.location.href = "/")}
      >
        Volver al inicio
      </button>
    </section>
  );
}
