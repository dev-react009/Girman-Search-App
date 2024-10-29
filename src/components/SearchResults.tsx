import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";
import { Users } from "../utils/usersData"; // Import the user data
import { User } from "../types/interfaces";
import Navbar from "../components/Navbar"; // Import Navbar
import userPic from "../assets/Rectangle 1.png";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const SearchResults: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query") || "";

  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredUsers([]);
      return;
    }

    const results = Users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(query.toLowerCase()) ||
        user.last_name.toLowerCase().includes(query.toLowerCase()) ||
        user.city.toLowerCase().includes(query.toLowerCase()) || // Allow searching by city
        user.contact_number.includes(query) // Allow searching by contact number
    );

    setFilteredUsers(results);
  }, [query]);

  const openModal = (user: User) => {
    setSelectedUser(user);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#B1CBFF]">
      <Navbar /> {/* Use the Navbar here */}
      <div className="flex flex-col items-center mt-20 w-full max-w-6xl px-4">
        {error && <div className="text-red-600">{error}</div>}
        {filteredUsers.length === 0 && !error ? (
          <div className="text-gray-600">No results found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
                style={{ width: "300px", height: "265px" }}
              >
                <div className="flex items-start">
                  <img
                    src={userPic}
                    alt="User"
                    className="w- h-12 mb-4 rounded-full"
                  />
                </div>
                <div className="flex items-start font-inter">
                  <h3 className="text-lg font-bold text-black">{`${user.first_name} ${user.last_name}`}</h3>
                </div>
                <div className="flex items-start">
                  <div className=" flex items-center gap-1 text-xs text-phoneTextBalck">
                    <span>
                      <FaLocationDot />
                    </span>
                    <p className="text-gray-600 text-xs">{user.city}</p>
                  </div>
                </div>
                <p>{user.city}</p>
                <p>{user.contact_number}</p>
                <div className="flex items-center gap-10 w-54">
                  <div>
                    <div className="flex items-center text-phoneTextBalck">
                      <div className="flex items-center gap-2 text-sm font-inter">
                        <span>
                          <FaPhone />
                        </span>
                        <span>{user.contact_number}</span>
                      </div>
                    </div>
                    <div
                      className=" flex items-start text-xs font-inter"
                      style={{ color: "#AFAFAF" }}
                    >
                      {"Available on phone"}
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => openModal(user)}
                      className="mt-2 px-3 py-2 bg-buttonBlack text-white rounded-lg"
                    >
                      Fetch Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Modal for user details */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="User Details"
          className="modal"
          overlayClassName="overlay"
        >
          <h2 className="text-lg font-bold">User Details</h2>
          {selectedUser ? (
            <div>
              <div className="mt-4 text-black">
                <p>Fetch Details</p>
                <p style={{ color: "#ccc" }}>
                  Here are the details of following employee.
                </p>
                <p>
                  <strong>First Name:</strong> {selectedUser.first_name}
                </p>
                <p>
                  <strong>Last Name:</strong> {selectedUser.last_name}
                </p>
                <p>
                  <strong>City:</strong> {selectedUser.city}
                </p>
                <p>
                  <strong>Contact Number:</strong> {selectedUser.contact_number}
                </p>

                <div>
                  <p>Profile Image:</p>
                  <div>
                    <img src={userPic} alt="User" className="w-24 h-24 mb-4" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>No Details Found</p>
          )}
          <div className="close-button">
            <button
              onClick={closeModal}
              className="mb-5 px-4 py-2 border-2 text-black rounded-lg"
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SearchResults;
