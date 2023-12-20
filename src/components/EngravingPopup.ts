interface EngravingPopupComponent {
    (): HTMLElement;
}

const EngravingPopup: EngravingPopupComponent = () => {
    let temp = document.createElement("template");
    const overlayId = `overlay-${Date.now()}`;
    const html = /*html*/ `<div id="${overlayId}">
        <div id="engravingPopUp">
            <img id="image4" src="./public/image4.png"/>
            <div id="addFeatures">
                <div>
                    <div id="addInitials">add initials</div>
                    <div id="initials">
                        <div id="initialF">F</div>
                        <div id="initialK">K</div>
                        <div id="initialS">S</div>
                    </div>
                </div>
                <div>
                    <div id="addIcons">Add icons to your engraving (optional):</div>
                    <div id="icons">icons</div>
                </div>
                <div>
                    <button id="addToBag">ADD TO BAG</button>
                    <div id="skipEngravings">Skip Engravings & Add to Bag</div>
                </div>
            </div>
            <button id="closeFeatures">x</button>
        </div>
    </div>`;

    temp.innerHTML = html;



//closing addEngraving component
    const closePopup = () => {
        const overlay = document.getElementById(overlayId);
        if (overlay) {
            overlay.style.display = "none";
        }
    };

    const closeButton = temp.content.getElementById("closeFeatures");
    if (closeButton) {
        closeButton.addEventListener("click", closePopup);
    }



    //gray screen div

    const overlay = temp.content.firstChild as HTMLElement;

    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    overlay.style.zIndex = "20";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";

    

    return overlay;
};

export default EngravingPopup;