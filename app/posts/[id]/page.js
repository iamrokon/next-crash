import React, { Suspense } from "react";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComments";
import Comments from "@/app/components/Comments";
import getAllPosts from "@/lib/getAllPosts";

export async function generateMetadata({params}) {
    const { id } = await params;
    const post = await getPost(id);
    return {
        title: post.title,
        description: post.body,
    };
}

export default async function PostPage({params}) {
    const { id } = await params;
    const postPromise = getPost(id);
    const commentsPromise = getPostComments(id);

    const post = await postPromise;

    // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
    return (
        <div className="mt-6">
            <h2 className="text-blue-500">{post.title}</h2>
            <h2 className="mt-3">{post.body}</h2>
            <hr />
            <Suspense fallback={<h1>Loading comments...</h1>}>
                <Comments promise={commentsPromise} />
            </Suspense>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}