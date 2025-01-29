document.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('article');

    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#ece852';
    popup.style.color = 'black';
    popup.style.padding = '20px';
    popup.style.borderRadius = '10px';
    popup.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    popup.style.display = 'none';
    popup.style.zIndex = '10';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.marginTop = '15px';
    closeButton.style.padding = '10px';
    closeButton.style.backgroundColor = 'black';
    closeButton.style.color = '#ece852';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.style.borderRadius = '5px';
    popup.appendChild(closeButton);

    document.body.appendChild(popup);

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    articles.forEach((article, index) => {
        article.addEventListener('click', () => {
            const descriptions = [
                'Minecraft is a sandbox game that allows players to explore, build, and survive in an open world.',
                'Building is at the heart of Minecraft. Use blocks and resources to construct your dream world and freeing your souls from this cruel world.',
                'Minecraft offers endless exploration possibilities, from vast caves to towering mountains.',
                'Play multiplayer with friends and share your adventures together!'
            ];

            popup.innerHTML = `<p>${descriptions[index]}</p>`;
            popup.appendChild(closeButton);

            popup.style.display = 'block';
        });
    });
});
