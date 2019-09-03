import React, { FC } from 'react';
import { IPhoto } from '../../../../../../shared/model/photo.model';
import { IAlbum } from '../../../../../../shared/model/album.mode';

export interface IDashboardUsersTablePhotos {
	photos: IPhoto[];
	albums: IAlbum[];
	userId: number;
}

const countPhotos = (userId: number, albums: IAlbum[], photos: IPhoto[]) => {
	const albumnsIds = albums.filter(album => album.userId === userId).map(album => album.id);;
	return photos.filter(photo => albumnsIds.indexOf(photo.albumId) > -1).length
}

export const DashboardUsersTablePhotos: FC<IDashboardUsersTablePhotos> = ({ userId, albums, photos }) => (
	<a href="#">{countPhotos(userId, albums, photos)}</a>
)
