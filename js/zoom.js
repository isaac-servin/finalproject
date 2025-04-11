document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img"); // Select all images on the page

    images.forEach((image) => {
        image.addEventListener("click", function () {
            // Create a modal overlay
            const modal = document.createElement("div");
            modal.style.position = "fixed";
            modal.style.top = "0";
            modal.style.left = "0";
            modal.style.width = "100%";
            modal.style.height = "100%";
            modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            modal.style.display = "flex";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";
            modal.style.zIndex = "1000";

            // Create the zoomed-in image
            const zoomedImage = document.createElement("img");
            zoomedImage.src = this.src; // Use the source of the clicked image
            zoomedImage.alt = this.alt; // Use the alt text of the clicked image
            zoomedImage.style.maxWidth = "90%";
            zoomedImage.style.maxHeight = "90%";
            zoomedImage.style.boxShadow = "0 0 20px white";

            // Add the zoomed image to the modal
            modal.appendChild(zoomedImage);

            // Add the modal to the document body
            document.body.appendChild(modal);

            // Close the modal when clicked
            modal.addEventListener("click", function () {
                document.body.removeChild(modal);
            });
        });
    });
});