const SHA256 = require('crypto-js/sha256')

class Block{
    constructor(timeStamp, lastHash, hash, data){
    this.timeStamp = timeStamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
 }

    toString(){
    return ` Block -
    TimeStamp : ${this.timeStamp}
    LastHash : ${this.lastHash.substring(0,10)}
    Hash : ${this.hash.substring(0,10)}
    Data : ${this.data}`
    }

    static genesis(){
    return new this("genesis time","-----","firstHashValue","transactions")
    }

    static mineBlock(lastBlock, data){
    const timeStamp = Date.now();
    const lastHash = lastBlock.hash;
    const hash = Block.hash(timeStamp,lastHash,data);
    return new this(timeStamp, lastHash, hash, data);
 }

    static hash(timeStamp, lastHash, data){
    return SHA256(`${timeStamp}${lastHash}${data}`).toString();
 }
}
module.exports = Block;