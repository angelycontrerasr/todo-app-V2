export const createModal = (config) => {
    const elements = {
        modal: document.getElementById(config.modalId),
        openButton: config.openButtonId ? document.getElementById(config.openButtonId) : null, // Make openButton optional for dynamic buttons
        closeButton: document.getElementById(config.closeButtonSelector),
    };

    // Private methods (separated responsibilities)
    const open = () => elements.modal.classList.add("active");
    const close = () => elements.modal.classList.remove("active");
    const handleOutsideClick = (e) => e.target === elements.modal && close();

    // Initialization of events (single responsibility)
    const initEventListeners = (dynamicButton = null) => {
        // If an openButtonId is provided in config, use that for the initial setup
        if (elements.openButton) {
            elements.openButton.addEventListener("click", open);
        }
        // If a dynamicButton is passed, attach the event listener to it
        if (dynamicButton) {
            dynamicButton.addEventListener("click", open);
        }
        elements.closeButton.addEventListener("click", close);
        window.addEventListener("click", handleOutsideClick);
    };

    // Expose only what's necessary (abstraction)
    return { initEventListeners, close, open };
};