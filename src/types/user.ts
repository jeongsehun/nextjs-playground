interface IUser {
  auth: number;
  email: string;
  id: number;
  nickname: string;
  grade: null | string;
  uniqueKey: boolean;
  deviceRegistered: boolean;
}

export default IUser;
