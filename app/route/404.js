exports.index = (req, res, next) => {
  try {
    // return MSG.sendResponse(res, 'URL_NOTFOUND', {});
    res.status(200).json({ success: false, msg_code: 'URL_NOTFOUND', msg_client: 'Alamat URL Tidak Ditemukan' });
  } catch (error) {
    console.log(error);
    return res.json({
      message: 'Something went wrong!'
    });
  }
};
