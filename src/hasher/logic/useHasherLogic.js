import sha1 from 'crypto-js/sha1';
import sha256 from 'crypto-js/sha256';
import MD5 from 'crypto-js/md5';
import Hex from 'crypto-js/enc-hex';
import WordArray from 'crypto-js/lib-typedarrays';
import { useState } from 'react';

const useHasherLogic = () => {
    const [hashedFiles, setHashedFiles] = useState([]);
    const [isLoading, setLoading] = useState(false);
  
    const hashFiles =  (files) => {
        setLoading(true);
      if (files[0] !== undefined) {
        try {
          files.forEach((file) => {
            var reader = new FileReader();
            reader.addEventListener(
              'load', function ()  {
                var wordArray = WordArray.create(this.result);
                var md5HashedFile = MD5(wordArray).toString();
                var sha1Base16File = sha1(wordArray).toString(Hex);
                var sha2HashedFile = sha256(wordArray).toString();
                                setHashedFiles(oldArray => [...oldArray, {
                                  'file_name': file.name,
                                  'file_size': file.size,
                                  'file_type': file.type,
                                  'md5_hash': md5HashedFile,
                                  'sha1-base16': sha1Base16File,
                                  'sha2': sha2HashedFile,
                                }])
                });
                reader.readAsArrayBuffer(file);
          })
          setLoading(false);
        }
  
        catch (e) {
          alert('There was an error hashing your files:', e);
          setLoading(false);
        }
      }
    }
    const deleteFile = (file) => {
     var filesNotDeleted = hashedFiles.filter(function(hashedFile) { return hashedFile['file_name'] !== file.file_name; }); 
     setHashedFiles(filesNotDeleted);
  }
  
    return { hashFiles, deleteFile, hashedFiles,isLoading }
  
  };
  
  export default useHasherLogic;