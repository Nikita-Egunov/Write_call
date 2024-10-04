function openModal(modalId) {
    document.getElementById(modalId).classList.add("open");
}

export function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("open");
}

export function setupModal(modalId, openBtnId, closeBtnId) {
    // Открыть модальное окно
    document.getElementById(openBtnId).addEventListener("click", () => openModal(modalId));

    // Закрыть модальное окно
    document.getElementById(closeBtnId).addEventListener("click", () => closeModal(modalId));

    // Закрыть модальное окно при нажатии на Esc
    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            closeModal(modalId);
        }
    });

    // Закрыть модальное окно при клике вне его
    document.querySelector(`#${modalId} .modal__box`).addEventListener('click', event => {
        event._isClickWithInModal = true;
    });
    document.getElementById(modalId).addEventListener('click', event => {
        if (event._isClickWithInModal) return;
        closeModal(modalId);
    });
}

// // Настройка первого модального окна
// setupModal('my-modal', 'open-modal-btn', 'close-my-modal-btn');

// Настройка второго модального окна
// setupModal('second-modal', 'open-second-modal-btn', 'close-second-modal-btn');
