import imgur from 'imgur';

class FileController {
  async store(req, res) {
    try {
      const responseImgur = await imgur.uploadFile(req.file.path);

      return res.json(responseImgur.link);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new FileController();
