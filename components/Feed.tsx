import React from 'react';
import InputBox from './InputBox';
import Posts from './Posts';
import Stories from './Stories';

function Feed({ posts }: { posts: any[] }) {
  return (
    <div className="flex-grow h-screen pt-6 mr-4 overflow-y-auto pb-44 xl:mr-40 scrollbar-hide">
      <div className="max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
        {/* 스토리 */}
        <Stories />
        {/* 인풋 */}
        <InputBox />
        {/* 포스트 */}
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default Feed;
