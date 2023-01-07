import ImageShow from './ImageShow';

function ImageList({ list }) {
  return (
    <div>
      {console.log("this is the list", list)}
      {list.map(img => {
        return <ImageShow src={img.urls.regular}/>
      })}
    </div>
  );
}

export default ImageList;
