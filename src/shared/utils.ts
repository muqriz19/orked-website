// toggle modal
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

// formats text
export function formatText(text: string, action: string) {
  let theText = text;

  if (action === "caps") {
    const firstCap = text.charAt(0).toUpperCase();

    theText = firstCap + text.slice(1);
  }

  return theText;
}

//
export function random(from: number, to: number) {
  return Math.floor(Math.random() * from * to);
}
