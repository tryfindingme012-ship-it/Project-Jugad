import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DocumentUploadModal = ({ onClose }) => {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemoveFile = (file) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  const handleUpload = () => {
    // Implement upload logic here
    console.log('Uploading files:', files);
    onClose(); // Close modal after upload
  };

  return (
    <div className="modal">
      <div className="modal-content" onDrop={handleDrop} onDragOver={handleDragOver}>
        <h2>Upload Documents</h2>
        <div>
          {files.length === 0 ? (
            <p>Drag and drop files here or click to browse.</p>
          ) : (
            <ul>
              {files.map((file) => (
                <li key={file.name}>
                  {file.name} <button onClick={() => handleRemoveFile(file)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button onClick={handleUpload}>Upload</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

DocumentUploadModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default DocumentUploadModal;