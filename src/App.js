import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/header/header.component";
import Loader from "./components/loader/loader.component";
import Images from "./components/images/images.component";

import unsplash from "./api/unsplash";

import InfiniteScroll from "react-infinite-scroll-component";

function App() {
	const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);


	const getImages = async () => {
		const res = await unsplash.get(`/photos?page=${page}`);

    setImages([...images, ...res.data]);
    setPage(page + 1)
	};

	useEffect(() => getImages(), []);

	return (
		<div className="App">
			<Header />
			<InfiniteScroll
				dataLength={images.length}
				next={getImages}
				hasMore={true}
				loader={<Loader />}
			>
				<Images images={images} />
			</InfiniteScroll>
		</div>
	);
}

export default App;
