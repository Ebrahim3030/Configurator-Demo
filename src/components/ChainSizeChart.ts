interface ChainSizeChart {
    (content: string): HTMLDivElement;
}

const ChainSizeChart: ChainSizeChart 
    = () => {
    let temp = document.createElement("template");
    const html = /*html*/ `<div style="position: absolute; top: 20%; margin-left:50px;  background-color:#ffffff; height:90px; z-index: 10;
    ">
    <img src="./image3.png" alt="image2" style="width:  100%; height: 100%; object-fit: cover; border:solid; border-width:1px;">
        
    </div>`;
    html.trim();
    temp.innerHTML = html;

    return temp.content.firstChild as HTMLDivElement;
};

export default ChainSizeChart;