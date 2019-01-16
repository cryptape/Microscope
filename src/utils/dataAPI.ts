/*
 the main api for this application in fluture which currenlty based on citaAPI and cacheAPI
*/
import * as citaAPI from './citaAPI'
import * as cacheAPI from './cacheAPI'

export function topTransactions() {
  return cacheAPI.topTransactions()
}
export function getTransaction(key:string) {
  return cacheAPI.getTransaction(key)
}
export function getTransactionList(pageNum:number,pageSize:number) {
  return cacheAPI.transactionList(pageNum,pageSize,null)
}

export function getTransactionListByAccount(account:string, pageNum:number,pageSize:number) {
  return cacheAPI.transactionList(pageNum,pageSize,account)
}

export function topBlocks() {
  return cacheAPI.topBlocks()
}
export function getBlock(key:number|string) {
  return cacheAPI.getBlock(key)
}
export function getBlockList(pageNum:number,pageSize:number) {
  return cacheAPI.blockList(pageNum, pageSize)
}


export function getMetaData(){
  return cacheAPI.getMetaData()
}

export function getLatestBlock(){
  return cacheAPI.getLatestBlock();
}