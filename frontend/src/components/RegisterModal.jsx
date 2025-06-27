export default function RegisterModal({ onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Registrieren</h2>
          <input type="text" placeholder="Name" className="w-full mb-2 p-2 border rounded" />
          <input type="email" placeholder="E-Mail" className="w-full mb-2 p-2 border rounded" />
          <input type="password" placeholder="Passwort" className="w-full mb-4 p-2 border rounded" />
          <div className="flex justify-between">
            <button className="bg-green-600 text-white px-4 py-2 rounded">Registrieren</button>
            <button onClick={onClose} className="text-sm text-gray-500">Abbrechen</button>
          </div>
        </div>
      </div>
    );
  }