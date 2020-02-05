import {useState} from 'react';

const useUploadForm = () => {
  const [inputs, setInputs] = useState({});
  const handleTitleChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        title: text,
      }));
  };
  const handleDescriptionChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        description: text,
      }));
  };

  const handleUpload = async () => {

  };
  return {
    handleTitleChange,
    handleDescriptionChange,
    inputs,
  };
};

export default useUploadForm;
