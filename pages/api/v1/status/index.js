function status(request, response) {
  response.status(200).json({ chave: "acima da media" });
}

export default status;
