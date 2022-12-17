import React from 'react';

function ImageCard ({ collectionImage }) {

    localStorage.setItem("repoData", JSON.stringify(collectionImage));

    return(
        <section>
            <div>This is my name</div>
            {collectionImage.map((collectionImg, i) => (
            <div key={i}>
              {collectionImg.user.instagram_username}
            </div>
        ))}

        </section>
    )
}

export default ImageCard;