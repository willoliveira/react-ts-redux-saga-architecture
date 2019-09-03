import React, { FC } from 'react';
import { IAlbum } from '../../../../../../shared/model/album.mode';

export interface IDashboardUsersTableAlbum {
	albums: IAlbum[];
	userId: number;
}

const countAlbums = (userId: number, albums: IAlbum[]) => {
	return albums.filter(album => album.userId === userId).length
}

export const DashboardUsersTableAlbum: FC<IDashboardUsersTableAlbum> = ({ userId, albums }) => (
	<a href="#">{countAlbums(userId, albums)}</a>
)
