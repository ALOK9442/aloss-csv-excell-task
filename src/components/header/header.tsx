import { FaFile, FaFileDownload } from "react-icons/fa";
import { Button } from "../button/button";
import { FileButton } from "../button/filebutton";

export const Header = () => {
  const handleFileUpload = () => {
    
  };

  const handleFileDownload = () => {
    console.log("Download file");
  }
  return (
    <header>
      <FileButton 
        label="Upload File" 
        onClick={handleFileUpload} 
        icon={FaFile} 
        id="Upload_file"
        />
        <FileButton
        label="Download File"
        onClick={handleFileDownload}
        icon={FaFileDownload}
        id="Download_file"
        />
    </header>
  );
};
