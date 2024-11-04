import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Clock, MessageSquare, Heart, User } from 'lucide-react';
import { pages } from '../data/pages';

export default function PageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const page = pages.find(p => p.id === Number(id));

  if (!page) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page not found</h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              {page.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {page.readTime} min read
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-6">{page.title}</h1>

          <div className="flex items-center justify-between mb-8 pb-8 border-b">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-400" />
              <span className="font-medium text-gray-900">{page.author}</span>
            </div>
            
            <div className="flex items-center gap-6 text-gray-500">
              <span className="flex items-center gap-1">
                <Heart className="w-5 h-5" />
                {page.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare className="w-5 h-5" />
                {page.comments}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-5 h-5" />
                {new Date(page.date).toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="prose max-w-none">
            {page.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {page.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}