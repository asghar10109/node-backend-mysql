const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/video/');
  },
  filename: function (req, file, cb) {
    const filename = file.originalname.split(' ').join('-');
    cb(null, `${filename}`);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only video files are allowed.'));
    }
  }
}).array('avator', 5);

module.exports = { upload }