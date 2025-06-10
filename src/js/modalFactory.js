export const createModal = (config) => {
    const elements = {
        modal: document.getElementById(config.modalId),
        openButton: config.openButtonId ? document.getElementById(config.openButtonId) : null,
        closeButton: document.getElementById(config.closeButtonSelector),
    };

    const open = () => elements.modal.classList.add("active");
    const close = () => elements.modal.classList.remove("active");
    const handleOutsideClick = (e) => e.target === elements.modal && close();

    const initEventListeners = (dynamicButton = null) => {
        if (elements.openButton) elements.openButton.addEventListener("click", open);
        if (dynamicButton) dynamicButton.addEventListener("click", open);
        elements.closeButton.addEventListener("click", close);
        window.addEventListener("click", handleOutsideClick);
    };

    return { initEventListeners, close, open };
};