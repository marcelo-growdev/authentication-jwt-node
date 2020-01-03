import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';
import User from '../models/User';

class AuthController {
  async store(req, res) {
    const { email, pass } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    if (!(await user.checkPassword(pass))) {
      return res.status(401).json({ error: 'Password invalid.' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),

    });
  }
}

export default new AuthController();
