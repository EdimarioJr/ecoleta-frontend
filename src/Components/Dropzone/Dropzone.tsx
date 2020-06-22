import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import { DivUpload, DragArea } from "./style";

interface Props {
  onImageUpload: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileURL = URL.createObjectURL(file);
      setSelectedImage(fileURL);
      onImageUpload(file);
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <DivUpload {...getRootProps()}>
      {selectedImage ? (
        <img src={selectedImage} alt="point thumbnail" />
      ) : (
        <DragArea>
          <FiUpload color="green" size="25px" />
          <p>Imagem do estabelecimento</p>
        </DragArea>
      )}
      <input {...getInputProps()} accept="image/*" />
    </DivUpload>
  );
};

export default Dropzone;
