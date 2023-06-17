import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../features/users/usersSlice'
export default function AddUser() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    const onSubmit = data => {
        console.log(users)
        const newUser = {
            id: users.length + 1,
            name: data.name,
            email: data.email,
            phone: data.phone
        }
        dispatch(addUser(newUser))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} action="" className='flex flex-col w-1/3 mx-auto'>
            <label htmlFor="name">
                Name {errors?.name?.message && <span className='text-red-700'>{errors?.name?.message}</span>}
            </label>
            <input className='border-2 rounded border-gray-500'
                {...register("name",
                    {
                        required: { value: true, message: "is required" },
                        maxLength: { value: 60, message: "can be longer than 60 chars" }
                    })}
                type="text"
                name="name"
                id="name" />

            <label htmlFor="email">
                Email {errors?.email && <span className='text-red-700'>{errors?.email?.message}</span>}
            </label>
            <input className='border-2 rounded border-gray-500'
                {...register("email", {
                    required: { value: true, message: "is required" },
                    maxLength: { value: 60, message: "can be longer than 60 chars" },
                    pattern: { value: /\S+@\S+\.\S+/, message: "please provide an email" }
                })}
                type="email"
                name="email"
                id="email" />

            <label htmlFor="phone">
                Phone {errors.phone && <span className='text-red-700'>{errors?.phone?.message}</span>}
            </label>
            <input className='border-2 rounded border-gray-500'
                {...register("phone", {
                    required: { value: true, message: "is required" },
                    maxLength: { value: 60, message: "can be longer than 60 chars" }
                })}
                type="text"
                name="phone"
                id="phone" />

            <button className='px-4 py-2 bg-slate-600 rounded-lg mt-3 text-center self-center transition-transform hover:scale-105'
                type="submit">
                Add User
            </button>
        </form>
    )
}
