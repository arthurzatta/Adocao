class FileController {
  async store(req, res) {
    try {
      const uri = `http://localhost:3333/uploads/${req.file.filename}`;
      return res.json(uri);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default new FileController();
