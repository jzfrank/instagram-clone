import React from "react";
import { modalState } from "../atom/modalAtom";
import { useRecoilState } from "recoil";

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  console.log("open", open);
  return (
    <div>
      {open && <h1>The Modal is open</h1>}
      UploadModal
    </div>
  );
};

export default UploadModal;
