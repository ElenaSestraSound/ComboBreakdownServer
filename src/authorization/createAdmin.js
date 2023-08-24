import { prisma } from '../prisma/client.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const saltRounds = 10;

const userName = process.env.ADMIN_USERNAME;
const txtPassword = process.env.ADMIN_PASSWORD;

const hashPassword = async (password) => {
    const hashedPW = await bcrypt.hash(password, saltRounds);
    return hashedPW;
};

const createUser = async () => {
    const userPassword = await hashPassword(txtPassword);
    
    try {
        await prisma.admin.create({
            data: {
                username: userName,
                password: userPassword,
            },
        });
        console.log('Admin user created successfully!');
    } catch (error) {
        console.error('Error creating admin user:', error);
    }
};

createUser();