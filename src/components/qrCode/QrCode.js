import { React } from "react";
import QRCode from "react-qr-code";
import "../qrCode/QrCode.scss";

const QrCode = ({ closeQrCode }) => {
  const cvUrl = `${window.location.origin}/PETER_OKAFOR_CV.pdf`;

  return (
      <div className="qrcode">
        <div className="qrcode__container">
          <h1>Scan To Download CV</h1>

          <div style={{ background: 'white', padding: '16px', borderRadius: '8px', margin: 'auto' }}>
            <QRCode value={cvUrl} size={180} />
          </div>

        <button
          className="qrcode__container__button"
          onClick={() => closeQrCode(false)}
        >
            Close QR Code
          </button>
        </div>
      </div>
  );
};

export default QrCode;
