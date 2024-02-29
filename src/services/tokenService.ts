// src/services/tokenService.ts
import { Repository } from 'typeorm';
import { AppDataSource } from '../database/dataSource';
import { Token } from '../entity/Token.entity';

// Create a new token
export const createToken = async (name: string, ticker: string, description: string) => {
  const tokenRepository: Repository<Token> = AppDataSource.getRepository(Token);
  const token = tokenRepository.create({ name, ticker, description });
  await tokenRepository.save(token);
  return token;
};

// Get a token by ID
export const getTokenById = async (id: number) => {
  const tokenRepository: Repository<Token> = AppDataSource.getRepository(Token);
  const token = await tokenRepository.findOneBy({ id });
  return token;
};
