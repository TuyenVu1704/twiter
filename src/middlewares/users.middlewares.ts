import { checkSchema } from 'express-validator'
import validate from '~/utils/validations'

export const registerValidator = validate(
  checkSchema({
    name: {
      isLength: {
        options: { min: 3 },
        errorMessage: 'Name should be at least 3 characters long'
      },
      notEmpty: {
        errorMessage: 'Name should not be empty'
      },
      trim: true
    },
    email: {
      isEmail: {
        errorMessage: 'Invalid email'
      },
      normalizeEmail: true,
      notEmpty: {
        errorMessage: 'Email should not be empty'
      },
      trim: true
    },
    password: {
      isLength: {
        options: { min: 6 },
        errorMessage: 'Password should be at least 6 characters long'
      },
      notEmpty: {
        errorMessage: 'Password should not be empty'
      },
      isStrongPassword: {
        errorMessage:
          'Password should contain at least 1 lowercase, 1 uppercase, 1 number, 1 special character and should be at least 8 characters long',
        options: {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        }
      },
      trim: true
    },
    confirm_password: {
      custom: {
        options: (value, { req }) => {
          if (value !== req.body.password) {
            throw new Error('Passwords do not match')
          }
          return true
        }
      }
    },
    date_of_birth: {
      isISO8601: {
        errorMessage: 'Invalid date of birth',
        options: { strict: true, strictSeparator: true }
      },
      notEmpty: {
        errorMessage: 'Date of birth should not be empty'
      },
      toDate: true
    }
  })
)
