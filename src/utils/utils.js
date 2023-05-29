export function handleSubmit(request, popup, loadingText = 'Сохранение...') {
  popup.renderLoading(true, loadingText);
  request
    .then(popup.close)
    .catch(console.error)
    .finally(() => popup.renderLoading(false));
}
