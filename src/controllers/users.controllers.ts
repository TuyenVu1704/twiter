import { Request, Response } from 'express'
import userService from '~/services/users.services'

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const result = await userService.registerUser({ email, password })

    return res.json({
      message: 'User registered',
      data: result
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Error registering user',
      error
    })
  }
}
