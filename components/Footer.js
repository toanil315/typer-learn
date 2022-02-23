import React from "react";

export default function Footer() {
  return (
    <footer className="mt-8 max-w-7xl mx-auto p-4">
      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8">
          <div className="mb-4">
            <div className="border-b border-gray-200">
                <h3 className="inline-block text-sm font-bold tracking-widest pb-2
                border-b border-gray-400">ARCHIVES</h3>
            </div>
            <ul className="mt-6">
              <li className="text-gray-700 pb-2 text-sm font-semibold">October 2019</li>
              <li className="text-gray-700 pb-2 text-sm font-semibold">September 2019</li>
              <li className="text-gray-700 pb-2 text-sm font-semibold">August 2019</li>
            </ul>
          </div>
          <div className="mb-4">
          <div className="border-b border-gray-200">
                <h3 className="inline-block text-sm font-bold tracking-widest pb-2
                border-b border-gray-400">RECENT POSTS</h3>
            </div>
            <ul className="mt-6">
              <li className="text-gray-700 pb-2 text-sm font-semibold">The Balance of Nature</li>
              <li className="text-gray-700 pb-2 text-sm font-semibold">Revealing a Deeper Nature in Illustrations</li>
              <li className="text-gray-700 pb-2 text-sm font-semibold">Walking Illustration Video Self Hosted</li>
              <li className="text-gray-700 pb-2 text-sm font-semibold">How to Be a Fashion-Loving Minimalist</li>
              <li className="text-gray-700 pb-2 text-sm font-semibold">What is an Influencer?</li>
            </ul>
          </div>
          <div className="mb-4">
          <div className="border-b border-gray-200">
                <h3 className="inline-block text-sm font-bold tracking-widest pb-2
                border-b border-gray-400">CATEGORIES</h3>
            </div>
            <ul className="mt-6">
              <li className="text-gray-700 pb-2 text-sm font-semibold">Gallery</li>
              <li className="text-gray-700 pb-2 text-sm font-semibold">Good Reads</li>
              <li className="text-gray-700 pb-2 text-sm font-semibold">Technology</li>
              <li className="text-gray-700 pb-2 text-sm font-semibold">Travel</li>
            </ul>
          </div>
          <div className="mb-4">
          <div className="border-b border-gray-200">
                <h3 className="inline-block text-sm font-bold tracking-widest pb-2
                border-b border-gray-400">SOCIAL</h3>
            </div>
            <ul className="mt-6">
              <li className="text-gray-700 text-sm font-semibold pb-2">October 2019</li>
              <li className="text-gray-700 pb-2 text-sm font-semibold">September 2019</li>
              <li className="text-gray-700 pb-2 text-sm font-semibold">August 2019</li>
            </ul>
          </div>
        </section>
        <p className="pt-8 pb-4 text-center text-sm text-gray-600">Made with <span className="text-red-500">❤</span> by DUT </p>
      </main>
    </footer>
  );
}
