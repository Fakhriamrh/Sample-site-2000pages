import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MessageSquare, Heart, User } from 'lucide-react';

interface PageCardProps {
  id: number;
  title: string;
  content: string;
  category: string;
  date: string;
  author: string;
  tags: string[];
  readTime: number;
  likes: number;
  comments: number;
}

export default function PageCard({
  id,
  title,
  content,
  category,
  date,
  author,
  tags,
  readTime,
  likes,
  comments,
}: PageCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/page/${id}`)}
      className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
          {category}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {readTime} min read
        </span>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
        {title}
      </h2>
      
      <p className="text-gray-600 mb-4 line-clamp-3">{content}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>{author}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            {likes}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            {comments}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(date).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}