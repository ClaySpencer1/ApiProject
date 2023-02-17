const express = require("express");
const Query = require("../models/index")


const getUsers = () => {
    return Query("SELECT * FROM users")
}

const getOneUser = (id) => {
    return Query("SELECT * FROM users WHERE username = ?", [id])
}

const rmUser = (username) => {
    return Query("DELETE FROM users WHERE username = ?", [username])
}

const addUser = (body) => {
    return Query("INSERT INTO users SET ?", [body])
}

const updateUser = (body, id) => {
    return Query("UPDATE users SET ? WHERE username = ?", [body, id])
}



module.exports = {
    getUsers,
    getOneUser,
    rmUser,
    addUser,
    updateUser,
}