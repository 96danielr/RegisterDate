const { Registrations } = require('../models/registrations.model');

const getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registrations.findAll();
        res.status(200).json({
            status: 'working',
            data: { registrations },
        });
    } catch (error) {}
};

const createRegistrations = async (req, res) => {
    try {
        const { id, entranceTime } = req.body;
        const newRegistrations = await Registrations.create({
            id,
            entranceTime,
        });
        res.status(201).json({
            status: 'working',
            data: { newRegistrations },
        });
    } catch (error) {
        console.log('error');
    }
};

const updateRegistrations = async (req, res) => {
    try {
        const { exitTime } = req.body;
        const { id } = req.params;

        //checking if the regist exists
        const registration = await Registrations.findOne({ where: { id } });

        if (!registration) {
            return res.status(404).json({
                status: 'erroor',
                message: 'user not found',
            });
        }

        await registration.update({ exitTime });

        res.status(200).json({
            status: 'succes',
            data: { registration },
        });
    } catch (error) {
        console.log('error');
    }
};

const deleteRegister = async (req, res) => {
    try {
        const { id } = req.params;

        //checking if the regist exists
        const register = await Registrations.findOne({ where: { id } });

        if (!register) {
            return res.status(404).json({
                status: 'erroor',
                message: 'user not found',
            });
        }

        await register.update({ status: 'deleted' });

        res.status(200).json({
            status: 'succes',
        });
    } catch (error) {
        console.log('error');
    }
};

module.exports = {
    getAllRegistrations,
    createRegistrations,
    updateRegistrations,
    deleteRegister,
};
