import QRCode from "react-qr-code";

export default function QRCodeModal({ open, onClose, mesa }) {

    if (!open) return null;

    const url = `https://restaurant-flow-three.vercel.app/cliente/${mesa}`;

    return (

        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

            <div className="bg-slate-900 p-8 rounded-2xl border border-red-700 text-center">

                <h2 className="text-2xl font-bold text-red-500 mb-6">
                    QR Mesa {mesa}
                </h2>

                <div className="bg-white p-4 rounded-xl inline-block">

                    <QRCode
                        value={url}
                        size={220}
                    />

                </div>

                <p className="text-gray-400 mt-5 break-all">
                    {url}
                </p>

                <button
                    onClick={onClose}
                    className="mt-6 bg-red-700 hover:bg-red-600 px-8 py-3 rounded-xl"
                >
                    Cerrar
                </button>

            </div>

        </div>

    );

}