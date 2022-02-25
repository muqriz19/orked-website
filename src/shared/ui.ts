export function toggleModal(modalId: string, showModal: boolean) {
  return new Promise<void>((resolve, reject) => {
    const modal = document.querySelector("#" + modalId) as HTMLDivElement;

    if (modal) {
      if (showModal) {
        modal.setAttribute("class", "modal is-active");
      } else {
        modal.setAttribute("class", "modal");
      }

      resolve();
    } else {
      reject("No modal");
    }
  });
}
