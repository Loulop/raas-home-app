import { MANAGEMENT_API_ENDPOINT } from "../shared/globals";

interface IGetMeParams {
  bearer: string;
}

interface IGetMeResult {}

const getMe = async ({ bearer }: IGetMeParams): Promise<IGetMeResult> => {
  // TODO:
  return {};
};
