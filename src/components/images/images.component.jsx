import "./images.styles.css";

import Image from "../image/image.component";

function Images({images}) {
  return (
    <div className="images__container">
      {images.map((image) => (
				<Image url={image.urls.regular} key={image.id} alt={image.alt_description} />
			))}
    </div>
  )
}

export default Images;