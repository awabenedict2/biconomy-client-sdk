import {
  UserOpResponse,
  UserOpGasResponse,
  UserOpReceipt,
  UserOpByHashResponse
} from '../types/Types'
import { ChainId, UserOperation } from '@biconomy-devx/core-types'

export interface IBundler {
  estimateUserOpGas(userOp: Partial<UserOperation>): Promise<UserOpGasResponse>
  sendUserOp(userOp: UserOperation): Promise<UserOpResponse>
  getUserOpReceipt(userOpHash: string): Promise<UserOpReceipt>
  getUserOpByHash(userOpHash: string): Promise<UserOpByHashResponse>
}