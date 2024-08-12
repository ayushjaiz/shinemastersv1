import axios from "axios";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../store/appStore";

const WorkerRegisterationPage = () => {
    const navigate = useNavigate();

    const workerType = useRef<HTMLSelectElement>(null);
    const experienceYears = useRef<HTMLInputElement>(null);
    const dailyRate = useRef<HTMLInputElement>(null);
    const location = useRef<HTMLInputElement>(null);
    const bio = useRef<HTMLTextAreaElement>(null);
    const image = useRef<HTMLInputElement>(null);

    const token = useSelector((state: RootState) => state.auth.token);
    console.log("token" + token);

    const registerWorker = async () => {
        try {
            const formData = new FormData();
            formData.append('workerType', workerType.current?.value || '');
            formData.append('experienceYears', experienceYears.current?.value || '');
            formData.append('dailyRate', dailyRate.current?.value || '');
            formData.append('location', location.current?.value || '');
            formData.append('bio', bio.current?.value || '');

            console.log(formData);

            if (image.current?.files?.[0]) {
                formData.append('image', image.current.files[0]); // append the image file
            }

            const response = await axios.post('http://localhost:4000/api/worker/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response, 'while registering user');

            console.log('Worker registered successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error registering worker:', error);
            alert('Failed to register worker');
        }
    };


    return (
        <div className="flex h-screen  justify-center items-center">
            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                <form className="space-y-6">
                    <div className="flex flex-col justify-center h-12">
                        <p className="text-sm font-medium text-gray-500">
                            Enter the following details to register as a worker
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label
                                htmlFor="workerType"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Worker Type
                            </label>
                            <select
                                name="workerType"
                                id="workerType"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                ref={workerType}
                                required
                            >
                                <option value="" disabled selected>
                                    Select Worker Type
                                </option>
                                <option value="electrician">Cleaner</option>
                                <option value="painter">Painter</option>
                                <option value="plumber">Electrician</option>
                                <option value="carpenter">Repair</option>
                                <option value="cook">Cook</option>

                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="experienceYears"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Experience Years
                            </label>
                            <input
                                type="text"
                                name="experienceYears"
                                id="experienceYears"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                ref={experienceYears}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label
                                htmlFor="dailyRate"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Daily Rate
                            </label>
                            <input
                                type="text"
                                name="dailyRate"
                                id="dailyRate"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                ref={dailyRate}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="location"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                ref={location}
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="bio"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Description
                        </label>
                        <textarea
                            name="bio"
                            id="bio"
                            rows={3}  // Adjust the number of rows for the desired height
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                            ref={bio}
                        ></textarea>
                    </div>

                    <div>
                        <label
                            htmlFor="image"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                            ref={image}
                        />
                    </div>

                    <button
                        type="button"
                        onClick={registerWorker}
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Register
                    </button>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default WorkerRegisterationPage;
