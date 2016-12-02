const Tree = require('fp-tree')

module.exports.convertBounds = tree=>{
  const convert = obj=>{
    cloneDeep(obj)
    obj.x = obj.bounds.left
    obj.y = obj.bounds.top
    obj.width = obj.bounds.right-obj.bounds.left
    obj.height = obj.bounds.bottom-obj.bounds.top
    return obj
  }

  return convert(Tree.map('layers')(tree)(convert))
}

module.exports.relativePos = tree=>{
  const convert = (obj,p)=>{
    cloneDeep(obj)
    obj.x = p.x - obj.x
    obj.y = p.y - obj.y
    return obj
  }

  return Tree.map('layers')(tree)(convert)
}

const cloneDeep = (obj, clone={})=>{
  for(var i in obj)
    clone[i] = typeof obj[i] === "object" ? cloneDeep(obj[i], obj[i].constructor()) : obj[i];
  return clone;
}
