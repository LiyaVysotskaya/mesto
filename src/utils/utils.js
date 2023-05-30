export function handleSubmit(request, popup, loadingText = 'Сохранение...') {
  popup.renderLoading(true, loadingText);
  request
    .then(popup.close)
    .finally(() => popup.renderLoading(false));
}
