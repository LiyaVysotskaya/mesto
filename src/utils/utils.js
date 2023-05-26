export function handleSubmit(request, popup) {
  popup.renderLoading(true);
  request()
    .then(popup.close())
    .catch(console.error)
    .finally(popup.renderLoading(false))
}
