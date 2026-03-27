import React from 'react';

const DocumentDashboard = () => {
    return (
        <div className="document-dashboard">
            <h1>Document Management Interface</h1>
            <div className="section">
                <h2>Upload New Document</h2>
                <input type="file" />
                <button>Upload</button>
            </div>
            <div className="section">
                <h2>Documents Received for Signature</h2>
                <ul>
                    {/* List of documents received */}
                </ul>
            </div>
            <div className="section">
                <h2>Documents Sent for Signature</h2>
                <ul>
                    {/* List of documents sent */}
                </ul>
            </div>
            <div className="section">
                <h2>Draft Prepared</h2>
                <ul>
                    {/* List of draft prepared documents */}
                </ul>
            </div>
        </div>
    );
};

export default DocumentDashboard;
