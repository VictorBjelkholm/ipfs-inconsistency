const path = require('path')
const ipfsAPI = require('ipfs-api')
const ipfs = ipfsAPI()

ipfs.files.add([path.join(__dirname, 'test-data')], {recursive: true}, (err, res) => {
  if (err) throw err
  res.forEach((r) => {
    console.log('Added ' + r.node.toJSON().Hash + ' ' + r.path)
  })
})

ipfs.id().then((res) => {
  console.log(res)
})
