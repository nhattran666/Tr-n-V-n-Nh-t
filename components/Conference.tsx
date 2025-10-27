import React from 'react';
import { ECO_POSTS } from '../constants';
import { EcoPost } from '../types';
import { HeartIcon, MessageSquareIcon, RepeatIcon } from './Icons';

const PostCard: React.FC<{ post: EcoPost }> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow border border-slate-200 p-5 mb-6 animate-fade-in">
      <div className="flex items-start gap-4">
        <img src={post.authorAvatarUrl} alt={post.authorName} className="w-12 h-12 rounded-full object-cover" />
        <div className="w-full">
          <div className="flex items-baseline gap-2">
            <p className="font-bold text-slate-800">{post.authorName}</p>
            <p className="text-sm text-slate-500">{post.authorHandle}</p>
            <span className="text-sm text-slate-400">&middot;</span>
            <p className="text-sm text-slate-400">{post.timestamp}</p>
          </div>
          <p className="text-slate-700 mt-1 whitespace-pre-wrap">{post.content}</p>
          {post.imageUrl && (
            <img src={post.imageUrl} alt="Post content" className="mt-3 rounded-lg w-full object-cover border border-slate-200" />
          )}
          <div className="flex items-center gap-8 mt-4 text-slate-500">
            <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
              <HeartIcon className="h-5 w-5" />
              <span className="text-sm font-medium">{post.likes}</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
              <MessageSquareIcon className="h-5 w-5" />
              <span className="text-sm font-medium">{post.comments}</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-green-500 transition-colors">
              <RepeatIcon className="h-5 w-5" />
              <span className="text-sm font-medium">{post.reposts}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const EcoHub: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-extrabold text-slate-800">Eco-Hub</h2>
        <p className="text-lg text-slate-500 mt-2">The latest conversations in sustainability.</p>
      </div>
       <div>
        {ECO_POSTS.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default EcoHub;
