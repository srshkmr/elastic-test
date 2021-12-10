import { getUsers } from '../common/wrapper';

const userList = async (req, res) => {
  const users = await getUsers();
  console.log(users);
  res.json(users);
};

export { userList };
