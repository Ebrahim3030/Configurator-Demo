import Category from "./components/Category";
import configurations from './myJson.json';
import EngravingPopup from "./components/EngravingPopup";

configurations.forEach((config) => {
  const categoryElement = Category(config);
  document.getElementById("options")?.appendChild(categoryElement!);
});

//pop up EngravingPopup component
const addEngravingDiv = document.getElementById("addEngraving");
const body = document.body;

addEngravingDiv?.addEventListener("click", () => {
  const popup = EngravingPopup();
    body?.appendChild(popup);

    const popupElement = document.getElementById("engravingPopup");
    if (popupElement) {
        popupElement.style.display = "block";
    }
});




