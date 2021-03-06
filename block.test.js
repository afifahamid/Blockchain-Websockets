const Block = require('./block')

let data, lastBlock, block;

describe('Block',() => {

    beforeEach(()=>{
    data = 'foo';
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data)
    })

    it('sets the `data` to match the input', () =>{
    expect(block.data).toEqual(data);
    });

    it('sets the `lastHash` to match the hash of block', () =>{
    expect(block.lastHash).toEqual(lastBlock.hash);
    })
});