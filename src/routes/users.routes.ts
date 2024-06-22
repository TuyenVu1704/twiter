import { Router } from 'express'
import { registerController } from '~/controllers/users.controllers'
import { registerValidator } from '~/middlewares/users.middlewares'

const usersRouter = Router()

/**
 * Register a new user
 * path: /users/register
 * method: POST
 * req: { name: string, email: string, password: string,confirm_password: string ,date_of_birth: toISOString8601 }
 */
usersRouter.post('/register', registerValidator, registerController)

export default usersRouter
