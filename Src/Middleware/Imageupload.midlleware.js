import multer from "multer";
import fs from "fs";
import path from "path";
const uploadpath = path.join(process.cwd(), "public", "image");

if (!fs.existsSync(uploadpath)) {
  fs.mkdirSync(uploadPath);
}
const km = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadpath);
  },
  filename: (req, file, cb) => {
    const imgname = new Date().toISOString().replace(/:/g, "-");
    cb(null, imgname + "-" + file.originalname);
  },
});
export const uplodimg = multer({ storage: km });
