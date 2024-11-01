"use client";

import { profile as initialProfile } from "@/lib/dummyDb";
import Image from "next/image";
import React, { useState } from "react";


const ProfilePage = () => {
    const [profile, setProfile] = useState(initialProfile);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editedProfile, setEditedProfile] = useState(profile);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedProfile({
            ...editedProfile,
            [name]: value,
        });
    };


    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedProfile({
            ...editedProfile,
            address: {
                ...editedProfile.address,
                [name]: value,
            },
        });
    };


    const handleSave = () => {
        setProfile(editedProfile);
        setIsEditOpen(false);
    };

    return (
        <div className="text-black flex flex-col justify-start items-center bg-gray-200 w-full h-full">
            <h1 className="text-3xl text-gray-600 font-bold py-6 uppercase">
                Profile
            </h1>

            <div className="container m-auto">
                <div className="w-full h-full p-8 bg-gray-200">
                    <div className="w-32 h-32 m-auto  border-2 flex justify-center items-center border-black overflow-hidden rounded-md">
                        <Image
                            src={profile.image}
                            alt="profile"
                            width={200}
                            height={200}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>

                    <div className="w-full flex justify-center mt-5 items-center gap-4">
                        <button
                            onClick={() => setIsEditOpen(!isEditOpen)}
                            className="py-2 px-4 duration-300 border-2 text-sm border-black hover:bg-black hover:text-white uppercase transition-colors font-bold"
                        >
                            {isEditOpen ? "Cancel" : "Edit Profile"}
                        </button>
                        {isEditOpen && (
                            <button
                                onClick={handleSave}
                                className="py-2 px-4 duration-300 border-2 text-sm border-green-500 text-green-500 hover:bg-green-500 hover:text-white uppercase transition-colors font-bold"
                            >
                                Save
                            </button>
                        )}
                    </div>

                    {!isEditOpen ? (
                        <div className="w-8/12 m-auto  flex justify-center mt-5 items-start gap-4 flex-col">
                            <ProfileInfoCard key="name"  keyName="Name" value= {profile.name}  />
                            <ProfileInfoCard key="email"  keyName= "Email" value={profile.email}  />
                            <ProfileInfoCard key="phone"  keyName= "Phone" value={profile.phone} />
                            <ProfileInfoCard key="address"  keyName= "Address" value={profile.address.street}  />
                            <ProfileInfoCard key="city"  keyName="City" value={profile.address.city} />
                            <ProfileInfoCard key="state"  keyName= "State" value={profile.address.state} />
                            <ProfileInfoCard key="zip"  keyName={"Zip"}  value={profile.address.zip} />
                        </div>
                    ) : (
                        <div className="w-8/12 bg-gray-200 m-auto flex justify-center mt-5 items-start gap-4 flex-col">
                            <input
                                type="text"
                                name="name"
                                value={editedProfile.name}
                                onChange={handleInputChange}
                                className="border p-2 rounded-md w-full"
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                name="email"
                                value={editedProfile.email}
                                onChange={handleInputChange}
                                className="border p-2 rounded-md w-full"
                                placeholder="Email"
                            />
                            <input
                                type="text"
                                name="phone"
                                value={editedProfile.phone}
                                onChange={handleInputChange}
                                className="border p-2 rounded-md w-full"
                                placeholder="Phone"
                            />
                            <input
                                type="text"
                                name="street"
                                value={editedProfile.address.street}
                                onChange={handleAddressChange}
                                className="border p-2 rounded-md w-full"
                                placeholder="Street"
                            />
                            <input
                                type="text"
                                name="city"
                                value={editedProfile.address.city}
                                onChange={handleAddressChange}
                                className="border p-2 rounded-md w-full"
                                placeholder="City"
                            />
                            <input
                                type="text"
                                name="state"
                                value={editedProfile.address.state}
                                onChange={handleAddressChange}
                                className="border p-2 rounded-md w-full"
                                placeholder="State"
                            />
                            <input
                                type="text"
                                name="zip"
                                value={editedProfile.address.zip}
                                onChange={handleAddressChange}
                                className="border p-2 rounded-md w-full"
                                placeholder="Zip"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const ProfileInfoCard:React.FC<{ keyName:string, value:string}> = ({ keyName, value }) => {


    return (
        <div className="flex justify-between items-center w-full p-4 bg-white shadow-md rounded-md">
            <span className="text-gray-500 font-semibold">{keyName}:</span>
            <span className="text-gray-700">{value || "Not Available"}</span>
        </div>
    );
};



export default ProfilePage;
