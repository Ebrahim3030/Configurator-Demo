import Button from "./Button";
import MetalKaratChart from "./MetalKaratChart";
import ChainSizeChart from "./ChainSizeChart";

// Define an object to store selected options for each category
let selectedOptions: { [key: string]: any } = {};

export default function Category(category: { name: string; chart: string; options: any[] }) {
    let temp = document.createElement("template");
    const html = /*html*/ `<div style="position: relative; display: flex; flex-direction: column; justify-content: space-evenly; max-width: 220px; margin-bottom: 20px;">
        <div style="padding-bottom: 5px; display: flex; align-items: center; flex-direction: row; font-size: 11px; font-weight: bold;flex-wrap:wrap">
            ${category.name}
            <div id="chartDiv" style="font-size: 8px; margin-left: 5px; color: #ae74d4; text-decoration: underline;">
                ${category.chart}
            </div>
        </div>

        <div id="buttonID" style="display: flex; flex-wrap: wrap; row-gap: 4px; margin-left: -5px; "></div>
    </div>`;

    html.trim();
    temp.innerHTML = html;

 let parent = temp.content.firstElementChild as HTMLDivElement;
    let container = parent.querySelector("#buttonID")!;
    let chartDiv = parent.querySelector("#chartDiv")!;
    let selectedButton: HTMLElement | null = null;

    category.options.forEach((option) => {
        const button = Button(option.name, option.image)!;

        button.addEventListener("click", () => {
           
            if (selectedButton) {
                selectedButton.style.border = "none";
            }

           
            (button as HTMLElement).style.border = "1px solid #888";

            selectedButton = button;

          
            const categoryName = category.name;
            const selectedOption = {
                name: option.name,
                image: option.image,
               
            };

           
            selectedOptions[categoryName] = {
                name: categoryName,
             
                options: [selectedOption]
            };

            
            console.log(selectedOptions);
        });

        container.appendChild(button);
    });

    let popUp: HTMLElement | null = null;

    if (category.chart === "Metal Karat Chart") {
        popUp = MetalKaratChart(category.chart);
    } else if (category.chart === "Chain Size Chart") {
        popUp = ChainSizeChart(category.chart);
    }

    if (popUp) {
        chartDiv.addEventListener("mouseover", () => {
            parent.appendChild(popUp!);
        });

        chartDiv.addEventListener("mouseout", () => {
            parent.removeChild(popUp!);
        });
    }

    parent.style.width = "180px";

    return temp.content.firstChild;
}