import {useState} from "react";
import "./Uploader.css";
import { MdCloudUpload, MdDelete} from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

function Uploader() {
    return (
        <main>
            <form action="">
                <input type="file" accept="image/*" />
            </form>
        </main>
    )
}

export default Uploader;