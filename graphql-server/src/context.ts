import { APIGatewayProxyEvent, Context } from 'aws-lambda';

export interface MyContext {
  event: APIGatewayProxyEvent;
  context: Context;
}

export const createContext = (event: APIGatewayProxyEvent, context: Context): MyContext => ({
  event,
  context,
});
