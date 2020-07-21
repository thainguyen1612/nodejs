const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`port2: ${port}`))

app.listen(port, () => console.log(`Ứng dụng đang chạy trên Cổng (Port) ${port}!`))

