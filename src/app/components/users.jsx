import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import SearchStatus from "../components/searchStatus";

import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import GroupList from "./groupList";
import api from "../api";

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    });
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const pageSize = 2;

    const handleProfessionSelect = item => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const filteredUsers = selectedProf
        ? allUsers.filter(user => {
            return user.profession.name === selectedProf;
        })
        : allUsers;
    const count = filteredUsers?.length;
    const usersCrop = paginate(filteredUsers, currentPage, pageSize);
    const clearFilter = () => setSelectedProf();

    return (
        <div className='d-flex'>
            {
                professions &&
                <div className='d-flex flex-column'>
                    <GroupList
                        selectedItem = {selectedProf}
                        items={professions}
                        onItemSelected={handleProfessionSelect}
                    />
                    <button className='btn btn-secondary mt-2' onClick={clearFilter} >Очистить</button>
                </div>

            }
            <div className='d-flex flex-column'>
                {count > 0
                    ? (
                        <>
                            <SearchStatus length={count} />
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Имя</th>
                                        <th scope="col">Качества</th>
                                        <th scope="col">Провфессия</th>
                                        <th scope="col">Встретился, раз</th>
                                        <th scope="col">Оценка</th>
                                        <th scope="col">Избранное</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {usersCrop.map((user) => (
                                        <User {...rest} {...user} key={user._id} />
                                    ))}
                                </tbody>
                            </table>
                            <div className='d-flex justify-content-center'>
                                <Pagination
                                    itemsCount={count}
                                    pageSize={pageSize}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        </>
                    )
                    : <div className='d-flex align-content-center justify-content-center'>Loading...</div>}
            </div>
        </div>
    );
};
Users.propTypes = {
    users: PropTypes.array
};

export default Users;
