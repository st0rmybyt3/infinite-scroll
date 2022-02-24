import "./image.styles.css";

function Image({url, alt}) {
  return (
    <img src={url} alt={alt} className="image__container" />
  )
}

export default Image;