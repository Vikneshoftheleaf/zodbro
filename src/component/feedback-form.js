"use client"
import React, { useState } from 'react';

const FeedbackForm = ({ apiUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [sended, setsended] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      feedback,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setsended(true)
      }

      // Reset form after submission
      setName('');
      setEmail('');
      setFeedback('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {/* Button to open the feedback form */}
      <button
        className="z-100 text-sm fixed bottom-4 right-4 p-2 cursor-pointer text-white bg-blue-700 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        onClick={() => setIsOpen(true)}
      >📝</button>

      {/* Feedback Form Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-white/10 backdrop-blur-md z-50">
          <div className="bg-zinc-900  rounded-lg shadow-xl w-96 p-6 ">

            {/* Form */}

            {(!sended)

              ? <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-semibold text-center mb-4">We Value Your Feedback</h2>

                <div>
                  <label for="text" class="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your Name</label>
                  <input value={name} required onChange={(e) => setName(e.target.value)} type="text" id="text" class="shadow-sm bg-white/20 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Doe"  />
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-gray-300">Email</label>
                  <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" class="block p-3 w-full text-sm  bg-white/20 text-gray-100 rounded-lg  border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@example.com" />
                </div>
                <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your Feedback</label>
                  <textarea required value={feedback} onChange={(e) => setFeedback(e.target.value)} id="message" rows="6" class="block p-2.5 w-full text-sm  bg-white/20 text-gray-100 rounded-lg shadow-sm  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder="Leave a Feedback..."></textarea>
                </div>



                <div className="flex justify-end space-x-4">

                  <button type="button" onClick={() => setIsOpen(false)} class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-500 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Close</button>

                  <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                </div>
              </form>
              : <div className='h-full w-full p-4 flex flex-col gap-4 justify-center items-center '>

                <span className='text-green-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                  </svg>
                </span>
                <h1 className='text-2xl font-semibold'>Thank you!</h1>
                <p className='text-xs'>To submit another Feedback, Refresh the page!</p>
                <button
                  type="button"
                  onClick={() => { setIsOpen(false); setsended(false) }}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-all"
                >
                  Close
                </button>
              </div>

            }

          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackForm;