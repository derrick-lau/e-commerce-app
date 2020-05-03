import * as React from 'react'
import { NextPage } from 'next'
import Layout from '../../components/Layout'
import Register from '../../components/login&register/Register'

const RegisterPage: NextPage = () => (
  <Layout>
      <Register />
  </Layout>
)

export default RegisterPage
