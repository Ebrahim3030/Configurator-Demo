export default function Button(name: string, image: string) {
    let temp = document.createElement("template");
    const html = /*html*/ `<button style="background-color: rgba(255, 255, 255, 0.5); display: flex; cursor: pointer;
     flex-direction: column; padding: 4px; align-items: center; width: 40px; height: 55px; margin-left: 5px; border: 2px solid transparent;
      border-radius: 8px;">
        <img src="/${image}" alt="${name}" style="width: 100%; height: 70%; object-fit: cover; border-radius: 12px;">
        <span style="color: black; font-size: 8px; margin-top: 3px;">${name}</span>
    </button>`;
    html.trim();
    temp.innerHTML = html;

    

    return temp.content.firstElementChild as HTMLElement;
} 