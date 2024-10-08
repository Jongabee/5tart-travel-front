import React, { ChangeEvent, useState, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

interface MultipleImageUploadProps {
  onUpload: (file: File, url: string) => void;
}

const MultipleImageUpload: React.FC<MultipleImageUploadProps> = ({
  onUpload,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<boolean | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(filesArray);
      uploadFiles(filesArray);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const uploadFiles = async (files: File[]) => {
    setUploading(true);
    setErrorMessage(null);

    try {
      const uploadPromises = files.map((file) => uploadFile(file));
      await Promise.all(uploadPromises);
      setUploadSuccess(true);
      // Swal.fire('Tus imágenes se subieron correctamente!');
    } catch (error) {
      console.error('Error al subir los archivos:', error);
      setErrorMessage(
        'Ocurrió un error al subir tus imágenes. Por favor, inténtalo de nuevo.',
      );
      setUploadSuccess(false);
      Swal.fire('Ocurrió un error al subir tus imágenes!');
    } finally {
      setUploading(false);
    }
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/files/uploadFile`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    onUpload(file, response.data);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        multiple
        onChange={handleFileChange}
        className="hidden border-2 border-lime-500"
      />
      <div className="mt-1 flex items-center">
        <input
          type="text"
          readOnly
          value={
            selectedFiles.length
              ? `${selectedFiles.length} imágenes seleccionadas`
              : ''
          }
          placeholder="Selecciona imágenes..."
          className="mr-2 block w-80 text-sm text-gray-900 border border-lime-500 rounded-xl cursor-pointer bg-gray-50 focus:outline-none px-3 py-2 shadow-xl"
        />
        <button
          type="button"
          onClick={handleClick}
          className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-xl text-white bg-indigo-700 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={uploading}
        >
          {uploading ? 'Subiendo...' : 'Seleccionar'}
        </button>
        {uploadSuccess === true && (
          <div className="ml-2 text-green-500">
            <svg
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
        {uploadSuccess === false && (
          <div className="ml-2 text-red-500">
            <svg
              className="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {' '}
              <circle cx="12" cy="12" r="10" />{' '}
              <line x1="15" y1="9" x2="9" y2="15" />{' '}
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </div>
        )}
      </div>
      {errorMessage && (
        <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default MultipleImageUpload;
