import React, { FC } from 'react';
import { IPost } from '../../../../../../shared/model/post.model';

export interface IDashboardUsersTablePosts {
	posts: IPost[];
	userId: number;
}

const countPosts = (userId: number, posts: IPost[]) => {
	return posts.filter(post => post.userId === userId).length
}

export const DashboardUsersTablePosts: FC<IDashboardUsersTablePosts> = ({ userId, posts }) => (
	<a href="#">{countPosts(userId, posts)}</a>
)
