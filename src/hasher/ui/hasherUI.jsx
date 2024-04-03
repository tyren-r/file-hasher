import React from 'react';
import styles from '../styles/hasherUIStyles.module.css';
import FileHasherLogic from '../logic/hasherLogic';
import { useDropzone } from 'react-dropzone';
import ClipLoader from "react-spinners/ClipLoader";
import downloadImage from "../assets/download.png";

const FileHasherUI = (props) => {
  const { hashFiles, deleteFile, hashedFiles, isLoading } = FileHasherLogic();
  const { getRootProps, getInputProps } = useDropzone({ onDrop: hashFiles });


  const files = hashedFiles.map((hashedFile, index) => (
    <tr key={index} >
      <td >{hashedFile['file_name']}</td>
      <td align="right">{hashedFile['file_size'] ? (hashedFile['file_size'] + ' mb') : ('NA')}</td>
      <td align="right">{hashedFile['file_type'] ? (hashedFile['file_type']) : ('NA')}</td>
      <td align="right">{hashedFile['md5_hash'] ? (hashedFile['md5_hash']) : ('NA')}</td>
      <td align="right">{hashedFile['sha1-base16'] ? (hashedFile['sha1-base16']) : ('NA')}</td>
      <td align="right">{hashedFile['sha2'] ? (hashedFile['sha2']) : ('NA')}</td>
      <td align="right" className={styles.buttonCell}><button onClick={(e) => { e.stopPropagation(); deleteFile(hashedFile) }}><b>Delete</b></button></td>
    </tr>
  ));

  const hasher = () => (
  files.length === 0 ? (
  
    <div className={styles.uploader}>
      <input {...getInputProps()} />
      <img src={downloadImage} />
      <h2>Click to Choose a File, or Drop It Here</h2>
    </div>
  ) : 
  (
    <div>
    <table>
      <thead>
        <tr>
          <th>File Name</th>
          <th>File Size</th>
          <th>File Type</th>
          <th>MD5</th>
          <th>SHA-1</th>
          <th>SHA-2</th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>
        {files}
      </tbody>
    </table>
    <h2 style={{cursor:'pointer'}}>
    <input {...getInputProps()} />
      +
    </h2>
    </div>
  )
  );

  return (
      <div {...getRootProps({ className: 'dropzone' })}>
          {isLoading ? (<ClipLoader />) : (hasher())}
      </div>
  );
}

export default FileHasherUI;