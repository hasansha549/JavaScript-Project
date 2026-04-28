const imgContainer = document.getElementById('image_container');
const urlAPI = 'https://picsum.photos/v2/list';

const getPicture = () => {
    fetch(urlAPI)
        .then(data => data.json())
        .then(items => {
            console.log(items);
            items.forEach(function (photoObj) {
                const newContainer = document.createElement('div');
                newContainer.classList.add('image_container_item');

                const newImage = document.createElement('img');
                newImage.src = photoObj.download_url;
                newContainer.appendChild(newImage);

                const newAuthor = document.createElement('p');
                newAuthor.textContent = photoObj.author;
                newContainer.appendChild(newAuthor);

                imgContainer.appendChild(newContainer)
            });
        });
};

getPicture()

