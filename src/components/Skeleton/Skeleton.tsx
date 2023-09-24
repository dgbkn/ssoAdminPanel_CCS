import useViewport from "../../hooks/useViewport";
import "./skeleton.scss"

import React from 'react'


const SkeletonBanner = () => {
	return (
		<div className="Skeleton__Banner">
			<SkeletonElement type="title" />
			<div className="Skeleton__inline">
				<SkeletonElement type="button" />
				<SkeletonElement type="button" />
			</div>
			<SkeletonElement type="text" />
			<SkeletonElement type="text" />
			<SkeletonElement type="text" />
		</div>
	);
};

const SkeletonElement = ({ type }) => <div className={`Skeleton ${type}`} />

const SkeletonPage = () => {
	return (
		<div className="Skeleton__Page">
			<SkeletonElement type="title" />
			<SkeletonPoster/>
			<SkeletonPoster/>
		</div>
	);
};



export default function SkeletonBasicPage() {
    return (
        <div>
            <SkeletonBanner/>
            <SkeletonBanner/>
            <SkeletonPoster />
            <SkeletonPoster />
        </div>
    )
}


const SkeletonPoster = () => {

	const { width } = useViewport();
	const numberOfTiles = width >= 1378 ? 6 : width >= 998 ? 4 : width >= 625 ? 3 : width >= 330 ? 2 : 1;

	return (
		<div className="Skeleton__Poster">
			{
				[...Array(numberOfTiles)].map((el, i) => (
					<SkeletonElement key={i} type="poster" />
				))
			}
		</div>
	);
};



export { SkeletonElement,SkeletonPage,SkeletonBanner,SkeletonBasicPage }


