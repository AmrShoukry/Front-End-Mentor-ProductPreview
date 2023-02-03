function generatePattern(text, color)
{
    let textDiv = document.createElement("div");

    for(let i = 0; i < 120; i++)
    {
        let p = document.createElement("p");
        p.classList.add("repeated");
        p.append(text.repeat(60));
        textDiv.appendChild(p);
        p.style.cssText = `-webkit-text-stroke-color: ${color}`;
    }

    document.body.prepend(textDiv);

    textDiv.classList.add("patterntext");

}

generatePattern("Amr Shoukry ", "#d4c7c744");
