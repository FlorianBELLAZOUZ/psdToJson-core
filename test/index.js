const Chai = require('chai').Should()
const Tree = require('fp-tree')
const Lib = require('../lib/lib')

const tree =  require('./utils/mockTree')

describe('.convertBounds',()=>{
  it('should covert bounds to x y width heigth',()=>{
    const posTree = Lib.convertBounds(tree)
    Tree.forEach('layers')(posTree)((el,parent)=>{
      el.should.have.any.keys(['x','y','width','heigth'])
      el.y.should.be.equal(-288)
      el.width.should.be.equal(15)
      el.height.should.be.equal(1141)
    })
  })
})

describe('.relativePos', ()=>{
  it('should convert to a relative position Tree',()=>{
    const posTree = Lib.convertBounds(tree)
    const relative = Lib.relativePos(posTree)

    Tree.forEach('layers')(relative)((el,parent)=>{
      el.y.should.be.equal(0)
    })
  })
})
