import React from 'react';
import './App.css';
function App() {
  return (
  <>
    <div className="App">
      <nav className="bg-slate-500 flex">
        <h1 className='font-bold text-lg m-1'>To-Do List</h1>
      <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Task</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">New Task</a>
          </div>
        </div>
      </nav>
      <div className="app container my-5">
        <div className="flex justify-center">
          <div className="column card md:w-1/4 bg-red-400">
            <h2 className="card-header text-center">Not Started</h2>
            <div className='card bg-red-200 text-lg flex justify-around mx-10'>
              <h1>Card 1</h1>
              <svg class="h-6 w-6 text-red-500 border-black border-2 rounded-lg "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
            </div>
            <div className='card bg-red-200 text-lg flex justify-around mx-10'>
              <h1>Card 2</h1>
              <svg class="h-6 w-6 text-red-500 border-black border-2 rounded-lg "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
            </div>
            <div className='card bg-red-200 text-lg flex justify-around mx-10'>
              <h1>Card 3</h1>
              <svg class="h-6 w-6 text-red-500 border-black border-2 rounded-lg "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
            </div>
            <button className="btn btn-success btn-sm m-2 w-full flex justify-center ">
            <svg class="h-5 w-5 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg> New
            </button>
            <span className="task-count badge badge-secondary p-2 item-center">3</span>
          </div>
          <div className="column card md:w-1/4 bg-yellow-400">
            <h2 className="card-header text-center">In Progress</h2>
            <div className='card bg-yellow-200 text-lg flex justify-around mx-10'>
              <h1>Card 4</h1>
              <svg class="h-6 w-6 text-red-500 border-black border-2 rounded-lg "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
            </div>
            <button className="btn btn-success btn-sm m-2 w-full flex justify-center ">
            <svg class="h-5 w-5 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg> New
            </button>
            <span className="task-count badge badge-secondary p-2">1</span>
          </div>
          <div className="column card md:w-1/4 bg-green-400">
            <h2 className="card-header text-center">Completed</h2>
            <div className='card bg-green-200 text-lg flex justify-around mx-10'>
              <h1>Card 5</h1>
              <svg class="h-6 w-6 text-red-500 border-black border-2 rounded-lg "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
            </div>
            <button className="btn btn-success btn-sm m-2 w-full flex justify-center ">
            <svg class="h-5 w-5 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg> New
            </button>
            <span className="task-count badge badge-secondary p-2">1</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
