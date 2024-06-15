import React from 'react';

const Contact = () => {
  return (
    <div className='max-w-[1300px] mx-auto py-14 padding'>
    <div className="flex flex-col lg:flex-row justify-between p-4 lg:p-8">
      <div className="w-full lg:w-4/5 space-y-6">
        <h2 className="text-2xl font-bold">Inform us of Yourself</h2>
        <p>Contact us if you have any queries or merely want to say hi.</p>
        {/* <div className="space-y-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-orange-500">
              <i className="fas fa-phone"></i>
            </span>
            <span>(+1) 618 190 496</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500">
              <i className="fas fa-envelope"></i>
            </span>
            <span>geweto9420@chokxus.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span>London Office<br />Cruce Casa de Postas 29</span>
          </div>
        
        </div> */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block">How Can We Help You?</label>
            <textarea
              id="message"
              placeholder="Hi there, I would like to...."
              className="w-full px-3 py-2 border rounded"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4">
            <button type="reset" className="px-4 py-2 bg-gray-300 rounded">CANCEL</button>
            <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded">SUBMIT</button>
          </div>
        </form>
      </div>
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.108888478207!2d-83.0511204!3d32.8478584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f1c7a1d7bb8173%3A0xe6a7d4f4b3f30e8d!2sBlackville%20Christian%20Book%20Store!5e0!3m2!1sen!2sus!4v1643680542250!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default Contact;
