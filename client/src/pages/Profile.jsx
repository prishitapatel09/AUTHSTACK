import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const fileRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({});
  const [imageError, setImageError] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size < 2 * 1024 * 1024) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setImageError(false);
      setFormData({ ...formData, profilePicture: previewUrl });
    } else {
      setImageError(true);
      setImagePreview(null);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input
          type='file'
          ref={fileRef}
          hidden
          accept='image/*'
          onChange={handleImageChange}
        />

        <img
          src={imagePreview || currentUser.profilePicture}
          alt='profile'
          className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2'
          onClick={() => fileRef.current.click()}
        />
        <p className='text-sm self-center'>
          {imageError ? (
            <span className='text-red-700'>
              Error: File must be less than 2MB
            </span>
          ) : (
            imagePreview && <span className='text-green-700'>Image selected</span>
          )}
        </p>

        <input
          defaultValue={currentUser.username}
          type='text'
          id='username'
          placeholder='Username'
          className='bg-slate-100 rounded-lg p-3'
        />
        <input
          defaultValue={currentUser.email}
          type='email'
          id='email'
          placeholder='Email'
          className='bg-slate-100 rounded-lg p-3'
        />
        <input
          type='password'
          id='password'
          placeholder='Password'
          className='bg-slate-100 rounded-lg p-3'
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          update
        </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  );
}
