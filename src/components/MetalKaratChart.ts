interface MetalKaratChart {
    (content: string): HTMLDivElement;
}

const MetalKaratChart: MetalKaratChart 
    = () => {
    let temp = document.createElement("template");
    const html = /*html*/ `<div style="position: absolute; top: 20%; margin-left:40px;  background-color:#ffffff; height:120px;width:170px; z-index: 10;
    ">
    <img src="./image2.png" alt="image2" style="width:  100%; height: 100%; object-fit: cover; border:solid; border-width:1px; padding-left:8px">
        
    </div>`;
    html.trim();
    temp.innerHTML = html;

    return temp.content.firstChild as HTMLDivElement;
};

export default MetalKaratChart;