import User from '~/models/schemas/User.schema'
import databaseService from './database.services'

class UserService {
  async registerUser(payload: { email: string; password: string }) {
    const { email, password } = payload
    const result = await databaseService.users.insertOne(new User({ email, password }))
    return result
  }
}

const userService = new UserService()
export default userService
